import Home from "./src/pages/Home";
import Research from "./src/pages/Research";
import Teaching from "./src/pages/Teaching";
import Publications from "./src/pages/Publications";
import Services from "./src/pages/Services";
import Members from "./src/pages/Members";
import Media from "./src/pages/Media";

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
    element: Teaching,
  },
  {
    route: "publications",
    path: "/publications",
    element: Publications,
  },
  {
    route: "services",
    path: "/services",
    element: Services,
  },
  {
    route: "members",
    path: "/members",
    element: Members,
  },
  {
    route: "media",
    path: "/media",
    element: Media,
  },
];
