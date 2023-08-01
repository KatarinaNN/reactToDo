import './App.css';
import image from './notes.jpg';
import { TodoList } from './todoL';
function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={image} alt="note"  width="300px" height="160px"/>
      </div>
      <div className="container">
        <h1>To Do List</h1>
      </div>
        <TodoList />
    </div>
  );
}

export default App;
