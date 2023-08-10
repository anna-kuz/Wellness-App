import React from "react"
import SleepBarChart from '../SleepBarChart';


export default function SleepPage() {

    const sleepData = [
        {day: "Sunday", hours: 7},
        {day: "Monday", hours: 6},
        {day: "Tuesday", hours: 4},
        {day: "Wednesday", hours: 8},
        {day: "Thursday", hours: 10},
        {day: "Friday", hours: 2},
        {day: "Saturday", hours: 5}
    ]



    return (
        <div>
          <h1>Sleep Hours Bar Chart</h1>
          <SleepBarChart sleepData={sleepData} />
        </div>
      );
    }


    // still need to make it so you can change the hours
    // click on a day and buttons pop up so you can increase/decrease hours