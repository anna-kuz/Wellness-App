import './personal.css'
import React, {useEffect, useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import EntrySection from '../EntrySection'
import DetailSection from '../DetailSection'


export default function PersonalPage() {
    const [checkList, setCheckList] = useState([]) // hold list of todo items
    const [newTodo, setNewTodo] = useState('') // text for adding new items



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

        <h1>Your Profile</h1>
        <div className="profile-container">
          <div className="detail-container">
            <DetailSection/>
          </div>



        <div className="checklist-container">
  <div className="checklist">
    <h3>Checklist</h3>
    <input
      type="text"
      value={newTodo}
      onChange={handleChangeNewTodo}
      placeholder="Add checklist item"
    />
    <button onClick={handleAddTodo}>Add Item</button>
  </div>

  <ul className="checklist-items">
    {checkList.map((item, index) => (
      <li key={index}>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => handleToggleCheckbox(index)}
        />
        {item.text}
      </li>
    ))}
  </ul>
</div>
</div>
<div className="entry-section">
<EntrySection/>
</div>

        </div>
    );
}