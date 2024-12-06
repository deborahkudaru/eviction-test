import Posts from "./components/Posts";
import Users from "./components/Users";

function App() {
  return (
    <div className="grid grid-cols-2 gap-20 p-10">
      <Posts />
      <Users />
    </div>
  );
}

export default App;
