function Buildings() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pl-4 pr-4 pt-2 mb-4">
        {buildings.map((b) => (
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
        <button className="group">
          <img
            src={building_picture}
            alt={name}
            className="w-full h-40 object-cover rounded-xl mb-3
              group-hover:scale-105 group-hover:brightness-80 duration-300"
          />
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="inline-block text-sm text-gray-600 bg-green-100 rounded-md mt-2 pl-2 pr-2 outline-1 outline-green-500">{rooms_available} rooms available</p>
        </button>
    )
}

export default Buildings

const buildings = [
  {
    name: "AGSM",
    rooms_available: 9,
    building_picture: "../public/agsm.webp",
  },
  {
    name: "Ainsworth Building",
    rooms_available: 16,
    building_picture: "../public/ainsworth.webp",
  },
  {
    name: "Anita B Lawrence Centre",
    rooms_available: 44,
    building_picture: "../public/anitab.webp",
  },
  {
    name: "Biological Sciences",
    rooms_available: 6,
    building_picture: "../public/biologicalScience.webp",
  },
  {
    name: "Biological Science (West)",
    rooms_available: 8,
    building_picture: "../public/biologicalScienceWest.webp",
  },
  {
    name: "Blockhouse",
    rooms_available: 42,
    building_picture: "../public/blockhouse.webp",
  },
  {
    name: "Business School",
    rooms_available: 18,
    building_picture: "../public/businessSchool.webp",
  },
  {
    name: "Civil Engineering Building",
    rooms_available: 8,
    building_picture: "../public/civilBuilding.webp",
  },
  {
    name: "Colombo Building",
    rooms_available: 5,
    building_picture: "../public/colombo.webp",
  },
  {
    name: "Computer Science & Eng (K17)",
    rooms_available: 20,
    building_picture: "../public/cseBuilding.webp",
  },
];