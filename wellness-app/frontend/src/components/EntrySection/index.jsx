import React, { useState, useEffect } from "react";
import { createEntry, getEntries } from "../../../utils/backend";
import Entry from "../Entry";
import "./entry.css"

export default function EntrySection() {
    const [entries, setEntries] = useState([]);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [createFormData, setCreateFormData] = useState({
        subject: "",
        entry: ""
    });

    useEffect(() => {
        getEntries()
            .then(entries => setEntries(entries));
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

    function refreshEntries() {
        getEntries()
            .then(newEntryData => setEntries(newEntryData));
    }

    function handleSubmit(event) {
        event.preventDefault();
        setCreateFormData({
            subject: "",
            entry: ""
        });
        setShowCreateForm(false);
        createEntry(createFormData)
            .then(() => refreshEntries());
    }

    let entryElements = [
        <p key="0">No journal entries yet.</p>
    ];
    
    if (entries.length > 0) {
        entryElements = entries.map(entry => (
            <Entry
                key={entry._id}
                data={entry}
                refreshEntries={refreshEntries}
            />
        ));
    }

    let btnText = "Create";
    if (showCreateForm) {
        btnText = "Close";
    }

    return (
        <div className="entry-section">
            <h3>Journal Entries</h3>
                <div className="button-container">
                    <button onClick={toggleCreateForm}>
                        {btnText}
                    </button>
                </div>
            {
                showCreateForm && (
                    <form onSubmit={handleSubmit}>
                        <input
                            name="subject"
                            placeholder="Subject"
                            value={createFormData.subject}
                            onChange={handleInputChange}
                        />
                        <textarea
                            name="entry"
                            placeholder="Entry"
                            value={createFormData.entry}
                            onChange={handleInputChange}
                        />
                        <button type="submit">Post</button>
                    </form>
                )
            }
            {entryElements}
        </div>
    );
}
