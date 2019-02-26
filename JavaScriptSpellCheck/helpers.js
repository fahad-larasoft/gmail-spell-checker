$(document).ready(function () {

    spellWin.init()

    // document.getElementById("LivespellDialogBody").addEventListener("onload", spellWin.init());

    $(document).on('unload', '#LivespellDialogBody', function () {
        spellWin.actions.registerclose();
    });

    $(document).on('click', '#TextShow', function () {
        spellWin.ui.showEdit(true);
    });

    $(document).on('mouseup', '#TextShow', function () {
        spellWin.ui.showEdit(true);
    });

    $(document).on('dblclick', '#fldSuggestions', function () {
        spellWin.actions.changeCurrent();
    });

    $(document).on('keypress', '#lMeaningLink', function () {
        return spellWin.ui.lookupMeaning();
    });

    $(document).on('click', '#lMeaningLink', function () {
        return spellWin.ui.lookupMeaning();
    });

    $(document).on('click', '#btnChange', function () {
        spellWin.actions.changeCurrent();
    });

    $(document).on('click', '#btnCancel', function () {
        spellWin.actions.cancel();
    });

    $(document).on('click', '#btnIgnore', function () {
        spellWin.actions.ignoreOnce();
    });

    $(document).on('click', '#btnIgnoreAll', function () {
        spellWin.actions.ignoreAll();
    });

    $(document).on('click', '#btnAddToDict', function () {
        spellWin.actions.addPersonal();
    });

    $(document).on('click', '#btnChangeAll', function () {
        spellWin.actions.changeAll();
    });

    $(document).on('click', '#btnAutoCorrect', function () {
        spellWin.actions.addAutoCorrect();
    });

    $(document).on('click', '#btnShowOptions', function () {
        spellWin.optionsMenu.show(true);
    });

    $(document).on('click', '#btnUndoManualEdit', function () {
        spellWin.ui.showEdit(false);
    });

    $(document).on('click', '#btnUndo', function () {
        spellWin.undo.get();
    });

    $(document).on('change', '#fldLanguage', function () {
        spellWin.actions.changeLanguage();
    });

    $(document).on('change', '#optSentence', function () {
        spellWin.ui.setGrammar();
    });

    $(document).on('click', '#btnResetDict', function () {
        spellWin.actions.deletePersonal();
    });

    $(document).on('click', '#btnResetDict', function () {
        spellWin.optionsMenu.show(true);
    });

    $(document).on('click', '#btnResetAutoCorrect', function () {
        spellWin.actions.deleteAutoCorrect();
    });

    $(document).on('click', '#btnResetAutoCorrect', function () {
        spellWin.optionsMenu.show(true);
    });

    $(document).on('click', '#btnOptionsOK', function () {
        spellWin.optionsMenu.set();
    });


    $(document).on('click', '#btnOptionsCancel', function () {
        spellWin.optionsMenu.show(false);
    });

    $(document).on('click', '#btnLangOK', function () {
        spellWin.actions.changeMultiLanguage();
    });

    $(document).on('click', '#btnLangCancel', function () {
        spellWin.optionsMenu.showMultiLang(false);
    });

    $(document).on('click', '#btnAllDone', function () {
        spellWin.actions.done();
    });


});