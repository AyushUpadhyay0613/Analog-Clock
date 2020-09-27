const secDiv=document.getElementById('sec');
const minDiv=document.getElementById('min');
const hourDiv=document.getElementById('hour');

setInterval(updateclock,1000);

function updateclock(){
    
    let date=new Date();
    let sec=date.getSeconds()/60;
    let min=(date.getMinutes()+sec)/60;
    let hour=(date.getHours()+min)/12;
    
    secDiv.style.transorm="rotate("+(sec*360)+"deg)";
    
    minDiv.style.transorm="rotate("+(min*360)+"deg)";
    
    hourDiv.style.transorm="rotate("+(hour*360)+"deg)";
    
}

updateclock();