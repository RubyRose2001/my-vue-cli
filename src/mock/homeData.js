import Mock from 'mockjs';

const homeString = (req) => {
  console.log(req, 1);
  const data = '1234';
  const result = {
    code: 0,
    data,
    msg: '',
  };
  return result;
};

Mock.mock('/home', 'get', homeString);
