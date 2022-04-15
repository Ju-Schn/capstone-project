import { useState } from 'react';

export default function useCategory() {
  const [category, setCategory] = useState('');

  function handleChange(event) {
    event.preventDefault();
    setCategory(event.target.value);
  }

  function handleResetFilter(event) {
    event.preventDefault();
    setCategory('');
  }

  return { handleChange, handleResetFilter, category, setCategory };
}
