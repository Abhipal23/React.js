import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {Outlet} from "react-router-dom";

// here in layout header and footer will remain in all pages
// outlet : here we can change things accordingly

export default function Layout() {
    return(
        <>
            <Header/>
            <Outlet/>

            <Footer/>

            {/* IT means header will same and footer in between thsese things will change
            if we move outlet any where else there that thing will change */}
        </>
    )
}