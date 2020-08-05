import VueRouter from "vue-router";
import Vue from "vue";
import LunchBreakList from "../component/LunchBreakList.vue";

Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        name: "ContactList",
        component: LunchBreakList,
        props: true
    }
];

const router = new VueRouter({
    routes
})

export default router;