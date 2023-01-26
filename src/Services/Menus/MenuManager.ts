import IMenu from "Data/IMenu";
import { INJECTORS } from "Services/injectors";
import { inject, injectable } from "inversify";
import IConnectionManager from "Services/IConnetionsManager";
import IMenuManager from "Services/IMenuManager";
import { Observable } from "rxjs/internal/Observable";
import { ReplaySubject } from "rxjs/internal/ReplaySubject";

@injectable()
export default class MenuManager implements IMenuManager {
  private _api: IConnectionManager;
  private _current: ReplaySubject<IMenu | undefined>;

  get current(): Observable<IMenu | undefined> {
    return this._current;
  }

  constructor(@inject(INJECTORS.ConnectionManager) api: IConnectionManager) {
    this._api = api;
    this._current = new ReplaySubject();
  }

  updateMenuById(id: string): void {
    this.getMenuById(id).then(this._current.next);
  }

  getMenuById(id: string): Promise<IMenu | undefined> {
    return this._api.get<IMenu>(`menu/${id}`);
  }
}
