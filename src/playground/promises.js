const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Andrew',
        //     age: 26
        // });
        // resolve('This is my resolved data');
        // resolve('This is my other resolved data'); // get ignored bc/ only resolve once
        reject('something went wrong!');
    }, 5000);
});

console.log('before');

/**
 *  99% of time, promises will be created by the library we are using, like firebase.
 *  we are simply attach task handlers.
 */ 
promise.then((data) => { // resolved
    console.log('1', data);
    return 'some data';
}).then((str) => {
    console.log('does thsi run', str);
}).catch((error) => { // rejected
    console.log('error: ',error);
});

console.log('after');