document.addEventListener('init', function(event) {
    var page = event.target;

    if (page.id === 'main') {
        page.querySelector('#essentialsLink').onclick = function() {
            document.querySelector('#myNavigator').pushPage('essentials.html');
        };
        page.querySelector('#wantsLink').onclick = function() {
            document.querySelector('#myNavigator').pushPage('wants.html');
        };
        page.querySelector('#needsLink').onclick = function() {
            document.querySelector('#myNavigator').pushPage('needs.html');
        };
        page.querySelector('#dinnersLink').onclick = function() {
            document.querySelector('#myNavigator').pushPage('dinners.html');
        };
        page.querySelector('#shoppingListLink').onclick = function() {
            document.querySelector('#myNavigator').pushPage('shoppingList.html');
        };
    }
    else {
        createTitle(page.id);
        createList(page.id);
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
    }
});
document.addEventListener('dragright', function(event) {
    if (event.target.matches('#detect-area')) {
        document.getElementById('detect-area').style.backgroundColor = "red";
    }
});

// ----------------- Title - No Back Button -------------------
var createTitle = function (pageId) {
    var onsTitle = document.createElement('ons-list-header');
    onsTitle.classList.add('titles');
    onsTitle.classList.add(pageId);
    onsTitle.innerHTML = pageId;
    document.querySelector('#' + pageId + 'List').appendChild(onsTitle);
};

// -------------------- Title - Back Button --------------------
// var createTitle = function (pageId) {
//     var onsToolbar = document.createElement('ons-toolbar');
//     onsToolbar.classList.add(pageId);
//     var onsTitle = document.createElement('div');
//     onsTitle.classList.add('titles');
//     onsTitle.classList.add(pageId);
//     onsTitle.classList.add('center');
//     onsTitle.innerHTML = pageId;
//     var backButtonDiv = document.createElement('div');
//     backButtonDiv.classList.add('left');
//     var backButton = document.createElement('ons-back-button');
//     backButton.classList.add('backChevron');
//     backButtonDiv.appendChild(backButton);
//     onsToolbar.appendChild(backButtonDiv);
//     onsToolbar.appendChild(onsTitle);
//     document.getElementById(pageId).appendChild(onsToolbar);
// };

// ------------------------ List Items -----------------------
var createList = function (pageId) {
    var tempArray = [];
    getData(pageId, tempArray);
    buildList(pageId, tempArray);
};