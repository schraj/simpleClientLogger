export default () => {
    window.addEventListener('mousedown', function (e) {
        document.body.classList.add('mouse-navigation');
        document.body.classList.remove('kbd-navigation');
    });
    window.addEventListener('keydown', function (e) {
        if (e.keyCode === 9) {
            document.body.classList.add('kbd-navigation');
            document.body.classList.remove('mouse-navigation');
        }
    });
    window.addEventListener('click', function (e) {
        if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
            e.preventDefault();
        }
    });
    console.error = (function (old) {
        return function error() {
            errors.textContent += Array.prototype.slice.call(arguments).join(' ') + '\n';
            errors.style.display = '';
            old.apply(this, arguments);
        }
    })(console.error);
}