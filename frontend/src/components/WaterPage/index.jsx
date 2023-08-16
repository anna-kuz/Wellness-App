import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./water.css"

export default function WaterPage() {
    const [goal, setGoal] = useState(() => parseInt(localStorage.getItem("goal")) || 64)// initial value for water intake goal is set to 64
    const [intake, setIntake] = useState(parseInt(localStorage.getItem("intake")) || 0) // current intake (fl oz)

    
    useEffect(() => {
        localStorage.setItem("goal", goal.toString());
        localStorage.setItem("intake", intake.toString());
    }, [goal, intake]);


const handleChangeGoal = (event) => { // change the goal for water intake
    const newGoal = parseInt(event.target.value) // convert the input's value to an integer
    setGoal(newGoal) // update the goal
}

const handleAddWater = () => {
    const drink = intake + 8; // adds 8 (fl oz) to your current intake
    // if (drink <= goal) { // once you've hit your goal you can't add anymore
        setIntake(drink) //update intake
    // }
}

const handleDecrementWater = () => {
    const empty = intake - 8;
        setIntake(empty)
}



    return (
<div className="w-bg">

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

    <div className="water">
        <div className="goal">
            <label htmlFor="goal">Goal: </label>
                <input 
                    type="number"
                    value={goal}
                    onChange={handleChangeGoal}   
                    placeholder="fluid ounces" 
                />
        </div>

        <div>

        {intake >= goal ? (
            <p>Congratulations! You've reached your goal of {goal} fl oz.</p>
                ) : (
            <p>Current Intake: {intake} fl oz.</p>
         )}
            <div className="water-btn-container">
                <button onClick={handleAddWater}>+ (8 fl oz)</button>
                <button onClick={handleDecrementWater}>- (8 fl oz)</button>
            </div>

        </div>
    </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
                    <div className="cup"></div>
                </div>

    
</div>
    )
}


// User will be able to track their water intake. User will enter their daily goal for drinking water, which can be edited. Every time a glass of water (8 fl oz) has been drank, the user can fill a glass and that will be added to their water intake for the day.