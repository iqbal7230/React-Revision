import React, { useCallback, useState } from 'react';

export function PassGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(0); // Set default length to 8
  const [allowNumber, setAllowNumber] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [PassValidation, setPassValidation] = useState('Weak');

  const passwordGen = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (allowNumber) str += '0123456789';
    if (allowChar) str += '!@#$%^&*()_+';
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, allowNumber, allowChar]);

  const Passchecker = useCallback(() => {
    if (length > 8 && allowChar && allowNumber) {
      setPassValidation('Very Strong');
    } else if (length > 8 && allowChar) {
      setPassValidation('Strong');
    } else if (length > 8 && allowNumber) {
      setPassValidation('Medium');
    } else if (length <= 8) {
      setPassValidation('Weak');
    }
  }, [length, allowChar, allowNumber]);

  const handleGenerate = () => {
    passwordGen();
    Passchecker();
  };

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-3xl font-bold underline text-center'>Password Generator</h1>
      <div className='flex'>
        <input className='outline m-2 p-2 w-full' type='text' value={password} readOnly />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div>
        <p>Above password is {PassValidation}</p>
        <input
          type='range'
          max={16}
          min={0}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))} // Convert value to number
          className='w-full'
        />
        <label>Length: {length}</label>
        <div>
          <input
            type='checkbox'
            className='m-2'
            id='checkbox'
            checked={allowNumber} // Changed from defaultChecked to checked
            onChange={() => setAllowNumber(!allowNumber)}
          />
          <label htmlFor='checkbox'>Number</label>
        </div>
        <div>
          <input
            type='checkbox'
            className='m-2'
            id='checkbox2'
            checked={allowChar} // Changed from defaultChecked to checked
            onChange={() => setAllowChar(!allowChar)}
          />
          <label htmlFor='checkbox2'>Character</label>
        </div>
        <button className='bg-sky-500 hover:bg-sky-700 m-2 p-2' onClick={handleGenerate}>
          Generate
        </button>
      </div>
    </div>
  );
}
