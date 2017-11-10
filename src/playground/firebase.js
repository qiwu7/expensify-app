// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });

//         console.log(expenses);
//     });

// database.ref('expenses').on('value', ()=> {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });

//     console.log(expenses);
// });
// database.ref('expenses').push(expenses[1]);


// setup "expenses" with three items (description, note, amount, createdAt)

// database.ref('notes').push({
//     title: 'reourse topics',
//     body: 'React, Angular, Python'
// })


// database.ref('notes/-KyXH-ONh6VY47KjUeJp').update({
//     body: 'buy food'
// });

// const firebaseNotes = {
//     notes : {
//         asdf: {
//             title: 'first note',
//             body: 'this is my note'
//         }, 
//         asdfa: {
//             title: 'another note',
//             body: 'this is my note'
//         }
//     }
// }

// const notes = [{
//     id: '12',
//     title: 'first note',
//     body: 'this is my note'
// }, {
//     id: '761ase',
//     title: 'another note',
//     body: 'this is my note'
// }];

// database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (error) => {
//     console.log('Error with data fetching', error);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (error) => {
//     console.log('Error with data fetching', error);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     })
//     .catch((error) => {
//         console.log('Error fetching data. ', error);
//     });

// database.ref().set({
//     name: 'Qi Wu',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'se',
//         company: 'walter p moore'
//     },
//     isSingle: false,
//     location: {
//         city: 'San Francisco',
//         state: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((error) => {
//     console.log('This failed. ', error);
// });

// database.ref().update({
//    'job/company': 'Facebook',
//    'location/city': 'Palo Alto',
//    stressLevel: 9
// });

// database.ref('isSingle').set(null);
// is equivalent to the following:
// database.ref()
//     .remove()
//     .then(() => {
//         console.log("Remove succeeded.");
//     }).catch((error) => {
//         console.log("Remove failed: " + error.message);
//     });