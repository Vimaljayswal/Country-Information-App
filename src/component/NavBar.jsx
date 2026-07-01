import { Link } from "react-router-dom";
function NavBar(){
    return(
        <nav className="flex  justify-between p-3 bg-[#0A2647] text-white"  >
            <Link to="#" className="font-semibold text-3xl"> 🌍 GeoNation Portal</Link>
            <ul className="flex gap-6 ">
                <li >
                    <Link to={"/"} className="hover:text-gray-300 font-semibold text-lg"> Home  </Link>
                </li>
                <li>
                    <Link to={"/about"} className="hover:text-gray-300 font-semibold text-lg"> About </Link>
                </li>
                <li>
                    <Link to={"/contact"} className="hover:text-gray-300 font-semibold text-lg"> Contact  </Link>
                </li>
                <li>
                    <Link to={"/country"} className="hover:text-gray-300 font-semibold text-lg"> CountryInfo  </Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;