import Building from "./Building";

const buildings = [
    {
        name: 'AGSM',
        image: '/agsm.webp',
        vacancy: 9
    },
    {
        name: 'Ainsworth Building',
        image: '/ainsworth.webp',
        vacancy: 16
    },
    {
        name: 'Anita B Lawrence Centre',
        image: '/anitab.webp',
        vacancy: 44
    },
    {
        name: 'Biological Sciences',
        image: '/biologicalScience.webp',
        vacancy: 6
    },
    {
        name: 'Biological Science (West)',
        image: '/biologicalScienceWest.webp',
        vacancy: 8
    },
    {
        name: 'Blockhouse',
        image: '/blockhouse.webp',
        vacancy: 42
    },
    {
        name: 'Business School',
        image: '/businessSchool.webp',
        vacancy: 18
    },
    {
        name: 'Civil Engineering Building',
        image: '/civilBuilding.webp',
        vacancy: 8
    },
    {
        name: 'Colombo Building',
        image: '/colombo.webp',
        vacancy: 5
    },
    {
        name: 'Computer Science & Eng (K17)',
        image: '/cseBuilding.webp',
        vacancy: 20
    }
]

function Buildings({ searchTerm }) {
    const filteredBuildings = buildings.filter(building =>
        building.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return(
        <div className="py-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
            {filteredBuildings.map(building => (
                <Building building={building}/>
            ))}
        </div>
    );
}

export default Buildings;