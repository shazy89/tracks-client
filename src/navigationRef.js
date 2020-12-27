import { NavigationActions } from 'react-navigation'
let navigator;
// this is the way we can handle navigation outside of the APP
// I want to navigate from AuthContext and it is outside of react navigator so vi create custom path
export const setNavigator = (nav) => {
  navigator = nav
};

export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
}