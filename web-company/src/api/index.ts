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
    detail: get('/adminapi/user/detail'), //获取指定商户的所有门店
  },
};
