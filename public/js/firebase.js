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

// ------------------------------ Add Item ---------------------------
var addItem = function (dialogId, inputId) {
    writeData(currentPage, document.getElementById(inputId).value);
    // console.log(document.getElementById(inputId).value);
    hideDialog(dialogId);
};

// ---------------------------------- Create Document -----------------------------------
var writeData = function (pageId, data) {
    if (pageId === 'main') {
        db.collection('main').doc(data).set({isVisable: true}).then(function () {
            //can add a success dialog
        })
    }
    else {
        db.collection("main").doc(pageId).collection("items").doc(data).set({isVisable: true}).then(function () {
            createListItem(pageId,data);
        })
    }
};

// --------------------------- Build List of Items ---------------------------------------
var getDataBuildList = function (pageId) {
    if (pageId === 'main') {
        db.collection("main").where("isVisable", "==", true)
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    createListItem(pageId, doc.id);
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
                    createListItem(pageId, doc.id);
                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
    }
};

// ---------------------- Delete Item --------------------------
var deleteItem = function (pageId, item) {

};