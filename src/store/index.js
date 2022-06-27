import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		keyword: '',
		snackbar_state: false,
	},
	getters: {
		GET_KEYWORD(state) {
			return state.keyword;
		},
		GET_KEYWORD_IS_BLANK(state) {
			return state.keyword.length <= 0;
		},
	},
	mutations: {
		SET_KEYWORD(state, payload) {
			state.keyword = payload.keyword;
		},
		SET_SNACKBAR(state, payload) {
			state.snackbar = payload.snackbar;
		},
	},
	actions: {},
	modules: {},
});
