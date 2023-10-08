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

export const profile = {
  name: "muhammad luftor rahman",
  title: "assistant professor societal transition & behaviour change",
  email: "name@site.com ",
  institution: "open university",
  paragraphs: [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro possimus praesentium vero culpa inventore tempore quasi fuga dolorem architecto, neque similique, iusto veritatis voluptatum autem ad voluptatibus aliquid libero asperiores",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro possimus praesentium vero culpa inventore tempore quasi fuga dolorem architecto, neque similique, iusto veritatis voluptatum autem ad voluptatibus aliquid libero asperiores",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro possimus praesentium vero culpa inventore tempore quasi fuga dolorem architecto, neque similique, iusto veritatis voluptatum autem ad voluptatibus aliquid libero asperiores",
  ],
  profilePic: "/profilePic.png",
  socialMedia: [
    {
      name: "twitter",
      icon: "/twitter.png",
      link: "https://twitter.com",
    },
    {
      name: "linkedIn",
      icon: "/linkedin.png",
      link: "https://linkedin.com",
    },
    {
      name: "github",
      icon: "/github.png",
      link: "https://github.com",
    },
  ],
};
