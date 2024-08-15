import React, { useRef, useState, useEffect } from 'react';
import ReactFlow, { Background, addEdge, useNodesState, useEdgesState } from 'reactflow';
import CardNode from './CardNode';  // Import the CardNode component
import Popup from './Popup';
import { Plus } from 'lucide-react';
import AddNewCard from './AddNewCard';
import dummy from '../dummydata';
import 'reactflow/dist/style.css';

function Foreground() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [addNewCard, setAddNewCard] = useState(false);
  const [data, setData] = useState(dummy);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const ref = useRef();

  const handleCardClick = (cardData) => {
    setSelectedCard(cardData);
  };

  const handleClosePopup = () => {
    setSelectedCard(null);
  };

  const handleAddCard = (newCard) => {
    const newNode = {
      id: `node-${nodes.length + 1}`,
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { cardData: newCard },
      type: 'cardNode',
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
    setData((prevData) => [...prevData, newCard]);
  };

  useEffect(() => {
    const initialNodes = data.map((item, index) => ({
      id: `node-${index + 1}`,
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { cardData: item },
      type: 'cardNode', 
    }));
    setNodes(initialNodes);
  }, [data]);

  return (
    <div ref={ref} className='z-[3] fixed top-0 left-0 w-full h-[95vh] p-10 flex gap-10 flex-wrap'>
      <div 
        onClick={() => setAddNewCard(true)} 
        className='w-28 h-14 bg-blue-600 text-white font-bold p-4 rounded-full flex items-center justify-center cursor-pointer mt-2'>
        <p className='flex gap-2'><Plus /> Add</p>
      </div>
      <div style={{ height: 'calc(100% - 50px)', width: '100%' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={(params) => setEdges((eds) => addEdge(params, eds))}
          fitView
          nodeTypes={{ cardNode: CardNode }} 
        >
          <Background />
        </ReactFlow>
      </div>
      {selectedCard && <Popup data={selectedCard} onClose={handleClosePopup} />}
      {addNewCard && <AddNewCard data={data} setData={setData} setAddNewCard={setAddNewCard} />}
    </div>
  );
}

export default Foreground;
