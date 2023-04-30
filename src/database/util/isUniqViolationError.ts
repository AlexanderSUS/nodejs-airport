import { PostgresErrorCode } from './postgresErrorCodes.enum';

export const isUniqueViolationError = (error: any) => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    error.code === PostgresErrorCode.UniqueViolation &&
    'detail' in error &&
    typeof error.detail === 'string'
  );
};
