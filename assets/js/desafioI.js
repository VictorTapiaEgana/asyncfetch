const API_URL = 'https://jsonplaceholder.typicode.com/posts'

// Direccion para probar el Error 👇
// const API_URL = 'https://jsonpeholder.typicode.com/postsssss'

document.getElementById('error').innerHTML = '' 

async function getPosts(){

    try {
        
        const respuesta =  await fetch(API_URL)        
        const post = await respuesta.json()

        MostrarDatos(post)        
    
    } catch (error) {

        document.getElementById('error').innerHTML = `<h4 style="color:red"> Se a producido un error : "${error}"</h4>`;        

    }
}

function MostrarDatos(arrayDatos){   

    let fila ='';

    arrayDatos.forEach(post => {
    
           fila += `<li>` +
                      `<strong> ${post.title} </strong>` +
                      `<p> ${post.body}</p>` +
                    `</li>`;
    });

     document.getElementById('post-data').innerHTML = `<ul> ${fila} </ul>`;
}