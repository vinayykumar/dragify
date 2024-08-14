import React, { useRef, useState } from 'react'
import Card from './Card'
import { ArcherContainer, ArcherElement } from 'react-archer';
import Popup from './Popup'
import { Plus } from 'lucide-react';
import AddNewCard from './AddNewCard';

function Foreground() {
  const ref = useRef(null);
  const boxref = useRef(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [addNewCard,setAddNewCard] = useState(false);
  const [data,setData] = useState(
    [
      {
        id: 'card1',
        title: 'Title1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut neque optio iure! Voluptatum repellendus alias quidem eum voluptatibus sint nostrum.',
        color: 'bg-green-600'
      },
      {
        id: 'card2',
        title: 'Title2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi aperiam libero dolores! Doloribus iste ex libero dolor, ad hic molestias dicta aliquam ab corrupti voluptatem repellendus possimus magnam assumenda soluta nobis eligendi quae praesentium? Nisi dignissimos quos minus incidunt hic!',
        color: 'bg-red-600'
      },
      {
        id: 'card3',
        title: 'Title3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut neque optio iure! Voluptatum repellendus alias quidem eum voluptatibus sint nostrum.',
        color: 'none'
      },
      {
        id: 'card4',
        title: 'Title4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi aperiam libero dolores! Doloribus iste ex libero dolor, ad hic molestias dicta aliquam ab corrupti voluptatem repellendus possimus magnam assumenda soluta nobis eligendi quae praesentium? Nisi dignissimos quos minus incidunt hic!',
        color: 'bg-blue-600'
      }
    ]
  )

  const handleCardClick = (cardData) => {
    setSelectedCard(cardData); // Set the selected card's data in the state
  };

  const handleClosePopup = () => {
    setSelectedCard(null); // Clear the selected card data to close the popup
  };
  
  return (
        <div ref={ref} className='z-[3] fixed top-0 left-0 w-full h-full p-10 flex gap-10 flex-wrap'>
            <div onClick={()=>setAddNewCard(true)} className='w-28 h-14 bg-blue-600 text-white font-bold p-4 rounded-full flex items-center justify-center cursor-pointer mt-2'>
              <p className='flex gap-2'> <Plus /> Add</p>
            </div>
            {data.map((item,index)=>(
                  <div key={item.id}> 
                    <Card data={item} reference={ref} handleCardClick={handleCardClick}/>
                  </div>
              ))}
              {selectedCard && <Popup data={selectedCard} onClose={handleClosePopup} />}
              {addNewCard && <AddNewCard data={data} setData={setData} setAddNewCard={setAddNewCard}></AddNewCard>}
        </div>
  )
}

export default Foreground
