import './personal.css'
import { Routes, Route, Link } from "react-router-dom";
import EntrySection from '../EntrySection'
import DetailSection from '../DetailSection'


export default function PersonalPage() {
    // const [checkList, setChecklist] = useState([]) // hold list of todo items
    // const [newTodo, setNewTodo] = useState = ('') // text for adding new items

    // const handleAddTodo = () => { // add item
    //     if (newTodo)

    return (
        <>

        {/* NAVBAR */}
    <nav className="bg-transparent p-4 fixed w-full z-50 flex justify-center items-center">
    <div className="max-w-7xl mx-auto">
        <div className="flex space-x-6">
            <Link to="/" className="link text-white">Home</Link>
            <Link to="/personal" className="link text-white">Profile</Link>
            <Link to="/sleep" className="link text-white">Sleep</Link>
            <Link to="/water" className="link text-white">Water</Link>
            <Link to="/resources" className="link text-white">Resources</Link>
        </div>
    </div>
</nav>

        <h1>Profile</h1>
        <DetailSection/>
        <EntrySection/>
        </>
    )
}