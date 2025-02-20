// src/App.tsx
import React from 'react';
import RouteConfig from '@/routes';

const App: React.FC = () => {
  return (
    <div>
      {/* 渲染路由配置组件，开启路由功能 */}
      <RouteConfig />
    </div>
  );
};

export default App;