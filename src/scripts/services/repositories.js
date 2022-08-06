import {baseUrl} from  '../variables.js'

async function getRepositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=10`)
    return await response.json()
}

export {getRepositories} 