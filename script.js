var textareaNewline = new Array(300).join(' ');
var textareaSize = 'rows="8" size="100%"';


function addTemplateForm() {
    var ticketChat = $('#ticket-chat');
    
    ticketChat.append('<div class="select"><label>Brand</label><br /><input type="radio" name="brand" value="Alle">Alle&nbsp;&nbsp;&nbsp;<input type="radio" name="brand" value="CBB">CBB&nbsp;&nbsp;&nbsp;<input type="radio" name="brand" value="BiBob">BiBob&nbsp;&nbsp;&nbsp;<input type="radio" name="brand" value="OK Mobil">OK Mobil</div>');

    ticketChat.append('<div class="select"><label for="eksempel">Eksempel</label><textarea id="eksempel" ' + textareaSize + ' placeholder="Der skal være min. 1 eksempel i en Helpdesksag.' + textareaNewline + 'Hvis der er tale om et testeksempel skal dette udførligt beskrives."></textarea></div>');

    ticketChat.append('<div class="select"><label for="oprindelse">Kilde/Oprindelse</label><textarea id="oprindelse" ' + textareaSize + ' placeholder="Kunden har kontaktet KS' + textareaNewline + 'Rapport fra Backoffice (husk at skriv hvilken)' + textareaNewline + 'Tilfældigt opslag' + textareaNewline + 'Andet (f.eks. Test)"></textarea></div>');

    ticketChat.append('<div class="select"><label for="galt">Kilde/Hvad er der galt?</label><textarea id="galt" ' + textareaSize + ' placeholder="Beskriv hvad du oplever som en fejl.' + textareaNewline + 'Gerne med så mange detaljer om kunden  samt fejlen som muligt."></textarea></div>');

    ticketChat.append('<div class="select"><label for="forventet">Forventet/Hvad er der galt?</label><textarea id="forventet" ' + textareaSize + ' placeholder="Beskriv hvad du havde forventet der ville være sket for kunden/dig i forhold til hvad der reelt skete."></textarea></div>');

    ticketChat.append('<div class="select"><label for="bonusinformation">Bonusinformation</label><textarea id="bonusinformation" ' + textareaSize + ' placeholder="Har du screenshots der kan være relevante?' + textareaNewline + 'Er der en tidligere HD sag der kunne have relevans?' + textareaNewline + 'Andre informationer der kunne komme glæde af."></textarea></div>');
}

addTemplateForm();
