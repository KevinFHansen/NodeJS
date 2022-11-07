/* Why promises
If we didn't write asynchronous code we should have blocking code. 
Use cases of asynchronous code: 
Data traveling over a network (fetch)
- Reading and writing files
- Import when asynchronouusly calling URLS (import library from "URL")
- Interacting with a database
- Heavy calculations
- Encryption/decryption. 
- Event listeners (DOM)
Basically anything that takes time (since we dont wna tot block and prevent other code from running.)

Solution 1: 
Call Back functions 
Problem: Callback helle, Pyrmamid of Doom

PROMISES ARE BASERET PÅ CALLBACKS. BARE SYNTAKTISK SUKKER
Promises can have two different states:
- Pending 
- Fulfilled 
    - Resolved, Rejected
*/

new Promise((resolve, reject) =>{
    try{
        throw Error;
        resolve("yay");
    } catch (errorMessage) {
        reject("Nay")
    }
    
}).then(successMessage => console.log(successMessage))
.catch(errorMessage => console.log(errorMessage))


function somethingGoodSomethingBad(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{  
                resolve("Good")
            } catch (errorMessage){
                console.log(errorMessage)
                reject("Bad")
            }
        }, 3000)
    });
}

somethingGoodSomethingBad()
.then(shouldBeGood => console.log(shouldBeGood))
.catch(shouldBebad => console.log(shouldBebad))


function howAwesomeAmI(name){
    return new Promise((resolve, reject) => {
        resolve(`${name} is very awesome`)
    })
}

howAwesomeAmI("Anders")
.then(answer => console.log(answer))



//ASYNC AWAIT
//ASYNC AWAIT ER BASSERET PÅ ASYNC AWAIT 

// Promise.all(givne funktioner) -- Sørger for alle køre parallelt 
async function asyncAwaitExample() {
    try{
    const shouldBeGood = await somethingGoodSomethingBad();
    console.log(shouldBeGood)
    } catch (errorMessage) {
        console.log(errorMessage)
    }
    
}
asyncAwaitExample();
