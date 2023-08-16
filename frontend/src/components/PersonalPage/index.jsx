import './personal.css'
import React, {useEffect, useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import EntrySection from '../EntrySection'
import DetailSection from '../DetailSection'


export default function PersonalPage() {
    const [checkList, setCheckList] = useState([]) // hold list of todo items
    const [newTodo, setNewTodo] = useState('') // text for adding new items





    // useEffect(() => {
    //     const storedCheckList = JSON.parse(localStorage.getItem('checkList')) || [] // retrieves data stored in browsers localStorage. data is stored 
    //      setCheckList(storedCheckList)
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem('checkList', JSON.stringify(checkList))
    // }, [checkList])

    const handleChangeNewTodo = (event) => {
        setNewTodo(event.target.value)
    }

    const handleAddTodo = () => { // add item
        if (newTodo.trim() !== '') { 
            setCheckList([...checkList, {text: newTodo, checked: false}])
            setNewTodo('')

        }
    }
    // const handleChangeNewTodo = (e) => {
    //     setNewTodo(e.target.value)
    // }

    const handleToggleCheckbox = (index) => {
    const updatedCheckList = [...checkList]
        updatedCheckList[index].checked = !updatedCheckList[index].checked
        setCheckList(updatedCheckList)
    }

    return (
<div className='personal-bg'>

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

        <div className="checklist">
                <input
                    type='text'
                    value={newTodo}
                    onChange={handleChangeNewTodo}
                    placeholder='Add checklist item'
                />

                <button onClick={handleAddTodo}>Add Item</button>
            </div>

            <ul>
                {checkList.map((item, index) => (
                    <li key={index}>
                        <input
                            type='checkbox'
                            checked={item.checked}
                            onChange={() => handleToggleCheckbox(index)}
                        />
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}