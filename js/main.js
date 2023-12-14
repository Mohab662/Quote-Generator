


var arrOfP=[];
arrOfP.push("“Be yourself; everyone else is already taken.”");
arrOfP.push("“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”");
arrOfP.push("“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”");
arrOfP.push("“So many books, so little time.”");
arrOfP.push("“A room without books is like a body without a soul.”");
arrOfP.push("“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”");
arrOfP.push(`“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”`);
arrOfP.push("“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”");
arrOfP.push("“You only live once, but if you do it right, once is enough.”");
arrOfP.push("“Be the change that you wish to see in the world.”");
arrOfP.push("“In three words I can sum up everything I've learned about life: it goes on.”");

var arrOfH=[];
arrOfH.push("― Oscar Wilde");
arrOfH.push("― Marilyn Monroe");
arrOfH.push("― Albert Einstein");
arrOfH.push("― Frank Zappa");
arrOfH.push("― Marcus Tullius Cicero");
arrOfH.push("― Bernard M. Baruch");
arrOfH.push("― William W. Purkey");
arrOfH.push("― Dr. Seuss");
arrOfH.push("― Mae West");
arrOfH.push("― Mahatma Gandhi");
arrOfH.push("― Robert Frost");

var y;
function Change() {



   var x= Math.floor(Math.random()*(11-0))+0;
   if (x==y) {
    // x++;
    var x= Math.floor(Math.random()*(11-0))+0;
   }
    document.getElementById("My-P").innerText=arrOfP[x];
    document.getElementById("My-h").innerText=arrOfH[x];
   y=x;


   




   

    
}
