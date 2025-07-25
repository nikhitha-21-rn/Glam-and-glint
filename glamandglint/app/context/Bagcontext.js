// app/context/BagContext.js
'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const BagContext = createContext();

export const BagProvider = ({ children }) => {
  const [bagItems, setBagItems] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('bag');
    if (stored) setBagItems(JSON.parse(stored));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('bag', JSON.stringify(bagItems));
  }, [bagItems]);

  const addToBag = (item) => {
    setBagItems((prev) => [...prev, item]);
  };

  const removeFromBag = (index) => {
    setBagItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <BagContext.Provider value={{ bagItems, addToBag, removeFromBag }}>
      {children}
    </BagContext.Provider>
  );
};

export const useBag = () => useContext(BagContext);
