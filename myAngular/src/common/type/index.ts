export interface BackendResponse<T = any> {
  success: boolean;
  status_code: number;
  message: string;
  data: T;
}
