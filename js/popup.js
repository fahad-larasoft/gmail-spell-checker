$(function () {

    if (typeof chrome.tabs !== 'undefined') {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {todo: "selectedText", selectedText: true}, function (response) {
                $('#spell-checker').text(response.data);
            });
        });
    }

    $Spelling.PopUpStyle="modalbox";
    $Spelling.ServerModel="php";
    // $('#spell-checker').spellCheckInDialog();
    $Spelling.SpellCheckInWindow('spell-checker')

});