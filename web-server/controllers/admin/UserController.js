const UserService = require('../../services/admin/UserService');
const JWT = require('../../utils/JWT');

const UserController = {
  login: async (req, res) => {
    const result = await UserService.login(req.body);

    if (result.length === 0) {
      res.send({
        code: 1,
        msg: '用户名密码不匹配'
      });
    } else {
      //生成token
      const token = JWT.generate(
        {
          _id: result[0]._id,
          username: result[0].username
        },
        '1d'
      );
      res.header('Authorization', token);

      res.send({
        code: 0,
        ActionType: 'OK'
      });
    }
  }
};

module.exports = UserController;
