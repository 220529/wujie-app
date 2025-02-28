// App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router";
import { navItems } from "./components/navItems";
import LayoutWrapper from "./components/LayoutWrapper";

export default () => {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          {navItems.map((item, index) => (
            <Route key={index} path={item.path} element={item.component} />
          ))}
        </Routes>
      </LayoutWrapper>
    </Router>
  );
};
