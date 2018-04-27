import * as types from './types';

const mutations = {
  [types.NUMBER](state, number) {
    state.number = number;
  },
};

export default mutations;
