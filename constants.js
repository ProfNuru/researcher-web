import Home from "./src/pages/Home";
import Research from "./src/pages/Research";
import Teaching from "./src/pages/Teaching";
import Publications from "./src/pages/Publications";
import Services from "./src/pages/Services";
import Members from "./src/pages/Members";
import Media from "./src/pages/Media";
import newsJson from "./news_json.json";
import publicationsJson from "./publications_json.json";

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

export const recentNews = newsJson
  ? newsJson.map((obj) => ({
      date: obj.date.includes(".")
        ? `${obj.date.toLowerCase().split(". ")[0].substring(0, 3)} ${
            obj.date.toLowerCase().split(". ")[1]
          }`
        : `${obj.date.toLowerCase().split(", ")[0].substring(0, 3)} ${
            obj.date.toLowerCase().split(", ")[1]
          }`,
      text: obj.summary,
    }))
  : [
      {
        date: "jun 2023",
        text: "One paper on <a href='#'>measuring the persistence of activity in evolving networks</a> is accepted at KDD '20. Congratulations to Caleb and Carol!",
      },
      {
        date: "jun 2023",
        text: "One paper on <a href='#'>measuring the persistence of activity in evolving networks</a> is accepted at KDD '20. Congratulations to Caleb and Carol!",
      },
      {
        date: "jul 2023",
        text: "Honored to give a keynote at <a href='#'>ECML/PKDD</a>. Many thanks to the organizers for giving me this opportunity!",
      },
      {
        date: "jul 2023",
        text: "Honored to give a keynote at <a href='#'>ECML/PKDD</a>. Many thanks to the organizers for giving me this opportunity!",
      },
      {
        date: "sep 2023",
        text: "Giving keynote talks at the ACM KDD Applied Data Science track, the VLDB Scalable Data Science Research series, the KDD Outlier Detection and Description (ODD) workshop, and the ICML Workshop on Representation Learning for Finance and E-Commerce Applications. Thanks to all the track chairs and organizers for inviting me to present my group's work!",
      },
      {
        date: "sep 2023",
        text: "Giving keynote talks at the ACM KDD Applied Data Science track, the VLDB Scalable Data Science Research series, the KDD Outlier Detection and Description (ODD) workshop, and the ICML Workshop on Representation Learning for Finance and E-Commerce Applications. Thanks to all the track chairs and organizers for inviting me to present my group's work!",
      },
    ];

export const allPublications = publicationsJson
  ? publicationsJson.map((p) => {
      let detail_arr = p.detail.split(". ");
      const date = detail_arr[detail_arr.length - 1];
      let obj = {
        date: date.includes(" ")
          ? `${date.split(" ")[0].toLowerCase().substring(0, 3)} ${
              date.split(" ")[1]
            }`
          : date,
        title: p.title,
        text: p.detail,
        tags: p.tags,
        conferencename: p.conferencename,
        btnLinks: [
          {
            label: p.type,
            link: `#`,
          },
        ],
      };
      return obj;
    })
  : [
      {
        date: "conf 2023",
        title: "Title",
        text: "Lack of astrocytes hinders parenchymal oligodendrocyte precursor cells from reaching a myelinating state in osmolyte-induced demyelination",
        btnLinks: [
          {
            label: "preprint",
            link: "/preprint",
          },
          {
            label: "pdf",
            link: "/pdf",
          },
          {
            label: "url",
            link: "/url",
          },
          {
            label: "github",
            link: "/github",
          },
        ],
      },
      {
        date: "conf 2023",
        title: "Title",
        text: "Lack of astrocytes hinders parenchymal oligodendrocyte precursor cells from reaching a myelinating state in osmolyte-induced demyelination",
        btnLinks: [
          {
            label: "preprint",
            link: "/preprint",
          },
          {
            label: "pdf",
            link: "/pdf",
          },
          {
            label: "url",
            link: "/url",
          },
          {
            label: "github",
            link: "/github",
          },
        ],
      },
      {
        date: "conf 2023",
        title: "Title",
        text: "Lack of astrocytes hinders parenchymal oligodendrocyte precursor cells from reaching a myelinating state in osmolyte-induced demyelination",
        btnLinks: [
          {
            label: "preprint",
            link: "/preprint",
          },
          {
            label: "pdf",
            link: "/pdf",
          },
          {
            label: "url",
            link: "/url",
          },
          {
            label: "github",
            link: "/github",
          },
        ],
      },
      {
        date: "conf 2023",
        title: "Title",
        text: "Lack of astrocytes hinders parenchymal oligodendrocyte precursor cells from reaching a myelinating state in osmolyte-induced demyelination",
        btnLinks: [
          {
            label: "preprint",
            link: "/preprint",
          },
          {
            label: "pdf",
            link: "/pdf",
          },
          {
            label: "url",
            link: "/url",
          },
          {
            label: "github",
            link: "/github",
          },
        ],
      },
      {
        date: "conf 2023",
        title: "Title",
        text: "Lack of astrocytes hinders parenchymal oligodendrocyte precursor cells from reaching a myelinating state in osmolyte-induced demyelination",
        btnLinks: [
          {
            label: "preprint",
            link: "/preprint",
          },
          {
            label: "pdf",
            link: "/pdf",
          },
          {
            label: "url",
            link: "/url",
          },
          {
            label: "github",
            link: "/github",
          },
        ],
      },
      {
        date: "conf 2023",
        title: "Title",
        text: "Lack of astrocytes hinders parenchymal oligodendrocyte precursor cells from reaching a myelinating state in osmolyte-induced demyelination",
        btnLinks: [
          {
            label: "preprint",
            link: "/preprint",
          },
          {
            label: "pdf",
            link: "/pdf",
          },
          {
            label: "url",
            link: "/url",
          },
          {
            label: "github",
            link: "/github",
          },
        ],
      },
      {
        date: "conf 2023",
        title: "Title",
        text: "Lack of astrocytes hinders parenchymal oligodendrocyte precursor cells from reaching a myelinating state in osmolyte-induced demyelination",
        btnLinks: [
          {
            label: "preprint",
            link: "/preprint",
          },
          {
            label: "pdf",
            link: "/pdf",
          },
          {
            label: "url",
            link: "/url",
          },
          {
            label: "github",
            link: "/github",
          },
        ],
      },
      {
        date: "conf 2023",
        title: "Title",
        text: "Lack of astrocytes hinders parenchymal oligodendrocyte precursor cells from reaching a myelinating state in osmolyte-induced demyelination",
        btnLinks: [
          {
            label: "preprint",
            link: "/preprint",
          },
          {
            label: "pdf",
            link: "/pdf",
          },
          {
            label: "url",
            link: "/url",
          },
          {
            label: "github",
            link: "/github",
          },
        ],
      },
    ];

export const recentPublications = allPublications.filter((p, i) => i <= 5);

export const supports = [
  {
    image: "/fera.png",
  },
  {
    image: "/scandinavia.png",
  },
  {
    image: "/catalyst.png",
  },
  {
    image: "/ecology.png",
  },
  {
    image: "/fera.png",
  },
  {
    image: "/scandinavia.png",
  },
  {
    image: "/catalyst.png",
  },
  {
    image: "/ecology.png",
  },
];

export const publicationTypes = [
  {
    label: "all",
    value: "all",
  },
  {
    label: "paper",
    value: "paper",
  },
  {
    label: "pre-print",
    value: "pre-print",
  },
];

export const publicationYears = [
  {
    label: "2016",
    value: "2016",
  },
  {
    label: "2017",
    value: "2017",
  },
  {
    label: "2018",
    value: "2018",
  },
  {
    label: "2019",
    value: "2019",
  },
  {
    label: "2020",
    value: "2020",
  },
  {
    label: "2021",
    value: "2021",
  },
  {
    label: "2022",
    value: "2022",
  },
  {
    label: "2023",
    value: "2023",
  },
];

export const coursesTaught = [
  {
    date: "spring 2022",
    title: "CSE 365 - Introduction to Information Assurance",
    text: "How do countries relate to each other? How do they interact with each other? Gain a broad understanding of different kinds of political issues in the world. Comparative politics and international relations are subfields of political science. This class is open to everyone.",
    btnLinks: [
      {
        label: "recorded lectures",
        link: "/lectures",
      },
      {
        label: "syllabus",
        link: "/syllabus",
      },
    ],
  },
  {
    date: "spring 2022",
    title: "CSE 365 - Introduction to Information Assurance",
    text: "How do countries relate to each other? How do they interact with each other? Gain a broad understanding of different kinds of political issues in the world. Comparative politics and international relations are subfields of political science. This class is open to everyone.",
    btnLinks: [
      {
        label: "recorded lectures",
        link: "/lectures",
      },
      {
        label: "syllabus",
        link: "/syllabus",
      },
    ],
  },
  {
    date: "spring 2022",
    title: "CSE 365 - Introduction to Information Assurance",
    text: "How do countries relate to each other? How do they interact with each other? Gain a broad understanding of different kinds of political issues in the world. Comparative politics and international relations are subfields of political science. This class is open to everyone.",
    btnLinks: [
      {
        label: "recorded lectures",
        link: "/lectures",
      },
      {
        label: "syllabus",
        link: "/syllabus",
      },
    ],
  },
  {
    date: "spring 2022",
    title: "CSE 365 - Introduction to Information Assurance",
    text: "How do countries relate to each other? How do they interact with each other? Gain a broad understanding of different kinds of political issues in the world. Comparative politics and international relations are subfields of political science. This class is open to everyone.",
    btnLinks: [
      {
        label: "recorded lectures",
        link: "/lectures",
      },
      {
        label: "syllabus",
        link: "/syllabus",
      },
    ],
  },
];

export const members = [
  {
    title: "lab manager",
    name: "shandell pahlen",
    email: "name@site.com",
    description:
      "She is completing her dissertation on the influence of smoking behavior on cognitive functioning approaching midlife. She is an affiliate graduate researcher for the consortium on the Interplay of Genes and Environment across Multiple Studies (IGEMS) and the Colorado Adoption/Twin Study of Lifespan (CATSLife).",

    profilePic: "/memberProfile.png",
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
  },
  {
    title: "lab manager",
    name: "shandell pahlen",
    email: "name@site.com",
    description:
      "She is completing her dissertation on the influence of smoking behavior on cognitive functioning approaching midlife. She is an affiliate graduate researcher for the consortium on the Interplay of Genes and Environment across Multiple Studies (IGEMS) and the Colorado Adoption/Twin Study of Lifespan (CATSLife).",

    profilePic: "/memberProfile.png",
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
  },
  {
    title: "lab manager",
    name: "shandell pahlen",
    email: "name@site.com",
    description:
      "She is completing her dissertation on the influence of smoking behavior on cognitive functioning approaching midlife. She is an affiliate graduate researcher for the consortium on the Interplay of Genes and Environment across Multiple Studies (IGEMS) and the Colorado Adoption/Twin Study of Lifespan (CATSLife).",

    profilePic: "/memberProfile.png",
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
  },
  {
    title: "lab manager",
    name: "shandell pahlen",
    email: "name@site.com",
    description:
      "She is completing her dissertation on the influence of smoking behavior on cognitive functioning approaching midlife. She is an affiliate graduate researcher for the consortium on the Interplay of Genes and Environment across Multiple Studies (IGEMS) and the Colorado Adoption/Twin Study of Lifespan (CATSLife).",

    profilePic: "/memberProfile.png",
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
  },
];

export const researches = [
  {
    title:
      "Robots Teaching Recycling: Towards Improving Environmental Literacy of Children",
    image: "/researchImg1.png",
    images: ["/researchImg1.png", "/researchImg2.png"],
    summary:
      "How do countries relate to each other? How do they interact with each other? Gain a broad understanding of different kinds of political issues in the world. Comparative politics and international relations are subfields of political science. This class is open to everyone.",
    detail:
      "The Association of Southeast Asian Nations (ASEAN) and the Economic Community of West African States (ECOWAS) both recently adopted and institutionalized the norm of people-centric governance. This is potentially transformative for both, signalling a reorientation away from their private and elite-led normative foundations. In practice, however, the norm is understood and enacted in different ways by officials at each organization and with radically different effects. In ASEAN, the norm is understood and enacted in a limited and defensive way. Its institutionalization has led only to selective engagement with civil society and has not altered established modes of regional governance. In ECOWAS, however, the norm is understood as a means to render the organization more inclusive of civil society groups and has transformed the regional project in important ways, shaping the logic and form of regional intervention and conflict prevention. To explore these experiences—convergence in adoption and institutionalization of a norm and variation in its practice and effect—we develop a practice theoretic framework and rely on 76 interviews with regional and state officials.",
  },
  {
    title: "Urban Search & Rescue Avatar",
    image: "/researchImg2.png",
    images: ["/researchImg1.png", "/researchImg2.png"],
    summary:
      "How do countries relate to each other? How do they interact with each other? Gain a broad understanding of different kinds of political issues in the world. Comparative politics and international relations are subfields of political science. This class is open to everyone.",
    detail:
      "The Association of Southeast Asian Nations (ASEAN) and the Economic Community of West African States (ECOWAS) both recently adopted and institutionalized the norm of people-centric governance. This is potentially transformative for both, signalling a reorientation away from their private and elite-led normative foundations. In practice, however, the norm is understood and enacted in different ways by officials at each organization and with radically different effects. In ASEAN, the norm is understood and enacted in a limited and defensive way. Its institutionalization has led only to selective engagement with civil society and has not altered established modes of regional governance. In ECOWAS, however, the norm is understood as a means to render the organization more inclusive of civil society groups and has transformed the regional project in important ways, shaping the logic and form of regional intervention and conflict prevention. To explore these experiences—convergence in adoption and institutionalization of a norm and variation in its practice and effect—we develop a practice theoretic framework and rely on 76 interviews with regional and state officials.",
  },
  {
    title:
      "Robots Teaching Recycling: Towards Improving Environmental Literacy of Children",
    image: "/researchImg1.png",
    images: ["/researchImg1.png", "/researchImg2.png"],
    summary:
      "How do countries relate to each other? How do they interact with each other? Gain a broad understanding of different kinds of political issues in the world. Comparative politics and international relations are subfields of political science. This class is open to everyone.",
    detail:
      "The Association of Southeast Asian Nations (ASEAN) and the Economic Community of West African States (ECOWAS) both recently adopted and institutionalized the norm of people-centric governance. This is potentially transformative for both, signalling a reorientation away from their private and elite-led normative foundations. In practice, however, the norm is understood and enacted in different ways by officials at each organization and with radically different effects. In ASEAN, the norm is understood and enacted in a limited and defensive way. Its institutionalization has led only to selective engagement with civil society and has not altered established modes of regional governance. In ECOWAS, however, the norm is understood as a means to render the organization more inclusive of civil society groups and has transformed the regional project in important ways, shaping the logic and form of regional intervention and conflict prevention. To explore these experiences—convergence in adoption and institutionalization of a norm and variation in its practice and effect—we develop a practice theoretic framework and rely on 76 interviews with regional and state officials.",
  },
  {
    title: "Urban Search & Rescue Avatar",
    image: "/researchImg2.png",
    images: ["/researchImg1.png", "/researchImg2.png"],
    summary:
      "How do countries relate to each other? How do they interact with each other? Gain a broad understanding of different kinds of political issues in the world. Comparative politics and international relations are subfields of political science. This class is open to everyone.",
    detail:
      "The Association of Southeast Asian Nations (ASEAN) and the Economic Community of West African States (ECOWAS) both recently adopted and institutionalized the norm of people-centric governance. This is potentially transformative for both, signalling a reorientation away from their private and elite-led normative foundations. In practice, however, the norm is understood and enacted in different ways by officials at each organization and with radically different effects. In ASEAN, the norm is understood and enacted in a limited and defensive way. Its institutionalization has led only to selective engagement with civil society and has not altered established modes of regional governance. In ECOWAS, however, the norm is understood as a means to render the organization more inclusive of civil society groups and has transformed the regional project in important ways, shaping the logic and form of regional intervention and conflict prevention. To explore these experiences—convergence in adoption and institutionalization of a norm and variation in its practice and effect—we develop a practice theoretic framework and rely on 76 interviews with regional and state officials.",
  },
];

export const contributors = [
  {
    name: "shandell pahlen",
    title: "lab manager",
    image: "/memberProfile.png",
  },
  {
    name: "shandell pahlen",
    title: "lab manager",
    image: "/memberProfile.png",
  },
  {
    name: "shandell pahlen",
    title: "lab manager",
    image: "/memberProfile.png",
  },
  {
    name: "shandell pahlen",
    title: "lab manager",
    image: "/memberProfile.png",
  },
];

export const allMedia = [
  {
    image: "/media1.png",
    title: "Cras metus nisi, gravida vitae sodales sit amet",
    listItems: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Mauris cursus vestibulum turpis, non rutrum turpis sodales eget. Pellentesque accumsan suscipit aliquet. Nunc gravida erat eu condimentum hendrerit.",
    ],
  },
  {
    image: "/media2.png",
    title: "Pellentesque eget tincidunt nisl Curabitur tempus.",
    listItems: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Mauris cursus vestibulum turpis, non rutrum turpis sodales eget. Pellentesque accumsan suscipit aliquet. Nunc gravida erat eu condimentum hendrerit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
  {
    image: "/media3.png",
    title: "Quisque suscipit mollis",
    listItems: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Mauris cursus vestibulum turpis, non rutrum turpis sodales eget. Pellentesque accumsan suscipit aliquet. Nunc gravida erat eu condimentum hendrerit.",
    ],
  },
];

export const services = [
  {
    title: "Program Committee Chair / Track Chair",
    items: [
      "Privacy and Anonymity Track Chair, ACM Conference on Computer and Information Security (CCS) 2021",
      "Workshop Chair, Workshop on Theory and Practice of Differential Privacy (TPDP) 2017",
    ],
  },
  {
    title: "Program Committee Member / Area Chair",
    items: [
      "Conference on Learning Theory (COLT): 2023",
      "ACM Conference on Fairness, Accountability, and Transparency (FAccT): 2022",
      "AAAI Conference on Artificial Intelligence (AAAI): 2022",
      "IEEE Symposium on Security & Privacy (S&P): 2020, 2021",
      "ACM Conference on Computer and Information Security (CCS): 2020",
      "Information Theoretic Cryptography Conference (ITC): 2020",
      "IEEE Symposium on Foundations of Computer Science (FOCS): 2018",
      "SIAM Symposium on Discrete Algorithms (SODA): 2018, 2024",
      "ACM Conference on Economics and Computation (EC): 2016",
      "Theory of Cryptography Conference (TCC): 2015, 2016",
      "ACM Symposium on Theory of Computing (STOC): 2015",
      "ACM Innovations in Theoretical Computer Science (ITCS): 2015",
    ],
  },
  {
    title: "reviewer",
    items: [
      "Conference on Learning Theory (COLT): 2020",
      "International Conference on Machine Learning (ICML): 2018, 2020",
      "International Conference on Artificial Intelligence and Statistics (AISTATS): 2017",
      "Conference on Neural and Information Processing Systems (NeurIPS): 2016, 2017",
    ],
  },
];
