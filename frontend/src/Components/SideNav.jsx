import {Link} from "react-router-dom"

export default function SideNav(props) {
    return (
        <nav className="sideNav pageColumn">
            <h2 className="brandName">tranz<span className="boldLetters">akt</span></h2>
            <ul className="navItems">
                <li className="navItem">
                    <img className="navItemImage" src={require('../images/darhboard_alt.png').default} />
                  <Link to="/welcome" style={{ textDecoration: 'none', color: 'black' }}>  <span>Welcome</span></Link>
                </li>
                <li className="navItem">
                    <img className="navItemImage" src={require('../images/Menu.png').default} />
                  <Link to="/subscription" style={{ textDecoration: 'none', color: 'black' }}>  <span>Subscription</span></Link>
                </li>
                <li className="navItem">
                    <img className="navItemImage" src={require('../images/Download_circle_light.png').default} />
                    <Link to='/insight' style={{ textDecoration: 'none', color: 'black' }}><span>Personal Insight</span></Link>
                </li>
                
            </ul>
        </nav>
    )
}