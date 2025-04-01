/*
 * @Author: Jie Zhuo
 * @Date: 2025-02-20 15:46:33
 * @LastEditTime: 2025-04-01 15:08:15
 * @LastEditors: Jie Zhuo
 * @Description:
 * @FilePath: \learn-react\src\routes\index.tsx
 */

import { RouteObject } from "react-router-dom";
import Home from "@/pages/home";
import About from "@/pages/about";
import NotFound from "@/pages/NotFound";
import Flip from "@/pages/flip";
import WishList from "@/pages/wish-list";
import WishList1 from "@/pages/wish-list1";
import FeedBack from "@/pages/feed-back";
import Accordion from "@/pages/accordion";
import SyncedInputs from "@/pages/synced-inputs";
import SearchBar from "@/pages/search-bar";
import TodoList from "@/pages/todo-list/index"
import SendEmails from "@/pages/send-emails/index";
import ImagesList from "@/pages/images-list/index";

// 路由配置数组
const RouteConfig: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/images-list",
    element: <ImagesList />,
  },
  {
    path: "/send-emails",
    element: <SendEmails />,
  },
  {
    path: "/todo-list",
    element: <TodoList />,
  },
  {
    path: "/search-bar",
    element: <SearchBar />,
  },
  {
    path: "/synced-inputs",
    element: <SyncedInputs />,
  },
  {
    path: "/accordion",
    element: <Accordion />,
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
