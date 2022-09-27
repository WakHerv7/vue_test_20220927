import {createRouter, createWebHistory} from 'vue-router';
import EmailIndex from '@/components/EmailIndex';

const routes = [
  {
    path: '/',
    name: 'EmailIndex',
    component: EmailIndex
}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router