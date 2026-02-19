import React from 'react';
import Button from './Button';

import { useState } from 'react';

function Form({ name, setName, image, setImage, onAddFriend }) {
  // Generate a unique ID for the new friend
  const id = crypto.randomUUID();
  // Create a new friend object with the generated ID
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !image) return;
    // Create a new friend object with the generated ID
    const newFriend = {
      id,
      name,
      image: `${image}${id}`,
      balance: 0,
    };
    // Add the new friend to the friends state
    onAddFriend(newFriend);
    // Clear the input fields
    setName('');
    setImage('https://i.pravatar.cc/48');
  };
  return (
    <div>
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <label>🐵Friend name</label>
        <input
          type="text"
          placeholder="Friend name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>👨🏿‍🤝‍👨🏼Image URL</label>
        <input
          type="text"
          placeholder="image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button type="submit" onClick={handleSubmit}>
          Add friend
        </Button>
      </form>
    </div>
  );
}

export default Form;
