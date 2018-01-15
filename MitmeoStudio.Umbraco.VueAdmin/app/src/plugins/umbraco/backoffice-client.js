import axios from 'axios';
import umbraco from '@/umbraco.json';

const backOfficeClient = axios.create({
  baseURL: `${umbraco.URL}/umbraco/backoffice/`.replace(/\/\/+/g, '/'),
  // timeout: 1000,
  headers: {
    'X-UMB-XSRF-TOKEN': umbraco['UMB-XSRF-TOKEN']
  }
});

// Custom response formatter
backOfficeClient.interceptors.response.use(
  res => {
    // Umbraco internal back office APIs return some weird JSON, we need to format it

    // For e.g:

    // )]}', <-- this is a weird block at the start of the response
    // {"name":"1 column layout",

    const data = (res.data || '').split('\n');
    if (data.length === 2) return JSON.parse(data[1]);
    return null;
  },
  err => Promise.reject(err)
);

// Custom request formatter
backOfficeClient.interceptors.request.use(
  req => {
    // Send cookies too
    req.withCredentials = true;
    return req;
  },
  err => Promise.reject(err)
);

export default backOfficeClient;
