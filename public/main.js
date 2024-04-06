const headerMain = document.querySelector('nav');
const linkChange = document.querySelector('.link-change');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        headerMain.classList.add('header-fixed');
        linkChange.style.display = 'flex';
        headerMain.style.top = '0';
    } else if (window.scrollY < 200) {
        headerMain.classList.remove('header-fixed');
        linkChange.style.display = 'none';
    }
});