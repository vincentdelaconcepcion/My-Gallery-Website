document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('contactForm');
    const overlay = document.getElementById('popupOverlay');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        overlay.classList.add('show');
        form.reset();
    });

    document.getElementById('popupClose').addEventListener('click', function(){
        overlay.classList.remove('show');
    });

    // also close if they click the dark background
    overlay.addEventListener('click', function(e){
        if(e.target === overlay) overlay.classList.remove('show');
    });
});