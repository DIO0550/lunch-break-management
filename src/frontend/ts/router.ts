import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        name: "ContactList",
        component: AddressBookContactList,
        props: true
    }
];

const router = new VueRouter({
    routes
})

export default router;