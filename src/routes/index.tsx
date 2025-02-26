/*
 * @Author: Jie Zhuo
 * @Date: 2025-02-20 15:46:33
 * @LastEditTime: 2025-02-26 14:00:40
 * @LastEditors: Jie Zhuo
 * @Description:
 * @FilePath: \learn-react\src\routes\index.tsx
 */

import { RouteObject } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import Flip from "@/pages/flip";
import WishList from "@/pages/wish-list";
import WishList1 from "@/pages/wish-list1";
import FeedBack from "@/pages/feed-back";

// 路由配置数组
const RouteConfig: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/feed-back",
    element: <FeedBack />,
  },
  {
    path: "/wishList",
    element: <WishList />,
  },
  {
    path: "/wishList1",
    element: <WishList1 />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/flip",
    element: <Flip />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default RouteConfig;
