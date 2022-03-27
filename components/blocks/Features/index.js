import React from 'react';

const Feature = (props) => {
  const { _id, Theme, Title, Description, Card } = props;
  return (
    <section className={Theme.Theme === 'light' && 'bg-slate-50 p-4'}>
      <div className='flex flex-col justify-center items-center py-10'>
        <div className='container relative mx-2 mb-12 text-center '>
          <p className='text-red-pink text-center'>{Title}</p>
          <h3 className='text-center font-extralight text-3xl mt-4'>
            {Description}
          </h3>
        </div>
        <div className='container grid grid-cols-3 gap-3'>
          {Card.map((item) => (
            <div
              key={item._id}
              className='max-w-sm w-full lg:max-w-full lg:flex'
            >
              <div className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'></div>
              <div>
                <div className='mb-8'>
                  <div className='text-gray-900 font-light text-xl mb-2'>
                    {item.Title}
                  </div>
                  <p className='text-gray-700 text-base'>{item.Description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
