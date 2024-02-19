const allBtn = document.getElementsByClassName('add-ticket');
let count = 0;
let seat=40;
for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        
        count = count + 1;
        seat= seat-1;
        
        if(count>4){
            document.getElementById('alert').classList.remove('hidden')
        }
        else{
            setInnerText('add-ticket-num',count)
            event.target.classList.add('bg-green-500');
        }
        // document.getElementById('seat-left').innerText=seat;
        setInnerText('seat-left',seat)

    })
}
function setInnerText(id,value){
    document.getElementById(id).innerText=value;
}
