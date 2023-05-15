import { FlightsSearchQueryParamsDto } from '../dto/flights-search-query-params.dto';

const getQueriesFilter =
  (substring: string) => (paramObject: FlightsSearchQueryParamsDto) =>
    new Map(
      Object.entries(paramObject).filter(([key]) => key.includes(substring)),
    );

export function buildWhereClause(
  queryParams: Omit<FlightsSearchQueryParamsDto, 'available_seats'>,
) {
  const START = 'start_date';
  const END = 'end_date';

  const airportQueries = getQueriesFilter('airport')(queryParams);
  const dateQueries = getQueriesFilter('date')(queryParams);

  const values: string[] = [];
  let whereClause = '';
  let i = 1;

  for (const [key, value] of airportQueries) {
    whereClause += `${i === 1 ? 'WHERE' : ' AND'} ${key} = $${i}`;

    values.push(value);
    i++;
  }

  if (dateQueries.size === 2) {
    whereClause += `
        ${i === 1 ? 'WHERE' : ' AND'} f."date" BETWEEN $${i} AND $${++i}
        `;

    values.push(dateQueries.get(START));
    values.push(dateQueries.get(END));
  } else if (dateQueries.size) {
    const [[key, value]] = Array.from(dateQueries);

    whereClause += `
        ${i === 1 ? 'WHERE' : ' AND'} f."date" ${
      key === START ? '>' : '<'
    } $${i}
        `;

    values.push(value);
  }

  return { whereClause, values };
}
