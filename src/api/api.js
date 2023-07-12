import axios from 'axios';

const getAxiosInstance = () => {
  const config = {
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `token ${import.meta.env.VITE_API_KEY}`
    },
  };

  const instance = axios.create(config);

  return instance;
};

const axiosInstance = getAxiosInstance();

// api 함수 간소화
export const apiRequest = async (url, method, data) => {
  try {
    const response = await axiosInstance.request({
      url,
      method,
      data,
    });
    return response;
  } catch (error) {
    toast(error.response.data.message);
  }
};