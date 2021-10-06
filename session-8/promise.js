//Promises:

//Statuses:
// - Pending 
// - Fulfilled/Resolved
// - Rejected

console.log('start')

const dbPassword = 1234;

const fetchUserProfile = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 2,
                profile: "@johndoe",
              })
        },3000)
    }) 
}

const loginInUser = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Fetching user", username);
  
        if (password === dbPassword) {
            // matched:
            resolve({ account: username });
        } else {
            reject({ message: "Passwords did not match" });
        }
        }, 2000);
    })
};

loginInUser('john@foo.com',1234)
    .then((userDetails) => {
        console.log('received userDetails', userDetails);
        return fetchUserProfile();
    })
    .then((profile) => {
        console.log('Received user Profile', profile);
    })
    .catch(err => {
        console.error('failed: err');
    }); 

console.log(loginInUser('john@foo.com',1234));