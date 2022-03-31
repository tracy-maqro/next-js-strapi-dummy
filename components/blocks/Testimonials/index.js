import React from 'react';

const Testimonials = (props) => {
  const { _id, Title, Description, TestimonialContent } = props;
  return (
    <section className='bg-white-200 p-4'>
      <div className='flex flex-col justify-center items-center py-10'>
        <div className='container relative mx-2 mb-12 text-center '>
          <h1 className='font-extrabold text-4xl text-center'>{Title}</h1>
          <p
            className='text-center font-light mt-4'
            style={{ padding: '50px 100px' }}
          >
            {Description}
          </p>
        </div>
        <div
          className='container grid grid-cols-3 gap-3 text-center'
          style={{ padding: '20px' }}
        >
          {TestimonialContent.map((item) => (
            <div
              key={item._id}
              className='max-w-sm w-full lg:max-w-full lg:flex'
            >
              <div>
                <div className='mb-8 px-12'>
                  <div className='text-gray-900 font-bold mb-2'>
                    {item.Name}
                  </div>
                  <div className='text-gray-900  mb-2'>{item.Position}</div>
                  <small className='text-gray-700'>{item.Content}</small>
                  <img src='' alt='' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
