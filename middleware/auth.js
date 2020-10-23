// TODO to check private area
export default function({ store, redirect }) {
    if (!store.state.cms.user.isAuth()) {
        return redirect('/cms/login')
    }
}