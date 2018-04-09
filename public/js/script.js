document.addEventListener('init', function(event) {
    var page = event.target;

    if (page.id === 'main') {
        page.querySelector('#shoppingListLink').onclick = function() {
            document.querySelector('#myNavigator').pushPage('shoppingList.html');
        };
        page.querySelector('#dinnerIdeasLink').onclick = function() {
            document.querySelector('#myNavigator').pushPage('dinnerIdeas.html');
        };
        page.querySelector('#dutiesLink').onclick = function() {
            document.querySelector('#myNavigator').pushPage('duties.html');
        };
    }
    if (page.id === 'duties') {
        page.querySelector('#dinnerLink').onclick = function() {
            document.querySelector('#myNavigator').pushPage('dinner.html');
        };
        page.querySelector('#dishesLink').onclick = function() {
            document.querySelector('#myNavigator').pushPage('dishes.html');
        };
        page.querySelector('#laundryLink').onclick = function() {
            document.querySelector('#myNavigator').pushPage('laundry.html');
        };
        page.querySelector('#prayerLink').onclick = function() {
            document.querySelector('#myNavigator').pushPage('prayer.html');
        };
    }
    if (page.id === 'shoppingList' || page.id === 'dinnerIdeas') {
        // createTitle(page.id);
        getDataBuildList(page.id);
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

// document.addEventListener('dragleft', function(event) {
//     console.log(event.target.innerHTML);
// });
//
// document.addEventListener('dragright', function(event) {
//     console.log(event.target.innerHTML);
// });

// ----------------- Title - No Back Button -------------------
// var createTitle = function (pageId) {
//     var onsTitle = document.createElement('ons-list-header');
//     onsTitle.classList.add('titles');
//     onsTitle.classList.add(pageId);
//     onsTitle.innerHTML = pageId;
//     document.querySelector('#' + pageId + 'List').appendChild(onsTitle);
// };

// -------------------- Title - Back Button --------------------
var createTitle = function (pageId) {
    var onsToolbar = document.createElement('ons-toolbar');
    onsToolbar.classList.add(pageId);
    var onsTitle = document.createElement('div');
    onsTitle.classList.add('titles');
    onsTitle.classList.add(pageId);
    onsTitle.classList.add('center');
    onsTitle.innerHTML = pageId.toUpperCase();
    var backButtonDiv = document.createElement('div');
    backButtonDiv.classList.add('left');
    var backButton = document.createElement('ons-back-button');
    backButton.classList.add('backChevron');
    backButtonDiv.appendChild(backButton);
    onsToolbar.appendChild(backButtonDiv);
    onsToolbar.appendChild(onsTitle);
    document.getElementById(pageId).appendChild(onsToolbar);
};

// ------------------------ List Items -----------------------
var createListItem = function(pageId, item){
    var onsItem= document.createElement('ons-list-item');
    onsItem.setAttribute('modifier', "nodivider");
    onsItem.classList.add('listItems');
    onsItem.innerHTML = item;
    document.getElementById(pageId + 'List').appendChild(onsItem);
};

