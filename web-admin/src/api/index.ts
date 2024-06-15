import { queryPOST } from './config';

function post(url: string) {
  return function (data: any, config = {}) {
    return queryPOST(url, data, config);
  };
}

export default {
  user: {
    login: post('/adminapi/user/login'), //门店详情
    upload: post('/adminapi/user/upload'), // 更新个人信息
    add: post('/adminapi/user/add'), // 添加用户
    list: post('/adminapi/user/list'), // 用户列表
    delete: post('/adminapi/user/delete'), // 删除用户
    update: post('/adminapi/user/update') // 修改用户
  }
};
