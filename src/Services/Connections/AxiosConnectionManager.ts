import { injectable } from "inversify";
import IConnectionManager from "Services/IConnetionsManager";

@injectable()
export default class AxiosConnectionManager implements IConnectionManager {
  get<T>(path: string, params?: any): Promise<T | undefined> {
    throw new Error("Method not implemented.");
  }

  post<T>(path: string, payload: any, type?: string | undefined): Promise<T | undefined> {
    throw new Error("Method not implemented.");
  }

  put<T>(path: string, payload: any, type?: string | undefined): Promise<T | undefined> {
    throw new Error("Method not implemented.");
  }

  delete(path: string): undefined {
    throw new Error("Method not implemented.");
  }
}
