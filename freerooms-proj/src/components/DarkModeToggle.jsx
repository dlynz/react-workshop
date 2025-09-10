function DarkModeToggle({ children }) {
    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
        prompt('toggled dark mode');
    };

    return (
        <div onClick={toggleDarkMode}>
            { children }
        </div>
    );
}

export default DarkModeToggle;