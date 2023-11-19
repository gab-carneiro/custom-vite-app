import { AuthorizationHeader, ContentTypeHeader } from '../enums/api';

export interface ApiParams {
  apiName: string;
  baseUrl?: string;
  authorizationHeader?: AuthorizationHeader;
  contentTypeHeader?: ContentTypeHeader;
}

interface ApiErrorResponse {
  status: number;
  data?: {
    detail?: string;
  };
}

export interface ApiResponse<D = unknown> {
  data: D;
  error: ApiErrorResponse;
  meta: {
    response: Response;
  };
}

export interface ApiParams {
  baseUrl?: string;
  apiName: string;
  authorizationHeader?: AuthorizationHeader;
}
