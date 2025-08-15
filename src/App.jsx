import React from 'react';
import Badge from './components/Badge';
import Banner from './components/Banner';

function App() {
  return (
    <>
    <div className='badges'>
      <Badge variant='pill' color='blue'>Badge</Badge>  
      <Badge variant='pill' color='red'>Badge</Badge>  
      <Badge variant='pill' color='yellow'>Badge</Badge>  
      <Badge variant='pill' color='indigo'>Badge</Badge>  
      <Badge variant='pill' color='gray'>Badge</Badge>  
    </div>
    <div className='banners'>
      <Banner variant='multi-line' type='success'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aliquid pariatur, ipsum similique veniam.
        </Banner>
      <Banner variant='multi-line' type='warning'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aliquid pariatur, ipsum similique veniam.
        </Banner>
      <Banner variant='multi-line' type='error'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aliquid pariatur, ipsum similique veniam.
        </Banner>
      <Banner variant='multi-line' type='neutral'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aliquid pariatur, ipsum similique veniam.
        </Banner>
    </div>
      
    </>
  );
}

export default App;
