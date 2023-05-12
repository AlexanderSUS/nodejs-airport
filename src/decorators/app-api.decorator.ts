import { Type, applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiResponseOptions,
} from '@nestjs/swagger';
import { BadRequestDto } from 'src/common/dto/bad-request.dto';
import { InternalServerErrorDto } from 'src/common/dto/internal-server-error.dto';
import { NotFoundDto } from 'src/common/dto/not-found.dto';
import { ApiPaginatedResponse } from './api-paginated-response.decorator';

type ApiDecorator = typeof ApiBadRequestResponse;

function bindApiDecorator(
  decorator: ApiDecorator,
  options: ApiResponseOptions,
) {
  return decorator.bind(null, options);
}

const AppApiBadRequestResponse = bindApiDecorator(ApiBadRequestResponse, {
  type: BadRequestDto,
});

const AppApiInternalServerErrorResponse = bindApiDecorator(
  ApiInternalServerErrorResponse,
  { type: InternalServerErrorDto },
);

const AppApiNotFoundResponse = bindApiDecorator(ApiNotFoundResponse, {
  type: NotFoundDto,
});

export function AppApiOkResponse(options: ApiResponseOptions) {
  return applyDecorators(
    AppApiBadRequestResponse(),
    AppApiInternalServerErrorResponse(),
    AppApiNotFoundResponse(),
    ApiOkResponse(options),
  );
}

export function AppApiPaginatedResponse<TModel extends Type<any>>(
  model: TModel,
) {
  return applyDecorators(
    AppApiBadRequestResponse(),
    AppApiInternalServerErrorResponse(),
    ApiPaginatedResponse(model),
  );
}

export function AppApiCreatedResponse(options: ApiResponseOptions) {
  return applyDecorators(
    AppApiBadRequestResponse(),
    AppApiInternalServerErrorResponse(),
    AppApiNotFoundResponse(),
    ApiCreatedResponse(options),
  );
}

export function AppApiNoContentResponse() {
  return applyDecorators(
    AppApiBadRequestResponse(),
    AppApiInternalServerErrorResponse(),
    AppApiNotFoundResponse(),
    ApiNoContentResponse(),
  );
}
