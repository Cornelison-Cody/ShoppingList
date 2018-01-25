document.addEventListener('init', function(event) {
    var page = event.target;
    console.log("Page: ", page.id);

    if (page.id === 'myLists') {
        page.querySelector('#push-button').onclick = function() {
            document.querySelector('#myNavigator').pushPage('tab2.html', {data: {title: 'hi'}});
        };
    } else if (page.id === 'tab2') {
        page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
});