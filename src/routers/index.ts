import {
  createRouter,
  createRoute,
  createRootRoute,
  NotFoundRoute,
} from "@tanstack/react-router";
import App from "../App";
import About from "../views/About";
import Home from "../views/Home";

const rootRoute = createRootRoute({
  component: App,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => "404 Not Found",
});

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute, notFoundRoute]);

const router = createRouter({ routeTree, defaultPreload: "intent" });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
export default router;
