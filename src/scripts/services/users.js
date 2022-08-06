import {baseUrl} from  'variables.js'

let getUser= async function(userName){
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
}

export {getUser}