const btnSelect = getViewByClass('btn-select');
let count = 0
for (let i = 0; i < btnSelect.length; i++) {
    btnSelect[i].addEventListener('click', function () {
        count++;
        if (count <= 5) {
            this.innerText = 'Selected';
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
    if (calculateValidate('player-cost')) {
        const numberOfPlayers = getViewById('selected-five').childNodes.length - 1;
        const playerCost = getValueByID('player-cost')
        const totalPlayerCost = playerCost * numberOfPlayers;

        setValueByID('total-player-cost', totalPlayerCost)
    }
    else {
        alert("Please enter a valid player cost")
        setValueByID('total-player-cost', "error")
    }
})



const calculateTotalBtn = getViewById('calculate-total')
calculateTotalBtn.addEventListener('click', function () {
    if (calculateValidate('manager-cost') && calculateValidate('coach-cost')) {
        const playerCost = parseFloat(getViewById('total-player-cost').innerText);
        const managerCost = getValueByID('manager-cost')
        const coachCost = getValueByID('coach-cost')

        const totalCost = playerCost + managerCost + coachCost;

        setValueByID('total-cost', totalCost)
    }
    else {
        alert("Please enter a valid player cost")
        setValueByID('total-cost', "error")
    }

})