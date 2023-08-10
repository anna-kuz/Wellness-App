import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../HomePage";
import WaterPage from "../WaterPage"
import PersonalPage from "../PersonalPage"
import ResourcesPage from "../ResourcesPage"
import SleepPage from "../SleepPage"
// import './index.css'

export default function App() {


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



    {/* ROUTES */}
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/personal" element={<PersonalPage/>} />
        <Route path="/resources" element={<ResourcesPage/>} />
        <Route path="/sleep" element={<SleepPage/>} />
        <Route path="/water" element={<WaterPage/>} />
    </Routes>


    </>
)
}