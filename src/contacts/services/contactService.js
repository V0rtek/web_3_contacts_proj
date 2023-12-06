import axios from 'axios';

/**
 * .
 */
export async function getAllContacts() {
  const res = await axios.get('contacts');
  return res.data;
}

/**
 * .
 * @param {Number} id
 */
export async function getContactById(id) {
  const res = await axios.get(`contacts/${id}`);
  return res.data[0]; // normalement pas besoin de [0]
}

/**
 *
 * @param {*} data
 */
export async function updateContact(data) {
  const res = await axios.put('contacts', data);
  return res.data;
}

/**
 *
 * @param {*} data
 */
export async function insertContact(data) {
  const res = await axios.post('contacts', data);
  return res.data;
}
