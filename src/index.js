
const fs = require("node:fs");
const fsPromises = require("node:fs/promises");

console.log("Promise output:" + doesFileExistPromise("./pokemonStats.json"));
console.log("Sync output:" + doesFileExistSync("./pokemonStats.json"));

function doesFileExistASync(targetPath){
    
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


function loadDataFromFile(targetPath){
    let data = null;

    // TODO: Load data from file logic goes here
    // Reading data from files takes time
    // promises or async/await



    return data;
}

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