import Search from './Search';
import Buildings from './Buildings';
import { useState } from 'react';

function Content() {
    const [searchTerm, setSearchTerm] = useState("");

    return(
        <div className="px-6 py-2 bg-white">
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}></Search>
            <Buildings searchTerm={searchTerm}></Buildings>
        </div>
    );
}

export default Content;