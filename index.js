function shout(string) {
    "Hello!".toUpperCase();
    return string.toUpperCase();

}
function whisper(string) { 
    "GOODBYE!".toLowerCase();
    return string.toLowerCase();

}

function logShout(string) { 
    "hello".toUpperCase();
    console.log("HELLO");
}

function logWhisper(string) {
    "HELLO".toLowerCase();
    console.log("hello");
}

function sayHiToHeadphonedRoommate(string) {
   
    if (string == string.toLowerCase()){
        return "I can't hear you!"; 
    }

    else if (string == string.toUpperCase()) {
        return "YES INDEED!"; 
    }

    else if (string === "Let's have dinner together!")
        return "I would love to!"; 
}
