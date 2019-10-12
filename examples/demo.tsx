import * as React from 'react';
import {render} from 'react-dom';
import { FocusedImage } from '../src/react-image-focus';
import { useState } from 'react';

function Demo():JSX.Element {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [showImages, setShowImages] = useState<boolean>(true);
  const focus: {x: number, y: number} = {x, y};

  const sixteenDivs = [...new Array(16)].map(() => (
    <div>
      <FocusedImage focus={focus} src='http://place-puppy.com/200x200'/>
    </div>
    ))
  return (
    <>
      <h2>Grid Example</h2>
      {showImages && (
        <div className='the-grid'>
          {sixteenDivs}
        </div>
      )}
      <p>
        <input type='range' value={x} min='-1' max='1' step='any' onChange={({target:{valueAsNumber}}) => {setX(valueAsNumber)}}/> X: {x}
      </p>
      <p>
        <input type='range' value={y} min='-1' max='1' step='any' onChange={({target:{valueAsNumber}}) => {setY(valueAsNumber)}}/> Y: {y}
      </p>
      <p>
        <input id='show-images' type='checkbox' checked={showImages} onChange={() => setShowImages(x => !x)}/>&nbsp;
        <label htmlFor='show-images'>Show/Hide Grid</label>
      </p>
    </>
  )
  
}

render(<Demo/>, document.getElementById('root'));