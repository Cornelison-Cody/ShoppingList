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

var docData = {
    stringExample: "Hello world!",
    booleanExample: true,
    numberExample: 3.14159265,
    dateExample: new Date("December 10, 1815"),
    arrayExample: [5, true, "hello"],
    nullExample: null,
    objectExample: {
        a: 5,
        b: {
            nested: "foo"
        }
    }
};
// db.collection("test").add(docData);

db.collection("test")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.data().stringExample);

        });
    });


