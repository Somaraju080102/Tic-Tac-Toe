

    const f1=document.getElementById("1");
       const f2=document.getElementById("2");
       const f3=document.getElementById("3");
       const f4=document.getElementById("4");
       const f5=document.getElementById("5");
       const f6=document.getElementById("6");
       const f7=document.getElementById("7");
       const f8=document.getElementById("8");
       const f9=document.getElementById("9");
       var count=0;
       var blue=0;
       var yellow=0;
       var arr=[0,0,0,0,0,0,0,0,0];

       function dontchange(){
        document.getElementById("1").style.backgroundColor="";
        document.getElementById("2").style.backgroundColor="";
        document.getElementById("3").style.backgroundColor="";
        document.getElementById("4").style.backgroundColor="";
        document.getElementById("5").style.backgroundColor="";
        document.getElementById("6").style.backgroundColor="";
        document.getElementById("7").style.backgroundColor="";
        document.getElementById("8").style.backgroundColor="";
        document.getElementById("9").style.backgroundColor="";
        document.getElementById("winner").innerHTML="";
        count=0;
        arr=[0,0,0,0,0,0,0,0,0];
       }
        
       f1.addEventListener("click",function(){
           if(count<9&&arr[0]!=1&&arr[0]!=2){
           if(count%2==0){

           document.getElementById("1").innerHTML="X";
           document.getElementById("1").style.color="blue";

           arr[0]=1;
           if(arr[0]==1&&arr[3]==1&&arr[6]==1||arr[0]==1&&arr[1]==1&&arr[2]==1||arr[0]==1&&arr[4]==1&&arr[8]==1
           ||arr[2]==1&&arr[4]==1&&arr[6]==1||arr[2]==1&&arr[5]==1&&arr[8]==1||arr[3]==1&&arr[4]==1&&arr[5]==1||
           arr[6]==1&&arr[7]==1&&arr[8]==1||arr[1]==1&&arr[4]==1&&arr[7]==1){
               document.getElementById("winner").innerHTML="Blue Won The Game";
               document.getElementById("b1").innerHTML=++blue;
               count=9;
           }
           }
           else{
               document.getElementById("1").innerHTML="O";
               document.getElementById("1").style.color="yellow";
               arr[0]=2;
               if(arr[0]==2&&arr[3]==2&&arr[6]==2||arr[0]==2&&arr[1]==2&&arr[2]==2||arr[0]==2&&arr[4]==2&&arr[8]==2
           ||arr[2]==2&&arr[4]==2&&arr[6]==2||arr[2]==2&&arr[5]==2&&arr[8]==2||arr[3]==2&&arr[4]==2&&arr[5]==2||
           arr[6]==2&&arr[7]==2&&arr[8]==2||arr[1]==2&&arr[4]==2&&arr[7]==2){
               document.getElementById("winner").innerHTML="Yellow Won The Game";
               document.getElementById("b2").innerHTML=++yellow;

               count=9;
           }
           }

           count+=1;
           if(count==9){
            document.getElementById("winner").innerHTML="Game Was Draw";
           }
       }
           
       })
       f2.addEventListener("click",function(){
           if(count<9&&arr[1]!=1&&arr[1]!=2){
           if(count%2==0){
            document.getElementById("2").innerHTML="X";
           document.getElementById("2").style.color="blue";

           arr[1]=1;
           if(arr[0]==1&&arr[3]==1&&arr[6]==1||arr[0]==1&&arr[1]==1&&arr[2]==1||arr[0]==1&&arr[4]==1&&arr[8]==1
           ||arr[2]==1&&arr[4]==1&&arr[6]==1||arr[2]==1&&arr[5]==1&&arr[8]==1||arr[3]==1&&arr[4]==1&&arr[5]==1||
           arr[6]==1&&arr[7]==1&&arr[8]==1||arr[1]==1&&arr[4]==1&&arr[7]==1){
               document.getElementById("winner").innerHTML="Blue Won The Game";
               document.getElementById("b1").innerHTML=++blue;

               count=9;
           }
           
           
           }
           else{
            document.getElementById("2").innerHTML="O";
               document.getElementById("2").style.color="yellow";
                              arr[1]=2;
               if(arr[0]==2&&arr[3]==2&&arr[6]==2||arr[0]==2&&arr[1]==2&&arr[2]==2||arr[0]==2&&arr[4]==2&&arr[8]==2
           ||arr[2]==2&&arr[4]==2&&arr[6]==2||arr[2]==2&&arr[5]==2&&arr[8]==2||arr[3]==2&&arr[4]==2&&arr[5]==2||
           arr[6]==2&&arr[7]==2&&arr[8]==2||arr[1]==2&&arr[4]==2&&arr[7]==2){
               document.getElementById("winner").innerHTML="Yellow Won The Game";
               document.getElementById("b2").innerHTML=++yellow;

               count=9;
           }
           }
           count+=1;
           if(count==9){
            document.getElementById("winner").innerHTML="Game Was Draw";
           }
       }
               })
       f3.addEventListener("click",function(){
        if(count<9&&arr[2]!=1&&arr[2]!=2){
            if(count%2==0){
                document.getElementById("3").innerHTML="X";
           document.getElementById("3").style.color="blue";

           arr[2]=1;
           if(arr[0]==1&&arr[3]==1&&arr[6]==1||arr[0]==1&&arr[1]==1&&arr[2]==1||arr[0]==1&&arr[4]==1&&arr[8]==1
           ||arr[2]==1&&arr[4]==1&&arr[6]==1||arr[2]==1&&arr[5]==1&&arr[8]==1||arr[3]==1&&arr[4]==1&&arr[5]==1||
           arr[6]==1&&arr[7]==1&&arr[8]==1||arr[1]==1&&arr[4]==1&&arr[7]==1){
               document.getElementById("winner").innerHTML="Blue Won The Game";
               document.getElementById("b1").innerHTML=++blue;

               count=9;
           }
           }
           else{
            document.getElementById("3").innerHTML="O";
               document.getElementById("3").style.color="yellow";       
                       arr[2]=2;
               if(arr[0]==2&&arr[3]==2&&arr[6]==2||arr[0]==2&&arr[1]==2&&arr[2]==2||arr[0]==2&&arr[4]==2&&arr[8]==2
           ||arr[2]==2&&arr[4]==2&&arr[6]==2||arr[2]==2&&arr[5]==2&&arr[8]==2||arr[3]==2&&arr[4]==2&&arr[5]==2||
           arr[6]==2&&arr[7]==2&&arr[8]==2||arr[1]==2&&arr[4]==2&&arr[7]==2){
               document.getElementById("winner").innerHTML="Yellow Won The Game";
               document.getElementById("b2").innerHTML=++yellow;

               count=9;
           }
           }
           count+=1;
           if(count==9){
            document.getElementById("winner").innerHTML="Game Was Draw";
           }
       }
               })
       f4.addEventListener("click",function(){
        if(count<9&&arr[3]!=1&&arr[3]!=2){
            if(count%2==0){
                document.getElementById("4").innerHTML="X";
           document.getElementById("4").style.color="blue";
           arr[3]=1;
           if(arr[0]==1&&arr[3]==1&&arr[6]==1||arr[0]==1&&arr[1]==1&&arr[2]==1||arr[0]==1&&arr[4]==1&&arr[8]==1
           ||arr[2]==1&&arr[4]==1&&arr[6]==1||arr[2]==1&&arr[5]==1&&arr[8]==1||arr[3]==1&&arr[4]==1&&arr[5]==1||
           arr[6]==1&&arr[7]==1&&arr[8]==1||arr[1]==1&&arr[4]==1&&arr[7]==1){
               document.getElementById("winner").innerHTML="Blue Won The Game";
               document.getElementById("b1").innerHTML=++blue;

               count=9;
           }
           }
           else{
            document.getElementById("4").innerHTML="O";
               document.getElementById("4").style.color="yellow";
                              arr[3]=2;
               if(arr[0]==2&&arr[3]==2&&arr[6]==2||arr[0]==2&&arr[1]==2&&arr[2]==2||arr[0]==2&&arr[4]==2&&arr[8]==2
           ||arr[2]==2&&arr[4]==2&&arr[6]==2||arr[2]==2&&arr[5]==2&&arr[8]==2||arr[3]==2&&arr[4]==2&&arr[5]==2||
           arr[6]==2&&arr[7]==2&&arr[8]==2||arr[1]==2&&arr[4]==2&&arr[7]==2){
               document.getElementById("winner").innerHTML="Yellow Won The Game";
               document.getElementById("b2").innerHTML=++yellow;

               count=9;
           }
           }
           count+=1;
           if(count==9){
            document.getElementById("winner").innerHTML="Game Was Draw";
           }
       }
               })
       f5.addEventListener("click",function(){
        if(count<9&&arr[4]!=1&&arr[4]!=2){
            if(count%2==0){
                document.getElementById("5").innerHTML="X";
           document.getElementById("5").style.color="blue";
           arr[4]=1;
           if(arr[0]==1&&arr[3]==1&&arr[6]==1||arr[0]==1&&arr[1]==1&&arr[2]==1||arr[0]==1&&arr[4]==1&&arr[8]==1
           ||arr[2]==1&&arr[4]==1&&arr[6]==1||arr[2]==1&&arr[5]==1&&arr[8]==1||arr[3]==1&&arr[4]==1&&arr[5]==1||
           arr[6]==1&&arr[7]==1&&arr[8]==1||arr[1]==1&&arr[4]==1&&arr[7]==1){
               document.getElementById("winner").innerHTML="Blue Won The Game";
               document.getElementById("b1").innerHTML=++blue;

               count=9;
           }
           }
           else{
            document.getElementById("5").innerHTML="O";
               document.getElementById("5").style.color="yellow";  
                            arr[4]=2;
               if(arr[0]==2&&arr[3]==2&&arr[6]==2||arr[0]==2&&arr[1]==2&&arr[2]==2||arr[0]==2&&arr[4]==2&&arr[8]==2
           ||arr[2]==2&&arr[4]==2&&arr[6]==2||arr[2]==2&&arr[5]==2&&arr[8]==2||arr[3]==2&&arr[4]==2&&arr[5]==2||
           arr[6]==2&&arr[7]==2&&arr[8]==2||arr[1]==2&&arr[4]==2&&arr[7]==2){
               document.getElementById("winner").innerHTML="Yellow Won The Game";
               document.getElementById("b2").innerHTML=++yellow;

               count=9;
           }
           }
           count+=1;
           if(count==9){
            document.getElementById("winner").innerHTML="Game Was Draw";
           }
       }
               })
       f6.addEventListener("click",function(){
        if(count<9&&arr[5]!=1&&arr[5]!=2){
            if(count%2==0){
                document.getElementById("6").innerHTML="X";
           document.getElementById("6").style.color="blue";
           arr[5]=1;
           if(arr[0]==1&&arr[3]==1&&arr[6]==1||arr[0]==1&&arr[1]==1&&arr[2]==1||arr[0]==1&&arr[4]==1&&arr[8]==1
           ||arr[2]==1&&arr[4]==1&&arr[6]==1||arr[2]==1&&arr[5]==1&&arr[8]==1||arr[3]==1&&arr[4]==1&&arr[5]==1||
           arr[6]==1&&arr[7]==1&&arr[8]==1||arr[1]==1&&arr[4]==1&&arr[7]==1){
               document.getElementById("winner").innerHTML="Blue Won The Game";
               document.getElementById("b1").innerHTML=++blue;

               count=9;
           }
           }
           else{
            document.getElementById("6").innerHTML="O";
               document.getElementById("6").style.color="yellow";
                              arr[5]=2;
               if(arr[0]==2&&arr[3]==2&&arr[6]==2||arr[0]==2&&arr[1]==2&&arr[2]==2||arr[0]==2&&arr[4]==2&&arr[8]==2
           ||arr[2]==2&&arr[4]==2&&arr[6]==2||arr[2]==2&&arr[5]==2&&arr[8]==2||arr[3]==2&&arr[4]==2&&arr[5]==2||
           arr[6]==2&&arr[7]==2&&arr[8]==2||arr[1]==2&&arr[4]==2&&arr[7]==2){
               document.getElementById("winner").innerHTML="Yellow Won The Game";
               document.getElementById("b2").innerHTML=++yellow;
               count=9;
           }
           }
           count+=1;
           if(count==9){
            document.getElementById("winner").innerHTML="Game Was Draw";
           }
       }
               })
       f7.addEventListener("click",function(){
        if(count<9&&arr[6]!=1&&arr[6]!=2){
            if(count%2==0){
                document.getElementById("7").innerHTML="X";
           document.getElementById("7").style.color="blue";
           arr[6]=1;
           if(arr[0]==1&&arr[3]==1&&arr[6]==1||arr[0]==1&&arr[1]==1&&arr[2]==1||arr[0]==1&&arr[4]==1&&arr[8]==1
           ||arr[2]==1&&arr[4]==1&&arr[6]==1||arr[2]==1&&arr[5]==1&&arr[8]==1||arr[3]==1&&arr[4]==1&&arr[5]==1||
           arr[6]==1&&arr[7]==1&&arr[8]==1||arr[1]==1&&arr[4]==1&&arr[7]==1){
               document.getElementById("winner").innerHTML="Blue Won The Game";
               document.getElementById("b1").innerHTML=++blue;

               count=9;
           }
           }
           else{
            document.getElementById("7").innerHTML="O";
               document.getElementById("7").style.color="yellow";
                              arr[6]=2;
               if(arr[0]==2&&arr[3]==2&&arr[6]==2||arr[0]==2&&arr[1]==2&&arr[2]==2||arr[0]==2&&arr[4]==2&&arr[8]==2
           ||arr[2]==2&&arr[4]==2&&arr[6]==2||arr[2]==2&&arr[5]==2&&arr[8]==2||arr[3]==2&&arr[4]==2&&arr[5]==2||
           arr[6]==2&&arr[7]==2&&arr[8]==2||arr[1]==2&&arr[4]==2&&arr[7]==2){
               document.getElementById("winner").innerHTML="Yellow Won The Game";
               document.getElementById("b2").innerHTML=++yellow;

               count=9;
           }
           }
           count+=1;
           if(count==9){
            document.getElementById("winner").innerHTML="Game Was Draw";
           }
       }
               })
       f8.addEventListener("click",function(){
        if(count<9&&arr[7]!=1&&arr[7]!=2){
            if(count%2==0){
                document.getElementById("8").innerHTML="X";
           document.getElementById("8").style.color="blue";
           arr[7]=1;
           if(arr[0]==1&&arr[3]==1&&arr[6]==1||arr[0]==1&&arr[1]==1&&arr[2]==1||arr[0]==1&&arr[4]==1&&arr[8]==1
           ||arr[2]==1&&arr[4]==1&&arr[6]==1||arr[2]==1&&arr[5]==1&&arr[8]==1||arr[3]==1&&arr[4]==1&&arr[5]==1||
           arr[6]==1&&arr[7]==1&&arr[8]==1||arr[1]==1&&arr[4]==1&&arr[7]==1){
               document.getElementById("winner").innerHTML="Blue Won The Game";
               document.getElementById("b1").innerHTML=++blue;

               count=9;
           }
           }
           else{
            document.getElementById("8").innerHTML="O";
               document.getElementById("8").style.color="yellow";
                              arr[7]=2;
               if(arr[0]==2&&arr[3]==2&&arr[6]==2||arr[0]==2&&arr[1]==2&&arr[2]==2||arr[0]==2&&arr[4]==2&&arr[8]==2
           ||arr[2]==2&&arr[4]==2&&arr[6]==2||arr[2]==2&&arr[5]==2&&arr[8]==2||arr[3]==2&&arr[4]==2&&arr[5]==2||
           arr[6]==2&&arr[7]==2&&arr[8]==2||arr[1]==2&&arr[4]==2&&arr[7]==2){
               document.getElementById("winner").innerHTML="Yellow Won The Game";
               document.getElementById("b2").innerHTML=++yellow;
               count=9;
           }
           }
           count+=1;
           if(count==9){
            document.getElementById("winner").innerHTML="Game Was Draw";
           }
       }
               })
       f9.addEventListener("click",function(){
        if(count<9&&arr[8]!=1&&arr[8]!=2){
            if(count%2==0){
                document.getElementById("9").innerHTML="X";
           document.getElementById("9").style.color="blue";
           arr[8]=1;
           if(arr[0]==1&&arr[3]==1&&arr[6]==1||arr[0]==1&&arr[1]==1&&arr[2]==1||arr[0]==1&&arr[4]==1&&arr[8]==1
           ||arr[2]==1&&arr[4]==1&&arr[6]==1||arr[2]==1&&arr[5]==1&&arr[8]==1||arr[3]==1&&arr[4]==1&&arr[5]==1||
           arr[6]==1&&arr[7]==1&&arr[8]==1||arr[1]==1&&arr[4]==1&&arr[7]==1){
               document.getElementById("winner").innerHTML="Blue Won The Game";
               document.getElementById("b1").innerHTML=++blue;

               count=9;
           }
           }
           else{
            document.getElementById("9").innerHTML="O";
               document.getElementById("9").style.color="yellow";
                              arr[8]=2;
               if(arr[0]==2&&arr[3]==2&&arr[6]==2||arr[0]==2&&arr[1]==2&&arr[2]==2||arr[0]==2&&arr[4]==2&&arr[8]==2
           ||arr[2]==2&&arr[4]==2&&arr[6]==2||arr[2]==2&&arr[5]==2&&arr[8]==2||arr[3]==2&&arr[4]==2&&arr[5]==2||
           arr[6]==2&&arr[7]==2&&arr[8]==2||arr[1]==2&&arr[4]==2&&arr[7]==2){
               document.getElementById("winner").innerHTML="Yellow Won The Game";
               document.getElementById("b2").innerHTML=++yellow;

               count=9;
           }
           }
           count+=1;
           if(count==9){
            document.getElementById("winner").innerHTML="Game Was Draw";
           }

       }
               })
              
     

