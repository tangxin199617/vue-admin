import Layout from "@/layout";

const settingRouter = [
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: "/home",
    userName: "富文本",
    meta: {
      title: "富文本",
      requiresAuth: true
    },
    children: [
      {
        path: "/home",
        name: "root-home",
        component: () => import("@/views/home"),
        userName: "富文本",
        meta: {
          title: "富文本",
          requiresAuth: true,
          icon: ""
        }
      }
    ]
  }
];

export default settingRouter;
