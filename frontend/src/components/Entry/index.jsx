import { useState } from "react";
import { updateEntry, deleteEntry } from "../../../utils/backend";

export default function Entry({ data, refreshEntries }) {
    const [showEditForm, setShowEditForm] = useState(false);
    const [editFormData, setEditFormData] = useState({
        subject: data.subject,
        entry: data.entry
    });

// const [speechText, setSpeechText] = useState("")

// const voiceRecognition = new window.SpeechRecognition()
// voiceRecognition.continuous = true;

// // EVENT LISTENERS FOR SPEECH TO TEXT

// const startSpeechRecognition = () => {
//     voiceRecognition.start() // start voice recognition
// }

// const stopSpeechRecognition = () => {
//     voiceRecognition.stop() // stop voice recognition
// }

// voiceRecognition.onresult = (event) => {
//     let transcript = "";
//     for (let i = 0; i < event.results.length; i++) {
//       transcript += event.results[i][0].transcript + " ";
//     }
//     setSpeechText(transcript);
//   };

//     // FORM FIELDS UPDATES AS USER TYPES
//     function handleInputChange(event) {
//         setEditFormData({
//             ...editFormData,
//             [event.target.name]: event.target.value
//         });
//     }

    // FORM SUBMISSION
    function handleSubmit(event) {
        // page wont reload
        event.preventDefault();
        // close form
        setShowEditForm(false);
        //update entry eith speech text
        setEditFormData({
            ...editFormData,
            entry: speechText // Update the entry with speechText
        });
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
        <div className="entry-buttons">
            <button onClick={() => setShowEditForm(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            {/* <button onClick={startSpeechRecognition}>Start Speech</button> */}
            {/* <button onClick={stopSpeechRecognition}>Stop Speech</button> */}
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
                <textarea
                    id="speechText"
                    value={speechText}
                    onChange={(event) => setSpeechText(event.target.value)}
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
