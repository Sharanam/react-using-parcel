import { useState } from 'react';
const Menu = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="relative">
                <button
                    className='
                    text-3xl font-bold
                    focus:outline-none
                    active:outline-none
                     focus:ring-2 focus:ring-inset '
                    onClick={() => setOpen(!open)}
                >
                    {open ? "Cancel" : "Menu"}
                </button>
                <ul className={open ? 'header-menu__list' : 'hidden'} >
                    <li className="header-menu__item">
                        <button className="header-menu__button">
                            Home
                        </button>
                    </li>
                    <li className="header-menu__item">
                        <button className="header-menu__button">
                            About
                        </button>
                    </li>
                    <li className="header-menu__item">
                        <button className="header-menu__button">
                            Contact
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default Menu;
