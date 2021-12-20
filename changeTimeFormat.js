/* 
Task : Our Task is to change the format of time from 12 gour to 24 hour format and add 45 min and 45 sec in time string ?

                                    Algorithm
                                ==================
        
        1) We Take Time String in input which is in 12 hour format.

        2) Check time string end's with PM or AM.

        3) split string in three parts hour,min,sec. using split function string.slice(0,string.length-2)split(":")

        3) 
        if(endswith PM)
            if(hour!=12)
                add 12 in hour part and update hour as
                hour=(hour+12)
        else
            hour=hour%12
        
        4) add 45 sec in sec part ,45 min in min part and update hour,min,sec
        
        5) sec=(sec+45)

        6) min=parseInt(sec/60)+min+45

        7) hour+=parseInt(min/60)

        8) sec%=60 and min%=60

        9) hour%=24

        10) merge string hour:min:sec

        11) return updated string

        12) Exit
*/


// function to change format of time

function changeTimeFormat(timeString,min_add=0,sec_add=0){
    let timeArray=timeString.slice(0,timeString.length-2).split(":")
    let hour=parseInt(timeArray[0])
    let min=parseInt(timeArray[1])
    let sec=parseInt(timeArray[2])
    if(timeString.endsWith("PM")){
        if(hour!==12)
            hour=hour+12
    }
    else{
        hour=hour%12
    }
    sec+=sec_add
    min+=(min_add+parseInt(sec/60))
    hour+=parseInt(min/60)
    min%=60
    sec%=60
    hour%=24
    return `${hour}:${min}:${sec}`
}

// some test case
console.log(changeTimeFormat("12:01:00PM",45,45))
console.log(changeTimeFormat("12:01:00AM",45,45))
console.log(changeTimeFormat("11:45:45AM",45,45))
console.log(changeTimeFormat("11:45:45PM",45,45))