document.addEventListener('init', function(event) {
    var page = event.target;

    if (page.id === 'main') {
        page.querySelector('#essentials').onclick = function() {
            document.querySelector('#myNavigator').pushPage('essentials.html');
        };
        page.querySelector('#wants').onclick = function() {
            document.querySelector('#myNavigator').pushPage('wants.html');
        };
        page.querySelector('#needs').onclick = function() {
            document.querySelector('#myNavigator').pushPage('needs.html');
        };
        page.querySelector('#dinners').onclick = function() {
            document.querySelector('#myNavigator').pushPage('dinners.html');
        };
        page.querySelector('#shoppingList').onclick = function() {
            document.querySelector('#myNavigator').pushPage('shoppingList.html');
        };
    }
});

var showDialog = function (dialogId, sourceId) {
    if (dialogId === 'dialog-addItem') {
        document
            .getElementById('input-addItem')
            .value = '';
        document
            .getElementById(dialogId)
            .show();
    }
    else {
        document
            .getElementById(dialogId)
            .show();
    }
    currentPage = sourceId;
};

var hideDialog = function (dialogId) {
    document
        .getElementById(dialogId)
        .hide();
    currentPage = '';
};

document.addEventListener('dragleft', function(event) {
    if (event.target.matches('#detect-area')) {
        document.getElementById('detect-area').style.backgroundColor = "blue";
        console.log('Swipe left is detected.');
    }
});
document.addEventListener('dragright', function(event) {
    if (event.target.matches('#detect-area')) {
        document.getElementById('detect-area').style.backgroundColor = "red";
        console.log('Swipe left is detected.');
    }
});