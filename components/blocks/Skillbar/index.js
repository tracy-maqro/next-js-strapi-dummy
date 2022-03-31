import React from 'react';

const Skillbar = (props) => {
  const { _id, Title, Description, SkillbarContent } = props;
  return (
    <section>
      <div className='flex flex-col justify-center items-center py-6'>
        <div className='container relative mx-2 mb-12 '>
          <div className='grid grid-cols-2'>
            <div className='relative mx-2 mb-12 px-16'>
              <h1 className='text-2xl'>{Title}</h1>
              <p className='font-light mt-4'>{Description}</p>
            </div>
            <div className='relative mx-2 mb-12 px-16'>
              {SkillbarContent.map((item) => (
                <div key={item._id}>
                  <p>{item.Title}</p>
                  <div class='w-full bg-gray-200 h-1 mb-6'>
                    <div class='bg-gray-600 h-1' style={{ width: item.Bar }}></div><small>{item.Bar}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skillbar;
