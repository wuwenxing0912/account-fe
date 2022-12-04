export const routes = [
  {
    path: "/welcome",
    component: () => import("../pages/welcome/welcome"),
    redirect: "/welcome/1",
    children: [
      { path: "1", component: () => import("../pages/welcome/first") },
    ],
  },
];
