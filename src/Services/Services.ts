import "reflect-metadata";
import { Container } from "inversify";
import { INJECTORS } from "./injectors";
import IConnectionManager from "./IConnetionsManager";
import AxiosConnectionManager from "./Connections/AxiosConnectionManager";
import IService from "./IService";
import IMenuManager from "./IMenuManager";
import MenuManager from "./Menus/MenuManager";

export default class Services {
  private static _instance: Services;
  private readonly _container: Container;

  private constructor() {
    this._container = new Container();
    this._container.bind<IConnectionManager>(INJECTORS.ConnectionManager).to(AxiosConnectionManager).inSingletonScope();
    this._container.bind<IMenuManager>(INJECTORS.MenuManager).to(MenuManager).inSingletonScope();
  }

  public get Connections(): IConnectionManager {
    return this.get<IConnectionManager>(INJECTORS.ConnectionManager);
  }

  public get Menus(): IMenuManager {
    return this.get<IMenuManager>(INJECTORS.MenuManager);
  }

  private get<T = IService>(injector: symbol): T {
    return this._container.get<T>(injector);
  }

  //#region Singleton

  public static get Instance(): Services {
    return this._instance || (this._instance = new Services());
  }

  //#endregion
}
