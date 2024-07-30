// copy ip
document.getElementById('copyButton').addEventListener('click', function() {
    const textToCopy = 'play.starmc.org';

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


// consigli
document.getElementById('consigliButton').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('consigliSection').classList.toggle('hidden');
});



document.getElementById('consigliForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    const webhookURL = 'https://discord.com/api/webhooks/1267580576953798787/coyNlM1wnFSAlkttL7vbf87QlRud_Iu4lLPWWfhORJ00exQMKBUudE2df_BfdT5Yz0Kb';

    const payload = {
        embeds: [
            {
                title: "Consiglio in arrivo!",
                color: 3447003,
                fields: [
                    {
                        name: "Titolo",
                        value: title,
                        inline: true
                    },
                    {
                        name: "Descrizione",
                        value: description,
                        inline: false
                    }
                ],
                timestamp: new Date()
            }
        ]
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => {
        if (response.ok) {
            alert('Consiglio inviato con successo!');
            document.getElementById('consigliForm').reset();
            document.getElementById('consigliSection').classList.add('hidden');
        } else {
            alert('Errore nell\'invio del consiglio.');
        }
    }).catch(error => {
        console.error('Errore:', error);
        alert('Errore nell\'invio del consiglio.');
    });
});
