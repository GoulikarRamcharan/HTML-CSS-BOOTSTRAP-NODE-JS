function greet(){
    var da = new Date();

    var time = da.getHours();
    
    // console.log(time);
    var grt = "";
    if(time > 6 && time <= 12){
         grt= "Good Morning" ;
    }

    if (time > 12 && time <= 16){
         grt = "Good AfterNoon"
    }

    if(time > 16 && time <= 19){
         grt = "Good Evening";
    }

    if(time > 19){
         grt = "Good Night";
    }

    console.log(grt);
}

module.exports = greet ;