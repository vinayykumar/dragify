import React from 'react'
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import { motion } from 'framer-motion';
import Xarrow, {useXarrow, Xwrapper} from 'react-xarrows';


function Card({ data, reference, handleCardClick }) {
    const updateXarrow = useXarrow();
    return (<motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2}>
        <ResizableBox
            className="rounded-[40px] bg-zinc-900/80 px-6 py-8 relative overflow-hidden flex-shrink-0"
            width={240} 
            height={288} 
            minConstraints={[160, 160]} 
            maxConstraints={[480, 480]} 
            >

            <div className='w-full h-full text-white mb-16'>
                <h1 className='text-3xl font-semibold'>
                    {data.title}</h1>
                <p>
                    {data.description.length < 100 ? data.description : data.description.substr(0,100) + '....'}
                </p>
            </div>
            <div onClick={()=>handleCardClick(data)} className={`footer absolute bottom-0 
                            ${data.color=='bg-blue-600' && 'bg-blue-600'}
                            ${data.color=='bg-green-600' && 'bg-green-600'}
                            ${data.color=='bg-red-600' && 'bg-red-600'}
                             w-full h-12 left-0`}>
                    <h1 className='text-white font-medium text-center py-3'>Show More</h1>
            </div>
            </ResizableBox>
    </motion.div>
    )
    }

    export default Card
