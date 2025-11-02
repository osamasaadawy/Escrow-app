const BASE_URL = "http://<YOUR_PC_LAN_IP>:3000"; // <-- replace with your backend IP or use emulator http://10.0.2.2:3000 for android emulator

async function request(path, method='GET', body=null, token=null) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(BASE_URL + path, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null
  });
  return res.json();
}

export default {
  login: (email, password) => request('/auth/login', 'POST', { email, password }),
  register: (name, email, password) => request('/auth/register', 'POST', { name, email, password }),
  getProfile: (token) => request('/auth/me', 'GET', null, token),
  listTransactions: (token) => request('/transactions', 'GET', null, token)
};
