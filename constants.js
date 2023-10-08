import Home from "./src/pages/Home";
import Research from "./src/pages/Research";

export const routes = [
  {
    route: "home",
    path: "/",
    element: Home,
  },
  {
    route: "research",
    path: "/research",
    element: Research,
  },
  {
    route: "teaching",
    path: "/teaching",
    element: Research,
  },
  {
    route: "publications",
    path: "/publications",
    element: Research,
  },
  {
    route: "services",
    path: "/services",
    element: Research,
  },
  {
    route: "members",
    path: "/members",
    element: Research,
  },
  {
    route: "media",
    path: "/media",
    element: Research,
  },
];
