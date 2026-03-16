import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "../shared/components/Layout";
import { HomePage } from "../modules/home/pages/HomePage";
import { Destinations } from "../modules/destinations/pages/Destinations";
import { TrackingPage } from "../modules/tracking/pages/TrackingPage";
import { AboutPage } from "../modules/about/pages/AboutPage";
import { FaqPage } from "../modules/faq/pages/FaqPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "tracking", element: <TrackingPage /> },
      { path: "destinations", element: <Destinations /> },
      // { path: "tracking", element: <TrackingPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "faq", element: <FaqPage /> },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
