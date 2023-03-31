import { createRouter, createWebHashHistory } from "vue-router";
import Roles from "@/views/customer/Roles.vue";
import Employees from "@/views/customer/Employees.vue";
import Logs from "@/views/customer/Logs.vue";
import CallLines from "@/views/customer/CallLines.vue";
import Subscription from "@/views/customer/Subscription.vue";
import Facturation from "@/views/customer/Facturation.vue";
import Settings from "@/views/customer/Settings.vue";
import LogOut from "@/views/customer/LogOut.vue";
import DashBoard from "@/views/customer/DashBoard.vue";
import NotFoundView from "@/views/general/NotFoundView.vue"

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        // {
        //     path: "/",
        //     name: "home",
        //     component: HomeView
        // },
        // {
        //     path: "/dashboard",
        //     name: "dashboard",
        //     component: DashBoard,
        // },
        // {
        //     path: "/roles",
        //     name: "roles",
        //     component: Roles
        // },

        {
            path: "/employees",
            name: "employees",
            component: Employees
        },

        {
            path: "/logs",
            name: "logs",
            component: Logs
        },
        {
            path: "/calllines",
            name: "calllines",
            component: CallLines
        },
        {
            path: "/subscription",
            name: "subscription",
            component: Subscription
        },
        {
            path: "/facturation",
            name: "facturation",
            component: Facturation
        },
        {
            path: "/settings",
            name: "settings",
            component: Settings
        },
        {
            path: "/logout",
            name: "logout",
            component: LogOut
        }

        ,
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: NotFoundView
        }
        // ,
        // {
        //     path: "/car/:id",
        //     name: "card",
        //     component: CarView
        // }

    ]
})

export default router