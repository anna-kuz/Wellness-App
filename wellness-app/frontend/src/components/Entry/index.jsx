import { useState } from "react";
import { updateEntry, deleteEntry } from "../../../utils/backend";

export default function Entry({ data, refreshEntries }) {
    const [showEditForm, setShowEditForm] = useState(false);
    const [editFormData, setEditFormData] = useState({
        subject: data.subject,
        entry: data.entry
    });

    // FORM FIELDS UPDATES AS USER TYPES
    function handleInputChange(event) {
        setEditFormData({
            ...editFormData,
            [event.target.name]: event.target.value
        });
    }

    // FORM SUBMISSION
    function handleSubmit(event) {
        // page wont reload
        event.preventDefault();
        // close form
        setShowEditForm(false);
        // backend updates entry
        updateEntry(editFormData, data._id)
            .then(() => refreshEntries());
    }

    // DELETE ENTRY
    function handleDelete() {
        deleteEntry(data._id)
            .then(() => refreshEntries());
    }

    let entryElement = (
        <div>
            <h2>{data.subject}</h2>
            <p>{data.entry}</p>
            <div>
                <button onClick={() => setShowEditForm(true)}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
                
            </div>
        </div>
    );

    if (showEditForm) {
        entryElement = (
            <form onSubmit={handleSubmit}>
                <input
                    name="subject"
                    placeholder="Subject"
                    value={editFormData.subject}
                    onChange={handleInputChange}
                />
                <br />
                <textarea
                    name="entry"
                    placeholder="Entry"
                    value={editFormData.entry}
                    onChange={handleInputChange}
                />
                <div>
                    <button onClick={() => setShowEditForm(false)}>Close</button>
                    <button type="submit">Update</button>
                </div>
            </form>
        );
    }

    return entryElement;
}
