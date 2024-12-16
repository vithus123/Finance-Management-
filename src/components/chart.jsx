import React from 'react';

import{
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianAxis
} from "recharts";

const data=[
    { label: "January", income: 5000, expense: 3000 },
    { label: "February", income: 5200, expense: 3100 },
    { label: "March", income: 4800, expense: 2900 },
    { label: "April", income: 5300, expense: 3400 },
    { label: "May", income: 5500, expense: 3200 },
    { label: "June", income: 5100, expense: 3000 },
    { label: "July", income: 5600, expense: 3500 },
    { label: "August", income: 5400, expense: 3300 },
    { label: "September", income: 5200, expense: 3100 },
    { label: "October", income: 5700, expense: 3400 },
    { label: "November", income: 5800, expense: 3600 },
    { label: "December", income: 6000, expense: 3800 },
  ];
  

const Chart = () => {
  return (
    <div className='W-full md:w-2/3'>
      <Title title="Transaction Activity"/>

      <ResponsiveContainer
      width={"100%"} 
      height={500}
      className='mt-5'>

        <LineChart width={500} height={300}  data={data}>
          <CartesianGrid strokeDasharray='3 3'  />
          <YAxis/>
          <XAxis/>
          <Legend/>
          <Line type='monotone' dataKey={"income"} stroke='8884d8'/>
          <Line type='monotone' dataKey={"expense"} stroke='82ca9d'/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart;