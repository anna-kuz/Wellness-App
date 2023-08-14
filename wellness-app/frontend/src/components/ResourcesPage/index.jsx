import { Routes, Route, Link } from "react-router-dom";

export default function ResourcesPage() {
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


        <h1>Resources</h1>
        <h2>Sleep tips: 6 steps to better sleep</h2>
        <p>You're not doomed to toss and turn every night. Consider simple tips for better sleep, from setting a sleep schedule to including physical activity in your daily routine.</p>
        <a href="https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/sleep/art-20048379">https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/sleep/art-20048379</a>
        </>
    )
}