import logo from './logo.svg';
import './App.css';
import FriendsList from './component/Friends';
import Form from './component/Form';
import FormSplitBill from './component/Formsplitbill';
import Button from './component/Button';
import { useState } from 'react';



function App() {
 const [showForm, setShowForm] = useState(false);
 const [name, setName] = useState('');
 const [image, setImage] = useState('"https://i.pravatar.cc/48');

 const handleAddFriend = () => {
  setShowForm((show) => !show);
 }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showForm && <Form name={name} setName={setName} image={image} setImage={setImage} /> } /
        <Button onClick={handleAddFriend}>{showForm ? 'Close' : 'Add friend'}</Button>
      </div>
      
     <FormSplitBill />
    </div>
  );
}


export default App;
