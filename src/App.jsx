import Posts from "./components/Posts";
import Users from "./components/Users";

function App() {
  return (
    <div className="grid grid-cols-2 ">
      <Posts />
      <Users />
    </div>
  );
}

export default App;
