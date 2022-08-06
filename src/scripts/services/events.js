import {baseUrl, eventCount} from  'variables.js'

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${eventCount}`)
    return await response.json()
}

export {getEvents} 