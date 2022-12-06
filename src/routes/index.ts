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
      { path: "1", component: () => import("../pages/welcome/first") },
      { path: "2", component: () => import("../pages/welcome/second") },
      { path: "3", component: () => import("../pages/welcome/third") },
      { path: "4", component: () => import("../pages/welcome/fourth") },
    ],
  },
  {
    path: "/start",
    component: () => import("../pages/start/start"),
  },
];
