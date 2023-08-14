import axios from 'axios';


// DETAILS

export async function getDetails() {
    const { data } = await axios.get('/api/details');
    return data;
}

export async function createDetail(detail) {
    const { data } = await axios.post('/api/details', detail);
    return data;
}

export async function editDetail(id) {
    const { data } = await axios.get(`/api/details/${id}/edit`);
    return data;
}

export async function updateDetail(detail, id) {
    const { data } = await axios.put(`/api/details/${id}`, detail);
    return data;
}

export async function deleteDetail(id) {
    const { data } = await axios.delete(`/api/details/${id}`);
    return data;
}



// ENTRIES

export async function getEntries() {
    const { data } = await axios.get('/api/entries');
    return data;
}

export async function createEntry(entry) {
    const { data } = await axios.post('/api/entries', entry);
    return data;
}

export async function editEntry(id) {
    const { data } = await axios.get(`/api/entries/${id}/edit`);
    return data;
}

export async function updateEntry(entry, id) {
    const { data } = await axios.put(`/api/entries/${id}`, entry);
    return data;
}

export async function deleteEntry(id) {
    const { data } = await axios.delete(`/api/entries/${id}`);
    return data;
}