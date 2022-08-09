let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBTn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBTn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    rendeLeads()
})

function rendeLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a href="#" target="_blank"> ${myLeads[i]}</a>
            </li>
        `
    }

    ulEl.innerHTML = listItems
}
