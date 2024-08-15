import React, { useRef, useState } from 'react'
import Card from './Card'
import Popup from './Popup'
import { Plus } from 'lucide-react';
import AddNewCard from './AddNewCard';
import dummy from '../dummydata'  
import Xarrow, {useXarrow, Xwrapper} from 'react-xarrows';

function Foreground() {
  const ref = useRef(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [addNewCard,setAddNewCard] = useState(false);
  const [data,setData] = useState(dummy)

  const handleCardClick = (cardData) => {
    setSelectedCard(cardData); 
  };

  const handleClosePopup = () => {
    setSelectedCard(null); 
  };
  
  return (
        <div ref={ref} className='z-[3] fixed top-0 left-0 w-full h-full p-10 flex gap-10 flex-wrap'>
            <div 
              onClick={()=>setAddNewCard(true)} 
              className='w-28 h-14 bg-blue-600 text-white font-bold p-4 rounded-full flex items-center justify-center cursor-pointer mt-2'>
                  <p className='flex gap-2'> <Plus /> Add</p>
            </div>
            {data.map((item,index)=>(
                  <div key={item.id}> 
                    <Card data={item} reference={ref} handleCardClick={handleCardClick}/>
                  </div>
              ))
            }
              {selectedCard && <Popup data={selectedCard} onClose={handleClosePopup} />}
              {addNewCard && <AddNewCard data={data} setData={setData} setAddNewCard={setAddNewCard}></AddNewCard>}
        </div>
  )
}

export default Foreground
