import React from 'react';

const Services = (props) => {
  const { _id, Title, Description, Card } = props;
  return (
    <section className='bg-zinc-100 p-4'>
      <div className='flex flex-col justify-center items-center py-10'>
        <div className='container relative mx-2 mb-12 text-center '>
          <h1 className='font-extrabold text-4xl text-center'>{Title}</h1>
          <p className='text-center font-light mt-4' style={{padding: '50px 100px'}}>
            {Description}
          </p>
        </div>
        <div className='container grid grid-cols-4 gap-4 text-center' style={{padding: '20px'}}>
          {Card.map((item) => (
            <div
              key={item._id}
              className='max-w-sm w-full lg:max-w-full lg:flex'
            >
              <div>
                <div className='mb-8'>
                  <div className='text-gray-900 font-bold text-xl mb-2'>
                    {item.Title}
                  </div>
                  <p className='text-gray-700'>{item.Description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
