const cols = document.querySelectorAll('.col');

document.addEventListener('keydown', event => {
    event.preventDefault()
   if(event.code.toLowerCase() === 'space'){
    setRandomCol()
   }
})

document.addEventListener('click', event => {
    const type = event.target.dataset.type

    if(type === 'lock'){
        const node =event.target.tagName.toLowerCase() === 'i'
        ? event.target
        : event.target.children[0]


        node.classList.toggle('fa-lock-open')
        node.classList.toggle('fa-lock')
    } else if (type === 'copy'){
        copyToClick(event.target.textContent)

    }
})

function gereRandomColor(){

 const hexCodes = '0123456789ABCDEF' 
 let color = ''
 for (let i = 0; i < 6; i++) {
    
    color += hexCodes[Math.floor(Math.random() * hexCodes.length )]
 }

 return '#' + color
}

function copyToClick(text){
   return navigator.clipboard.writeText(text)
}

function setRandomCol(){

    cols.forEach(col =>{
        const isLocked = col.querySelector('i').classList.contains('fa-lock')
        const text = col.querySelector('h2')
        const textColor = gereRandomColor()

        if (isLocked){
            return
        }

        text.textContent = textColor
        col.style.background = textColor
    })
}

setRandomCol()