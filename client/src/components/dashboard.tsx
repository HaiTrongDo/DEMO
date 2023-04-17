import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Legend, Tooltip, CartesianGrid } from "recharts";
import { socket } from '../socket/socket';



type DataStore = {
    name: string;
    blue: number;
    orange: number;
}


function DashBoard({data, setNewData}:{data:DataStore[], setNewData:any}) {

  return (
    <div className='flex items-center justify-center h-screen'>

      <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="blue" fill="blue" />
          <Bar dataKey="orange" fill="orange" />
        </BarChart>
    </div>
  )

}

export default DashBoard