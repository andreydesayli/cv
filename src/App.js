import { HeaderBg, Call, Location, Email, ProfilePicture, MobileBg } from "./assets";
import { Content, Information } from "./components";

function App() {
  return (
    <div className="">
      <div className=" pb-[100px] invisible xl:visible absolute">
        <div className="flex flex-col items-center">
          <img className="w-screen absolute" src={HeaderBg} alt='' />
          <div className="w-full flex flex-col items-center pt-[100px]">
            <img className="w-[120px] rounded-full" src={ProfilePicture} alt='' />
            <h1 className="font-roboto font-bold text-[20px mt-[11px]">Andrey Desayli</h1>
            <p className="font-roboto font-normal text-[15px] mt-[4px]">Full Stack Developer</p>
          </div>
          <div className="flex mt-[50px]">
            <Information icon={Location} text="Tomohon, Indonesia"/>
            <div className="mx-[70px]">
              <Information icon={Email} text="andreydesaylibororing@gmail.comn" />
            </div>
            <Information icon={Call} text="+6282198250439" />
          </div>
          <div className="h-[2px] bg-[#00000012] w-[85%] mt-[50px]"></div>
        </div>
        <Content />
      </div>
      <div className="visible xl:invisible flex flex-col items-center">
        <img className="absolute w-full" src={MobileBg} alt=''/>
        <h1 className="font-roboto font-medium text-[20px] w-[300px] mt-[200px]">Sorry, currently only available for desktop 😊</h1>
      </div>
    </div>
  );
}

export default App;
