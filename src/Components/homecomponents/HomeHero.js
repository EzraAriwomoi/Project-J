const HomeHero = () => {
  return (
    <>
      <div className="w-full h-screen bg-blue-300 relative">
        <img src={require('../../Assets/images/hero.jpg')} alt="" className="h-full w-full object-cover" />
        <div className='absolute top-0 w-full h-full bg-[#19357C] bg-opacity-50'>
          <h1></h1>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
