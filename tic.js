
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

       const arr=[0,0,0,0,0,0,0,0,0];
        
       f1.addEventListener("click",function(){
           if(count<9){
           if(count%2==0){

           document.getElementById("1").style.backgroundColor="blue";
           arr[0]=1;
           if(arr[0]==1&&arr[3]==1&&arr[6]==1||arr[0]==1&&arr[1]==1&&arr[2]==1||arr[0]==1&&arr[4]==1&&arr[8]==1
           ||arr[2]==1&&arr[4]==1&&arr[6]==1||arr[2]==1&&arr[5]==1&&arr[8]==1||arr[3]==1&&arr[4]==1&&arr[5]==1||
           arr[6]==1&&arr[7]==1&&arr[8]==1||arr[1]==1&&arr[4]==1&&arr[7]==1){
               document.getElementById("winner").innerHTML="Blue Won The Game";
               count=9;
           }
           }
           else{
               document.getElementById("1").style.backgroundColor="yellow";
               arr[0]=2;
               if(arr[0]==2&&arr[3]==2&&arr[6]==2||arr[0]==2&&arr[1]==2&&arr[2]==2||arr[0]==2&&arr[4]==2&&arr[8]==2
           ||arr[2]==2&&arr[4]==2&&arr[6]==2||arr[2]==2&&arr[5]==2&&arr[8]==2||arr[3]==2&&arr[4]==2&&arr[5]==2||
           arr[6]==2&&arr[7]==2&&arr[8]==2||arr[1]==2&&arr[4]==2&&arr[7]==2){
               document.getElementById("winner").innerHTML="Yellow Won The Game";
               count=9;
           }
           }

           count+=1;
       }
           
       })
       f2.addEventListener("click",function(){
           if(count<9){
           if(count%2==0){
           document.getElementById("2").style.backgroundColor="blue";
           arr[1]=1;
           if(arr[0]==1&&arr[3]==1&&arr[6]==1||arr[0]==1&&arr[1]==1&&arr[2]==1||arr[0]==1&&arr[4]==1&&arr[8]==1
           ||arr[2]==1&&arr[4]==1&&arr[6]==1||arr[2]==1&&arr[5]==1&&arr[8]==1||arr[3]==1&&arr[4]==1&&arr[5]==1||
           arr[6]==1&&arr[7]==1&&arr[8]==1||arr[1]==1&&arr[4]==1&&arr[7]==1){
               document.getElementById("winner").innerHTML="Blue Won The Game";
               count=9;
           }
           
           
           }
           else{
               document.getElementById("2").style.backgroundColor="yellow";
               arr[1]=2;
               if(arr[0]==2&&arr[3]==2&&arr[6]==2||arr[0]==2&&arr[1]==2&&arr[2]==2||arr[0]==2&&arr[4]==2&&arr[8]==2
           ||arr[2]==2&&arr[4]==2&&arr[6]==2||arr[2]==2&&arr[5]==2&&arr[8]==2||arr[3]==2&&arr[4]==2&&arr[5]==2||
           arr[6]==2&&arr[7]==2&&arr[8]==2||arr[1]==2&&arr[4]==2&&arr[7]==2){
               document.getElementById("winner").innerHTML="Yellow Won The Game";
               count=9;
           }
           }
           count+=1;
       }
               })
       f3.addEventListener("click",function(){
           if(count<9){
           if(count%2==0){
           document.getElementById("3").style.backgroundColor="blue";
           arr[2]=1;
           if(arr[0]==1&&arr[3]==1&&arr[6]==1||arr[0]==1&&arr[1]==1&&arr[2]==1||arr[0]==1&&arr[4]==1&&arr[8]==1
           ||arr[2]==1&&arr[4]==1&&arr[6]==1||arr[2]==1&&arr[5]==1&&arr[8]==1||arr[3]==1&&arr[4]==1&&arr[5]==1||
           arr[6]==1&&arr[7]==1&&arr[8]==1||arr[1]==1&&arr[4]==1&&arr[7]==1){
               document.getElementById("winner").innerHTML="Blue Won The Game";
               count=9;
           }
           }
           else{
               document.getElementById("3").style.backgroundColor="yellow";
               arr[2]=2;
               if(arr[0]==2&&arr[3]==2&&arr[6]==2||arr[0]==2&&arr[1]==2&&arr[2]==2||arr[0]==2&&arr[4]==2&&arr[8]==2
           ||arr[2]==2&&arr[4]==2&&arr[6]==2||arr[2]==2&&arr[5]==2&&arr[8]==2||arr[3]==2&&arr[4]==2&&arr[5]==2||
           arr[6]==2&&arr[7]==2&&arr[8]==2||arr[1]==2&&arr[4]==2&&arr[7]==2){
               document.getElementById("winner").innerHTML="Yellow Won The Game";
               count=9;
           }
           }
           count+=1;
       }
               })
       f4.addEventListener("click",function(){
           if(count<9){
           if(count%2==0){
           document.getElementById("4").style.backgroundColor="blue";
           arr[3]=1;
           if(arr[0]==1&&arr[3]==1&&arr[6]==1||arr[0]==1&&arr[1]==1&&arr[2]==1||arr[0]==1&&arr[4]==1&&arr[8]==1
           ||arr[2]==1&&arr[4]==1&&arr[6]==1||arr[2]==1&&arr[5]==1&&arr[8]==1||arr[3]==1&&arr[4]==1&&arr[5]==1||
           arr[6]==1&&arr[7]==1&&arr[8]==1||arr[1]==1&&arr[4]==1&&arr[7]==1){
               document.getElementById("winner").innerHTML="Blue Won The Game";
               count=9;
           }
           }
           else{
               document.getElementById("4").style.backgroundColor="yellow";
               arr[3]=2;
               if(arr[0]==2&&arr[3]==2&&arr[6]==2||arr[0]==2&&arr[1]==2&&arr[2]==2||arr[0]==2&&arr[4]==2&&arr[8]==2
           ||arr[2]==2&&arr[4]==2&&arr[6]==2||arr[2]==2&&arr[5]==2&&arr[8]==2||arr[3]==2&&arr[4]==2&&arr[5]==2||
           arr[6]==2&&arr[7]==2&&arr[8]==2||arr[1]==2&&arr[4]==2&&arr[7]==2){
               document.getElementById("winner").innerHTML="Yellow Won The Game";
               count=9;
           }
           }
           count+=1;
       }
               })
       f5.addEventListener("click",function(){
           if(count<9){
           if(count%2==0){
           document.getElementById("5").style.backgroundColor="blue";
           arr[4]=1;
           if(arr[0]==1&&arr[3]==1&&arr[6]==1||arr[0]==1&&arr[1]==1&&arr[2]==1||arr[0]==1&&arr[4]==1&&arr[8]==1
           ||arr[2]==1&&arr[4]==1&&arr[6]==1||arr[2]==1&&arr[5]==1&&arr[8]==1||arr[3]==1&&arr[4]==1&&arr[5]==1||
           arr[6]==1&&arr[7]==1&&arr[8]==1||arr[1]==1&&arr[4]==1&&arr[7]==1){
               document.getElementById("winner").innerHTML="Blue Won The Game";
               count=9;
           }
           }
           else{
               document.getElementById("5").style.backgroundColor="yellow";
               arr[4]=2;
               if(arr[0]==2&&arr[3]==2&&arr[6]==2||arr[0]==2&&arr[1]==2&&arr[2]==2||arr[0]==2&&arr[4]==2&&arr[8]==2
           ||arr[2]==2&&arr[4]==2&&arr[6]==2||arr[2]==2&&arr[5]==2&&arr[8]==2||arr[3]==2&&arr[4]==2&&arr[5]==2||
           arr[6]==2&&arr[7]==2&&arr[8]==2||arr[1]==2&&arr[4]==2&&arr[7]==2){
               document.getElementById("winner").innerHTML="Yellow Won The Game";
               count=9;
           }
           }
           count+=1;
       }
               })
       f6.addEventListener("click",function(){
           if(count<9){
           if(count%2==0){
           document.getElementById("6").style.backgroundColor="blue";
           arr[5]=1;
           if(arr[0]==1&&arr[3]==1&&arr[6]==1||arr[0]==1&&arr[1]==1&&arr[2]==1||arr[0]==1&&arr[4]==1&&arr[8]==1
           ||arr[2]==1&&arr[4]==1&&arr[6]==1||arr[2]==1&&arr[5]==1&&arr[8]==1||arr[3]==1&&arr[4]==1&&arr[5]==1||
           arr[6]==1&&arr[7]==1&&arr[8]==1||arr[1]==1&&arr[4]==1&&arr[7]==1){
               document.getElementById("winner").innerHTML="Blue Won The Game";
               count=9;
           }
           }
           else{
               document.getElementById("6").style.backgroundColor="yellow";
               arr[5]=2;
               if(arr[0]==2&&arr[3]==2&&arr[6]==2||arr[0]==2&&arr[1]==2&&arr[2]==2||arr[0]==2&&arr[4]==2&&arr[8]==2
           ||arr[2]==2&&arr[4]==2&&arr[6]==2||arr[2]==2&&arr[5]==2&&arr[8]==2||arr[3]==2&&arr[4]==2&&arr[5]==2||
           arr[6]==2&&arr[7]==2&&arr[8]==2||arr[1]==2&&arr[4]==2&&arr[7]==2){
               document.getElementById("winner").innerHTML="Yellow Won The Game";
               count=9;
           }
           }
           count+=1;
       }
               })
       f7.addEventListener("click",function(){
           if(count<9){
           if(count%2==0){
           document.getElementById("7").style.backgroundColor="blue";
           arr[6]=1;
           if(arr[0]==1&&arr[3]==1&&arr[6]==1||arr[0]==1&&arr[1]==1&&arr[2]==1||arr[0]==1&&arr[4]==1&&arr[8]==1
           ||arr[2]==1&&arr[4]==1&&arr[6]==1||arr[2]==1&&arr[5]==1&&arr[8]==1||arr[3]==1&&arr[4]==1&&arr[5]==1||
           arr[6]==1&&arr[7]==1&&arr[8]==1||arr[1]==1&&arr[4]==1&&arr[7]==1){
               document.getElementById("winner").innerHTML="Blue Won The Game";
               count=9;
           }
           }
           else{
               document.getElementById("7").style.backgroundColor="yellow";
               arr[6]=2;
               if(arr[0]==2&&arr[3]==2&&arr[6]==2||arr[0]==2&&arr[1]==2&&arr[2]==2||arr[0]==2&&arr[4]==2&&arr[8]==2
           ||arr[2]==2&&arr[4]==2&&arr[6]==2||arr[2]==2&&arr[5]==2&&arr[8]==2||arr[3]==2&&arr[4]==2&&arr[5]==2||
           arr[6]==2&&arr[7]==2&&arr[8]==2||arr[1]==2&&arr[4]==2&&arr[7]==2){
               document.getElementById("winner").innerHTML="Yellow Won The Game";
               count=9;
           }
           }
           count+=1;
       }
               })
       f8.addEventListener("click",function(){
           if(count<9){
           if(count%2==0){
           document.getElementById("8").style.backgroundColor="blue";
           arr[7]=1;
           if(arr[0]==1&&arr[3]==1&&arr[6]==1||arr[0]==1&&arr[1]==1&&arr[2]==1||arr[0]==1&&arr[4]==1&&arr[8]==1
           ||arr[2]==1&&arr[4]==1&&arr[6]==1||arr[2]==1&&arr[5]==1&&arr[8]==1||arr[3]==1&&arr[4]==1&&arr[5]==1||
           arr[6]==1&&arr[7]==1&&arr[8]==1||arr[1]==1&&arr[4]==1&&arr[7]==1){
               document.getElementById("winner").innerHTML="Blue Won The Game";
               count=9;
           }
           }
           else{
               document.getElementById("8").style.backgroundColor="yellow";
               arr[7]=2;
               if(arr[0]==2&&arr[3]==2&&arr[6]==2||arr[0]==2&&arr[1]==2&&arr[2]==2||arr[0]==2&&arr[4]==2&&arr[8]==2
           ||arr[2]==2&&arr[4]==2&&arr[6]==2||arr[2]==2&&arr[5]==2&&arr[8]==2||arr[3]==2&&arr[4]==2&&arr[5]==2||
           arr[6]==2&&arr[7]==2&&arr[8]==2||arr[1]==2&&arr[4]==2&&arr[7]==2){
               document.getElementById("winner").innerHTML="Yellow Won The Game";
               count=9;
           }
           }
           count+=1;
       }
               })
       f9.addEventListener("click",function(){
           if(count<9){
           if(count%2==0){
           document.getElementById("9").style.backgroundColor="blue";
           arr[8]=1;
           if(arr[0]==1&&arr[3]==1&&arr[6]==1||arr[0]==1&&arr[1]==1&&arr[2]==1||arr[0]==1&&arr[4]==1&&arr[8]==1
           ||arr[2]==1&&arr[4]==1&&arr[6]==1||arr[2]==1&&arr[5]==1&&arr[8]==1||arr[3]==1&&arr[4]==1&&arr[5]==1||
           arr[6]==1&&arr[7]==1&&arr[8]==1||arr[1]==1&&arr[4]==1&&arr[7]==1){
               document.getElementById("winner").innerHTML="Blue Won The Game";
               count=9;
           }
           }
           else{
               document.getElementById("9").style.backgroundColor="yellow";
               arr[8]=2;
               if(arr[0]==2&&arr[3]==2&&arr[6]==2||arr[0]==2&&arr[1]==2&&arr[2]==2||arr[0]==2&&arr[4]==2&&arr[8]==2
           ||arr[2]==2&&arr[4]==2&&arr[6]==2||arr[2]==2&&arr[5]==2&&arr[8]==2||arr[3]==2&&arr[4]==2&&arr[5]==2||
           arr[6]==2&&arr[7]==2&&arr[8]==2||arr[1]==2&&arr[4]==2&&arr[7]==2){
               document.getElementById("winner").innerHTML="Yellow Won The Game";
               count=9;
           }
           }
           count+=1;
       }
               })
     
