import {Link} from "react-router-dom";
const NavBar=() =>{
    return(
      <nav>
        <ul>
        <li>
                <Link to="/">PlanMyTripe</Link>
            </li>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/places">Places</Link>
            </li>
            <li>
                <Link to="plans">Plan</Link>
            </li>
            <li>
                <Link to="journey">JourneySummary</Link>
            </li>
            <li>
                <Link to="/poi">PointOfInterest</Link>
            </li>
        </ul>
      </nav>
    );

}

export default NavBar;