import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header className='mb-20' />
      <Banner className='mb-20' />
      <Nav className='mb-20' />
      <About className='mb-200' /> {/* Add margin of 200 between sections */}
      <Services className='mb-200' /> {/* Add margin of 200 between sections */}
      <Work className='mb-200' /> {/* Add margin of 200 between sections */}
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
