import React, { Suspense, lazy, useState } from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
// import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import Cart from "./components/Cart";
import { UserContext } from "./util/UserContext";
import { store } from './util/store';
const About = lazy(() => import("./components/About"));

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user,setUser] = useState({name:''})

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user,setUser, isLogin, setIsLogin }}>
        {!isLogin ? (
          <Login />
        ) : (
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        )}
      </UserContext.Provider>
    </Provider>
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
      {
        path:'cart',
        element:<Cart/>
      }
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
