var textareaNewline = new Array(300).join(' ');

function addTemplateForm() {
    $('#ticket-chat').append('<div class="select"><label for="eksempel">Eksempel</label><textarea id="eksempel" rows="8" size="100%" placeholder="Der skal være min. 1 eksempel i en Helpdesksag.' + textareaNewline + 'Hvis der er tale om et testeksempel skal dette udførligt beskrives." ></textarea></div>');

    $('#ticket-chat').append('<div class="select"><label for="oprindelse">Kilde/Oprindelse</label><textarea id="oprindelse" rows="8" size="100%" placeholder="Kunden har kontaktet KS' + textareaNewline + 'Rapport fra Backoffice (husk at skriv hvilken)' + textareaNewline + 'Tilfældigt opslag' + textareaNewline + 'Andet (f.eks. Test)" ></textarea></div>');

    $('#ticket-chat').append('<div class="select"><label for="galt">Kilde/Hvad er der galt?</label><textarea id="galt" rows="8" size="100%" placeholder="Beskriv hvad du oplever som en fejl.' + textareaNewline + 'Gerne med så mange detaljer om kunden  samt fejlen som muligt." ></textarea></div>');
}

addTemplateForm();
