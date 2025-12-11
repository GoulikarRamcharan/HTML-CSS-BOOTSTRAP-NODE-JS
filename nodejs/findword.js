function namelength(arr){
    for(var i = 0; i < arr.length;i++){
        if(arr[i].length > 4){
            console.log(arr[i]);
        }
    }
}

namelength(["ramcharan","vinya","raj","shya","siya","Tejas","Vedanth"]);