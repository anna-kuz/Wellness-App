import React, { useState } from "react"
import SleepBarChart from '../SleepBarChart';
import { Routes, Route, Link } from "react-router-dom";


export default function SleepPage() {

    const [sleepData, setSleepData] = useState([
        {day: "Sunday", hours: 7},
        {day: "Monday", hours: 6},
        {day: "Tuesday", hours: 4},
        {day: "Wednesday", hours: 8},
        {day: "Thursday", hours: 10},
        {day: "Friday", hours: 2},
        {day: "Saturday", hours: 5}
    ])

    const handleChangeHours = (day, newHours) => {
      const updatedSleepData = sleepData.map(entry => // create a new array by iterating through the sleepData array
          entry.day === day ? { ...entry, hours: newHours } : entry // update hours with new value for corresponding day
      );
      setSleepData(updatedSleepData);
  }

    return (
        <>

<nav className="bg-transparent p-4 fixed w-full z-50 flex justify-center items-center">
    <div className="max-w-7xl mx-auto">
        <div className="flex space-x-6">
            <Link to="/" className="link text-white">Home</Link>
            <Link to="/personal" className="link text-white">Personal</Link>
            <Link to="/sleep" className="link text-white">Sleep</Link>
            <Link to="/water" className="link text-white">Water</Link>
            <Link to="/resources" className="link text-white">Resources</Link>
        </div>
    </div>
</nav>
          <h1>Sleep Hours Bar Chart</h1>
          <SleepBarChart sleepData={sleepData} changeHours={handleChangeHours} />
        </>
      );
    }

