function Buildings({ search }) {
    const filteredBuildings = buildings.filter(option =>
      option.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 pl-4 pr-4 pt-2 mb-4">
        {filteredBuildings.map((b) => (
          <Building
            key={b.name}
            name={b.name}
            rooms_available={b.rooms_available}
            building_picture={b.building_picture}
          />
        ))}
      </div>
    )
}

function Building({ name, rooms_available, building_picture }) {
    return (
      <button className="flex-grow basis-0 relative group aspect-square hover:scale-102 duration-300">
        <img
          src={building_picture}
          alt={name}
          className="absolute top-0 z-0 h-full object-cover rounded-lg
            group-hover:brightness-80 duration-300"
        />
        <div className="flex absolute top-0 z-10 w-full justify-end">
          <div className="flex items-center rounded-xl bg-white m-2">
            <div className="rounded-full w-2 h-2 bg-green-500 ml-4"></div>
            <p className="text-xs font-semibold pl-2 p-3 pr-4">
              {rooms_available} rooms available
            </p>
          </div>
        </div>
        <div className="absolute flex bottom-0 w-full h-18">
          <div className="flex items-center bg-orange-500 w-full h-14 m-2 rounded-lg">
            <p className="text-sm text-white text-left font-semibold m-4">{name}</p>
          </div>
        </div>
      </button>
    )
}

export default Buildings

const buildings = [
  {
    name: "AGSM",
    rooms_available: 9,
    building_picture: "/agsm.webp",
  },
  {
    name: "Ainsworth Building",
    rooms_available: 16,
    building_picture: "/ainsworth.webp",
  },
  {
    name: "Anita B Lawrence Centre",
    rooms_available: 44,
    building_picture: "/anitab.webp",
  },
  {
    name: "Biological Sciences",
    rooms_available: 6,
    building_picture: "/biologicalScience.webp",
  },
  {
    name: "Biological Science (West)",
    rooms_available: 8,
    building_picture: "/biologicalScienceWest.webp",
  },
  {
    name: "Blockhouse",
    rooms_available: 42,
    building_picture: "/blockhouse.webp",
  },
  {
    name: "Business School",
    rooms_available: 18,
    building_picture: "/businessSchool.webp",
  },
  {
    name: "Civil Engineering Building",
    rooms_available: 8,
    building_picture: "/civilBuilding.webp",
  },
  {
    name: "Colombo Building",
    rooms_available: 5,
    building_picture: "/colombo.webp",
  },
  {
    name: "Computer Science & Eng (K17)",
    rooms_available: 20,
    building_picture: "/cseBuilding.webp",
  },
];