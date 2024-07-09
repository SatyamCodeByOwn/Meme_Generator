import React, { createRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Text from '../components/Text';
import {exportComponentAsJPEG} from 'react-component-export-image'

function EditPage() {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);

  const addText = () => {
    setCount(count + 1);
  };

  const memeRef = createRef();

  return (
    <div>
      <div ref={memeRef} style={{width:'600px',border: "4px solid", marginLeft:'450px'}}>
      <div style={{width:"400px", border: "4px solid", marginLeft: '100px', marginTop:'18px'}} className='meme mt-5 mb-5'>
        <img src={params.get('url')} width="250px" alt="Meme" />
        
      </div>
      <span >{
          Array(count).fill(0).map((e, index) => <Text key={index} />)
        }
        </span>
        </div>
      <div style={{marginLeft:'670px', marginTop:'5px'}}>
      <Button style={{marginRight:'5px'}} onClick={addText}>Add Text</Button>
      <Button variant='success' onClick={e=>{exportComponentAsJPEG(memeRef)}}>Save</Button>
      </div>
    </div>
  );
}

export default EditPage;
