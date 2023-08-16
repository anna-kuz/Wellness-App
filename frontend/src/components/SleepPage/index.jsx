import React, { useState, useEffect } from "react"
import SleepBarChart from '../SleepBarChart';
import { Routes, Route, Link } from "react-router-dom";
import "./sleep.css"


export default function SleepPage() {
    useEffect(() => {
        const storedSleepData = localStorage.getItem('sleepData');
        if (storedSleepData) {
          setSleepData(JSON.parse(storedSleepData));
        }
      }, []);

    const [sleepData, setSleepData] = useState([
        {day: "Sunday", hours: 0},
        {day: "Monday", hours: 0 },
        {day: "Tuesday", hours: 0},
        {day: "Wednesday", hours: 0},
        {day: "Thursday", hours: 0 },
        {day: "Friday", hours: 0},
        {day: "Saturday", hours: 0}
    ])

    const handleChangeHours = (day, newHours) => {
      const updatedSleepData = sleepData.map(entry => // create a new array by iterating through the sleepData array
          entry.day === day ? { ...entry, hours: newHours } : entry // update hours with new value for corresponding day
      );
      setSleepData(updatedSleepData);

      localStorage.setItem('sleepData', JSON.stringify(updatedSleepData));

  }

  

    return (
        <div className="s-bg">

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
          <h1>Track Your Sleep</h1>
          <SleepBarChart sleepData={sleepData} changeHours={handleChangeHours} />
        </div>
      );
    }

