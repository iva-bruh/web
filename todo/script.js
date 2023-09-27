const list = document.querySelector('.list-self')
const intEl = document.querySelector('.top-int')
const btnEl = document.querySelector('.top-btn')

btnEl.addEventListener('click', () => {
    if (intEl.value.length){
        const divEl = document.createElement('div')
        divEl.classList.add('list-item')
    
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.addEventListener('click', () => {
            divEl.classList.add('list-item_done')
        })
    
        const text = document.createElement('p')
        text.innerText = intEl.value
        text.classList.add('text')

        const img = document.createElement('img')
        img.src = 'trash.png'
        img.classList.add('trash')
        img.addEventListener('click', () => {
            divEl.remove()
        })
        divEl.appendChild(checkbox)
        divEl.appendChild(text)
        divEl.appendChild(img)
    
        list.appendChild(divEl)
    
        intEl.value = ''    
    }
})