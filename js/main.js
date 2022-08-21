const btnSelect = getViewByClass('btn-select');
let count = 0
for (let i = 0; i < btnSelect.length; i++) {
    btnSelect[i].addEventListener('click', function () {
        count++;
        if (count <= 5) {
            document.getElementById('notification').style.display = "none";
            const playerName = this.parentNode.childNodes[1].innerText
            listAppend(playerName);
            buttonDisabled(this)
            // console.log(count)
        }
        else {
            alert("You can only select 5 players")
        }
    })
}

const calculateBtn = getViewById('calculate')
// console.log(calculateBtn)
calculateBtn.addEventListener('click', function () {
    const numberOfPlayers = getViewById('selected-five').childNodes.length - 1;
    const playerCost = getValueByID('player-cost')
    const managerCost = getValueByID('manager-cost')
    const coachCost = getValueByID('coach-cost')
    const totalPlayerCost = playerCost * numberOfPlayers;

    const valueField = getViewById('total-player-cost');
    valueField.innerText = totalPlayerCost;


    console.log(playerCost)
    console.log(numberOfPlayers)
})