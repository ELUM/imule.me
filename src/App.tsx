import Test from "./components/TestComponent"
import '../src/index.css';
import Avatar from './assets/mUOTFF0E_400x400.jpg';

function App() {
  return (
    <div className="App">
      <div className="Avatar">
        <img src="https://avatars.githubusercontent.com/u/40533546?v=4" alt="" />
        <h1>Mule</h1>
        <p>Welcome my website!</p>
      </div>
      <Test></Test>
    </div>
  )
}

export default App
