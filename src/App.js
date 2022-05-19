import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales.js';


function App() {
  let courses = [
    {name: 'Complete iOS10 Course', price: 120},
    {name: 'Complete React.JS Course ', price: 970},
    {name: 'Complete Vue.JS Course', price: 110},
    {name: 'Complete Python Course', price: 150}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I am The Main App
        </p>
      </header>
      <Coursesales items= {courses}/>
    </div>
  );
}

export default App;
