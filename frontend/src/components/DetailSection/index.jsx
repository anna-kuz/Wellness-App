import React, { useState, useEffect } from "react";
import { createDetail, getDetails } from "../../../utils/backend";
import Detail from "../Detail";
import "./detail.css"

export default function DetailSection() {
    const [details, setDetails] = useState([]);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [createFormData, setCreateFormData] = useState({
        name: "",
        age: Number,
        gender: "",
        height: "",
        weight: Number,
        created: new Date(),
    });

    useEffect(() => {
        getDetails()
            .then(details => setDetails(details));
    }, []); 

    function handleInputChange(event) {
        setCreateFormData({
            ...createFormData,
            [event.target.name]: event.target.value
        });
    }

    function toggleCreateForm() {
        setShowCreateForm(!showCreateForm);
    }

    function refreshDetails() {
        getDetails()
            .then(newDetailData => setDetails(newDetailData));
    }

    function handleSubmit(event) {
        event.preventDefault();
        setCreateFormData({
            name: '',
            age: Number,
            gender: '',
            height: '',
            weight: Number
        })
        setShowCreateForm(false);
        createDetail(createFormData)
            .then(() => refreshDetails());
    }

    let detailElements = [
        <p key="0">No details available yet.</p>
    ];
    
    if (details.length > 0) {
        detailElements = details.map(detail => (
            <Detail
                key={detail._id}
                data={detail}
                refreshDetails={refreshDetails}
            />
        ));
    }

    let btnText = "Create";
    if (showCreateForm) {
        btnText = "Close";
    }

    return (
        <div className="detail-section">
            <h3>Your Profile</h3>
                <div className="button-container">
                    <button onClick={toggleCreateForm}>
                        {btnText}
                    </button>
                </div>
            {
                showCreateForm && (
                    <form onSubmit={handleSubmit}>
                        <input
                            name="name"
                            placeholder="Name"
                            value={createFormData.name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="age"
                            placeholder="Age"
                            value={createFormData.age}
                            onChange={handleInputChange}
                        />
                        <input
                            name="gender"
                            placeholder="Gender"
                            value={createFormData.gender}
                            onChange={handleInputChange}
                        />
                        <input
                            name="height"
                            placeholder="Height"
                            value={createFormData.height}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="weight"
                            placeholder="Weight"
                            value={createFormData.weight}
                            onChange={handleInputChange}
                        />
                        <button type="submit">Create</button>
                    </form>
                )
            }
            {detailElements}
        </div>
    );
}
