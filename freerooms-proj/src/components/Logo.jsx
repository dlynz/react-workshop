import { useState } from 'react';

function Logo() {
    const [logoImage, setLogoImage] = useState('/freeroomsDoorClosed.png');
    return(
        <div 
            className="cursor-pointer h-full flex items-center p-2 hover:opacity-80 transition-opacity"
            onClick={() => logoImage == '/freeroomsDoorClosed.png' ? setLogoImage('/freeRoomsLogo.png') : setLogoImage('/freeroomsDoorClosed.png')}
        >
            <img 
                src={logoImage}
                alt="Logo"
                className="h-full w-auto object-contain"
            />
            <h1 className="select-none text-[2rem] font-bold text-orange-500">
                Freerooms
            </h1>
        </div>
    );
}

export default Logo;