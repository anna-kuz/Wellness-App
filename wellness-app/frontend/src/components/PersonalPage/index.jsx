import './personal.css'
import { Routes, Route, Link } from "react-router-dom";
import EntrySection from '../EntrySection'
import DetailSection from '../DetailSection'
export default function PersonalPage() {
    return (

        
        <>

        {/* NAVBAR */}
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

        <h1>Personal Page</h1>
        <DetailSection/>
        <EntrySection/>
        </>
    )
}