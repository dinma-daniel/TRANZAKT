export default function SideNav(props) {
    return (
        <nav className="sideNav pageColumn">
            <h2 className="brandName">BRAND</h2>
            <ul className="navItems">
                <li className="navItem">
                    <img className="navItemImage" src={require('../images/darhboard_alt.png').default} />
                    <span>First page</span>
                </li>
                <li className="navItem">
                    <img className="navItemImage" src={require('../images/Menu.png').default} />
                    <span>Second page</span>
                </li>
                <li className="navItem">
                    <img className="navItemImage" src={require('../images/Download_circle_light.png').default} />
                    <span>Third page</span>
                </li>
                <li className="navItem">
                    <img className="navItemImage" src={require('../images/Scan_alt_light.png').default} />
                    <span>Fourth page</span>
                </li>
            </ul>
        </nav>
    )
}