import { Link } from 'react-router-dom';

const HAboutUS = () => {
  return (
    <>
    <div className="w-[80%] h-[70vh] flex justify-center items-center shadow-sm mt-[250px]">
      <div className="h-[100%] w-[50%] flex flex-col justify-center items-start p-5 gap-10">
        <h1 className="text-4xl font-semibold">About Us</h1>
        <p className="text-xl">
          Empower your financial health with our cutting-edge loans and expenses
          management system, designed to streamline your finances so you can
          focus on what matters most – your well-being
        </p>
        <div className="w-full min-h-fits">
          <Link to="/aboutus">
            <button className="w-[40%] h-[50px] bg-slate-900 text-white rounded-md">
              Learn More +
            </button>
          </Link>
          <Link to="/contact">
            <button className="w-[40%] h-[50px] bg-white text-black rounded-md ml-5 border border-gray-800 hover:bg-slate-900 hover:text-white">
              Contact Us +
            </button>
          </Link>
        </div>
      </div>
      <div className="h-[80%] max-w-[50%] ">
        <img
          src={require('../../Assets/images/is-cataract-surgery-covered-by-health-insurance.jpg')}
          className="w-full h-full object-cover "
        />
      </div>
    </div>
    </>
  );
};

export default HAboutUS;
