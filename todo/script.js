const list = document.querySelector('.list-self')
const intEl = document.querySelector('.top-int')
const btnEl = document.querySelector('.top-btn')

let itemId = 3

const listItems = [
    {
        id: 1,
        text: 'Text',
        done: false
    },

    {
        id: 2,
        text: 'Text2',
        done: true
    }
]

function render() {
    list.innerHTML = ''
    for(let item of listItems){
        const elem = createHtmlEl(item)
        list.appendChild(elem)
    }

}

function createHtmlEl(item) {
    const divEl = document.createElement('div')
    divEl.classList.add('list-item')
    
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    if(item.done){
        checkbox.checked = true
        divEl.classList.add('list-item_done')
    }
    checkbox.addEventListener('change', () => {
        const searchItem = listItems.find(i=>i.id === item.id)
        searchItem.done = !searchItem.done
        render()
    })
    
    const text = document.createElement('p')
    text.innerText = item.text
    text.classList.add('text')

    const img = document.createElement('img')
    img.src = 'trash.png'
    img.classList.add('trash')
    img.addEventListener('click', () => {
        const idx = listItems.findIndex(i => i.id === item.id)
        listItems.splice(idx, 1)
        render()
    })

    divEl.appendChild(checkbox)
    divEl.appendChild(text)
    divEl.appendChild(img)
        
    intEl.value = ''  
        
    return divEl
}

btnEl.addEventListener('click', () => {
    if(intEl.value){
        const object = {
            id: itemId++,
            text: intEl.value,
            done: false
        }
        listItems.push(object)
    }
    render()
})

render()