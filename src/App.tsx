import Test from "./components/TestComponent"
import Avatar from "./components/Avatar";
import TopSideBar from "./components/TopSidebar";

import '../src/index.css';

function App() {
  return (
    <div className="App">
      <TopSideBar />
      <div>
        <Avatar />
        <Test />
      </div>
    </div>
  )
}

export default App
