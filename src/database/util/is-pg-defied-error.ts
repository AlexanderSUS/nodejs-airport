import { PostgresErrorCode } from '../enum/postgres-error-codes.enum';

const KNOWN_ERRORS: string[] = [
  PostgresErrorCode.ForeignKeyViolation,
  PostgresErrorCode.UniqueViolation,
];

export const isPgDefinedError = (error: unknown) =>
  typeof error === 'object' &&
  error !== null &&
  'code' in error &&
  typeof error.code === 'string' &&
  KNOWN_ERRORS.includes(error.code) &&
  'detail' in error &&
  typeof error.detail === 'string';
