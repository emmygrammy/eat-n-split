import logo from './logo.svg';
import './App.css';
import FriendsList from './component/Friends';
import Form from './component/Form';
import FormSplitBill from './component/Formsplitbill';
import Button from './component/Button';
import { useState } from 'react';
import { initialFriends } from './component/Friends';



function App() {
 const [showForm, setShowForm] = useState(false);
 const [name, setName] = useState('');
 const [image, setImage] = useState('https://i.pravatar.cc/48');
 const [friends, setFriends] = useState(initialFriends);  

 const handleShowAddFriend = () => {
  setShowForm((show) => !show);
 }

 const handleAddFriends = (friend) => {
  setFriends((friends) => [...friends, friend])
  setShowForm(false);
 }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends}  />
        {showForm && <Form name={name} setName={setName} image={image} setImage={setImage} onAddFriend={handleAddFriends} /> } 
        <Button onClick={handleShowAddFriend}>{showForm ? 'Close' : 'Add friend'}</Button>
      </div>
      
     <FormSplitBill />
    </div>
  );
}


export default App;
