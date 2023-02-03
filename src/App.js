import React, { Suspense, lazy, useState } from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
// import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import { UserContext } from "./util/UserContext";
import { FooterContext } from "./util/FooterContext";
const About = lazy(() => import("./components/About"));

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user,setUser] = useState({name:''})
  const [footerContent ,setFooterContent] = useState({footer:'FOOTER'})

  return (
    <>
      <UserContext.Provider value={{ user,setUser, isLogin, setIsLogin }}>
        {!isLogin ? (
          <Login />
        ) : (
          <>
            <Header />
            <Outlet />
            <FooterContext.Provider value={footerContent}>
            <Footer />
            </FooterContext.Provider>
          </>
        )}
      </UserContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App test="testDATA" />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...!!!</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
