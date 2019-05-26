// Promise File System

const fileSystem = require('fs');


function readFile(filePath){
    return new Promise((resolve, reject) => {
        try{
            fileSystem.readFile(filePath, 'utf-8', (error,data) =>{
                if(error) reject(`Error: ${error}`);

                resolve(data);
            });
        }
        catch(ex){
            reject(`Error: ${ex}`);
        }
    });
}

function writeFile(filePath,fileContent){
    return new Promise((resolve, reject) => {
        try{
            fileSystem.writeFile(filePath, fileContent,(error) => {
                if(error) reject(`Error: ${error}`);
                else  resolve(fileContent);
            }) 
        }
        catch(ex)
        {
            reject(`Error: ${ex}`);
        }
    });
}

function appendFile(filePath,fileContent){
    return new Promise((resolve, reject) => {
        try{
            fileSystem.appendFile(filePath, fileContent,(error) => {
                if(error) reject(`Error: ${error}`);
                else  resolve(fileContent);
            }) 
        }
        catch(ex)
        {
            reject(`Error: ${ex}`);
        }
    });
}

function unlink(filePath){
    return new Promise((resolve, reject) =>{
        try{
            fileSystem.unlink(filePath,(error) => {
                if(error) reject(`Error: ${error}`);
                else  resolve('File was deleted');
            })
        }
        catch(ex)
        {
            reject(`Error: ${ex}`);
        }
    })
}

function readFileIfExists(filePath){
    return new Promise((resolve, reject) => {
        fileSystem.access(filePath,(error) => {
            if(error){
                console.error("Error: The specified file does not exist")
            }

            resolve(readFile(filePath));
        });
    })
    
}


module.exports = { readFile, unlink, appendFile, writeFile, readFileIfExists };