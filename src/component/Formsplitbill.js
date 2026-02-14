import Button from './Button'
import { useState } from 'react'


function FormSplitBill(){
    const [bill, setBill] = useState(0);
    const [yourExpense, setYourExpense] = useState(0);
    const [friendExpense, setFriendExpense] = useState(0);
    const [whoIsPaying, setWhoIsPaying] = useState('user');

    return(
        <form className="form-split-bill">
            <h2>Split a bill with x</h2>

            <label>👨‍❤️‍💋‍👨Bill value</label>
            <input type="number" placeholder="Bill value" value={bill} onChange={(e) => setBill(Number(e.target.value))} />
            <label>😚Your expense</label>
            <input type="number" placeholder="Your expense" value={yourExpense} onChange={(e) => setYourExpense(Number(e.target.value))} />
            <label>🙄Friend's expense</label>
            <input type="number" disabled value={friendExpense} onChange={(e) => setFriendExpense(Number(e.target.value))} />
            <label>😛Who is paying the bill?</label>
            <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">Friend</option>
            </select>

            <Button>Split bill</Button>
        </form>

    );
}

export default FormSplitBill;
