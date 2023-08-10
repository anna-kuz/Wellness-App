import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SleepBarChart = ({ sleepData }) => {
  return (
    <BarChart width={900} height={400} data={sleepData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" /> 
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="hours" fill="rgb(97, 150, 255, 0.7)" />
    </BarChart>
  );
}

export default SleepBarChart;


//used https://recharts.org/en-US/guide/getting-started