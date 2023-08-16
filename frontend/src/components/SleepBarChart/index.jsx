import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SleepBarChart = ({ sleepData, changeHours }) => {
  const textStyle = {
    fill: "white"
  }

  return (
    <>
    <div className="barchart" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
     <ResponsiveContainer width="90%" height={400}>
    <BarChart width={900} height={400} data={sleepData}>
      <CartesianGrid strokeDasharray="3 3" fill="rgba(255, 255, 255, 0.107)" />
      <XAxis dataKey="day" tick={textStyle} />
      <YAxis tick={textStyle} />
      <Tooltip contentStyle={{ ...textStyle, backgroundColor: 'black' }} />
      <Legend wrapperStyle={textStyle} />
      <Bar dataKey="hours" fill="rgba(55, 255, 255, 0.67)" />
    </BarChart>
    </ResponsiveContainer>
    </div>

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