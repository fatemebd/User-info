export interface BaseResponse<T> {
  status: number;
  data: T;
}

export interface BasePaginatedResponse<T> {
  page: number;
  per_page: number;
  total: number;
  data: T[];
}
