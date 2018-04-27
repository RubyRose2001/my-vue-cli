import loadScript from './loadScript';

const arg = [
  {
    name: '$loadScript',
    method: loadScript,
  },
];
const install = (Vue) => {
  arg.forEach((plugin) => {
    Vue.prototype[plugin.name] = plugin.method;
  });
};

export default install;
