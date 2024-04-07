import { NavItem, NavItemProps } from './NavItem';

const items: NavItemProps[] = [{
    href: '/about',
    text: 'About'
},
{
    href: '/services',
    text: 'Services'
},
{
    href: '/contact',
    text: 'Contact'
}]

export const Nav = () => {
    return (
        <nav className="border-2 px-2 py-4 md:px-4  border-primary flex md:flex-row md:items-center md:justify-between ">
            <h1 className="text-6xl text-primary ">Green World</h1>
            <div id="menu">
                <ul className="flex  flex-col md:flex-row justify-center text-primary">
                    {items.map((item, index) => (
                        <li key={index} className="mx-2">
                            <NavItem {...item}></NavItem>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
