const HFContainer = ({ details }) => {
  return (
    <div className="w-[25%] h-[450px] flex flex-col justify-center items-center shadow-md">
      <div className="w-[100%] h-[75%]">
        <img
          src={details.imageSrc}
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="h-[50%] w-[100%] flex flex-col justify-evenly items-start p-10">
        <h1 className="text-2xl font-semibold">{details.title}</h1>
        <p>{details.description}</p>
        <a className="text-blue-700 mt-[50px]">learn more +</a>
      </div>
    </div>
  );
};

export default HFContainer;
