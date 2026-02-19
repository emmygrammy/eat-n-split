import Button from './Button';
import { useState } from 'react';

function FormSplitBill({ selectedFriend }) {
  const [bill, setBill] = useState('');
  const [yourExpense, setYourExpense] = useState('');
  const [whoIsPaying, setWhoIsPaying] = useState('user');
  const billValue = Number(bill);
  const yourExpenseValue = Number(yourExpense);
  const friendExpenseValue = billValue > yourExpenseValue ? billValue - yourExpenseValue : 0;

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>👨‍❤️‍💋‍👨Bill value</label>
      <input
        type="number"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
      <label>😚Your expense</label>
      <input
        type="number"
        placeholder="Your expense"
        value={yourExpense}
        onChange={(e) => setYourExpense(e.target.value)}
      />
      <label>🙄{selectedFriend.name}'s expense</label>
      <input
        type="number"
        disabled
       value={friendExpenseValue}
      />
      <label>😛Who is paying the bill?</label>
      <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
