import { createContext, useContext, useState, ReactNode } from "react";

export type Route = "home" | "about" | "features" | "pricing" | "blogs" | "enquire";

type Ctx = { route: Route; navigate: (r: Route) => void };
const RouterContext = createContext<Ctx>({ route: "home", navigate: () => {} });

export function RouterProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<Route>("home");
  const navigate = (r: Route) => {
    setRoute(r);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return <RouterContext.Provider value={{ route, navigate }}>{children}</RouterContext.Provider>;
}

export const useRouter = () => useContext(RouterContext);
