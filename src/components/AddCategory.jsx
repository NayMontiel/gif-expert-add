import React, { useState } from 'react'

export const AddCategory = ({newCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1)  return;
        
        newCategory(inputValue.trim())
        setInputValue('')
    }

    const handleChange = (e) => {
        
        setInputValue(
             e.target.value
        )
        console.log(e.target.value)
    }

  return (
    <form onSubmit={ handleSubmit }>
    <input 
    type="text" 
    placeholder="Buscar Gif" 
    value={inputValue}
    onChange={ handleChange }
/>
</form>
  )
}
