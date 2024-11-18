const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');
    const invertedColors = document.querySelectorAll('#invert-color');
    const theme = localStorage.getItem('theme');

    if (theme) {
        invertedColors.forEach(item => item.classList.toggle('invert-colors'));
    }

    theme && document.body.classList.add(theme);

    const handleThemeToggle = () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            invertedColors.forEach(item => item.classList.toggle('invert-colors'));
            localStorage.setItem('theme', 'light-mode');
        }
        else {
            localStorage.removeItem('theme');
            invertedColors.forEach(item => item.classList.toggle('invert-colors'));
            document.body.removeAttribute('class');
        }
    };

    themeToggleBtns.forEach(btn => btn.addEventListener('click', handleThemeToggle));
};

export default darkMode;