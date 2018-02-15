/**
 * Created by cody on 1/20/2018.
 */
    // Initialize Firebase
var config = {
        apiKey: "AIzaSyCNEFyKxU3sGDcM__plDQb50CW_2D8qeUI",
        authDomain: "shoppinglist-2be8a.firebaseapp.com",
        databaseURL: "https://shoppinglist-2be8a.firebaseio.com",
        projectId: "shoppinglist-2be8a",
        storageBucket: "shoppinglist-2be8a.appspot.com",
        messagingSenderId: "814210745219"
    };
firebase.initializeApp(config);

var db = firebase.firestore();

var currentPage ='';

var addItem = function (dialogId, inputId) {
    writeData(currentPage, document.getElementById(inputId).value);
    // console.log(document.getElementById(inputId).value);
    hideDialog(dialogId);
};

var writeData = function (pageId, data) {
    if (pageId === 'main') {
        db.collection('main').doc(data).set({isVisable: true}).then(function () {
            //can add a success dialog
        })
    }
    else {
        db.collection("main").doc(pageId).collection("items").doc(data).set({isVisable: true}).then(function () {
            //can add a success dialog
        })
    }
};

var getData = function (pageId, tempArray) {
    if (pageId === 'main') {
        db.collection("main").where("isVisable", "==", true)
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    tempArray.push(doc.id);
                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            })
    }
    else {
        db.collection("main").doc(pageId).collection("items").where("isVisable", "==", true)
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    tempArray.push(doc.id);
                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
    }
};

var createList = function (pageId, tempArray) {
    // <ons-list-item id="essentials" modifier="nodivider" tappable class="listItems">Essentials</ons-list-item>

    if (pageId === 'main') {
        for ( var i = 0; i < tempArray.length;  i++) {
            var onsItem= document.createElement('ons-list-item');
            onsItem.setAttribute('modifier', "nodivider");
            onsItem.innerHTML = tempArray[i];
            document.getElementById('mainList').appendChild(onsItem);
        }
    }
};