import React, { useState } from 'react'
import { X } from 'lucide-react';
import { color } from 'framer-motion';

function AddNewCard({ data, setData, setAddNewCard}) {
  const [Title,setTitle] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [Desc,setDesc] = useState('')
  const handleColorChange = (color) => {
    setSelectedColor(color); 
  };

  const handleAddCard = ()=>{
    if(Title=='' || Desc=='' || selectedColor==''){
        alert('Please Enter correct details')
        return;
    } 
    setData([...data,{
        id:`card${data.length +1}`,
        title:Title,
        description:Desc,
        color:selectedColor
    }])
    // console.log(data);
    setAddNewCard(false);
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center p-40">
    <div className="bg-white w-1/2 z-[99] p-5 rounded shadow-lg relative">
      <button 
        className="absolute top-2 right-2 text-black"
        onClick={(prev)=>setAddNewCard(!prev)}>
        <X/>
      </button>
      <h2 className="text-xl font-bold mb-3">Add Card</h2>
      <div className='flex flex-col gap-5'>
        <div>
            <p className='text-xl'>Title</p>
            <input onChange={(event)=>setTitle(event.target.value)}  type="text" className='border w-full p-4 rounded-md border-gray-600' />
        </div>
        <div>
            <p className='text-xl'>Description</p>
            <input onChange={(event)=>setDesc(event.target.value)}  type="text" className='border w-full p-4 rounded-md border-gray-600' />
        </div>
        <div>

        <div className="flex gap-4 mb-4">
            <h1 className='text-xl mt-2'>Color</h1>
          <div
            className={`w-10 h-10 bg-green-600 rounded-full cursor-pointer ${selectedColor === 'bg-green-600' ? 'border-2 border-gray-700' : ''}`}
            onClick={() => handleColorChange('bg-green-600')}
          ></div>
          <div
            className={`w-10 h-10 bg-blue-600 rounded-full cursor-pointer ${selectedColor === 'bg-blue-600' ? 'border-2 border-gray-700' : ''}`}
            onClick={() => handleColorChange('bg-blue-600')}
          ></div>
          <div
            className={`w-10 h-10 bg-red-600 rounded-full cursor-pointer ${selectedColor === 'bg-red-600' ? 'border-2 border-gray-700' : ''}`}
            onClick={() => handleColorChange('bg-red-600')}
          ></div>
          <div
            className={`w-10 h-10 bg-zinc-900/80 rounded-full cursor-pointer ${selectedColor === 'bg-zinc-900/80' ? 'border-2 border-gray-700' : ''}`}
            onClick={() => handleColorChange('bg-zinc-900/80')}
          ></div>
        </div>

        <div className='flex w-full justify-end'>
            <button onClick={handleAddCard} className='px-8 py-4 mr-0 bg-blue-700 text-white rounded-lg'>Add Card</button>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddNewCard
