//calling json masterlist change location if necessary
let data = require("./masterlist.json");
var classData = data.classes;
var coreClasses = data.CS_core;
var tracks = data.tracks;

//function that given the class key ie "CS101" returns an array with 0 = key, 1 = class name, 2 = # of credits
function getClassInfo(key){
    var classInfo = classData[key];
    var classArray = new Array(key,classInfo.name,classInfo.credits);
    return classArray;
}

//function that given the class key ie "CS101" returns an string with the class name
function getName(key){
    var classInfo = classData[key];
    return classInfo.name;
}

//function that given the class key ie "CS101" returns an string with the class credits
function getCredits(key){
    var classInfo = classData[key];
    return classInfo.credits;
}

//function that given the class key ie "CS101" returns an string with the class description
function getDescription(key){
    var classInfo = classData[key];
    return classInfo.description;
}

//function that given the class key ie "CS101" returns an array of class keys
function getPreReqs(key){
    var classInfo = classData[key];
    return classInfo["pre-reqs"];
}

//function that retuns an array of arrays pulling all 100 level classes each class being an array where 0 = key, 1 = class name, 2 = # of credits
function get100s(){
    var classArray = [];
    for(var k in classData){
        if(k.substr(2,1)==1){
            var c = getClassInfo(k);
            classArray.push(c);
        }
    }
    return classArray;
}

//function that retuns an array of arrays pulling all 200 level classes each class being an array where 0 = key, 1 = class name, 2 = # of credits
function get200s(){
    var classArray = [];
    for(var k in classData){
        if(k.substr(2,1)==2){
            var c = getClassInfo(k);
            classArray.push(c);
        }
    }
    return classArray;
}

//function that retuns an array of arrays pulling all 300 level classes each class being an array where 0 = key, 1 = class name, 2 = # of credits
function get300s(){
    var classArray = [];
    for(var k in classData){
        if(k.substr(2,1)==3){
            var c = getClassInfo(k);
            classArray.push(c);
        }
    }
    return classArray;
}

//function that retuns an array of arrays pulling all 400 level classes each class being an array where 0 = key, 1 = class name, 2 = # of credits
function get400s(){
    var classArray = [];
    for(var k in classData){
        if(k.substr(2,1)==4){
            var c = getClassInfo(k);
            classArray.push(c);
        }
    }
    return classArray;
}

//function that given a track name returns an array of arrays pulling all classes for the given track each class being an array where 0 = key, 1 = class name, 2 = # of credits
//if there is one or more class with options the key (0) will be "options", class name (1) will be the number of those class options need to be taken and # credits (2) will be an array of the option class information
function getTrack(track){
    var trackClasses = tracks[track];
    var classArray = [];
    var repeat = 0;
    
    for (var i in trackClasses){
        var s = trackClasses[i]
        
        if(s.length > 5){
            if (repeat == 0){
                var ors = s.split("/");
                var orsArray = [];
                for(k in ors){
                    var c = getClassInfo(ors[k]);
                    orsArray.push(c);
                }
            }
            repeat++;
        }
        
        else{
            var c = getClassInfo(s);
            classArray.push(c);
        }
    }
    
    if(repeat>0){
        var repArray = new Array("options",repeat,orsArray);
        classArray.push(repArray);
    }
    
    return classArray;
}

//function that returns an array of classes
//each class being an array where 0 = key, 1 = class name, 2 = # of credits
function getCore(year, quarter){
    var q = "quarter" + quarter;
    var y = coreClasses[year];
    var classList = y[q];
    var classArray = [];
    
    for(var i in classList){
        var c = getClassInfo(classList[i]);
        classArray.push(c);
    }
    
    return classArray;
}