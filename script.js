


let arey = [
    {
        name:warframe,
        oter:warfa
    },
    {
        name:horizon,
        oter:horiz
    },
    {
        name:celest,
        oter:cel
    }
]




function searchText(){
    let searchInput = document.querySelector('.find__it')

let filteredItems = arey.filter(item => item.name.toLowerCase().includes(searchInput) || item.oter.toLowerCase().includes(searchInput)) 
if (filteredItems.length > 0){
    document.getElementById(element.id).scrollIntoView({ behavior: 'smooth' })
}
}

