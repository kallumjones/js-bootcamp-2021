console.log('start');

const dbPassword = 1234;

const fetchUserProfile = (callback) => {
    setTimeout(() => {
        callback({
          id: 2,
          profile: "@johndoe",
        });
      }, 3000);
}

const loginUser = (username, password, callback, failureCallback) => {
    setTimeout( () => {
        console.log('Fecthing user', username);
        if(password === dbPassword){
            callback ({account: username});
        } else {
            failureCallback({message: 'password did not match'});
        };
        }
    ,2000)
};

const callbackSucess = (userRecieved) => {
    console.log('Recieved user', userRecieved)};

const callbackFailure = (error) => {
    console.log(error);
}


const loggedInUser = loginUser(
    'kal@foo.com',
    1234, 
    (userRecieved) => {
        console.log('Recieved user', userRecieved)

        fetchUserProfile((profile) => {
            console.log('Profile recieved', profile);
        })
    }, 
     (error) => {
        console.log(error)
    });

console.log()

console.log('end');
//idea of callback is can put a function into another depending on sucess or not
//if you have lots of callbacks nested within each other is called CALLBACK HELL

