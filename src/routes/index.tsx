/*
 * @Author: Jie Zhuo
 * @Date: 2025-02-20 15:46:33
 * @LastEditTime: 2025-02-20 15:46:38
 * @LastEditors: Jie Zhuo
 * @Description: 
 * @FilePath: \learn-react\src\router\index.ts
 */
// src/routes/index.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home.tsx';
import About from '@/pages/About.tsx';
import NotFound from '@/pages/NotFound.tsx';

// 定义路由配置项的类型
interface RouteItem {
  path: string;
  element: React.ReactNode;
}

// 路由配置数组
const routeConfig: RouteItem[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

const RouteConfig: React.FC = () => {
  return (
    <Router>
      <Routes>
        {routeConfig.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
};

export default RouteConfig;