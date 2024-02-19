const allBtn = document.getElementsByClassName('add-ticket');
let count = 0;
let seat = 40;
let total= 0;
for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        const seatName= btn.innerText;
        const economyClass= document.getElementById('economy')
        const getEconomyClass= economyClass.innerText;
        
        const priceClass= document.getElementById('price')
        const getPriceClass= priceClass.innerText;
        const inSeat= document.getElementById('seat-container')
        inSeat.classList.add('hidden')

        count = count + 1;
        seat = seat - 1;
        total= getPriceClass*count;
       

        if (count > 4) {
            document.getElementById('alert').classList.remove('hidden')
        }
        else {
            setInnerText('add-ticket-num', count);
            event.target.classList.add('bg-green-500');
            setInnerText('price-count',total);
            const selectedSeat = document.getElementById("seat-track");

            const li = document.createElement('li')

            const p = document.createElement('p')
            p.innerText=seatName;

            const p2 = document.createElement('p')
            p2.innerText=getEconomyClass;

            const p3 = document.createElement('p')
            p3.innerText=getPriceClass;

            li.appendChild(p);
            li.appendChild(p2);
            li.appendChild(p3);
            selectedSeat.appendChild(li);
        }
        // document.getElementById('seat-left').innerText=seat;
        setInnerText('seat-left', seat);

        //Seat number added

        // const seatName= event.target.parentNode.childNodes[1].innerText;

        // setInnerText('seat-name',seatName);

    })
}
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
