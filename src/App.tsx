import "./App.css";
import UserComponent from "./features/user/UserComponent";
import UserComponent2 from "./features/user/UserComponent2";

function App() {
  return (
    <div className="App">
      <UserComponent userId={1} />
      <UserComponent2 userId={1} />
    </div>
  );
}

export default App;
