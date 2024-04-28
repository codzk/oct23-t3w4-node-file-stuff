
const fs = require("node:fs");
const fsPromises = require("node:fs/promises");

console.log("Promise output:" + doesFileExistPromise("./pokemonStats.json"));
console.log("Sync output:" + doesFileExistSync("./pokemonStats.json"));

(async()=> {
    let asyncResult = await doesFileExistASync("./pokemonStats.json");
    console.log("Async output:" + asyncResult.size);

})();


/*

async function to get pokemon data 

await for result

update the screen



*/




async function doesFileExistASync(targetPath){

    return await fsPromises.stat(targetPath);
    // let result = false;

    // result = await fsPromises.stat(targetPath);

    // return result;



}

function doesFileExistPromise(targetPath){
    let result = false;

    return new Promise((resolve, reject) => {
        fsPromises.stat(targetPath).then(statData => {
            if (statData.size || statData.birthtimeMs) {
                result = true;
                console.log(result);
                resolve(result);
            }else {
                resolve(result);
            }
        }).catch(error => {
            reject(error);
        });
    });

    



    // function (data, data, whatever, callbackFunction)
    // fs.exists(targetPath, doSomethingWithResult());
    // fs.exists(targetPath,(existsResult) => {
    //     result = existsResult;
    //     return result;

    // });

    // return result;
}

function doesFileExistSync(targetPath){
    let result = false;

    if (fs.existsSync(targetPath)){
        // file exists
        result = true;

    }else {
        // file does not exist
        result = false;
    }
    // TODO: Find file logic goes here
    // take time as well, but we can force the app to halt
    // until it has a result
    

    return result;
}

function createJsonFile(targetPath, data){
    // TODO: wishlist item because a json file already exists for us
}


async function loadDataFromFile(targetPath){
    let data = null;
    
    let doesFileExist = await doesFileExistASync(targetPath);

    if (doesFileExist){

        data = await fsPromises.readFile(targetPath, { encoding: 'utf-8'});
        data = JSON.parse(data);

    }

    


    return data;
}

(async () =>{

    let fileData = await loadDataFromFile("./pokemonStats.json");
    console.log(fileData);

})()

/*
Technique 1 to modify keys in JSON:
function editPokemonCaught(newData){}
function editFavouriteType(newData){}
function editPokemonCompletionNumber(newData){}
*/

/*
Technique 2 to modify keys in JSON:
function editKey(targetKey, newData){}
*/


function saveDataToFile(targetPath, data){
    // TODO: Write data to JSON file logic goes here
}