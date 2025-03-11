import { createRouter, createWebHistory } from 'vue-router'
import BasicLayout from '@/layout/BasicLayout.vue'
import TxContent from '@/components/TxContent.vue'

const routes = [
    {
        path: '/',
        component: BasicLayout,
        children: [
            {
                path: '', // 空路径表示默认子路由
                component: TxContent
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
