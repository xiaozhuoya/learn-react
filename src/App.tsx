// src/App.tsx
import { useRoutes } from "react-router-dom";
import RouteConfig from "@/routes";

const App = () => {
  const routing = useRoutes(RouteConfig);
  return (
    <div>
      {routing}
      {/* <RouteConfig /> */}
    </div>
  );
};

export default App;
