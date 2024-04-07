
export interface NavItemProps {
    href: string;
    text: string;
}

export const NavItem = ( {href, text}:NavItemProps) => {
    return (
        <a className="group transition-all duration-300 ease-in-out" href={href}>
            <span
                className="bg-left-bottom bg-gradient-to-r 
                                from-pink-500 
                                to-pink-500 
                                bg-[length:0%_3px] 
                                bg-no-repeat 
                                group-hover:bg-[length:100%_3px] 
                                transition-all 
                                duration-500 
                                ease-out
                                hover:text-teal-600"
            >
                {text}
            </span>
        </a>
    );
};
