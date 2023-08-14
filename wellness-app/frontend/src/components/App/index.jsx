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