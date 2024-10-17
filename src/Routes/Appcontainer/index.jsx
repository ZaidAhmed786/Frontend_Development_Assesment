import { Outlet, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "../../views/layout/Sidebar";
import Dashboard from "../../views/pages/Dashboard/index";
import Products from "../../views/pages/Products/index";
import ShoppingCart from "../../views/pages/Dashboard/ShoppingCart/ShoppingCart";

const AppContainer = () => {
  const routingObjects = [
    {
      id: 1,
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      id: 2,
      path: "products",
      element: <Products />,
    },
    {
      id: 3,
      path: "addtocart",
      element: <ShoppingCart />,
    }
  ];

  const SidebarLayout = () => (
    <div className="block sm:flex">
        <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );

  return (
    <div className="sm:main-wrapper min-h-screen">
      <Routes>
        <Route path={"/*"} element={<SidebarLayout />}>
          {routingObjects.map((item) => (
            <Route key={item.id} path={item.path} element={item.element} />
          ))}
        </Route>
        <Route path={"/*"} element={<SidebarLayout />}>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppContainer;
