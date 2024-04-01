export const Nav = () => {
    return (
        <nav className="border-2 px-2 py-4 md:px-4  border-teal-900 flex md:flex-row md:items-center md:justify-between ">
            <h1 className="text-6xl text-teal-800 ">Green World</h1>
            <div id="menu">
                <ul className="flex  flex-col md:flex-row justify-center">
                    <li className="mx-2">
                        <a href="/about" className="text-teal-800 hover:text-teal-600">
                            About
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="/services" className="text-teal-800 hover:text-teal-600">
                            Services
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="/contact" className="text-teal-800 hover:text-teal-600">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
