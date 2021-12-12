import {Link} from "react-router-dom"

export default function SideNav(props) {
    return (
        <nav className="sideNav pageColumn">
            <h2 className="brandName">tranz<span className="boldLetters">akt</span></h2>
            <ul className="navItems">
                <li className="navItem">
                    <img className="navItemImage" src={require('../images/darhboard_alt.png').default} />
                  <Link to="/welcome">  <span>Welcome</span></Link>
                </li>
                <li className="navItem">
                    <img className="navItemImage" src={require('../images/Menu.png').default} />
                  <Link to="/subscription">  <span>Subscription</span></Link>
                </li>
                <li className="navItem">
                    <img className="navItemImage" src={require('../images/Download_circle_light.png').default} />
                    <Link to='/insight'><span>Personal Insight</span></Link>
                </li>
                <li className="navItem">
                    <img className="navItemImage" src={require('../images/Scan_alt_light.png').default} />
                    <span>Coming soon</span>
                </li>
            </ul>
        </nav>
    )
}