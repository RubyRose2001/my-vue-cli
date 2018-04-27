const arg = [
];
const install = (Vue) => {
  arg.forEach((plugin) => {
    Vue.prototype[plugin.name] = plugin.method;
  });
};

export default install;
