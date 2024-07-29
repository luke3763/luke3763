document.getElementById('copyButton').addEventListener('click', function() {
    const textToCopy = 'play.starmc.net';

    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand('copy');
    

    document.body.removeChild(tempInput);
    

    const notification = document.getElementById('notification');
    notification.classList.add('show');
    
    setTimeout(function() {
        notification.classList.remove('show');
    }, 3000);
});
