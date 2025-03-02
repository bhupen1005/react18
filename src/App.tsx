import { useState } from "react";
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
