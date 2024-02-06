
const readline = require('readline');
console.log("[-] Hello World");
console.log("[-] This is TechJacker Alpha (Unreleased)");
console.log("[+] Type 'help' for a list of commands");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var commands = {
  "help": "Displays a list of commands",
  "login": "Logs you in techjacker",
  "logout": "Logs you out of techjacker",
  "signup": "Signs you up for techjacker",
  "bypasses": "Displays a list of bypasses",
  "polls": "Displays the polls",
  "/": "Enables chat like mode",
  "global": "Enables global chat",
  "exit": "Exits the program",
  "clear": "Clears the console",

  //Cmd Line Coding.
  "cmd-code": "Opens the command line to start command line coding",
  "echo": "Prints the given text",
  "print": "Prints the given text",
  "var": "Creates a variable with the given name and value",
  "set": "Sets the value of a variable",
  "get": "Gets the value of a variable",
  "if": "Executes the given code if the given condition is true",
  "while": "Executes the given code while the given condition is true",
  "for": "Executes the given code for the given number of times",
  "break": "Breaks out of the current loop",
  "continue": "Continues to the next iteration of the current loop",
  "function": "Creates a function with the given name and code",
  "call": "Calls a function with the given name and arguments",
  "return": "Returns the given value from a function",
  "try": "Attempts to execute the given code and catches any errors",
  "catch": "Catches any errors thrown by the given code",
  "throw": "Throws an error with the given message",
}

function run(cmd) {
  
    if (cmd.startsWith("echo ")){
      console.log(cmd.substring(5));
      return "E";
    }
    if (cmd.startsWith("print ")){
      console.log(cmd.substring(6));
      return "P";
    }
    if (cmd.startsWith("var ")){
      var name = cmd.substring(4, cmd.indexOf(" "));
      console.log("Variable Made");
      console.log(name)
      return "Y";
    }
  if(cmd.toLowerCase() ==("clear")){
    console.clear();
    return prompt();
  }
}

function prompt(){
rl.question('[-] Please choose a command:', (answer) => {
  console.log(`Indexing: ${answer}`);
  if (commands[answer]){
    console.log(`[+] ${answer} is a valid command.`);
    console.log(`[+] ${commands[answer]} `);
    run(commands[answer]);
    prompt();
  }else{
    console.log(commands[answer])
    console.log("Invalid cmd");
    prompt();
  }
});
}
prompt();