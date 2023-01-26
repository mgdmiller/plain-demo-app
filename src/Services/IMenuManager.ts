import IMenu from "Data/IMenu";
import { Observable } from "rxjs";

export default interface IMenuManager {
  get current(): Observable<IMenu | undefined>;

  getMenuById(id: string): Promise<IMenu | undefined>;
  updateMenuById(id: string): void;
}
