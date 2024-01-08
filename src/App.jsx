import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Payments from "./components/Payments";
import Plugins from "./components/unusedComponents/Plugins";
import Appearance from "./components/unusedComponents/Appearance";
import Audience from "./components/unusedComponents/Audience";
import Discounts from "./components/unusedComponents/Discounts";
import Tools from "./components/unusedComponents/Tools";
import Analytics from "./components/unusedComponents/Analytics";
import Marketing from "./components/unusedComponents/Marketing";
import Delivery from "./components/unusedComponents/Delivery";
import Products from "./components/unusedComponents/Products";
import Orders from "./components/unusedComponents/Orders";
import Home from "./components/unusedComponents/Home";

function App() {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Orders",
          element: <Orders />,
        },
        {
          path: "/Products",
          element: <Products />,
        },
        {
          path: "/Delivery",
          element: <Delivery />,
        },
        {
          path: "/Marketing",
          element: <Marketing />,
        },
        {
          path: "/Analytics",
          element: <Analytics />,
        },
        {
          path: "/Payments",
          element: <Payments />,
        },
        {
          path: "/Tools",
          element: <Tools />,
        },
        {
          path: "/Discounts",
          element: <Discounts />,
        },
        {
          path: "/Audience",
          element: <Audience />,
        },
        {
          path: "/Appearance",
          element: <Appearance />,
        },
        {
          path: "/Plugins",
          element: <Plugins />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={approuter} />
    </>
  );
}

export default App;
