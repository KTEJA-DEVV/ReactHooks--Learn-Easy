import React, { useEffect, useState, useMemo, useRef } from 'react';

const ExpenseTracker = () => {
  const nameRef = useRef(null);
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [items, setItems] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('expenses'));
    return saved || [
      { name:'Grocery', Bill:3000 },
      { name:'House Rent', Bill:6500 }
    ];
  });

  const ExpenseHandle = (name, value) => {
    if (!name || !value) return;
    setItems([...items, { name, Bill: Number(value) }]);
    setName('');
    setValue('');
    nameRef.current.focus();
  };

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(items));
  }, [items]);

  const Total = useMemo(() => {
    return items.reduce((sum, item) => sum + Number(item.Bill), 0);
  }, [items]);

  return (
    <div>
      <input
        ref={nameRef}
        placeholder='Enter Expense'
        className='border-2 m-3 rounded'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder='Enter Amount'
        className='border-2 m-3  rounded'
        type='number'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className='py-2 px-5 bg-amber-200 rounded-2xl'
        onClick={() => ExpenseHandle(name, value)}
      >
        Add Expense
      </button>

      <h1>Monthly Expense: {Total}</h1>

      <ul>
        {items.map((item, index) => (
          <li key={index} className='flex gap-2 bg-red-200 m-5 p-2 w-fit'>
            <h1>{item.name}</h1>
            <h2>{item.Bill}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
