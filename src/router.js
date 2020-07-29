import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import News from './components/News.vue'
import Biography from './components/Biography.vue'
import Film from './components/Film.vue'
import Music from './components/Music.vue'
import Art from './components/Art.vue'
import Radio from './components/Radio.vue'
import LineStamp from './components/LineStamp.vue'
import Shop from './components/Shop.vue'
import Contact from './components/Contact.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/biography',
            name: 'biography',
            component: Biography
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
        {
            path: '/biography',
            name: 'biography',
            component: Biography
        },
        {
            path: '/film',
            name: 'film',
            component: Film
        },
        {
            path: '/music',
            name: 'music',
            component: Music
        },
        {
            path: '/art',
            name: 'art',
            component: Art
        },
        {
            path: '/radio',
            name: 'radio',
            component: Radio
        },
        {
            path: '/lineStamp',
            name: 'lineStamp',
            component: LineStamp
        },
        {
            path: '/shop',
            name: 'shop',
            component: Shop
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
})