document.addEventListener('init', function(event) {
    var page = event.target;
    console.log("Page: ", page.id);

    if (page.id === 'mainList') {
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