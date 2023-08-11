import { useState } from "react";
import { updateDetail, deleteDetail } from "../../../utils/backend";

export default function Detail({ data, refreshDetails }) {
    const [showEditForm, setShowEditForm] = useState(false);
    const [editFormData, setEditFormData] = useState({
        name: data.name,
        age: data.age,
        gender: data.gender,
        height: data.height,
        weight: data.weight
    });

    function handleInputChange(event) {
        setEditFormData({
            ...editFormData,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        setShowEditForm(false);
        updateDetail(editFormData, data._id)
            .then(() => refreshDetails());
    }

    function handleDelete() {
        deleteDetail(data._id)
            .then(() => refreshDetails());
    }

    let detailElement = (
        <div>
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
            <p>Gender: {data.gender}</p>
            <p>Height: {data.height}</p>
            <p>Weight: {data.weight}</p>
            <div>
                <button onClick={() => setShowEditForm(true)}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );

    if (showEditForm) {
        detailElement = (
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    placeholder="Name"
                    value={editFormData.name}
                    onChange={handleInputChange}
                />
                <br />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={editFormData.age}
                    onChange={handleInputChange}
                />
                <br />
                <input
                    name="gender"
                    placeholder="Gender"
                    value={editFormData.gender}
                    onChange={handleInputChange}
                />
                <br />
                <input
                    name="height"
                    placeholder="Height"
                    value={editFormData.height}
                    onChange={handleInputChange}
                />
                <br />
                <input
                    type="number"
                    name="weight"
                    placeholder="Weight"
                    value={editFormData.weight}
                    onChange={handleInputChange}
                />
                <br />
                <div>
                    <button onClick={() => setShowEditForm(false)}>Close</button>
                    <button type="submit">Update</button>
                </div>
            </form>
        );
    }

    return detailElement;
}