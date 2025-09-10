import Logo from './Logo';
import NavButton from './NavButton';
import DarkToggle from './DarkModeToggle';

function Navbar() {
    return (
        <> 
            <div className="flex items-center h-17 justify-between border-1 border-gray-200">
                <div className="h-full">
                    <Logo />
                </div>
                <div className="w-50 flex items-end justify-evenly">
                    <NavButton>
                        <svg>
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14">
                            </path>
                        </svg>
                    </NavButton>
                    <NavButton>
                        <svg>
                            <path d="M11 11V3H5c-1.1 0-2 .9-2 2v6zm2 0h8V5c0-1.1-.9-2-2-2h-6zm-2 2H3v6c0 1.1.9 2 2 2h6zm2 0v8h6c1.1 0 2-.9 2-2v-6z">
                            </path>
                        </svg>
                    </NavButton>
                    <NavButton>
                        <svg>
                            <path d="m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5M15 19l-6-2.11V5l6 2.11z">
                            </path>
                        </svg>
                    </NavButton>
                    <DarkToggle>
                        <NavButton>
                            <svg>
                                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1">
                                </path>
                            </svg>
                        </NavButton>
                    </DarkToggle>
                </div>
            </div>
        </>
    );
}

export default Navbar;