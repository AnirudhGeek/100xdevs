const bootUpMessage: string = "Hey there";
console.log(bootUpMessage);

const name1 = "Anirudh";
console.log(name1);

//function => infered return type
function inferedReturn(systemPrompt: string, userPrompt: string) {
  return `${systemPrompt}\n${userPrompt}`;
}

const infRe = inferedReturn("hey there", "from implicit return type");
console.log(infRe);


//function => explicit return type
function explicitReturn(systemPrompt: string, userPrompt: string): string {
  return `${systemPrompt}\n${userPrompt}`;
}

const expRe = explicitReturn("hey there", "from explicit return type");
console.log(expRe);

//void => returns nothing or void 
function logSystemEvents(event : string, severity : "info" | "warning" | "error"){
  console.log(`${event}\n${severity}`)
}

logSystemEvents("hey there","info")