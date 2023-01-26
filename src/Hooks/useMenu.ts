import IMenu from "Data/IMenu";
import { useState, useEffect } from "react";
import Services from "Services/Services";

export default function useMenu(id?: string) {
  const [menu, setMenu] = useState<IMenu>();
  const [error, setError] = useState();

  useEffect(() => {
    let sub = Services.Instance.Menus.current.subscribe({ next: setMenu, error: setError });

    return () => sub.unsubscribe();
  }, []);

  useEffect(() => {
    if (!!id) {
      Services.Instance.Menus.updateMenuById(id);
    }
  }, [id]);

  return { current: menu, error, update: (id: string) => Services.Instance.Menus.updateMenuById(id) };
}
