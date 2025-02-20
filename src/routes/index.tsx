/*
 * @Author: Jie Zhuo
 * @Date: 2025-02-20 15:46:33
 * @LastEditTime: 2025-02-20 17:09:20
 * @LastEditors: Jie Zhuo
 * @Description: 
 * @FilePath: \learn-react\src\routes\index.tsx
 */

import { RouteObject } from 'react-router-dom';
import Home from '@/pages/Home.tsx';
import About from '@/pages/About.tsx';
import NotFound from '@/pages/NotFound.tsx';
import Flip from '@/pages/flip.tsx';

// 路由配置数组
const RouteConfig: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/flip',
    element: <Flip />
  },
  {
    path: '*',
    element: <NotFound />
  }
];


export default RouteConfig;