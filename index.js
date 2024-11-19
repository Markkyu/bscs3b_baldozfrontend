// console.log(fetch('https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg')
// .then(response => {
//     console.log(response)
//     return response.blob()
// })
// .then(blob => {
//     console.log(blob)
//     document.querySelector('#myImage').src=URL.createObjectURL(blob)
// })
// .catch(error => {
//     console.log(error)
// }))

const content = document.querySelector('#content')

window.addEventListener('load', () => {
    getUsers();
})

function getUsers(){
    
    let html=''

    fetch('https://bscs2bapi-crud.onrender.com/', {mode: 'cors'})
    .then((response)=>{
        console.log(response)
        return response.json();
    }) 
    .then((data)=>{
        data.forEach((element)=>{
            html += `<li> ${element.first_name} ${element.last_name} </li>`
        })
        content.innerHTML = html
    })

    .catch((error)=> {
        console.log(error)
    })
}
