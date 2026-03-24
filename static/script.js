document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        fetch(btn.href)
        .then(() => {
            const li = btn.parentElement;
            li.classList.toggle('completed');
        });
    });
});

document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        fetch(btn.href)
        .then(() => {
            btn.parentElement.remove();
        });
    });
});