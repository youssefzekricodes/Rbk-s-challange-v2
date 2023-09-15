import { ComponentType, Fragment, LazyExoticComponent } from "react";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/Layout";
import { PATH } from "./paths.routes";
interface IRouteItem {
  exact: boolean;
  path: string;
  component: LazyExoticComponent<ComponentType<any>>;
  layout: ComponentType<any>;
}

export const renderRoutes = (routes: IRouteItem[] = []) => {
  return (
    <Suspense>
      <Routes>
        {routes.map((route, index) => {
          const Component = route.component;
          const Layout = route.layout;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Suspense fallback={<></>}>
                    <Component />
                  </Suspense>
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

const routes: IRouteItem[] = [
  {
    exact: true,
    path: PATH.PROFILE,
    component: lazy(() => import("../views/Profile")),
    layout: MainLayout,
  },
  {
    exact: true,
    path: PATH.LINKS,
    component: lazy(() => import("../views/Links")),
    layout: MainLayout,
  },
];

export default routes;
