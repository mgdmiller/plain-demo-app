import IService from "./IService";

export default interface IConnectionManager extends IService {
  get<T>(path: string, params?: any): Promise<T | undefined>;
  post<T>(path: string, payload: any, type?: string): Promise<T | undefined>;
  put<T>(path: string, payload: any, type?: string): Promise<T | undefined>;
  delete(path: string): undefined;
}
