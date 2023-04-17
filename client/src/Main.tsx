import { Routes, Route } from 'react-router-dom';   
import Client from './components/client';
import DashBoard from './components/dashboard';
import { useEffect, useState } from 'react';
import { socket } from './socket/socket';
   


const entryData = [{
  name: 'Color',
  blue: 0,
  orange: 0,
}]

   function Main() {
  let [data,setData] = useState(entryData)

  
  useEffect(()=>{
    socket.on('increase-blue',(data:{data:number}) =>{
      console.log(`increase-blue`, data)
      setData((prev:any)=> [{...prev[0],blue: prev[0].blue + 1}])
    })
    socket.on('increase-orange',(data:{data:number}) =>{
      console.log(`increase-orange`, data)
      setData((prev:any)=> [{...prev[0],orange: prev[0].orange + 1}])
    })

    return ()=>{
      socket.off('increase-blue')
      socket.off('increase-orange')
    }
  },[])
    return (         
    <Routes>
      <Route path='/client' element={<Client/>} />
      <Route path='/dashboard' element={<DashBoard data={data} setNewData={setData} />} />
    </Routes>
  );
   }

   export default Main;