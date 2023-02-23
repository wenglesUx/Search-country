const url = "https://restcountries.com/v2/all"
let nome = document.querySelector('#name')
let demonym = document.querySelector('#demonym')
let nativename = document.querySelector('#nativename')
let region = document.querySelector('#region')
let population = document.querySelector('#population')
let dado = document.querySelector('#txt')
let btn = document.querySelector('#button')
let img = document.querySelector('img')
const load = document.querySelector(".load-content")

const flags = async () => {
  
   
        try{

        const response = await fetch(url)
        const data = await response.json()
        load.classList.add("hide")
        
        pais(data)
        formularioCliente(data)
        filtros(data)
        console.log(data)
        

        }
        catch(error){
            console.log(error)
        }


    
   

}


const pais = data => {
    let elementos = ''
    data.map(item => {
        elementos += `
        <article class="card">
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
                    <b>Região: </b>
                    ${item.region}
                </p>
                <p id="link">
                    <a href="post.html?name=${item.name}">Mais informações</a>
                </p>
            </div>
        </article>
        `
    });
    banderas.innerHTML = elementos
}

flags()




const formulario = document.getElementById('formulario');
const inputFormulario = document.querySelector('.inputFormulario');

const formularioCliente = data => {
    formulario.addEventListener('keyup', e => {
        e.preventDefault()
        const letraCliente = inputFormulario.value.toLowerCase()
        // console.log(letraCliente)
        const arrayFiltrado = data.filter(item => {
            const letraApi = item.name.toLowerCase()
            if (letraApi.indexOf(letraCliente) !== -1) {
                return item
            }
        })
        
        pais(arrayFiltrado)
    })
}