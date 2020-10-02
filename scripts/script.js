let timeContainer = document.getElementById("time");


function getTime(){
    let time = new Date();
    let newYear = new Date(time.getFullYear()+1,0,1);
//    let days = newYear.getDay()-time.getDay();
  //  let hours = time.getHours().toString();
   // let minutes = time.getMinutes().toString();
    //let seconds = time.getSeconds().toString();

    let diff = newYear.getTime() - time.getTime();

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -=  days * (1000 * 60 * 60 * 24);

    let hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    let mins = Math.floor(diff / (1000 * 60));
    diff -= mins * (1000 * 60);

    let seconds = Math.floor(diff / (1000));
    diff -= seconds * (1000);

    timeContainer.innerText = formatTime(days)+ ":" +
        formatTime(hours) + ":" +
        formatTime(mins) + ":" +
        formatTime(seconds);

    function formatTime(time){
        return time.toString().length<2? "0"+time:time;
    }

}
getTime();
setInterval(getTime,1000);