document.addEventListener('init', function(event) {
    var page = event.target;
    console.log("Page: ", page.id);

    if (page.id === 'myLists') {
        page.querySelector('#push-button').onclick = function() {
            document.querySelector('#myNavigator').pushPage('listItems.html', {data: {title: 'sup'}});
        };
    } else if (page.id === 'listItems') {
        page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
});