function scoreGPA(point) {
    let grade = null
    if(point >=81 && point <=100){
        GPA ="A"
    }
    if(point >=71 && point <=80){
        GPA ="B"
    }
    if(point >=61 && point <=70){
        GPA ="C"
    }
    if(point >=51 && point <=60){
        GPA ="D"
    }
    if(point >=0 && point <=50){
        GPA ="F"
    }else
        grade = "Pont"
}
console.log(scoreGPA)