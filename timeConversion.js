
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
function timeConversion(s) {
    
        let hour = parseInt(s.substring(0, 3));
        let minute = s.substring(3, 6);
        let second = s.substring(6, 8);
        let convert_h = 0;
        if(s.includes('AM')){
            if(hour == 12 ){
                convert_h= hour -12;
                return "0"+convert_h+":"+minute + second ;
            }else if(hour >=1 && hour<=11){
            
                    convert_h = hour;
                    return "0"+hour + ":" +minute + second ;
                    
                }
            }else if(s.includes('PM')){
            if(hour >= 12){
                convert_h = hour;
                return hour + ":" +minute + second;
            }else if(hour >=1 && hour<=11) {
            
                convert_h= hour +12;
                return convert_h+":"+minute + second;
                }
            }
        };

        console.log(timeConversion('09:45:23AM'));
        console.log(timeConversion('19:45:23PM'));
        console.log(timeConversion('12:45:23AM'));
        console.log(timeConversion('09:45:23PM'));
