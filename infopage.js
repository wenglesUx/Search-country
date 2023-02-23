

const load = document.querySelector(".load-content")
const url = "https://restcountries.com/v2/all"
const banderas = document.getElementById('banderas')
const query = new URLSearchParams(window.location.search)
const params = query.get('name')


document.addEventListener("DOMContentLoaded", e => {
    flags()
})

const flags = async () => {
   
    try {
        const res = await fetch(url)
        const data = await res.json()
        load.classList.add("hide")
        
        const filtroData = data.filter(item => item.name === params)

        pais(filtroData)
        
        
    } catch (error) {
        console.log(error)
    }
}

const pais = data => {
    let elementos = ''
    data.forEach(item => {
        elementos += `
        <article class="card" id="post-page">
            <img src="${item.flag}" alt="" class="img-fluid">
            <div class="card-content">
                <h3>${item.name}</h3>
                <p>
                    <b>População: </b>
                    ${item.population}
                </p>
                <p>
                    <b>Capital: </b>
                    ${item.capital}
                </p>
                <p>
                    <b>Regi: </b>
                    ${item.region}
                </p>
                
                <p>
                <b>fronteiras: </b>
                ${item.borders}
            </p>
            <p>
            <b>Pais independente: </b>
            ${item.independent}
        </p>
     
            </div>
        </article>
        `
    });
    banderas.innerHTML = elementos
}