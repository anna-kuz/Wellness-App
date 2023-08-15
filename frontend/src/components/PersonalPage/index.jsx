import './personal.css'
import React, {useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import EntrySection from '../EntrySection'
import DetailSection from '../DetailSection'
import { Input, Button, Checkbox, List } from 'semantic-ui-react';


export default function PersonalPage() {
    const [checkList, setChecklist] = useState([]) // hold list of todo items
    const [newTodo, setNewTodo] = useState('') // text for adding new items

    const handleChangeNewTodo = (event) => {
        setNewTodo(event.target.value)
    }

    const handleAddTodo = () => { // add item
        if (newTodo.trim() !== '') { 
            setChecklist([...checkList, {text: newTodo, checked: false}])
            setNewTodo('')

        }
    }
    // const handleChangeNewTodo = (e) => {
    //     setNewTodo(e.target.value)
    // }

    const handleToggleCheckbox = (index) => {
    const updatedCheckList = [...checkList]
        updatedCheckList[index].checked = !updatedCheckList[index].checked
        setChecklist(updatedCheckList)
    }

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

        <div className="ui segment">
                <Input
                    fluid
                    type="text"
                    value={newTodo}
                    onChange={handleChangeNewTodo}
                    placeholder="Add checklist item"
                />
                <Button
                    primary
                    fluid
                    onClick={handleAddTodo}
                >
                    Add Item
                </Button>
            </div>

            <List divided relaxed className="ui list">
                {checkList.map((item, index) => (
                    <List.Item key={index} className="item">
                        <Checkbox
                            checked={item.checked}
                            onChange={() => handleToggleCheckbox(index)}
                        />
                        <List.Content>
                            <List.Header>{item.text}</List.Header>
                        </List.Content>
                    </List.Item>
                ))}
            </List>
        </>
    );
}