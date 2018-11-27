console.log(context.last_message);
if(context.last_message["vendor"]) {
    return "";
} else {
    console.log("Did not match form");
}