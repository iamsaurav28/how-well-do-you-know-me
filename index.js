var readlinesync = require('readline-sync');

var score = 0;

var username = readlinesync.question("kindly type your name?");
console.log(username);

var welcomemessage = "welcome " +username;
console.log(welcomemessage);

var startgame = ("how well you know saurav");
console.log(startgame);

var question1  = readlinesync.question("which is saurav fav indian dish? ");

if(question1 === "pavbhaji") {
  console.log(`you are right ${username}`)
score = score + 1;
  console.log("score is:" + score)
}else{
  console.log(" you are wrong! ")
  score = score - 1;
  console.log("score is:" + score)
}


var question1  = readlinesync.question(" do saurav like tmkoc, say yes or no?");

if(question1 === "yes") {
  console.log(`you are right ${username}`)
  score = score + 1;
  console.log("score is:" + score)
}else{
  console.log(" you are wrong! ")
  score = score - 1;
  console.log("score is:" + score)
}

var question1  = readlinesync.question(" do saurav love to sing songs, say yes or no?");

if(question1 === "yes") {
  console.log(`you are right ${username}`)
score = score + 1;
  console.log("score is:" + score)
}else{
  console.log(" you are wrong! ")
  score = score - 1;
  console.log("score is:" + score)
}

var question1  = readlinesync.question(" which city is his hometown? ");

if(question1 === "gujarat") {
  console.log(`you are right ${username}`)
score = score + 1;
  console.log("score is:" + score)
}else{
  console.log(" you are wrong! ")
  score = score - 1;
  console.log("score is:" + score)
}

var question1  = readlinesync.question(" is he engineer? ");

if(question1 === "yes") {
  console.log(`you are right ${username}`)
score = score + 1;
  console.log("score is:" + score)
}else{
  console.log(" you are wrong! ")
  score = score - 1;
  console.log("score is:" + score)
}

var question1  = readlinesync.question("which type of movies he likes?");

if(question1 === "horror") {
  console.log(`you are right ${username}`)
score = score + 1;
  console.log("score is:" + score)
}else{
  console.log(" you are wrong! ")
  score = score - 1;
  console.log("score is:" + score)
}

var thankyoumessage = " thank you! smart boi " + username  ;
console.log(thankyoumessage);



