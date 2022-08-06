import {getUser} from  '/src/scripts/services/users.js'
import {getRepositories} from '/src/scripts/services/repositories.js'
import {getEvents} from '/src/scripts/services/events.js'
import {user} from '/src/scripts/objects/user.js'
import {screen} from '/src/scripts/objects/screen.js'


document.getElementById('btn-search').addEventListener('click', () =>{
    const userName = document.getElementById('input-search').value
    if(validateEmptyInput(userName)) return
    getUserProfile(userName)
})
document.getElementById('input-search').addEventListener('keyup', (e) =>{
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        if(validateEmptyInput(userName)) return
        getUserProfile(userName)
    }
})
function validateEmptyInput(userName) {
    if (userName.length === 0){
        alert('Preencha o campo com o nome do usuário do GitHub')
        return true
    }
}

async function getUserProfile(userName) {
    const userResponse = await getUser(userName)

    if(userResponse.message === "Not Found"){
        screen.renderNotFound()
        return
    }
    
    const repositoriesResponse = await getRepositories(userName)
    const eventsResponse = await getEvents(userName)
    
    let eventPush = eventsResponse.filter((event) =>  event.type == 'PushEvent')
    
    let eventCreate = eventsResponse.filter((event) =>  event.type == 'CreateEvent')

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventCreate, eventPush)

    screen.renderUser(user)
}
