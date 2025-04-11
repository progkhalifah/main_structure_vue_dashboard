import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            user: null,
            token: null,
            isAuthenticated: false
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user
            state.isAuthenticated = !!user
        },
        setToken(state, token) {
            state.token = token
        },
        logout(state) {
            state.user = null
            state.token = null
            state.isAuthenticated = false
        }
    },
    actions: {
        login({ commit }, { user, token }) {
            commit('setUser', user)
            commit('setToken', token)
            // You might want to store the token in localStorage
            localStorage.setItem('token', token)
        },
        logout({ commit }) {
            commit('logout')
            localStorage.removeItem('token')
        },
        initializeAuth({ commit }) {
            const token = localStorage.getItem('token')
            if (token) {
                // In a real app, you might validate the token here
                commit('setToken', token)
                commit('setUser', {}) // Simplified - in real app, fetch user data
            }
        }
    },
    getters: {
        isAuthenticated: state => state.isAuthenticated,
        currentUser: state => state.user
    }
})