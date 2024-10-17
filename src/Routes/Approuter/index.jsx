import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AppContainer from "../Appcontainer";
// import { persistor, store } from "../../store/index";
import { store } from "../../state/store";
import { Provider } from "react-redux";
import Login from "../../views/pages/Auth/Signin";
import { Navigate } from "react-router-dom/dist";
import { PersistGate } from "redux-persist/integration/react";
import  { Toaster } from 'react-hot-toast';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppRouter = () => {
  return (
    <div>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <BrowserRouter basename="/">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/*" element={<AppContainer />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </BrowserRouter>
        {/* </PersistGate> */}
      </Provider>
      <Toaster />
    </div>
  );
};

export default AppRouter;
