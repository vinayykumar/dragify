import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      title : 'Title1',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut neque optio iure! Voluptatum repellendus alias quidem eum voluptatibus sint nostrum.',
      color:'green'
    },
    {
      title : 'Title2',
      description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi aperiam libero dolores! Doloribus iste ex libero dolor, ad hic molestias dicta aliquam ab corrupti voluptatem repellendus possimus magnam assumenda soluta nobis eligendi quae praesentium? Nisi dignissimos quos minus incidunt hic!',
      color:'blue'
    },
    {
      title : 'Title1',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut neque optio iure! Voluptatum repellendus alias quidem eum voluptatibus sint nostrum.',
      color:'none'
    },
    {
      title : 'Title2',
      description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi aperiam libero dolores! Doloribus iste ex libero dolor, ad hic molestias dicta aliquam ab corrupti voluptatem repellendus possimus magnam assumenda soluta nobis eligendi quae praesentium? Nisi dignissimos quos minus incidunt hic!',
      color:'blue'
    }
  ]

  return (
    <div ref={ref} className='z-[3] fixed top-0 left-0 w-full h-full p-10 flex gap-5 flex-wrap'>
        {data.map((item,index)=>(
          <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground
