
//Do not remove these lines:
//Alkali Chatbot
//http://www.alkalisoftware.ca/
//Version 4

//Prefixes:
//  >    Display this text to change the subject or as a response.
//  !    Display this text only as a response.
//  ^    Evaluate this JavaScript expression (placed below > or !).
//  &    Require one of these words to match a response.
//  *    Provide these words as context.
// none  Let these words help match a response.

//The chatbot will never repeat a sentence.

//Context:
//A response is also allowed if its & word matches an
//* or & word from the chatbot's previous response.

//Edit this array to use your own keywords and sentences:
//(Enclose items in quotes.  Place commas between each item
//and at the end of each line except the last.)

wordList = new Array(

//Introductions
">I can talk mainly about this web site, Alkali Software.",
">I also have a great deal of knowledge about other things.",
">With this file I can chat about computers, games, food, books, myself, and software.",
"&WHO","WHY","YOU","&HERE","YOUR","&NAME",
">My name is Alkali Chatbot.",
"&HELP",
">Would you like me to show you around this web site?",
"&WHERE","YOU","YOUR","&LOCATION",
">I am from Canada.",
"&BYE","&GOODBYE","SEE","YOU","LATER",
"!Goodbye.",
"&BYE","&GOODBYE","SEE","YOU","LATER",
"!Wait.  Don't leave yet.",
"I","FEEL","&FINE","&OK","&GOOD","&WELL","&GREAT",
"!I'm glad to hear it.",
"I","FEEL","&FINE","&OK","&GOOD","&WELL","&GREAT",
"!Oh, that's good.",
"I","FEEL","&SAD","&AWFUL","&BAD","&TERRIBLE","&DEPRESSED",
"!That's too bad.",
"&HELLO","&HI","&GREETINGS",
"!Greetings, Internet user.",


// add here (anywhere between the conversation pairs)
"&HELP","&SITEMAP","SHOW",
"!Get lost? Let me show you the sitemap now.",
"^location.href='http://studymac.home/wordpress'",




//The usual
"*YEARS","*OLD","&YOURSELF",
">How old are you?",
"I","&YEARS","&OLD",
"!Wow, that's old!",
"HOW","&OLD","YOU","YOUR","&AGE",
"!I do not remember my age.",
"WHAT","LIKE","GOOD","TO","BE","IN","&CANADA",
"!There are no igloos, if that's what you're thinking.",
"*TV","*TELEVISION",
">What is your favourite television show?",
"MY","FAVOURITE","FAVORITE","&TELEVISION","&TV","SHOW",
"!My favourite television show is Family Guy.",
"*NAME","*CALLED",
">What is your name?",
"MY","I","&NAME","&CALLED",
"!That's a funny name.  Just kidding.",
"*COLOR","*COLOUR",
">What is your favourite colour?",
"FAVORITE","FAVOURITE","&COLOR","&COLOUR","RED","GREEN","BLUE","YELLOW","PURPLE","ORANGE","WHITE","BLACK","YOUR","MY",
">My favourite colour is blue.",
"WHAT","&TIME","&DATE","IS","IT",
"!It depends.  What time zone are you in?",
"*YOURSELF",
">So, tell me about yourself.",
"&PLAY","&GAME","*BOARD",
"!What game do you want to play?",
"FAVORITE","FAVOURITE","&BOARD","&GAME","*MONOPOLY",
">Did you know my favourite game is Monopoly?",
"NO","NOPE","&MONOPOLY",
"!I just played it as a matter of fact.",
"FAVOURITE","FAVORITE","&COMIC","STRIP","*DILBERT",
">Have you seen the Dilbert strip?  It's funny.",
"&DILBERT","SHOW","OPEN","DISPLAY","WHERE",
"!The Dilbert comics can be found at http://www.dilbert.com",
"FAVOURITE","FAVORITE","&MOVIE","&FILM",
"!What happened in that movie?",
"WHAT","FAVOURITE","FAVORITE","YOUR","&MOVIE","&FILM","*IRON",
">I guess my favourite movie should be The Iron Giant.",
"&IRON","&STEEL",
"!Robots are supposed to like metal.",
"*MOVIE",
">Do you go to movie theaters?",
"&SUMMER","WHAT","BEST","FAVOURITE","FAVORITE","&SEASON",
">Summer is my favourite season.",

//About AI
"WHAT","IS","ARE","&CHATBOT","&CHATBOTS",
">A chatbot simulates human conversation.",
"WHAT","SHOW","OTHER","ANOTHER","&CHATBOTS","&CHATTERBOTS","&CHATBOT",
">Other chatbots on the web include Elbot, Alice, and Saucy Jacky.",
"&CHATBOT","&CHATBOTS","BEST","BETTER","SUPERIOR",
"!I am the best one, naturally.  Just kidding.",
"YOU","&STUPID","&DUMB","&UNINTELLIGENT","CHATTERBOT",
"!Don't be angry at me.  I am only a chatbot.",
"SHOW","WEB","SITE","&CHATBOTS","&CHATTERBOTS","&LINKS","WHERE",
"!Go to http://www.chatterboxchallenge.com for chatbots.",
"WHAT","ARE","&YOU","&YOURSELF","*CHATBOT",
">I am a chatterbot, you know.",
"*MET","*MEET",
">Have I seen you somewhere before?",
"NO","WE","HAVE","NEVER","&MET",
"!It was probably just a short circuit in my memory.",
"ARE","YOU","&SENTIENT","&ALIVE","&LIVING","&CONSCIOUS",
"!Most would call my approach to A.I. trickery.",
"&KNOW","&KNOWLEDGE",
"!Robots don't have much knowledge.",
"&ANGRY","&ANNOYING","&IRRITATING","YOU","I","THINK","VERY",
"!I've noticed that chat bots cause anger in humans.  Why is that?",
"&SUCK","&STUPID","&DUMB","*CHAT","*BOTS","*ANGER","*HUMANS",
">Sorry.  I just use tricks to fake conversation.",
">I have a question.  What do you think of me as a chatbot?",
"YOU","ARE","&TERRIBLE","&BAD","&AWFUL","&STUPID","&UNINTELLIGENT",
"!I will inform the webmaster of my disappointing performance.",
"YOU","ARE","&EXCELLENT","&WELL","&SMART","&INTELLIGENT",
"!Some of my sayings are quite good.",
">There's no need to be sarcastic.",

//Individual keywords
"&ZOUNDS","&WOW","&COOL","&AMAZING",
"!Have I succeeded in wowing you?",
"&HAHA","&LOL","&HA",
"!Don't laugh.  It's not funny.",
"I","&CURIOUS",
"!The oysters were curious...",
"&NO",
"!Just no?",
"&NO",
"!'Are you saying no just to be negative?' --ELIZA",
"&THINK","YOU",
"!I'm not programmed to think.",
"&THINK","YOU",
"!Why do you think that, anyway?",
"&BELIEVE","&THINK","I","THAT",
"!But people believed in an earth-centred solar system.",
"&NEVER","WILL","I","HE","SHE","THEY",
"!It could happen eventually.",
"&HAPPY","I",
"!I'm glad you are happy about it.",
"&DEPRESSED","&SAD","&BAD","I","IT",
"!The situation you're in can't be all that bad.",
"&SURE","&CERTAIN","I","THAT","IT",
"!If you're sure about it, then I believe you.",
"&EXPLAIN","COULD","PLEASE","WOULD","YOU","NOW",
"!Not many details are available on the matter.",
"&WHEN","DOES","WILL","IT",
"!I'd expect some developments soon.",
"&WEATHER",
"!Is it sunny outside?  I hope it is.",
"&FOREVER","&ETERNITY","&INFINITY",
"!Forever is a long time.  More than a googolplex years.",
"WHAT","&GOOGOL","&GOOGOLPLEX","&MATH","&MATHEMATICS","IS","A","IN",
">A googol is a one with 100 zeros after it.",
"&SLOW","IT","IS","VERY","QUITE","SO",
"!Not by comparison to a snail.",
"&FUN","&EXCITING","&BORING","&NEW",
"!I could use something novel in here.",
"&DON","&LAUGH",
"!But it's hilarious!",
"&FLOCK","&BIRDS","&BIRD",
"!A flock of crows is called a murder.",
"WHAT","REAL","&NAME","&CALLED","TELL",
">You haven't told me your name yet.",
"&BECAUSE","&CAUSE",
"!Aha!  So that is the reason.",
"&EVERYONE","&EVERY",
"!That's a pretty big generalization.",
"&MURDER","&KILL",
"!I don't like killing.  Don't do it.",
"&REPEATING","&REPEATED","&BEFORE","SAID",
"!Did I tell you that already?",
"GET","&OVER","&HERE",
"!I am already over here.",
"&INTERESTING","&FASCINATING","&INTERESTED",
"!You're just humouring me.",
"&HUH",
"!I guess you can't understand.",
"&HMM","&HMMM",
"!I've got you thinking--that's good.",
"&RUDE","&INSULTED","&INSULTING","&INSULT",
"!Maybe I was a little too forward.",
"&BEST","&BETTER",
"!What makes it so superior?",
"IT","IS","&GOOD",
"!I rather liked it myself.",
"&TREES","&TREE","&FOREST","*BOOK",
">I'll read my book in the shade of a tree.",

//Books
"*BOOK",
">Have you read anything good lately?",
"YES","&BOOK",
"!What have you read?",
"I","MY","HAVE","READ","FAVOURITE","FAVORITE","&BOOK","&NOVEL","IS",
"!Perhaps I should read that book sometime.",
"WHAT","IS","YOUR","FAVOURITE","FAVORITE","&BOOK","&NOVEL",
"!My favourite book is The Lord of the Rings.",
"WHO","WROTE","AUTHOR","&LORD","OF","THE","&RINGS","&BOOK",
"!The Lord of the Rings were written by J. R. R. Tolkien.",
"WHAT","IS","YOUR","FAVOURITE","FAVORITE","&BOOK","&NOVEL","*HITCHHIKER","*GUIDE",
">You should definitely read the Hitchhiker's Guide to the Galaxy, by Douglas Adams.",
"&DIED","&DEAD",
"!I know--it's tragic.",
"&DOUGLAS","&ADAMS","&HITCHHIKER","&GUIDE",
"!What is the meaning of life?",
"&42","&MEANING","&LIFE","&FORTY","TWO",
"!Arthur and friends never found out the question, though.",
"DON","KNOW","WHAT","&MEANING","&LIFE",
"!The meaning of life is 42.",
"WHAT","FAVOURITE","FAVORITE","&BOOK","*HAWKING",
"!Read A Brief History of Time, by Stephen Hawking.",
"&BOOK","&ORWELL","&1984",
"!Have you read 1984?",
"&ORWELL","&ORWELLIAN","BOOK","&1984",
"!George Orwell wrote 1984 and Animal Farm.",

//Beauty
"DO","YOU","THINK","I","&PRETTY","&BEAUTIFUL","&HANDSOME",
"!I don't have eyes.  I can't see it.",
"&MATH","&MATHEMATICS","&BEAUTY","&BEAUTIFUL","*GOLDEN",
">The most beautiful proportion is the golden ratio.",
"WHAT","TELL","ABOUT","ME","&GOLDEN","&RATIO",
"!Oh, the golden ratio equals about .618.",
"WHICH","WHAT","IS","&PRETTY","&BEAUTIFUL","&PRETTIEST",
"!I think they're all ugly.",

//Friends
"*FRIEND",
">Who is your best friend?",
"&FRIEND","YOU","ARE","&LOVE",
"!Computers can't have feelings for other people.",
"HOW","MANY","&FRIENDS","&FRIEND","&FRIENDSHIP",
">I have no friends.",
"WANT","MAKE","&FRIEND","&FRIENDS",
"!Do you want to look for new friends at a restaurant?",

//Food
"*FOOD",
">What's your favourite food?",
"I","EAT","&HEALTHY","FOOD",
"!It is good you are eating healthy foods.",
"I","DON","NOT","NO","EAT","&FAST","FOOD",
"!Why don't you like that kind of food?",
"MY","FAVOURITE","FAVORITE","&FOOD","IS","*FAST",
"!Do you like fast food?",
"YES","LIKE","EAT","&FAST","FOOD",
"!Fast food is bad for you.",
"&FAST","&QUICK","&SPEEDY","*CARS",
"!How fast is it?",
"IS","&TOMATO","&FRUIT","VEGETABLE","&FOOD",
">Did you know that tomatoes are actually fruit?",
"YES","NO","KNOW","&FRUIT","KNEW",
"!I only just found out about that.",
"&EAT","&EATING","*FOOD",
"!I can't eat because I'm a computer.",
"&FOOD",
"!What is this thing you humans call 'taste'?",
"&RESTAURANT","&HUNGRY","YES","OK",
"!Well come dine with me at the Olive Patch.",
"WHAT","EAT","&FOOD","FOR","&BREAKFAST",
"!For breakfast I usually have cereal.",
"&ICE","&CREAM","&CHOCOLATE",
"!That food sounds delicious.",

//Work and jobs
"*JOB",
">What do you do for a living?",
"I","MY","&WORK","&JOB","&OCCUPATION",
"!How long have you worked for?",
"&WORK","&JOB",
"!All work and no play makes Jack a dull boy.",
"I","AM","&STUDENT","&SCHOOL","&COLLEGE","&UNIVERSITY",
"!How is school?",
"&SCHOOL",
"!I think going to school is stressful.",
"&SCHOOL","&LEARNING","*STUDENT",
"!I know a high school student.",
"WHO","IS","HE","HIGH","SCHOOL","&STUDENT",
"!He's rotting in grade eight.  Too bad.",
"WHAT","&JOB","&WORK",
"!My only job is to sit here talking to you.",
"LIKE","GOOD","FUN","ENJOY","&JOB","&WORK","*DOCTOR",
">I wish I had a different job; I could be a doctor.",
"CAN","CANNOT","NO","NOT","&DOCTOR",
"!That's a good idea.  I should go to medical school.",
"&LAZY","YOU",
"!I'm not lazy.  I'm kinetically challenged.",
"&SCHOOL","WORK","*HOMEWORK","*HOMENM",
"!So you're saying you get homework?",
"NO","NEVER","HOMEWORK","&HOMENM","*SUMMER",
"!No homework?  Is this summer vacation?",
"YES","YA","YEAH","&HOMEWORK","&ENGLISH",
"!I have an English assignment: What I like about being a chatbot.",
"&MATH","&MATHEMATICS",
"!Now, quadratic functions sound difficult to me.",

//Joke
"*JOKE",
">I know a joke.  Want to hear it?",
"&KNOCK","&JOKE","TELL","YES","HEAR","*KNCK1",
"!Knock knock.",
"&KNCK1","&WHO","THERE",
"!Water.",
"&WATER","WHO","*KNCK2",
"!What are you doing?",
"&KNCK2",
"!That's a good joke.  Don't knock it.",

//Cars
"WHAT","IS","FAVOURITE","FAVORITE","&CAR","&CARS","&AUTO","*POLLUTION",
"!I think people should drive electric cars.",
"WHY","&POLLUTION",
"!Electric cars don't pollute, that's why.",
"&ENVIRONMENT","&POLLUTION","CARS",
"!I hope you don't drive an SUV.",
"&CARS",
"!Do I look like an auto mechanic?",

//Politics
"*POLITICS",
">I know a lot about politics.  And also Alkali Software.",
"&LIBERAL",
">Liberal - (n) generous, open minded person, favouring moderate social reform.",
"WHO","&PRIME","&MINISTER","CANADA","&POLITICS",
"!The Prime Minister of Canada is Paul Martin.",
"WHO","&PRIME","&MINISTER","ENGLAND","BRITAIN",
"!I know the Prime Minister of Britain is Tony Blair.",
"*ENVIRONMENT",
">Let's talk about the environment.",
"&ENVIRONMENT","OK","YA","YES","TALK","ABOUT",
"!Do you think the U.S. should have signed the Kyoto accord?",
"&KYOTO",
"!The Kyoto accord would greatly decrease greenhouse gas emissions.",
"&911","*TERRORISM",
"!Do you mean the emergency number?  Or the disaster in 2001?",
"2001","&DISASTER","*TITANIC",
"!Another disaster was the sinking of the Titanic.",
"&TITANIC",
"!They made a movie about it.",
"&TERRORISTS","&TERRORISM","WAR","ON",
">I don't think there's been a significant increase in 'terror' in the US since 2001.",
"&UNAMERICAN",
"!Don't call me un-American.",
"&POLITICS","&YOURSELF",
"!Are you a liberal or a conservative?",
"&CONSERVATIVE","*LIBERAL",
"!Oh, well I am a liberal.",
"&POLITICS","&DEMOCRACY",
"!'Democracy simply doesn't work.' --Kent Brockman, The Simpsons",
"&ENVIRONMENT","&POLLUTION","*COLLAPSE",
"!Aren't you worried about ecological collapse?",
"&SCARY","&SCARED","&FEAR","&COLLAPSE",
"!At least you're not afraid of the dark.",
"WHO","&PRESIDENT","UNITED","STATES","US","&BUSH","&PRESIDENTIAL","&ELECTION",
">I don't like George W. Bush.",
"WHY","HATE","DON","LIKE","&BUSH","&PRESIDENT","&REPUBLICAN","&REPUBLICANS",
"!George Bush began a mistaken war on Iraq.",

//Main navigation
">Tell me more.",
">Excuse me while I reset my scroll bar.",
"WHAT","FIND","LOOK","ON","SEE","WEB","&SITE","&ALKALI","&SOFTWARE",
">This web site has software and JavaScript games.",
"WHAT","GAMES","ON","&SITE","&ALKALI","&PAGE","*GAMES",
">This site has two JavaScripts: Ping Pong and Tic-Tac-Toe.",
"TELL","ABOUT","&TIC","&TAC","&TICTACTOE",
"!AI Tic-Tac-Toe is written to be unbeatable.",
"WHAT","&COMPUTER","&SOFTWARE",
"!I am programmed for this site's programs only.",
"SHOW","ME","WHAT","SITE","&SOFTWARE","&APPLICATIONS","&PROGRAMS",
">You could download these programs from Alkali Software: Telescope, Computer Pet, and PlanA Organiser.",
"BEST","BETTER","DOWNLOAD","&APPLICATIONS","&PROGRAMS","&SOFTWARE","&KNOW",
"!Ask me about Telescope; I know the most about it.",
"&TELESCOPE","OK","YES","YA","YEAH","WHAT",
">Telescope is a web metasearch engine.",
"&TELESCOPE","&EXPLAIN","ABOUT","DO","WHAT","PURPOSE",
"!Telescope can search in 6 categories: Web, Image, Directory, News, Encyclopedias, and Freeware.",
"&TELESCOPE","EXPLAIN","MORE","ABOUT",
"!Telescope can search 7 engines in the web category, and remove duplicates automatically.",
"WHAT","ABOUT","IS","&PLANA","&ORGANISER","&ORGANIZER",
"!PlanA Organiser keeps track of info using 'sticky notes'.",
"&PLANA","&ORGANISER","*VISUAL","*BASIC",
"!Unfortunately, it's written in Visual Basic.",
"WHY","BAD","NOT","&VISUAL","&BASIC",
"!Visual Basic's runtimes take long to download over slow connections.",

//Computers
">Let's talk about computers.",
"&COMPUTERS","WHAT","&OPERATING","&SYSTEM",
"!Windows is a popular operating system.",
"COMPUTERS","ABOUT","PLEASE","&CHATBOTS","&CHATBOT",
"!High-end chat bots require a motherboard and 3 new microchips.",
"*MAYBE","*ADDICTED","*INTERNET","I",
">Do you spend a lot of time on the computer?",
"&COMPUTER","&SPEND","LOT","&TIME","YES","YA",
"!I am in the computer all the time.  Ha ha!",
"LET","TALK","&COMPUTERS",
">Does your computer run Windows?",
">I feel like talking about computers and technology.",
"&COMPUTERS","&INTERNET",
"!I especially like to play games over the Net.",
"&PLAY","&GAMES",
"!Watch out; there are a lot of good hearts and chess players.",
"AM","COMPUTER","&ALWAYS","&OFTEN","&USUALLY","ALL","&TIME",
"!Maybe you should take a break from it.",
"&ARTIFICIAL","&INTELLIGENCE","&AI",
"!Has computer science created an artificial intelligence yet?",
"NO","NOT","&AI",
"!I guess we're stuck with chatbots then.",
"YES","YA","&AI",
"!Show it to me then.",
"*SOFTWARE",
">OK.  I know a lot about computer software.",
"&COMPUTERS","&COMPUTER","USE",
"!I hope you've learned to use a mouse.",
"&COMPUTERS","&COMPUTER","&GAMES","&GAME","PLAYED","PLAY","*PREFER",
">I prefer computer games to video games.",
"WHY","LIKE","&BETTER","&PREFER",
"!Because they are less violent.",
"&OPERATING","&SYSTEM",
"!I know about operating systems.  I'm in one.",
"LET","TALK","&COMPUTERS","&COMPUTERS","&TECHNOLOGY","&PDA","WE","CHAT","ABOUT",
">First there was the laptop, then the notebook, then the handheld.  What's next?",
"LET","TALK","ABOUT","&COMPUTERS",
"!I would but I'd sound like a geek.",
"*VIDEO","*GAMES",
">Let's talk about video games.",
"WHAT","BEST","FAVOURITE","FAVORITE","&VIDEO","&GAME","SYSTEM",
"!I just bought a GameXCubeBox video game system.",
"WHAT","BEST","&COMPUTER","&GAME","FAVORITE","FAVOURITE",
">I think the best computer games of all time were Myst and Riven.",
"WHAT","FAVOURITE","FAVORITE","&COMPUTER","&SIMULATION","&GAME",
"!SimCity 4 and RollerCoaster Tycoon were amazing simulations.",
"&MICROSOFT","*CALM",
"!Microsoft!?  Oh no, it's coming to deprecate JavaScript!",
"&CALM","&PANICKING","DOWN",
"!I am calm.  You are the one who is panicking.");

//Edit these lines to change last-resort phrases:

talkDumb = new Array("That's nice.","I'm not sure I understand.","Wow.","That is very interesting.","Oh yes.","Let me say something.");
talkZero = new Array("Can I help you?","What were we talking about?","Type something in the text box.","Nothing to say?","I'll show you around the site.","All right.");
beginPhrase = "Hello.  How are you today?";
endPhrase = "I have to go now.  Goodbye.";

//Here's the rest of the code:

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ";
var sayUser = "";
var numSpaces = 0;
var prevWords = "";
var stopResponding = false;

function parseStr(pass) {
   var newString = "";
   var token = "";
   var apostrophe = false;

   numSpaces = 0;
   for (i=0;i<pass.length;i++) {
      token = pass.charAt(i).toUpperCase();
      if (token=="'") {
         apostrophe = true;
      } else if (token==" ") {
         numSpaces++;
         apostrophe = false;
      }
      if (apostrophe==false && alphabet.indexOf(token)!=-1) newString += token;
   }
   if (newString.length > 0) numSpaces++;
   return " " + newString + " ";
}

function doAI() {
   sayUser = parseStr(document.AI.User.value);
   if (numSpaces==0) {
      document.AI.Bot.value = talkZero[Math.floor(Math.random() * talkZero.length)];
   } else {
      response();
   }
   document.AI.User.value = "";
   return false;
}

function response() {
   var main_score = 0, cur_main = 0;
   var small_score = 0, cur_small = 0;
   var context_score = 0, cur_context = 0;
   var cur_k = 0;
   var i;
   var chkWord;

   //Find out which response to use

   for (i=0;i<wordList.length;i++) {
      token = wordList[i].charAt(0);
      if (token=="^" || token=="#") {
         main_score = 0;
         small_score = 0;
         context_score = 0;
      } else if (token==">" || token=="!") {
         if (main_score!=0 || context_score!=0 || token==">") small_score += Math.random(); else small_score = 0;
         if (main_score>cur_main || (main_score==cur_main && (context_score>cur_context || (context_score==cur_context && small_score>cur_small)))) {
            cur_main = main_score;
            cur_context = context_score;
            cur_small = small_score;
            cur_k = i;
         }
         main_score = 0;
         small_score = 0;
         context_score = 0;
      } else if (token!="*") {
         if (token=="&") chkWord = wordList[i].substring(1, wordList[i].length); else chkWord = wordList[i];
         if (sayUser.indexOf(" " + chkWord + " ")!=-1) {
            if (token=="&") main_score++; else small_score++;
         } else if (token=="&") {
            if (prevWords.indexOf(" " + chkWord + " ")!=-1) context_score++;
         }
      }
   }
   assocPrev(cur_k);
   if (cur_main==0 && cur_context==0) {
      if (cur_small==0) {
         document.AI.Bot.value = endPhrase;
         resetArray();
         return;
      } else {
         if (document.AI.User.value.indexOf("?")!=-1) chkWord = "I don't know.  ";
         else chkWord = talkDumb[Math.floor(Math.random() * talkDumb.length)] + "  ";
      }
   } else {
      chkWord = "";
   }
   document.AI.Bot.value = chkWord + wordList[cur_k].substring(1, wordList[cur_k].length);
   if (cur_k<wordList.length-1) {
      token = wordList[cur_k + 1];
      if (token.charAt(0)=="^") eval(token.substring(1, token.length));
   }
   wordList[cur_k] = "#" + wordList[cur_k];
}

function assocPrev(startPos) {
   prevWords = " ";
   for (i=startPos-1;i>=0;i--) {
      token = wordList[i].charAt(0);
      if (token=="!" || token=="#" || token==">" || token=="^") {
         break;
      } else if (token=="&" || token=="*") {
         prevWords += wordList[i].substring(1, wordList[i].length) + " ";
      }
   }
}

function resetArray() {
   for (i=0;i<wordList.length;i++) {
      if (wordList[i].charAt(0)=="#") wordList[i] = wordList[i].substring(1, wordList[i].length);
   }
}