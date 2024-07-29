function showProfile(element) {
    // Creiamo un elemento di profilo se non esiste già
    if (!element.querySelector('.profile')) {
        const profile = document.createElement('div');
        profile.className = 'profile';
        profile.textContent = '${name} \n ${role} \n ${descrizione}';
        element.appendChild(profile);
    }
    // Mostra il profilo
    element.querySelector('.profile').style.display = 'block';
}

function hideProfile(element) {
    // Nascondi il profilo quando il mouse esce dall'elemento
    if (element.querySelector('.profile')) {
        element.querySelector('.profile').style.display = 'none';
    }
}