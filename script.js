function calculeteTip(event){
    event.preventDefault();
    var bill = document.getElementById('bill').value;
    var servieQual = document.getElementById('servieQual').value;
    var people = document.getElementById('people').value;

    if(bill == '' | servieQual == 0){
    alert( 'Por favor preencha os valores')
    return
    }

    if(people == ' ' | people <=1){
        people = 1
        document.getElementById('each').style.display='none'
    }else{
        document.getElementById('each').style.display='block'
    }
    var total = (bill * servieQual) / people
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total
    document.getElementById('totalTips').style.display = 'block'
}

    
document.getElementById('totalTips').style.display='none'
document.getElementById('each').style.display='none'

document.getElementById('tipForm').addEventListener('submit', calculeteTip);
