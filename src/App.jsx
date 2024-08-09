import "./App.css";
import headerImg from "../src/assets/bg-cafe.jpg";
import vectorImg from "../src/assets/vector.svg";
import Card from "./Components/Card";

function App() {

  return (
    <>
      <div className="relative">
        <img src={headerImg} alt="" />
        <div className="h-[100vh] w-full bg-[#111315]">
          <div className="bg-[#1B1D1F] w-[80%] mx-auto px-16 py-16 rounded-xl ">
            <div className="flex flex-col justify-between items-center gap-4 productsDiv">
              <div className="textDiv flex flex-col justify-between items-center gap-4">
                <h1 className="text-[32px] font-bold text-white">
                  Our Collection
                </h1>

                <p className="text-[16px] font-semibold text-[#6F757C] text-center w-[60%]">
                  Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
                </p>
              </div>

              <div className="flex justify-center items-center gap-8">
                <button className="bg-transparent hover:bg-[#6F757C] text-white px-3 py-2 rounded-lg font-semibold text-[16px]">
                  All Products
                </button>

                <button className="bg-transparent hover:bg-[#6F757C] text-white px-3 py-2 rounded-lg font-semibold text-[16px]">
                  All Products
                </button>
              </div>

              <Card></Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
