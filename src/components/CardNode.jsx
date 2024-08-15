import React from 'react';
import { Handle } from 'reactflow';
import Card from './Card';

const CardNode = ({ data }) => {
  return (
    <div style={{ padding: 0, border: 'none', background: 'transparent', position: 'relative' }}>
      {/* Top Handle */}
      <Handle
        type="target"
        position="top"
        style={{ background: '#555' }}
      />
      {/* Card Component */}
      <Card data={data.cardData} />
      {/* Bottom Handle */}
      <Handle
        type="source"
        position="bottom"
        style={{ background: '#555' }}
      />
      {/* Left Handle */}
      <Handle
        type="source"
        position="left"
        style={{ background: '#555' }}
      />
      {/* Right Handle */}
      <Handle
        type="target"
        position="right"
        style={{ background: '#555' }}
      />
    </div>
  );
};

export default CardNode;
