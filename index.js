// function updateClock() {
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');
//     const timeString = `${hours}:${minutes}:${seconds}`;
    
//     document.getElementById('clock').textContent = timeString;
// }

// setInterval(updateClock, 1000);
// updateClock(); // initial call to display clock immediately
function updateclock(){
 const now=new Date();
 const hours=now.getHours().toString().padStart(2, '0');
//  const meridiem=hours>=12?"pm":"am";
//  hours=hours% 12 || 12;
//  hours=hours.toString().padStart(2, '0');
 const minutes=now.getMinutes().toString().padStart(2, '0');
 const seconds=now.getSeconds().toString().padStart(2, '0');
 const timeString=`${hours}:${minutes}:${seconds} `;
 document.getElementById("clock").textContent=timeString;
}

setInterval(updateclock, 1000);
updateclock();
