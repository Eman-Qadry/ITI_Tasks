function copyIndexOf(word,part){
    var point=0;
    var index=-1;

    for(var i =0;i<word.length;i++){
        console.log(word.length);
        if (point===part.length)
            return index;
        
        if (word[i]===part[point]){
            if (index===-1){
                index=i;
            }
            if (point<part.length)
            {
           point++;
            }
        }
        else{
if (index!==-1 && point<part.length){
index=-1;
point=0;
}
        }
      
    }
if (point!=part.length) index=-1;
    return index;
}
console.log(copyIndexOf("welcometoITI eman ITI","ITI"));


function copylastIndexOf(word,part){
    var point=part.length-1;
    var index=-1;

    for(var i =word.length-1;i>=0;i--){
        
        if (point<0)
            return index;
        
        if (word[i]===part[point]){
            
                index=i;
            
            if (point>=0)
            {
           point--;
            }
        }
        else{
if (index!==-1 && point>=0){
index=-1;
point=part.length-1;
}
        }
      
    }
if (point>=0) index=-1;
    return index;
}
console.log(copylastIndexOf("welcometoITI eman ITI","ITI"));