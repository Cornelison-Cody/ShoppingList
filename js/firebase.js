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

var writeData = function (doc, data) {
    if (doc === 'main') {
        db.collection(doc).doc(data).set({isVisable: true}).then(function () {
            //can add a success dialog
        })
    }
    else {
        db.collection("main").doc(doc).collection("items").doc(data).set({isVisable: true}).then(function () {
            //can add a success dialog
        })
    }
};

// var docRef = db.collection("Main").doc("ShoppingList");
//
// docRef.get().then(function(doc) {
//     if (doc.exists) {
//         console.log("Document data:", doc.data().testItem);
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });


//this is where I left off. This returns all fo the docs to get the main list up and working.
db.collection("main").where("isVisable", "==", true)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id);
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });