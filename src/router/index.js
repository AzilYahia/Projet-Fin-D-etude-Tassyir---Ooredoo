import { createRouter, createWebHashHistory } from "vue-router";
import Roles from "@/views/customer/Roles/Roles.vue";
import Employees from "@/views/customer/Employees/Employees.vue";
import Logs from "@/views/customer/Logs/Logs.vue";
import CallLines from "@/views/customer/CallLines/CallLines.vue";
import Subscription from "@/views/customer/Subscription/Subscription.vue";
import Facturation from "@/views/customer/Facturation/Facturation.vue";
import Settings from "@/views/customer/Settings/Settings.vue";
import LogOut from "@/views/auth/LogOut.vue";
import DashBoard from "@/views/customer/DashBoard/DashBoard.vue";
import NotFoundView from "@/views/general/NotFoundView.vue"
import HomeView from "@/views/general/HomeView.vue";
import Role from "@/views/customer/Roles/Role.vue";
import myProfile from "@/views/customer/myProfile/myProfile.vue";
import Login from "@/views/auth/Login.vue";
import Messages from "@/views/customer/Messages/Messages.vue";
import ForgotPassword from "@/views/auth/ForgotPassword.vue";
import Affiliation from "@/views/ooredoo/Affiliation/ooredooAffiliation.vue";
import ooredooDashBoard from "@/views/ooredoo/DashBoard/ooredooDashBoard.vue";
import ooredooRoles from "@/views/ooredoo/Roles/ooredooRoles.vue";
import ooredooEmployees from "@/views/ooredoo/Employees/ooredooEmployees.vue";
import ooredooLogs from "@/views/ooredoo/Logs/ooredooLogs.vue";
import ooredooCallLines from "@/views/ooredoo/CallLines/ooredooCallLines.vue";
// import ooredooSubscription from "@/views/ooredoo/Subscription/ooredooSubscription.vue";
import ooredooAffiliation from "@/views/ooredoo/Affiliation/ooredooAffiliation.vue";
import ooredooMessagerie from "@/views/ooredoo/Messages/ooredooMessagerie.vue";
import ooredooConsumption from "@/views/ooredoo/Consumption/ooredooConsumption.vue";
import ooredooSettings from "@/views/ooredoo/Settings/ooredooSettings.vue";
import ooredooMyProfile from "@/views/ooredoo/myProfile/ooredooMyProfile.vue";
import Consumption from "@/views/customer/Consumption/Consumption.vue";
import OoredooCompanies from "@/views/ooredoo/Companies/ooredooCompanies.vue";
import LoginOoredoo from "@/views/auth/LoginOoredoo.vue";
import {localStorageUser} from "@/utils/localStorageData";


const pagesWithoutTopandSideBars = ["Login","login", "Forgot Password", "NotFound"];
const ooredooPages=["login","dashBoard","roles","employees","logs","call lines","subscription","affiliation","facturation","messages","consumption","companies","settings","my profile"]
const customerPages = ["Dash board","Roles","Employees","Logs","Call Lines","Subscription","Facturation","Consumption","Settings","My Profile","Login","Messages"]

const loginPages=["Login"]

const loginGuardOoredoo= (to,from,next) => {
    // if (localStorageUser?.id_ooredoo_user != null){
    //     alert('you are already logged in.')
        next();
    // }else {
    //     next();
    // }
}
const loginGuardCustomer= (to,from,next) => {
    // if (localStorageUser?.id_client_user != null){
    //     alert('you are already logged in.')
    //     next(false);
    // }else {
        next();
    // }
}
const ooredooGuard = (to,from,next) => {
    // if (localStorageUser?.id_ooredoo_user != null){
        next();
    // }else {
    //     alert('you dont have access.')
        next(false);
    // }
}
const customerGuard = (to,from,next) => {
        // alert(localStorageUser?.id_client_user)
        // if (localStorageUser.id_client_user != null){
            next();
        // }else {
        //         alert('you dont have access.')
        //     next(false);
        //     }
    }

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [

        {
            path: "/",
            name: "lOgin",
            component: Login,

        },
        {
            path: "/customer/dashboard",
            name: "Dash board",
            component: DashBoard,
            beforeEnter: customerGuard
            // beforeEnter: (to,from,next) => {
            //     alert(localStorageUser.id_client_user)
            //     if (localStorageUser.id_client_user != null){
            //         next({path: "/customer/dashboard"})
            //     }else {
            //             alert('you dont have access.')
            //         }
            // }
        },
        {
            path: "/customer/roles",
            name: "Roles",
            component: Role,
            beforeEnter: customerGuard
            // beforeEnter: (to,from,next) => {
            //     if (localStorageUser.id_client_user != null){
            //         next({path: "/customer/roles"})
            //     }else {
            //         alert('you dont have access.')
            //     }
            // }
        },

        {
            path: "/customer/employees",
            name: "Employees",
            component: Employees,
            beforeEnter: customerGuard
            // beforeEnter: (to,from,next) => {
            //     if (localStorageUser.id_client_user != null){
            //         next({path: "/customer/employees"})
            //     }else {
            //         alert('you dont have access.')
            //     }
            // }
        },

        {
            path: "/customer/logs",
            name: "Logs",
            component: Logs,
            beforeEnter: customerGuard
            // beforeEnter: (to,from,next) => {
            //     if (localStorageUser.id_client_user != null){
            //         next({path: "/customer/logs"})
            //     }else {
            //         alert('you dont have access.')
            //     }
            // }
        },
        {
            path: "/customer/calllines",
            name: "Call Lines",
            component: CallLines,
            beforeEnter: customerGuard
            // beforeEnter: (to,from,next) => {
            //     if (localStorageUser.id_client_user != null){
            //         next({path: "/customer/calllines"})
            //     }else {
            //         alert('you dont have access.')
            //     }
            // }
        },
        {
            path: "/customer/subscription",
            name: "Subscription",
            component: Subscription,
            beforeEnter: customerGuard
            // beforeEnter: (to,from,next) => {
            //     if (localStorageUser.id_client_user != null){
            //         next({path: "/customer/subscription"})
            //     }else {
            //         alert('you dont have access.')
            //     }
            // }
        },
        {
            path: "/customer/facturation",
            name: "Facturation",
            component: Facturation,
            beforeEnter: customerGuard
            // beforeEnter: (to,from,next) => {
            //     if (localStorageUser.id_client_user != null){
            //         next({path: "/customer/facturation"})
            //     }else {
            //         alert('you dont have access.')
            //     }
            // }
        },
        {
            path: "/customer/consumption",
            name: "Consumption",
            component: Consumption,
            beforeEnter: customerGuard
            // beforeEnter: (to,from,next) => {
            //     if (localStorageUser.id_client_user != null){
            //         next({path: "/customer/consumption"})
            //     }else {
            //         alert('you dont have access.')
            //     }
            // }
        },

        {
            path: "/customer/settings",
            name: "Settings",
            component: Settings,
            beforeEnter: customerGuard
            // beforeEnter: (to,from,next) => {
            //     if (localStorageUser.id_client_user != null){
            //         next({path: "/customer/settings"})
            //     }else {
            //         alert('you dont have access.')
            //     }
            // }
        },
        {
            path: "/customer/myProfile",
            name: "My Profile",
            component: myProfile,
            beforeEnter: customerGuard
            // beforeEnter: (to,from,next) => {
            //     if (localStorageUser.id_client_user != null){
            //         next({path: "/customer/myProfile"})
            //     }else {
            //         alert('you dont have access.')
            //     }
            // }
        },
        {
            path: "/customer/login" ,
            name: "Login",
            component: Login,
            beforeEnter: loginGuardCustomer
            // beforeEnter: (to,from,next) => {
            //     if (localStorage.getItem('key') != null){
            //         next({path: "/customer/dashboard"})
            //     }else {
            //         next();
            //     }
            // }
        },
        {
            path: "/customer/" ,
            redirect: "/customer/login"
        },
        {
            path: "/ooredoo/login" ,
            name: "login",
            component: LoginOoredoo,
            beforeEnter: loginGuardOoredoo
            // beforeEnter: (to,from,next) => {
            //     if (localStorage?.getItem('key') != null){
            //         next({path: "/ooredoo/dashboard"})
            //     }else {
            //         next();
            //     }
            // }
        },
        {
            path: "/ooredoo/" ,
            redirect: "/ooredoo/login"
        },
        {
          path: "/customer/messages",
            name: "Messages",
            component: Messages,
            beforeEnter: customerGuard
            // beforeEnter: (to,from,next) => {
            //     if (localStorageUser.id_client_user != null){
            //         next({path: "/customer/messages"})
            //     }else {
            //         alert('you dont have access.')
            //     }
            // }
        },
        {
            path: "/forgotpassword",
            name: "Forgot Password",
            component: ForgotPassword
        },


        {
            path: "/ooredoo/dashboard",
            name: "dashBoard",
            component: ooredooDashBoard,
            beforeEnter: ooredooGuard
            // beforeEnter: (to,from,next) => {
            //     if (localStorageUser?.id_ooredoo_user != null){
            //         next({path: "/ooredoo/dashboard"})
            //     }else {
            //         alert('you dont have access.')
            //     }
            // }
        },


        {
            path: "/ooredoo/roles",
            name: "roles",
            component: ooredooRoles,
            beforeEnter: ooredooGuard
            // beforeEnter: (to,from,next) => {
            //     if (localStorageUser.id_ooredoo_user != null){
            //         next({path: "/ooredoo/roles"})
            //     }else {
            //         alert('you dont have access.')
            //     }
            // }
        },

        {
            path: "/ooredoo/employees",
            name: "employees",
            component: ooredooEmployees,
            beforeEnter: ooredooGuard
            // beforeEnter: (to,from,next) => {
            //     if (localStorageUser.id_ooredoo_user != null){
            //         next({path: "/ooredoo/employees"})
            //     }else {
            //         alert('you dont have access.')
            //     }
            // }
        },
        {
            path: "/ooredoo/logs",
            name: "logs",
            component: ooredooLogs,
            beforeEnter: ooredooGuard
            // beforeEnter: (to,from,next) => {
            //     if (localStorageUser.id_ooredoo_user != null){
            //         next({path: "/ooredoo/logs"})
            //     }else {
            //         alert('you dont have access.')
            //     }
            // }
        },
        {
            path: "/ooredoo/callLines",
            name: "call lines",
            component: ooredooCallLines,

            beforeEnter: ooredooGuard
        },
        // {
        //     path: "/ooredoo/subscription",
        //     name: "subscription",
        //     component: ooredooSubscription,
        //
        //     beforeEnter: ooredooGuard
        // },
        {
            path: "/ooredoo/affiliation",
            name: "affiliation",
            component: ooredooAffiliation,

            beforeEnter: ooredooGuard
        },
        // {
        //     path: "/ooredoo/facturation",
        //     name: "facturation",
        //     component: ooredooFacturation,
        //
        //     beforeEnter: ooredooGuard
        // },
        {
            path: "/ooredoo/messages",
            name: "messages",
            component: ooredooMessagerie,

            beforeEnter: ooredooGuard
        },
        {
            path: "/ooredoo/consumption",
            name: "consumption",
            component: ooredooConsumption,

            beforeEnter: ooredooGuard
        },
        {
            path: "/ooredoo/companies",
            name: "companies",
            component: OoredooCompanies,

            beforeEnter: ooredooGuard

        },

        {
            path: "/ooredoo/settings",
            name: "settings",
            component: ooredooSettings,

            beforeEnter: ooredooGuard
        },
        {
            path: "/ooredoo/myProfile",
            name: "my profile",
            component: ooredooMyProfile,

            beforeEnter: ooredooGuard
        },

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