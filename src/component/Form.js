import React from 'react'
import Button from './Button'

import { useState } from 'react'

function Form() {
    const [showForm, setShowForm] = useState(false)
    
  return (
    <div>

        <Button onClick={() => setShowForm(!showForm)}>Add friend</Button>

        {showForm && (
        <form className='form-add-friend'>
            <label>Friend name</label>
            <input type="text" placeholder="Friend name" />
            
            <label>Image URL</label>
            <input type="text" placeholder="image URL" />

            <Button onClick={() => setShowForm(false)}>Close</Button>
            
           
            <Button>Add</Button>
        </form>
         )}
    </div>
   

  );
}

export default Form