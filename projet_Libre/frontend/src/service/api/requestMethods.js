import axios from "axios";

const BASE_URL = "http://localhost:8080/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjRlMTk3N2ZlMzg1M2U3M2I4ZTY0OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Mzc3NzcyMSwiZXhwIjoxNjY0MDM2OTIxfQ.oH-es1itS6d2fWvLXN9L6neGC88SEDJhFSwRhZfn29Y";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
});