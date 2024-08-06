import "./App.css";
import headerImg from "../src/assets/bg-cafe.jpg";
import vectorImg from "../src/assets/vector.svg";

function App() {

  return (
    <>
      <div className="relative">
        <img src={headerImg} alt="" />
        <div className="h-[100vh] w-full bg-[#111315] relative">
          <div className="bg-[#1B1D1F] w-[80%] mx-auto px-16 py-16 rounded-xl relative">
            <img
              className="absolute top-0 right-72 bottom-0 mx-auto my-auto z-0"
              src={vectorImg}
              alt=""
            />
            <div className="flex flex-col justify-between items-center gap-4 productsDiv mt-10 z-10 relative">
              <h1 className="text-[32px] font-bold text-white">
                Our Collection
              </h1>

              <p className="text-[16px] font-semibold text-[#6F757C] text-center w-[60%]">
                Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
