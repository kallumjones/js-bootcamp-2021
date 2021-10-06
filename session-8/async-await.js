//ES6:

//async/await

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

const retrieveUserDetails = async () => {
    const password = 1234;
    try{

        const loggedInUser = await loginInUser('kal@foo.com', password);
        console.log('Recieved User', loggedInUser);

        const profileForUser = await fetchUserProfile();
        console.log('Recieved profile', profileForUser);
    } catch (err){
        console.log(err);
    }

}

retrieveUserDetails();

console.log('END');