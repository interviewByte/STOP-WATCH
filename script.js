    // stopped -> 00:00:00 ->> start
    // running -> 10:30:11 ->> stop reset
    // continue -> 10:30:12 ->> start reset

    const btnstatus = (status) =>{
        // view control display
        // for stop btn ||running || continue
        if(status == "stopped"){
            document.getElementById("startbtn").style.display = "block";
            document.getElementById("stopbtn").style.display = "none";
            document.getElementById("resetbtn").style.display = "none"; 
        }else if(status == "running"){
            document.getElementById("startbtn").style.display = "none";
            document.getElementById("stopbtn").style.display = "block";
            document.getElementById("resetbtn").style.display = "block"; 
        }else if(status == "continue"){
            document.getElementById("startbtn").style.display = "block";
            document.getElementById("stopbtn").style.display = "none";
            document.getElementById("resetbtn").style.display = "block"; 
        }
    }
    // set initial value zero in key form

    let time = {
        min: 00,
        sec: 00,
        ms: 00
    }
    // sellect all btn id
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");
    let ms = document.getElementById("ms");
    btnstatus("stopped");
    // for running case
    const start = ()=>{
        btnstatus("running");

        starttimer = setInterval(()=>{
            time.ms++;

            if(time.ms == 100){
                time.ms = 00;
                time.sec++;
            }else if(time.sec == 60){
                time.sec = 00;
                time.min++;
            }else if(time.min == 60){
                time.min == 00;
                time.sec == 00;
                time.ms == 00;

                // reset
            }
            ms.innerHTML = time.ms;
            sec.innerHTML = time.sec;
            min.innerHTML = time.min;

            if(time.min < 10){
                min.innerHTML = "0" + time.min;
            }
            if(time.sec < 10){
                min.innerHTML = "0" + time.sec;
            }
            if(time.ms < 10){
                ms.innerHTML = "0" + time.ms;
            }
        },10)
    }
// for stop case
const stop = ()=>{
    clearInterval(starttimer);
    btnstatus("continue");
}
//for reset btn property
const reset = ()=>{
    stop();
    time.min = 00;
    time.sec = 00;
    time.ms = 00;

    ms.innerHTML = "00";
    sec.innerHTML = "00";
    min.innerHTML = "00";
    btnstatus("stopped");
}
btnstatus("stopped");