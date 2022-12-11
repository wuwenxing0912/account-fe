export const routes = [
  {
    path: "/",
    redirect: "/welcome/1",
  },
  {
    path: "/welcome",
    component: () => import("../pages/welcome/welcome"),
    redirect: "/welcome/1",
    children: [
      {
        path: "1",
        component: () => import("../pages/welcome/first"),
        name: "welcome1",
      },
      {
        path: "2",
        component: () => import("../pages/welcome/second"),
        name: "welcome2",
      },
      {
        path: "3",
        component: () => import("../pages/welcome/third"),
        name: "welcome3",
      },
      {
        path: "4",
        component: () => import("../pages/welcome/fourth"),
        name: "welcome4",
      },
    ],
  },
  {
    path: "/start",
    component: () => import("../pages/start/start"),
  },
];
