import axios from 'axios';

const instance = axios.create();
instance.defaults.baseURL = `${import.meta.env.VITE_APP_BASE_URL}`;
instance.defaults.withCredentials = true;
instance.defaults.validateStatus = status => {
  return status >= 200 && status < 400;
};

// 请求拦截器：向服务器发送请求之前
instance.interceptors.request.use(config => {
  return config;
});

// 响应拦截器
instance.interceptors.response.use(
  response => {
    return response.data;
  },
  reason => {
    return Promise.reject(reason);
  }
);

export function queryGET(url: string, params = {}, config: any = {}) {
  config.params = params;
  return instance.get(url, config).then((data: any) => {
    if (data.code == 200) {
      return data;
    }
    return Promise.reject(data);
  });
}

export function queryPOST(url: string, data: any, config = {}) {
  return instance.post(url, data, config).then((res: any) => {
    if (res.code == 200) {
      return res;
    }
    return Promise.reject(res);
  });
}
