function NavButton({ children }) {
    return(
        <>
            <button className="cursor-pointer fill-orange-500 flex justify-center w-10 h-10 p-2 border-orange-300 hover:border-orange-500 duration-300 border rounded-[4px]">
                {/* dark:border-orange-500 dark:hover:bg-gray-900 dark:hover:border-orange-600 */}
                {children}
            </button>
        </>
    );
}

export default NavButton;