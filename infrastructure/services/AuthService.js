// TODO Implement real auth service
export const AuthService = {

    login: async function(http, { email, password }) {
        if (email == 'test@umamicottons.com' && password == '1234') {
            return {
                email: 'test@umamicottons.com',
                name: 'Test',
                token: 'token'
            }
        }
        return {
            email: '',
            name: '',
            token: ''
        }
    },

    profile: async function(http, { token }) {
        return {
            email: 'test@umamicottons.com',
            name: 'Test',
            token: 'token',
            rol: 'admin'
        }
    },

    logout: async function(http, { token }) {
        return { status: 200 }
    }

}