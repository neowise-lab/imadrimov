const load = document.querySelector('.load')
const pt = document.querySelector('.pt')

const addProject = (model) => {
    let node = pt.content.cloneNode(true)
    let photo = node.querySelector('.project.photo')
    let title = node.querySelector('.project.title')
    let desc = node.querySelector('.project.desc')

    photo.setAttribute('src', model.thumb)
    title.innerText=model.title
    desc.innerText=model.description
}

load.onclick = () => {

    axios.get('http://localhost:3000/api/v1/', { 
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:5500',
        }
     })
        .catch(err => console.log(err))
        .then(resp => {
            console.log(resp);
        })
}