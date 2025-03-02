import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import MantineUi from "../pages/MantineUi";
import MantineUiV6 from "../pages/MantineUiV6";
import MantineUiV7 from "../pages/MantineUiV7";
import Layout from "../pages/Layout";
import Buttons from "../pages/Buttons";
import Navigation from "../pages/Navigation";
import DataDisplay from "../pages/DataDisplay";
import UiElements from "../pages/UiElements";
import PrimaryButton from "../pages/buttons/PrimaryButton";
import SecondaryButton from "../pages/buttons/SecondaryButton";
import SuccessButton from "../pages/buttons/SuccessButton";
import DangerButton from "../pages/buttons/DangerButton";
import WarningButton from "../pages/buttons/WarningButton";
import InfoButton from "../pages/buttons/InfoButton";
import LightButton from "../pages/buttons/LightButton";
import DarkButton from "../pages/buttons/DarkButton";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "mantine",
        element: <MantineUi />,
        children: [
          {
            path: "v6",
            element: <MantineUiV6 />,
          },
          {
            path: "v7",
            element: <MantineUiV7 />,
          },
        ],
      },
    ],
  },
  {
    path: "uiElements",
    element: <UiElements />,
    children: [
      {
        path: "layout",
        element: <Layout />,
      },
      {
        path: "buttons",
        element: <Buttons />,
        children: [
          { path: "primary", element: <PrimaryButton /> },
          { path: "secondary", element: <SecondaryButton /> },
          { path: "success", element: <SuccessButton /> },
          { path: "danger", element: <DangerButton /> },
          { path: "warning", element: <WarningButton /> },
          { path: "info", element: <InfoButton /> },
          { path: "light", element: <LightButton /> },
          { path: "dark", element: <DarkButton /> },
        ],
      },
      {
        path: "navigation",
        element: <Navigation />,
      },
      {
        path: "dataDisplay",
        element: <DataDisplay />,
      },
    ],
  },
]);

const CreateBrowserRouter = () => <RouterProvider router={router} />;

export default CreateBrowserRouter;
