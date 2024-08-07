import "./App.css";
import { useState } from "react";
import headerImg from "../src/assets/bg-cafe.jpg";
import Card from "./Components/Card";

function App() {
  const [showAvailable, setShowAvailable] = useState(false);

  return (
    <>
      <div className="relative">
        <img className="h-[40vh] lg:h-fit" src={headerImg} alt="" />
        <div className="h-[380vh] md:h-[230vh] lg:h-[110vh] w-full bg-[#111315]">
          <div className="bg-[#1B1D1F] w-[92%] md:w-[85%] lg:w-[80%] mx-auto px-16 py-16 rounded-xl absolute left-1/2 top-40 lg:top-1/2 transform -translate-x-1/2 lg:-translate-y-1/2">
            <div className="flex flex-col justify-between items-center gap-4 productsDiv">
              <div className="textDiv flex flex-col justify-between items-center gap-4">
                <h1 className="text-[32px] font-bold text-white">
                  Our Collection
                </h1>

                <p className="text-[16px] font-semibold text-[#6F757C] text-center ;g:w-[60%]">
                  Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
                </p>
              </div>

              <div className="flex justify-center items-center gap-8">
                <button
                  className="bg-transparent hover:bg-[#6F757C] text-white px-3 py-2 rounded-lg font-semibold text-[16px]"
                  onClick={() => setShowAvailable(false)}
                >
                  All Products
                </button>

                <button
                  className="bg-transparent hover:bg-[#6F757C] text-white px-3 py-2 rounded-lg font-semibold text-[16px]"
                  onClick={() => setShowAvailable(true)}
                >
                  Available Now
                </button>
              </div>

              <Card showAvailable={showAvailable} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
