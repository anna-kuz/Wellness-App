import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SleepBarChart = ({ sleepData, changeHours }) => {
  return (
    <>
    <BarChart width={900} height={400} data={sleepData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" /> 
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="hours" fill="rgb(97, 150, 255, 0.7)" />
    </BarChart>


    <div>
        {sleepData.map(entry => ( // iterate through sleepData entries, create input for each day
          <div key={entry.day}>
            {entry.day}:
            <input
              type="number"
              value={entry.hours}
              onChange={event => changeHours(entry.day, parseInt(event.target.value))} // parse a string and convert it into an integer - sleep hours into an actual integer - update sleep hours for corresponding day
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default SleepBarChart;


//used https://recharts.org/en-US/guide/getting-started