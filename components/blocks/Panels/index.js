import React from 'react';

const Panels = (props) => {
  const { _id, Title, Description, Image } = props;
  return (
    <section className='bg-zinc-100 p-4'>
      <div className='flex flex-col justify-center items-center py-6'>
        <div className='relative mx-2 mb-12 '>
          <div className='grid grid-cols-2'>
            <div className='relative mx-2 mb-12 px-16'>
              <h1 className='text-2xl'>{Title}</h1>
              <p className='font-light mt-4'>{Description}</p>
            </div>
            <div className='relative mx-2 mb-12 px-16' style={{backgroundImage: `url(http://localhost:1337${Image.url}`}}>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Panels;
