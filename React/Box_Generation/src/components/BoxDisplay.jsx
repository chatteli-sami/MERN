import React, {useState} from "react";

const BoxDisplay = ({boxes, removeBox}) =>{
    return(
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {boxes.map((box, index) => (
        <div
          key={index}
          style={{
            width: box.size,
            height: box.size,
            backgroundColor: box.color,
            margin: '10px',
            position: 'relative',
          }}
        >
            <button
            onClick={() => removeBox(index)}
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              background: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              cursor: 'pointer',
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
    )
}

export default BoxDisplay