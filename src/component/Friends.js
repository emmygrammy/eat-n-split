import React from 'react'
import Button from './Button'



export const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


//Add conditional styling to highlight the selected friend in the list
function Friend({ friend, friends, setFriends, onSelectFriend, selectedFriend }) {
const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && <p className="red">you owe {Math.abs(friend.balance)} $</p>}
      {friend.balance > 0 && <p className="green">{friend.name} owes you {friend.balance} $</p>}
      {friend.balance === 0 && <p>you and {friend.name} are even</p>}
      <Button onClick={() => onSelectFriend(friend)}>{isSelected ? 'Close' : 'Select'}</Button>
    </li>
  );
}

function FriendsList({ friends, setFriends, onSelectFriend, selectedFriend  }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} friends={friends} setFriends={setFriends} onSelectFriend={onSelectFriend} selectedFriend={selectedFriend} />
      ))}
    </ul>
  );
}

export default FriendsList
