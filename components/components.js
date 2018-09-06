const buttonLists = Array.from(document.querySelectorAll('[list-btn-tgl]'));
buttonLists.forEach(list => {
    const buttons = Array.from(list.children);
    buttons.forEach(button => {
        button.addEventListener('click', (ev) => {
            toggleListButton(buttons, ev.target);
        });
    });
});

function toggleListButton(buttons, target) {
    if (target.classList.contains('active')) {
        target.classList.remove('active');
    } else {
        buttons.forEach(button => {
            button.classList.remove('active');
        });
        target.classList.add('active');
    }
}