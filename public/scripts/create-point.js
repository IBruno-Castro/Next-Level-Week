//Seletor de estados
function populateUFs(){
    const ufSelect =  document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res=>res.json())
    .then(states => {
        states.sort(function(a, b) {
            return (a.nome).localeCompare(b.nome)
        })
        
        for(const state of states){
            ufSelect.innerHTML +=  `<option value="${state.id}">${state.nome}</option>`
        }

    })
}

populateUFs()

//Seletor de cidades

function getCities(event){
    const citySelect =  document.querySelector("[name=city]")
    const stateInput =  document.querySelector("[name=state]")

    const indexOfSelectState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectState].text

    const ufValue = event.target.value
    const url =  `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/microrregioes`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true
    
    fetch(url)
    .then(res=>res.json())
    .then(cities => {
        cities.sort(function(a, b) {
            return (a.nome).localeCompare(b.nome)
        })
        
        for(const city of cities){
            citySelect.innerHTML +=  `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change",getCities)

//Itens de coleta

const CollectedItems = document.querySelector("input[name=items]")

//muda os itens pra selected
const ItemsToCollect = document.querySelectorAll(".items-grid")

for(const item of ItemsToCollect){
    item.addEventListener("click", handleSelectItem)
}

//envia a informação pro banco de dados
let selectedItems = []

function handleSelectItem(event) {
    const ItemLi = event.target

    //adicionar ou remover uma classe com js
    ItemLi.classList.toggle("selected")

    const ItemId = ItemLi.dataset.id

    //verificar se existem itens selecionados, se sim pegar os itens selecionados
    const AlreadySelected = selectedItems.findIndex( (item) => {
        return item == ItemId
    })

    //se já estiver selecionado, tirar da seleção
    if(AlreadySelected >=0){
        const FilteredItems = selectedItems.filter(
            (item) => {
                return item != ItemId
            }
        )

        selectedItems = FilteredItems
    } else {
    //se não estiver selecionado, adicionar a seleção
        selectedItems.push(ItemId)

    }

    //atualizar o campo escondido com os itens selcionados
    CollectedItems.value = selectedItems
}
