const {navBar} = await import(`./Components/navBar/navBar.js${app_version}`)
export const App = ()=>{
    const NavBar = new navBar()
    $("#root").append( NavBar.init() )
    NavBar.events()
}