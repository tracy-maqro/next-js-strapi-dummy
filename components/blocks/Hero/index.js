import React from 'react';

const Hero = (props) => {
  const { _id, Title, Description, Slogan, Cover } = props;

  return (
    <section className="bg-no-repeat bg-center bg-cover h-screen" style={{backgroundImage: `url(http://localhost:1337${Cover.url}`}}>
      <div className='absolute inset-0 bg-black opacity-50 h-full flex flex-col justify-center items-center'>
        <div className='relative mx-2 text-center text-white'>
          <h2 className=' text-4xl xs:text-5xl md:text-6xl text-center uppercase'>
            {Title}
          </h2>
          <h1 className='font-extrabold text-center text-9xl xs:text-5xl md:text-8xl mt-4 uppercase'>
            {Description}
          </h1>
          <div className='inline-flex'>
            <button className='p-2 my-5 mx-2 bg-gray-900 bg-opacity-100 font-bold text-white uppercase'>
              {Slogan}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
