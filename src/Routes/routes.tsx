import { ComponentType, Fragment, LazyExoticComponent } from "react";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LayoutFragment from "../components/LayoutFragment";
import MainLayout from "../layout/Layout";
import { PATH } from "./paths.routes";
import React from "react";
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
  {
    exact: true,
    path: PATH.Preview,
    component: lazy(() => import("../views/Preview")),
    layout: LayoutFragment,
  },
];

export default routes;
