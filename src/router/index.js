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
import HomeView from "@/views/general/HomeView.vue";
import Role from "@/components/Role.vue";
import myProfile from "@/views/customer/myProfile.vue";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: DashBoard
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: DashBoard
        },
        {
            path: "/roles",
            name: "Roles",
            component: Role
        },

        {
            path: "/employees",
            name: "Employees",
            component: Employees
        },

        {
            path: "/logs",
            name: "Logs",
            component: Logs
        },
        {
            path: "/calllines",
            name: "Call Lines",
            component: CallLines
        },
        {
            path: "/subscription",
            name: "Subscription",
            component: Subscription
        },
        {
            path: "/facturation",
            name: "Facturation",
            component: Facturation
        },
        {
            path: "/settings",
            name: "Settings",
            component: Settings
        },
        {
            path: "/logout",
            name: "Log out",
            component: LogOut
        },{
            path: "/myProfile",
            name: "My Profile",
            component: myProfile
        },

        // ,
        // {
        //     path: "/:pathMatch(.*)*",
        //     name: "NotFound",
        //     component: NotFoundView
        // }
        // ,
        // {
        //     path: "/car/:id",
        //     name: "card",
        //     component: CarView
        // }

    ]
})

export default router