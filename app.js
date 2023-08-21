
let total = 0;
function imgClicked(target){
     const selectedItemContainer=document.getElementById('selected-items');
    const itemName = target.parentNode.childNodes[5].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);

    const price = (target.parentNode.childNodes[7].innerText.split(' ')[0]);
    total = parseInt(total) + parseInt(price);   
    document.getElementById('total').innerText = total.toFixed(2); 

}

