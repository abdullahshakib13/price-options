import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
  { path: '/', name: 'Home', id: 'home' },
  { path: '/about', name: 'About', id: 'about' },
  { path: '/services', name: 'Services', id: 'services' },
  { path: '/contact', name: 'Contact', id: 'contact' },
  { path: '*', name: 'Not Found', id: 'not-found' },
];

    return (
        <nav className="text-black p-6 bg-yellow-200">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true? <AiOutlineClose></AiOutlineClose> :<AiOutlineMenu className=" "></AiOutlineMenu>
                }
                
            </div>
            <ul className={`md:flex duration-1000 absolute md:static
             ${open ? 'top-12': '-top-60'}
             bg-yellow-200 px-6 shadow-lg`}> 
                {
                 routes.map(route =><Link key={route.id} route={route}></Link>) 
                }
            </ul>
        </nav>
    );
};

export default NavBar;