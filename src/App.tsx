import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import MantineUi from "./pages/MantineUi";
import MantineUiV6 from "./pages/MantineUiV6";
import MantineUiV7 from "./pages/MantineUiV7";
import BasicRouter from "./routes/basicRouter";
import NestedRouter from "./routes/nestedRouter";
import CreateBrowserRouter from "./routes/createBrowserRouter";
import { Select } from "@mantine/core";

function App() {
  const [routerType, setRouterType] = useState("basic");

  const renderRouter = () => {
    switch (routerType) {
      case "nested":
        return <NestedRouter />;
      case "createBrowserRouter":
        return <CreateBrowserRouter />;
      default:
        return <BasicRouter />;
    }
  };

  return (
    <div className="App">
      <Select
        style={{ width: 200 }}
        data={[
          { value: "basic", label: "Basic Router" },
          { value: "nested", label: "Nested Router" },
          { value: "createBrowserRouter", label: "Create Browser Router" },
        ]}
        onChange={(value) => value && setRouterType(value)}
        value={routerType}
      />
      {renderRouter()}
    </div>
  );
}

export default App;
