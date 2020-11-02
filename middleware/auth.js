// TODO to check private area
export default function({ store, redirect }) {
    if (!store.state.cms.user || !store.state.cms.user.token || store.state.cms.user.token == '') {
        return redirect('/cms/login')
    }
}