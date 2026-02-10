import logo from './logo.svg';
import './App.css';
import FriendsList from './component/Friends';



function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
      </div>
    </div>
  );
}

export default App;
