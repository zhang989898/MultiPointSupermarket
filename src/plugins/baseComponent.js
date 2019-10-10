import footerNav from '@/components/footerNav'

const components = {
    footerNav
}

export default {
    install(Vue, options) {
        for (let key in components) {
            Vue.component(key, components[key])
        }
    }
};