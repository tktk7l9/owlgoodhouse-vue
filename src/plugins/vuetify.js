import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free-brands'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                youtube: '#DA1725',
                instagram: '#D93177',
                twitter: '#1DA1F2',
                email: 'blue-grey darken-2'
            },
            dark: {
                youtube: '#DA1725',
                instagram: '#D93177',
                twitter: '#1DA1F2',
                email: 'blue-grey darken-2'
            },
        }
    }
})