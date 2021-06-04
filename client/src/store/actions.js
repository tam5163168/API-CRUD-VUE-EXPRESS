import api from "../plugins/axios"

export default {
    async login({ commit }, { email, password }) {
        try {
            const response = await api.post("user/login", {
                email, password
            })
            const { status, userInfo, token } = response.data
            if (!status) return { ok: true, data: response.data }
            commit('updateAccessToken', token)
            commit('updateUserInfo', userInfo)
            return { ok: true, data: response.data }
        } catch (error) {
            return { ok: false, message: 'login' + error }
        }
    },

    // async register(_, payload) {
    //     try {
    //         const response = await api.post('user/register', payload)
    //         const { status } = response.data
    //         if (!status) return { ok: true, data: response.data }
    //         return { ok: true, data: response.data }
    //     } catch (error) {
    //         return { ok: false, message: 'register' + error }

    //     }
    // },
    async logout({ commit }) {
        try {
            commit("updateAccessToken", "");
            commit("updateUserInfo", {});
            return { ok: true, data: {} }
        } catch (error) {
            return { ok: false, error };
        }
    },
    async deleteUser(_, id) {
        try {
            const response = await api.delete(`user/${id}`)
            return { ok: true, data: response.data }
        } catch (error) {
            console.log(error);
        }
    },
    async createUser(_, dataUser) {
        try {
            console.log(dataUser);
            const response = await api.post(`user/create`, dataUser)
            return { ok: true, data: response.data }
        } catch (error) {
            return { ok: false, error: error }
        }
    },
    async updateUserAPI(_, payload) {
        try {
            console.log(payload);
            const response = await api.put(`user/${payload.id}`, {
                fullName: payload.fullName,
                email: payload.email,
                phone: payload.phone,
                active: payload.active,
                role: payload.role,
                avatar: payload.avatar,
            })
            return { ok: true, data: response.data }
        } catch (error) {
            return { ok: false, error: error }
        }
    }
}