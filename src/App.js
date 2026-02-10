import logo from './logo.svg';
import './App.css';
import FriendsList from './component/Friends';
import Form from './component/Form';



function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <Form />
      </div>
    </div>
  );
}


export default App;
