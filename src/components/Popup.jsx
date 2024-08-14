import { X } from 'lucide-react';
import React from 'react';

function Popup({ data, onClose }) {
  if (!data) return null; // Do not render anything if no data

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center p-40">
      <div className="bg-white w-1/2  p-5 rounded shadow-lg relative">
        <button 
          className="absolute top-2 right-2 text-black"
          onClick={onClose}
        >
          <X/>
        </button>
        <h2 className="text-3xl font-bold mb-3">{data.title}</h2>
        <p className='text-lg'>{data.description}</p>
      </div>
    </div>
  );
}

export default Popup;
