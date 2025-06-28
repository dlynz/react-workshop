function Building({ building }) {
    console.log(building)
    return(
        <div 
            className="relative cursor-pointer p-2 flex flex-col justify-between rounded-lg overflow-hidden bg-cover bg-center bg-no-repeat)] aspect-square w-full h-full transition-transform transform hover:scale-102 transition-all duration-350"
            style={{ backgroundImage: `url(${building.image})`}}
        >
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
            <div className="flex items-center gap-2 self-end bg-white rounded-xl px-5 py-3 text-xs font-semibold">
                <div className={`w-2 h-2 rounded-full ${ building.vacancy > 5 ? 'bg-green-500' : 'bg-orange-300'}`}></div>
                <p>{building.vacancy} rooms available</p>
            </div>
            <div className="bg-orange-500 rounded-md p-4 text-white text-sm font-semibold">
                <h3>{building.name}</h3>
            </div>
        </div>
    );
}

export default Building;