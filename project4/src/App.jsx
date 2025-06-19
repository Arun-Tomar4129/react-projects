import React, { useState } from "react";

const App = () => {
  const [Text,setText]=useState('');
  function speaker(){
    if(Text.trim()==''){
      alert('Enter Text for speach');
      return;
    }
   const speach = new SpeechSynthesisUtterance(Text);
   speach.rate=1;
   speach.pitch=1;
   window.speechSynthesis.speak(speach)
  }

  return (
    <div className="flex flex-col items-center  h-screen  bg-[#00CAFF]   ">
      <div className="h-[50px] bg-blue-500 w-full ">
        <h1 className="text-[20px] font-bold text-center p-2">
          Text convert into Speach
        </h1>
      </div>
     <div className="w-[400px] h-[300px] border-[2px] rounded-[10px] absolute top-[150px]  flex flex-col items-center justify-center bg-[#EBD6FB] shadow-md shadow-gray-500">

        <textarea className="border-[2px] rounded-[10px] h-[50%] w-[80%] left-[10%]  top-[10%] bg-[#FCD8CD] resize-none placeholder:text-center text-center"
        placeholder="Enter Text For Speach...."
        onChange={(e)=>setText(e.target.value)}/>
        <div>
        <button className="border-[2px] w-[90px] rounded-[10px] m-[20px] bg-[#687FE5] " onClick={speaker}>Speak</button>
        <button className="border-[2px] w-[90px] rounded-[10px] m-[20px] bg-[#F7374F] " onClick={() => window.speechSynthesis.cancel()}>stop</button>
        </div>
        
      </div>
    </div>
  );
};

export default App;
