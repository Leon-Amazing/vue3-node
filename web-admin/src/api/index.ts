import { queryGET, queryPOST } from './config';

function post(url: string) {
  return function (data: any, config = {}) {
    return queryPOST(url, data, config);
  };
}

function get(url: string) {
  return function (params: any, config = {}) {
    return queryGET(url, params, config);
  };
}

export default {
  user: {
    login: post('/adminapi/user/login'), //门店详情
    upload: post('/adminapi/user/upload') // 更新个人信息
  }
};
