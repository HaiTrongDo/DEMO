
import { useEffect } from 'react';
import { socket } from '../socket/socket';

function Client() {

  function onBlueEvent(colorName:string):void{
    console.log(`sending event ` + colorName)
    socket.emit("increase",{color:colorName})
  }

  return (
    <div>
    <div className='flex items-center justify-center h-screen space-x-5'>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full " onClick={()=>onBlueEvent("blue")}>
        Increase Blue
      </button>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>onBlueEvent("orange")}>
        Increase Orange
      </button>
      </div>
    </div>
  )
}

export default Client