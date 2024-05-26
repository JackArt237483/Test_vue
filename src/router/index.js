import { createRouter, createWebHistory } from 'vue-router';
import LayoutVueRouter from '../components/LayoutVueRouter';
import ProfileScreen from '../screens/ProfileScreen';
import CatalogScreen from '../screens/CatalogScreen';
import CourseScreen from '../screens/CourseScreen';
import LessonScreen from '../screens/LessonScreen';
import ForumVue from "@/components/ForumVue/ForumVue.vue";
import AssignmentVue from "@/components/AssignmentVue/AssignmentVue.vue";
import RegisterVue from "@/components/RegisterVue/RegisterVue.vue";

const routes = [
    {
        path: '/',
        component: LayoutVueRouter,
        children: [
            { path: '', redirect: '/profile' },
            { path: 'profile', component: ProfileScreen },
            { path: 'catalog', component: CatalogScreen },
            { path: 'course', component: CourseScreen },
            { path: 'lesson', component: LessonScreen },
            { path: 'forum', component: ForumVue },
            { path: 'tasks', component: AssignmentVue },
            { path: 'registration', component: RegisterVue },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
