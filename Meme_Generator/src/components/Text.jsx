import React, { useRef, useState, useEffect } from 'react';
import Draggable from 'react-draggable';

function Text() {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState('Double Click to Edit and Drag where you want');
  const inputRef = useRef(null);

  useEffect(() => {
    if (editMode) {
      inputRef.current.focus();
    }
  }, [editMode]);

  const handleDoubleClick = () => {
    if (!editMode) {
      setVal('');  
    }
    setEditMode(true);
  };

  const handleBlur = () => {
    setEditMode(false);
  };

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <div>
      <Draggable>
        <div>
          {editMode ? (
            <input style={{marginLeft:'190px', marginBottom:'4px'}}
              ref={inputRef}
              onDoubleClick={handleDoubleClick}
              value={val}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ) : (
            <h4 style={{marginLeft:'55px'}} onDoubleClick={handleDoubleClick}>{val}</h4>
          )}
        </div>
      </Draggable>
    </div>
  );
}

export default Text;
