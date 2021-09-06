// import { createRouter, createWebHistory } from 'vue-router'
import Services_section from '../Services_section/Services_section.vue'
import About_me_section from '../About_me_section/About_me_section.vue'
import Reviews_section from '../Reviews_section/Reviews_section.vue'
import Articles_section from '../Articles_section/Articles_section.vue'
import Contacts_section from '../Contacts_section/Contacts_section.vue'

const routes = [
    {
        path: '/services',
        name: 'Services_section',
        component: Services_section
    },
    {
        path:'/about-me',
        name: 'About_me_section',
        component: About_me_section,
    },
    {
        path:'/reviews',
        name: 'Reviews_section',
        component: Reviews_section,
    },
    {
        path:'/articles',
        name: 'Articles_section',
        component: Articles_section,
    },
    {
        path:'/contacts',
        name: 'Contacts_section',
        component: Contacts_section,
    },

]


export default routes
