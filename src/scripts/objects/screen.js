const screen = {
    userProfile: document.querySelector('.profile-data'),
    
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                             <img src="${user.avatarUrl}" alt ="Foto de perfil do usuário" />
                             <div class="data">
                                 <h1>${user.name ?? "não possui nome cadastrado"} </h1> 
                                 <p>${user.bio ?? "não possui bio cadastrado"} </p>    
                                 <div class="seguidores">
                                    <p>👥 Seguidores ${user.followers} </p>
                                    <p>👤 Seguindo ${user.following} </p>
                                 </div>
                                           
                             </div> 
                         </div> `

        let repositoriesItens= ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank"  
                                                                    ><h3>${repo.name}</h3>
                                                                    <div class="repo-info">
                                                                        <span> 🍴 ${repo.forks_count}</span>
                                                                        <span> ⭐ ${repo.stargazers_count}</span>
                                                                        <span> 👀 ${repo.watchers_count}</span>
                                                                        <span> 💻 ${repo.language} </span>
                                                                    </div></a></li>`);
        if (user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2> Repositórios </h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }
        let eventItens=''
        user.events.forEach(evento => eventItens += `<li><p><span class="destaque">${evento.repo.name}</span> - ${evento.payload.commits[0].message}</p></li>`);
        if (user.events.length > 0){
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2> Eventos </h2>
                                                <ul>${eventItens}</ul>
                                            </div>`
        }


                        
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    },
}

export {screen}