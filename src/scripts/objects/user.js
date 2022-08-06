const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '' ,
    repositories: [],
    events: [],

    setInfo(githubUser){
        this.avatarUrl = githubUser.avatar_url
        this.name = githubUser.name
        this.bio = githubUser.bio
        this.userName = githubUser.login
        this.followers = githubUser.followers
        this.following = githubUser.following
    },
    setRepositories(repositoriesResponse) {
        this.repositories = repositoriesResponse
    },
    setEvents(eventPush, eventCreate){
        this.events = eventPush && eventCreate
    },
    
}

export {user}