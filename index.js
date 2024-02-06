const KeyAuth = require('./module/KeyAuth.js');
const moment = require("moment");
const Database = require("@replit/database");
const db = new Database();
const readline = require('readline');

const fs = require('fs');
console.log("[-] Hello World");
console.log("[-] This is TechJacker Alpha (Unreleased)");
console.log("[+] Type 'help' for a list of commands");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const KeyAuthApp = new KeyAuth(
    process.env['name'],
  process.env['id'],
  process.env['token'],
    "1.0",
);
 var username, password, license, email = "";
function keyAuth(){
  const CRL = readline.createInterface({ input: process.stdin, output: process.stdout });
  (async () => {
      await KeyAuthApp.Initialize();

      await CRL.question("\n [1] Login\n [2] Register\n [3] Upgrade\n [4] License key only\n [5] Forgot password\n\n Choose option: ", async (option) => {
          option = await parseInt(option);

          switch (option) {
              case 1:
                  await CRL.question("\n Whats your Username: ", async (user) => {
                      username = user;
                      await CRL.question(" Whats your Password: ", async (pass) => {
                          password = pass;
                          await KeyAuthApp.login(username, password);
                          Dashboard();
                          CRL.close();
                      });
                  });
                  break;
              case 2:
                  await CRL.question("\n Whats your Username: ", async (user) => {
                      username = user;
                      await CRL.question(" Whats your Password: ", async (pass) => {
                          password = pass;
                          await CRL.question(" Whats your License: ", async (lic) => {
                              license = lic;
                              await CRL.question(" Whats your Email: ", async (email_) => {
                                  email = email_;
                                  await KeyAuthApp.register(username, password, license, email);
                                  Dashboard();
                                  CRL.close();
                              });
                          });
                      });
                  });
                  break;
              case 3:
                  await CRL.question("\n Whats your Username: ", async (user) => {
                      username = user;
                      await CRL.question(" Whats your License: ", async (key) => {
                          license = key;
                          await KeyAuthApp.upgrade(username, license);
                          console.log("You have Successfully upgraded your account!");
                          process.exit(0);

                      });
                  });
                  break;
              case 4:
                  await CRL.question("\n Whats your License: ", async (lic) => {
                      license = lic;
                      await KeyAuthApp.license(license);
                      Dashboard();
                      CRL.close();
                  }
                  );
                  break;
              case 5:
                  await CRL.question("\n Whats your Username: ", async (user) => {
                      username = user;
                      await CRL.question(" Whats your Email: ", async (email_) => {
                          email = email_;
                          await KeyAuthApp.forgot(username, email);
                          console.log(KeyAuthApp.response.message);
                          process.exit(0);

                      });
                  });
                  break;
              default:
                  console.log("Invalid option");
                  CRL.close();
                  break;
          }

      });

      async function Dashboard() {
          console.log("\n Logged In!");

          //User Data
          console.log(` Username: ${KeyAuthApp.user_data.username}`);
          console.log(` IP address: ${KeyAuthApp.user_data.ip}`);
          console.log(` Hardware-Id: ${KeyAuthApp.user_data.hwid}`);
          console.log(
              ` Created at: ${moment
                  .unix(KeyAuthApp.user_data.createdate)
                  .format("DD-MM-YYYY - HH:mm:ss")}`
          );
          console.log(
              ` Last Login: ${moment
                  .unix(KeyAuthApp.user_data.lastlogin)
                  .format("DD-MM-YYYY - HH:mm:ss")}`
          );

          for (var i = 0; i < KeyAuthApp.user_data.subscriptions.length; i++) {
              console.log(
                  ` [${i}] Subscription name: ${KeyAuthApp.user_data.subscriptions[i].subscription
                  } | Expires at: ${moment
                      .unix(KeyAuthApp.user_data.subscriptions[i].expiry)
                      .format("DD-MM-YYYY - HH:mm:ss")} | Time left in seconds ${KeyAuthApp.user_data.subscriptions[i].timeleft
                  }`
              );
          }

          console.log("\n\n Resetting back to main panel in 5 seconds...");
   prompt(KeyAuthApp.user_data.username)
CRL.close();
      }
  })();
}


function accountCr(){
  console.log("ACCOUNT CREATION MODE");
  readline.question(`enter username`, username=>{
    readline.question(`enter password`, password=>{
      console.log("more secure sign up now zane...")
      console.log("ion do this bc we gonna get doxxed...")

      readline.question(`what is the sign up code?`, code=>{
        if (code == process.env['key']){
          console.log("Creating Account. . .")
          db.set(username, password).then(()=>{
            console.log(`created account ${username}`)
            readline.close();
          });
        }
      })
    });
  })
}

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
"hjack": "login to be able to bypass",
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

function prompt(user){
rl.question(`[-] ${user}, Please choose a command:`, (answer) => {
  if (answer == "hjack"){
   console.log("DEPRECATED");
    prompt(user);
  } else{
  console.log(`Indexing: ${answer}`);
  if (commands[answer]){
    console.log(`[+] ${answer} is a valid command.`);
    console.log(`[+] ${commands[answer]} `);
    run(commands[answer]);
    prompt(user);
  }else{
    console.log(commands[answer])
    console.log("Invalid cmd");
    prompt(user);
  }
  }
});
}
keyAuth();