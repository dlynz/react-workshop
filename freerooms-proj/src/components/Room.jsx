function Room() {
    return (
        <div className='relative'>
            <div className='bg-gray-200 p-4 rounded shadow-md'>
                <p>Some text here</p>
            </div>
            <div className='absolute top-0 right-0 bg-green-500 text-white px-1 rounded'>
                <p className='text-xs'>Free Rooms: 3</p>
            </div>
        </div>
    )
}

export default Room