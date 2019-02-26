chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.todo == "changeColor") {
        var addColor = "#" + request.clickedColor;
        $('.editable').css('color', addColor);
    }
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.todo == "selectedText") {
        sendResponse({data: $('.editable').text(), success: true});
    }
});