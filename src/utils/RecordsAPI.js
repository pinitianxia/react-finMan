import axios from 'axios';

const api = 'https://5c4a5d6b94e8a70014b333da.mockapi.io/api/v1/records';

export const getAll = () => axios.get(api);

export const create = body => axios.post(api, body);

export const update = (id, body) => axios.put(api + '/' + id, body);

export const remove = id => axios.delete(api + '/' + id);
