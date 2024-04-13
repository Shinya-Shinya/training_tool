
 let textarea = document.getElementById('id_questionBig');
 let ch = textarea.clientHeight;
 textarea.addEventListener('input', ()=>{
     textarea.style.height = ch + 'px';
     let sh = textarea.scrollHeight;
     textarea.style.height = sh + 'px';
 });






let textareaWAns1 = document.getElementById('id_questionSmall1');
 let ch1 = textareaWAns1.clientHeight;
 textareaWAns1.addEventListener('input', ()=>{
     textareaWAns1.style.height = ch1 + 'px';
     let sh1 = textareaWAns1.scrollHeight;
     textareaWAns1.style.height = sh1 + 'px';
 });

 let textareaWAns2 = document.getElementById('id_questionSmall2');
 let ch2 = textareaWAns2.clientHeight;
 textareaWAns2.addEventListener('input', ()=>{
     textareaWAns2.style.height = ch2 + 'px';
     let sh2 = textareaWAns2.scrollHeight;
     textareaWAns2.style.height = sh2 + 'px';
 });

 let textareaWAns3 = document.getElementById('id_questionSmall3');
 let ch3 = textareaWAns3.clientHeight;
 textareaWAns3.addEventListener('input', ()=>{
     textareaWAns3.style.height = ch3 + 'px';
     let sh3 = textareaWAns3.scrollHeight;
     textareaWAns3.style.height = sh3 + 'px';
 });

 let textareaWAns4 = document.getElementById('id_questionSmall4');
 let ch4 = textareaWAns4.clientHeight;
 textareaWAns4.addEventListener('input', ()=>{
     textareaWAns4.style.height = ch4 + 'px';
     let sh4 = textareaWAns4.scrollHeight;
     textareaWAns4.style.height = sh4 + 'px';
 });

 let textareaWAns5 = document.getElementById('id_questionSmall5');
 let ch5 = textareaWAns5.clientHeight;
 textareaWAns5.addEventListener('input', ()=>{
     textareaWAns5.style.height = ch5 + 'px';
     let sh5 = textareaWAns5.scrollHeight;
     textareaWAns5.style.height = sh5 + 'px';
 });

 let textareaWAns6 = document.getElementById('id_questionSmall6');
 let ch6 = textareaWAns6.clientHeight;
 textareaWAns6.addEventListener('input', ()=>{
     textareaWAns6.style.height = ch6 + 'px';
     let sh6 = textareaWAns6.scrollHeight;
     textareaWAns6.style.height = sh6 + 'px';
 });

 let textareaWAns7 = document.getElementById('id_questionSmall7');
 let ch7 = textareaWAns7.clientHeight;
 textareaWAns7.addEventListener('input', ()=>{
     textareaWAns7.style.height = ch7 + 'px';
     let sh7 = textareaWAns7.scrollHeight;
     textareaWAns7.style.height = sh7 + 'px';
 });

 let textareaWAns8 = document.getElementById('id_questionSmall8');
 let ch8 = textareaWAns8.clientHeight;
 textareaWAns8.addEventListener('input', ()=>{
     textareaWAns8.style.height = ch8 + 'px';
     let sh8 = textareaWAns8.scrollHeight;
     textareaWAns8.style.height = sh8 + 'px';
 });

 let textareaWAns9 = document.getElementById('id_questionSmall9');
 let ch9 = textareaWAns9.clientHeight;
 textareaWAns9.addEventListener('input', ()=>{
     textareaWAns9.style.height = ch9 + 'px';
     let sh9 = textareaWAns9.scrollHeight;
     textareaWAns9.style.height = sh9 + 'px';
 });

 let textareaWAns10 = document.getElementById('id_questionSmall10');
 let ch10 = textareaWAns10.clientHeight;
 textareaWAns10.addEventListener('input', ()=>{
     textareaWAns10.style.height = ch10 + 'px';
     let sh10 = textareaWAns10.scrollHeight;
     textareaWAns10.style.height = sh10 + 'px';
 });


 function twoOfFour() {
    /*if(document.getElementsByName("input1") == "2/アイウエ"){
        const data ={
            wronganswer1Small1: 0,
            wronganswer1Small1: 0,
            wronganswer1Small1: 0,
            wronganswer1Small1: 0,
            wronganswer1Small1: 0,
            wronganswer1Small1: 0,
            wronganswer1Small1: 0,
            wronganswer1Small1: 0,
            wronganswer1Small1: 0,
            wronganswer1Small1: 0,

        }
    };*/
    
    answerSmall1 = document.getElementById("id_answerSmall1");
    wronganswer1Small1 = document.getElementById("id_wronganswer1Small1");
    wronganswer2Small1 = document.getElementById("id_wronganswer2Small1");
    wronganswer3Small1 = document.getElementById("id_wronganswer3Small1");
    wronganswer4Small1 = document.getElementById("id_wronganswer4Small1");
    wronganswer5Small1 = document.getElementById("id_wronganswer5Small1");
    wronganswer6Small1 = document.getElementById("id_wronganswer6Small1");
   
    abText = "A, B";
    acText = "A, C";
    adText = "A, D";
    bcText = "B, C";
    bdText = "B, D";
    cdText = "C, D";  

    document.querySelector('.content1 p:nth-child(11)').style.display = "block";
    document.querySelector('.content1 p:nth-child(12)').style.display = "block";
    document.querySelector('.content1 p:nth-child(13)').style.display = "block";
    document.querySelector('.content1').style.overflow = "scroll";

    if(answerSmall1.value == "A, B"){
        wronganswer1Small1.value = cdText;
        wronganswer2Small1.value = acText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = bcText;
        wronganswer5Small1.value = bdText;
    }else if(answerSmall1.value == "B, C"){
        wronganswer1Small1.value = cdText;
        wronganswer2Small1.value = acText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = bdText;
    }else if(answerSmall1.value == "A, C"){
        wronganswer1Small1.value = cdText;
        wronganswer2Small1.value = bcText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = bdText;
    }else if(answerSmall1.value == "A, D"){
        wronganswer1Small1.value = cdText;
        wronganswer2Small1.value = bcText;
        wronganswer3Small1.value = acText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = bdText;
    }else if(answerSmall1.value == "B, D"){
        wronganswer1Small1.value = cdText;
        wronganswer2Small1.value = bcText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = acText;
    }else if(answerSmall1.value == "C, D"){
        wronganswer1Small1.value = acText;
        wronganswer2Small1.value = bcText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = bdText;
    }else{

    }
  }

  function twoOfFourAiue() {
    answerSmall1 = document.getElementById("id_answerSmall1");
    wronganswer1Small1 = document.getElementById("id_wronganswer1Small1");
    wronganswer2Small1 = document.getElementById("id_wronganswer2Small1");
    wronganswer3Small1 = document.getElementById("id_wronganswer3Small1");
    wronganswer4Small1 = document.getElementById("id_wronganswer4Small1");
    wronganswer5Small1 = document.getElementById("id_wronganswer5Small1");
    wronganswer6Small1 = document.getElementById("id_wronganswer6Small1");
   
    abText = "ア、イ";
    acText = "ア、ウ";
    adText = "ア、エ";
    bcText = "イ、ウ";
    bdText = "イ、エ";
    cdText = "ウ、エ";  

    document.querySelector('.content1 p:nth-child(11)').style.display = "block";
    document.querySelector('.content1 p:nth-child(12)').style.display = "block";
    document.querySelector('.content1 p:nth-child(13)').style.display = "block";
    document.querySelector('.content1').style.overflow = "scroll";

    if(answerSmall1.value == "ア、イ"){
        wronganswer1Small1.value = cdText;
        wronganswer2Small1.value = acText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = bcText;
        wronganswer5Small1.value = bdText;
    }else if(answerSmall1.value == "イ、ウ"){
        wronganswer1Small1.value = cdText;
        wronganswer2Small1.value = acText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = bdText;
    }else if(answerSmall1.value == "ア、ウ"){
        wronganswer1Small1.value = cdText;
        wronganswer2Small1.value = bcText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = bdText;
    }else if(answerSmall1.value == "ア、エ"){
        wronganswer1Small1.value = cdText;
        wronganswer2Small1.value = bcText;
        wronganswer3Small1.value = acText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = bdText;
    }else if(answerSmall1.value == "イ、エ"){
        wronganswer1Small1.value = cdText;
        wronganswer2Small1.value = bcText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = acText;
    }else if(answerSmall1.value == "ウ、エ"){
        wronganswer1Small1.value = acText;
        wronganswer2Small1.value = bcText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = bdText;
    }else{

    }
  }

  function twoOfFive() {
    answerSmall1 = document.getElementById("id_answerSmall1");
    wronganswer1Small1 = document.getElementById("id_wronganswer1Small1");
    wronganswer2Small1 = document.getElementById("id_wronganswer2Small1");
    wronganswer3Small1 = document.getElementById("id_wronganswer3Small1");
    wronganswer4Small1 = document.getElementById("id_wronganswer4Small1");
    wronganswer5Small1 = document.getElementById("id_wronganswer5Small1");
    wronganswer6Small1 = document.getElementById("id_wronganswer6Small1");
    wronganswer7Small1 = document.getElementById("id_wronganswer7Small1");
    wronganswer8Small1 = document.getElementById("id_wronganswer8Small1");
    wronganswer9Small1 = document.getElementById("id_wronganswer9Small1");
   
    abText = "A, B";
    acText = "A, C";
    adText = "A, D";
    bcText = "B, C";
    bdText = "B, D";
    cdText = "C, D";
    aeText = "A, E";
    beText = "B, E";
    ceText = "C, E";
    deText = "D, E";

    document.querySelector('.yokonarabi p:nth-child(11)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(12)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(13)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(14)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(15)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(16)').style.display = "block";
    document.querySelector('.content1').style.overflow = "scroll";

    if(answerSmall1.value == "A, B"){
        wronganswer1Small1.value = cdText;
        wronganswer2Small1.value = acText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = bcText;
        wronganswer5Small1.value = bdText;
        wronganswer6Small1.value = aeText;
        wronganswer7Small1.value = beText;
        wronganswer8Small1.value = ceText;
        wronganswer9Small1.value = deText;
    }else if(answerSmall1.value == "B, C"){
        wronganswer1Small1.value = cdText;
        wronganswer2Small1.value = acText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = bdText;
        wronganswer6Small1.value = aeText;
        wronganswer7Small1.value = beText;
        wronganswer8Small1.value = ceText;
        wronganswer9Small1.value = deText;
    }else if(answerSmall1.value == "A, C"){
        wronganswer1Small1.value = cdText;
        wronganswer2Small1.value = bcText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = bdText;
        wronganswer6Small1.value = aeText;
        wronganswer7Small1.value = beText;
        wronganswer8Small1.value = ceText;
        wronganswer9Small1.value = deText;
    }else if(answerSmall1.value == "A, D"){
        wronganswer1Small1.value = cdText;
        wronganswer2Small1.value = bcText;
        wronganswer3Small1.value = acText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = bdText;
        wronganswer6Small1.value = aeText;
        wronganswer7Small1.value = beText;
        wronganswer8Small1.value = ceText;
        wronganswer9Small1.value = deText;
    }else if(answerSmall1.value == "B, D"){
        wronganswer1Small1.value = cdText;
        wronganswer2Small1.value = bcText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = acText;
        wronganswer6Small1.value = aeText;
        wronganswer7Small1.value = beText;
        wronganswer8Small1.value = ceText;
        wronganswer9Small1.value = deText;
    }else if(answerSmall1.value == "C, D"){
        wronganswer1Small1.value = acText;
        wronganswer2Small1.value = bcText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = bdText;
        wronganswer6Small1.value = aeText;
        wronganswer7Small1.value = beText;
        wronganswer8Small1.value = ceText;
        wronganswer9Small1.value = deText;
    }else if(answerSmall1.value == "B, E"){
        wronganswer1Small1.value = acText;
        wronganswer2Small1.value = bcText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = bdText;
        wronganswer6Small1.value = aeText;
        wronganswer7Small1.value = cdText;
        wronganswer8Small1.value = ceText;
        wronganswer9Small1.value = deText;
    }else if(answerSmall1.value == "C, E"){
        wronganswer1Small1.value = acText;
        wronganswer2Small1.value = bcText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = bdText;
        wronganswer6Small1.value = aeText;
        wronganswer7Small1.value = beText;
        wronganswer8Small1.value = cdText;
        wronganswer9Small1.value = deText;
    }else if(answerSmall1.value == "D, E"){
        wronganswer1Small1.value = acText;
        wronganswer2Small1.value = bcText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = bdText;
        wronganswer6Small1.value = aeText;
        wronganswer7Small1.value = beText;
        wronganswer8Small1.value = ceText;
        wronganswer9Small1.value = cdText;
    }else if(answerSmall1.value == "A, E"){
        wronganswer1Small1.value = acText;
        wronganswer2Small1.value = bcText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = bdText;
        wronganswer6Small1.value = cdText;
        wronganswer7Small1.value = beText;
        wronganswer8Small1.value = ceText;
        wronganswer9Small1.value = deText;
    }else{

    }
  }

  function twoOfFiveAiueo() {
    answerSmall1 = document.getElementById("id_answerSmall1");
    wronganswer1Small1 = document.getElementById("id_wronganswer1Small1");
    wronganswer2Small1 = document.getElementById("id_wronganswer2Small1");
    wronganswer3Small1 = document.getElementById("id_wronganswer3Small1");
    wronganswer4Small1 = document.getElementById("id_wronganswer4Small1");
    wronganswer5Small1 = document.getElementById("id_wronganswer5Small1");
    wronganswer6Small1 = document.getElementById("id_wronganswer6Small1");
    wronganswer7Small1 = document.getElementById("id_wronganswer7Small1");
    wronganswer8Small1 = document.getElementById("id_wronganswer8Small1");
    wronganswer9Small1 = document.getElementById("id_wronganswer9Small1");
   
    abText = "ア、イ";
    acText = "ア、ウ";
    adText = "ア、エ";
    bcText = "イ、ウ";
    bdText = "イ、エ";
    cdText = "ウ、エ";
    aeText = "ア、オ";
    beText = "イ、オ";
    ceText = "ウ、オ";
    deText = "エ、オ";

    document.querySelector('.yokonarabi p:nth-child(11)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(12)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(13)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(14)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(15)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(16)').style.display = "block";
    document.querySelector('.content1').style.overflow = "scroll";

    if(answerSmall1.value == "ア、イ"){
        wronganswer1Small1.value = cdText;
        wronganswer2Small1.value = acText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = bcText;
        wronganswer5Small1.value = bdText;
        wronganswer6Small1.value = aeText;
        wronganswer7Small1.value = beText;
        wronganswer8Small1.value = ceText;
        wronganswer9Small1.value = deText;
    }else if(answerSmall1.value == "イ、ウ"){
        wronganswer1Small1.value = cdText;
        wronganswer2Small1.value = acText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = bdText;
        wronganswer6Small1.value = aeText;
        wronganswer7Small1.value = beText;
        wronganswer8Small1.value = ceText;
        wronganswer9Small1.value = deText;
    }else if(answerSmall1.value == "ア、ウ"){
        wronganswer1Small1.value = cdText;
        wronganswer2Small1.value = bcText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = bdText;
        wronganswer6Small1.value = aeText;
        wronganswer7Small1.value = beText;
        wronganswer8Small1.value = ceText;
        wronganswer9Small1.value = deText;
    }else if(answerSmall1.value == "ア、エ"){
        wronganswer1Small1.value = cdText;
        wronganswer2Small1.value = bcText;
        wronganswer3Small1.value = acText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = bdText;
        wronganswer6Small1.value = aeText;
        wronganswer7Small1.value = beText;
        wronganswer8Small1.value = ceText;
        wronganswer9Small1.value = deText;
    }else if(answerSmall1.value == "イ、エ"){
        wronganswer1Small1.value = cdText;
        wronganswer2Small1.value = bcText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = acText;
        wronganswer6Small1.value = aeText;
        wronganswer7Small1.value = beText;
        wronganswer8Small1.value = ceText;
        wronganswer9Small1.value = deText;
    }else if(answerSmall1.value == "ウ、エ"){
        wronganswer1Small1.value = acText;
        wronganswer2Small1.value = bcText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = bdText;
        wronganswer6Small1.value = aeText;
        wronganswer7Small1.value = beText;
        wronganswer8Small1.value = ceText;
        wronganswer9Small1.value = deText;
    }else if(answerSmall1.value == "イ、オ"){
        wronganswer1Small1.value = acText;
        wronganswer2Small1.value = bcText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = bdText;
        wronganswer6Small1.value = aeText;
        wronganswer7Small1.value = cdText;
        wronganswer8Small1.value = ceText;
        wronganswer9Small1.value = deText;
    }else if(answerSmall1.value == "ウ、オ"){
        wronganswer1Small1.value = acText;
        wronganswer2Small1.value = bcText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = bdText;
        wronganswer6Small1.value = aeText;
        wronganswer7Small1.value = beText;
        wronganswer8Small1.value = cdText;
        wronganswer9Small1.value = deText;
    }else if(answerSmall1.value == "エ、オ"){
        wronganswer1Small1.value = acText;
        wronganswer2Small1.value = bcText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = bdText;
        wronganswer6Small1.value = aeText;
        wronganswer7Small1.value = beText;
        wronganswer8Small1.value = ceText;
        wronganswer9Small1.value = cdText;
    }else if(answerSmall1.value == "ア、オ"){
        wronganswer1Small1.value = acText;
        wronganswer2Small1.value = bcText;
        wronganswer3Small1.value = adText;
        wronganswer4Small1.value = abText;
        wronganswer5Small1.value = bdText;
        wronganswer6Small1.value = cdText;
        wronganswer7Small1.value = beText;
        wronganswer8Small1.value = ceText;
        wronganswer9Small1.value = deText;
    }else{

    }
  }

  function threeOfFive() {
    answerSmall1 = document.getElementById("id_answerSmall1");
    wronganswer1Small1 = document.getElementById("id_wronganswer1Small1");
    wronganswer2Small1 = document.getElementById("id_wronganswer2Small1");
    wronganswer3Small1 = document.getElementById("id_wronganswer3Small1");
    wronganswer4Small1 = document.getElementById("id_wronganswer4Small1");
    wronganswer5Small1 = document.getElementById("id_wronganswer5Small1");
    wronganswer6Small1 = document.getElementById("id_wronganswer6Small1");
    wronganswer7Small1 = document.getElementById("id_wronganswer7Small1");
    wronganswer8Small1 = document.getElementById("id_wronganswer8Small1");
    wronganswer9Small1 = document.getElementById("id_wronganswer9Small1");
   
    abcText = "A, B, C";
    abdText = "A, B, D";
    abeText = "A, B, E";
    acdText = "A, C, D";
    aceText = "A, C, E";
    adeText = "A, D, E";
    bcdText = "B, C, D";
    bceText = "B, C, E";
    bdeText = "B, D, E";
    cdeText = "C, D, E";

    document.querySelector('.yokonarabi p:nth-child(11)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(12)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(13)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(14)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(15)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(16)').style.display = "block";
    document.querySelector('.content1').style.overflow = "scroll";

    if(answerSmall1.value == "A, B, C"){
        wronganswer1Small1.value = abdText;
        wronganswer2Small1.value = abeText;
        wronganswer3Small1.value = acdText;
        wronganswer4Small1.value = aceText;
        wronganswer5Small1.value = adeText;
        wronganswer6Small1.value = bcdText;
        wronganswer7Small1.value = bceText;
        wronganswer8Small1.value = bdeText;
        wronganswer9Small1.value = cdeText;
    }else if(answerSmall1.value == "A, B, D"){
        wronganswer1Small1.value = abcText;
        wronganswer2Small1.value = abeText;
        wronganswer3Small1.value = acdText;
        wronganswer4Small1.value = aceText;
        wronganswer5Small1.value = adeText;
        wronganswer6Small1.value = bcdText;
        wronganswer7Small1.value = bceText;
        wronganswer8Small1.value = bdeText;
        wronganswer9Small1.value = cdeText;
    }else if(answerSmall1.value == "A, B, E"){
        wronganswer1Small1.value = abcText;
        wronganswer2Small1.value = abdText;
        wronganswer3Small1.value = acdText;
        wronganswer4Small1.value = aceText;
        wronganswer5Small1.value = adeText;
        wronganswer6Small1.value = bcdText;
        wronganswer7Small1.value = bceText;
        wronganswer8Small1.value = bdeText;
        wronganswer9Small1.value = cdeText;
    }else if(answerSmall1.value == "A, C, D"){
        wronganswer1Small1.value = abcText;
        wronganswer2Small1.value = abdText;
        wronganswer3Small1.value = abeText;
        wronganswer4Small1.value = aceText;
        wronganswer5Small1.value = adeText;
        wronganswer6Small1.value = bcdText;
        wronganswer7Small1.value = bceText;
        wronganswer8Small1.value = bdeText;
        wronganswer9Small1.value = cdeText;
    }else if(answerSmall1.value == "A, C, E"){
        wronganswer1Small1.value = abcText;
        wronganswer2Small1.value = abdText;
        wronganswer3Small1.value = abeText;
        wronganswer4Small1.value = acdText;
        wronganswer5Small1.value = adeText;
        wronganswer6Small1.value = bcdText;
        wronganswer7Small1.value = bceText;
        wronganswer8Small1.value = bdeText;
        wronganswer9Small1.value = cdeText;
    }else if(answerSmall1.value == "B, C, D"){
        wronganswer1Small1.value = abcText;
        wronganswer2Small1.value = abdText;
        wronganswer3Small1.value = abeText;
        wronganswer4Small1.value = acdText;
        wronganswer5Small1.value = aceText;
        wronganswer6Small1.value = adeText;
        wronganswer7Small1.value = bceText;
        wronganswer8Small1.value = bdeText;
        wronganswer9Small1.value = cdeText;
    }else if(answerSmall1.value == "B, C, E"){
        wronganswer1Small1.value = abcText;
        wronganswer2Small1.value = abdText;
        wronganswer3Small1.value = abeText;
        wronganswer4Small1.value = acdText;
        wronganswer5Small1.value = aceText;
        wronganswer6Small1.value = adeText;
        wronganswer7Small1.value = bcdText;
        wronganswer8Small1.value = bdeText;
        wronganswer9Small1.value = cdeText;
    }else if(answerSmall1.value == "B, D, E"){
        wronganswer1Small1.value = abcText;
        wronganswer2Small1.value = abdText;
        wronganswer3Small1.value = abeText;
        wronganswer4Small1.value = acdText;
        wronganswer5Small1.value = aceText;
        wronganswer6Small1.value = adeText;
        wronganswer7Small1.value = bcdText;
        wronganswer8Small1.value = bceText;
        wronganswer9Small1.value = cdeText;
    }else if(answerSmall1.value == "C, D, E"){
        wronganswer1Small1.value = abcText;
        wronganswer2Small1.value = abdText;
        wronganswer3Small1.value = abeText;
        wronganswer4Small1.value = acdText;
        wronganswer5Small1.value = aceText;
        wronganswer6Small1.value = adeText;
        wronganswer7Small1.value = bcdText;
        wronganswer8Small1.value = bceText;
        wronganswer9Small1.value = bdeText;
    }else if(answerSmall1.value == "A, D, E"){
        wronganswer1Small1.value = abcText;
        wronganswer2Small1.value = abdText;
        wronganswer3Small1.value = abeText;
        wronganswer4Small1.value = acdText;
        wronganswer5Small1.value = aceText;
        wronganswer6Small1.value = bcdText;
        wronganswer7Small1.value = bceText;
        wronganswer8Small1.value = bdeText;
        wronganswer9Small1.value = cdeText;
    }else{

    }
  }

  function threeOfFiveAiueo() {
    answerSmall1 = document.getElementById("id_answerSmall1");
    wronganswer1Small1 = document.getElementById("id_wronganswer1Small1");
    wronganswer2Small1 = document.getElementById("id_wronganswer2Small1");
    wronganswer3Small1 = document.getElementById("id_wronganswer3Small1");
    wronganswer4Small1 = document.getElementById("id_wronganswer4Small1");
    wronganswer5Small1 = document.getElementById("id_wronganswer5Small1");
    wronganswer6Small1 = document.getElementById("id_wronganswer6Small1");
    wronganswer7Small1 = document.getElementById("id_wronganswer7Small1");
    wronganswer8Small1 = document.getElementById("id_wronganswer8Small1");
    wronganswer9Small1 = document.getElementById("id_wronganswer9Small1");
   
    abcText = "ア、イ、ウ";
    abdText = "ア、イ、エ";
    abeText = "ア、イ、オ";
    acdText = "ア、ウ、エ";
    aceText = "ア、ウ、オ";
    adeText = "ア、エ、オ";
    bcdText = "イ、ウ、エ";
    bceText = "イ、ウ、オ";
    bdeText = "イ、エ、オ";
    cdeText = "ウ、エ、オ";

    document.querySelector('.yokonarabi p:nth-child(11)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(12)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(13)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(14)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(15)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(16)').style.display = "block";
    document.querySelector('.content1').style.overflow = "scroll";

    if(answerSmall1.value == "ア、イ、ウ"){
        wronganswer1Small1.value = abdText;
        wronganswer2Small1.value = abeText;
        wronganswer3Small1.value = acdText;
        wronganswer4Small1.value = aceText;
        wronganswer5Small1.value = adeText;
        wronganswer6Small1.value = bcdText;
        wronganswer7Small1.value = bceText;
        wronganswer8Small1.value = bdeText;
        wronganswer9Small1.value = cdeText;
    }else if(answerSmall1.value == "ア、イ、エ"){
        wronganswer1Small1.value = abcText;
        wronganswer2Small1.value = abeText;
        wronganswer3Small1.value = acdText;
        wronganswer4Small1.value = aceText;
        wronganswer5Small1.value = adeText;
        wronganswer6Small1.value = bcdText;
        wronganswer7Small1.value = bceText;
        wronganswer8Small1.value = bdeText;
        wronganswer9Small1.value = cdeText;
    }else if(answerSmall1.value == "ア、イ、オ"){
        wronganswer1Small1.value = abcText;
        wronganswer2Small1.value = abdText;
        wronganswer3Small1.value = acdText;
        wronganswer4Small1.value = aceText;
        wronganswer5Small1.value = adeText;
        wronganswer6Small1.value = bcdText;
        wronganswer7Small1.value = bceText;
        wronganswer8Small1.value = bdeText;
        wronganswer9Small1.value = cdeText;
    }else if(answerSmall1.value == "ア、ウ、エ"){
        wronganswer1Small1.value = abcText;
        wronganswer2Small1.value = abdText;
        wronganswer3Small1.value = abeText;
        wronganswer4Small1.value = aceText;
        wronganswer5Small1.value = adeText;
        wronganswer6Small1.value = bcdText;
        wronganswer7Small1.value = bceText;
        wronganswer8Small1.value = bdeText;
        wronganswer9Small1.value = cdeText;
    }else if(answerSmall1.value == "ア、ウ、オ"){
        wronganswer1Small1.value = abcText;
        wronganswer2Small1.value = abdText;
        wronganswer3Small1.value = abeText;
        wronganswer4Small1.value = acdText;
        wronganswer5Small1.value = adeText;
        wronganswer6Small1.value = bcdText;
        wronganswer7Small1.value = bceText;
        wronganswer8Small1.value = bdeText;
        wronganswer9Small1.value = cdeText;
    }else if(answerSmall1.value == "イ、ウ、エ"){
        wronganswer1Small1.value = abcText;
        wronganswer2Small1.value = abdText;
        wronganswer3Small1.value = abeText;
        wronganswer4Small1.value = acdText;
        wronganswer5Small1.value = aceText;
        wronganswer6Small1.value = adeText;
        wronganswer7Small1.value = bceText;
        wronganswer8Small1.value = bdeText;
        wronganswer9Small1.value = cdeText;
    }else if(answerSmall1.value == "イ、ウ、オ"){
        wronganswer1Small1.value = abcText;
        wronganswer2Small1.value = abdText;
        wronganswer3Small1.value = abeText;
        wronganswer4Small1.value = acdText;
        wronganswer5Small1.value = aceText;
        wronganswer6Small1.value = adeText;
        wronganswer7Small1.value = bcdText;
        wronganswer8Small1.value = bdeText;
        wronganswer9Small1.value = cdeText;
    }else if(answerSmall1.value == "イ、エ、オ"){
        wronganswer1Small1.value = abcText;
        wronganswer2Small1.value = abdText;
        wronganswer3Small1.value = abeText;
        wronganswer4Small1.value = acdText;
        wronganswer5Small1.value = aceText;
        wronganswer6Small1.value = adeText;
        wronganswer7Small1.value = bcdText;
        wronganswer8Small1.value = bceText;
        wronganswer9Small1.value = cdeText;
    }else if(answerSmall1.value == "ウ、エ、オ"){
        wronganswer1Small1.value = abcText;
        wronganswer2Small1.value = abdText;
        wronganswer3Small1.value = abeText;
        wronganswer4Small1.value = acdText;
        wronganswer5Small1.value = aceText;
        wronganswer6Small1.value = adeText;
        wronganswer7Small1.value = bcdText;
        wronganswer8Small1.value = bceText;
        wronganswer9Small1.value = bdeText;
    }else if(answerSmall1.value == "ア、エ、オ"){
        wronganswer1Small1.value = abcText;
        wronganswer2Small1.value = abdText;
        wronganswer3Small1.value = abeText;
        wronganswer4Small1.value = acdText;
        wronganswer5Small1.value = aceText;
        wronganswer6Small1.value = bcdText;
        wronganswer7Small1.value = bceText;
        wronganswer8Small1.value = bdeText;
        wronganswer9Small1.value = cdeText;
    }else{

    }
  }

  function aiue() {
    answerSmall1 = document.getElementById("id_answerSmall1");
    wronganswer1Small1 = document.getElementById("id_wronganswer1Small1");
    wronganswer2Small1 = document.getElementById("id_wronganswer2Small1");
    wronganswer3Small1 = document.getElementById("id_wronganswer3Small1");
    
    aText = "ア";
    iText = "イ";
    uText = "ウ";
    eText = "エ";

    /*document.querySelector('.yokonarabi p:nth-child(10)').style.display = "block";*/
    
    if(answerSmall1.value == "ア"){
        wronganswer1Small1.value = iText;
        wronganswer2Small1.value = uText;
        wronganswer3Small1.value = eText;
        
    }else if(answerSmall1.value == "イ"){
        wronganswer1Small1.value = aText;
        wronganswer2Small1.value = uText;
        wronganswer3Small1.value = eText;
        
    }else if(answerSmall1.value == "ウ"){
        wronganswer1Small1.value = aText;
        wronganswer2Small1.value = iText;
        wronganswer3Small1.value = eText;
        
    }else if(answerSmall1.value == "エ"){
        wronganswer1Small1.value = aText;
        wronganswer2Small1.value = iText;
        wronganswer3Small1.value = uText;
        
    }else{

    }
  }

  function abcd() {
    answerSmall1 = document.getElementById("id_answerSmall1");
    wronganswer1Small1 = document.getElementById("id_wronganswer1Small1");
    wronganswer2Small1 = document.getElementById("id_wronganswer2Small1");
    wronganswer3Small1 = document.getElementById("id_wronganswer3Small1");
    
    aText = "A";
    bText = "B";
    cText = "C";
    dText = "D";

    if(answerSmall1.value == "A"){
        wronganswer1Small1.value = bText;
        wronganswer2Small1.value = cText;
        wronganswer3Small1.value = dText;
        
    }else if(answerSmall1.value == "B"){
        wronganswer1Small1.value = aText;
        wronganswer2Small1.value = cText;
        wronganswer3Small1.value = dText;
        
    }else if(answerSmall1.value == "C"){
        wronganswer1Small1.value = aText;
        wronganswer2Small1.value = bText;
        wronganswer3Small1.value = dText;
        
    }else if(answerSmall1.value == "D"){
        wronganswer1Small1.value = aText;
        wronganswer2Small1.value = bText;
        wronganswer3Small1.value = cText;
        
    }else{

    }
  }

  /*7/17 Small2*/
  function twoOfFour2() {
  answerSmall2 = document.getElementById("id_answerSmall2");
    wronganswer1Small2 = document.getElementById("id_wronganswer1Small2");
    wronganswer2Small2 = document.getElementById("id_wronganswer2Small2");
    wronganswer3Small2 = document.getElementById("id_wronganswer3Small2");
    wronganswer4Small2 = document.getElementById("id_wronganswer4Small2");
    wronganswer5Small2 = document.getElementById("id_wronganswer5Small2");
    wronganswer6Small2 = document.getElementById("id_wronganswer6Small2");
    abText = "A, B";
    acText = "A, C";
    adText = "A, D";
    bcText = "B, C";
    bdText = "B, D";
    cdText = "C, D";  
    document.querySelector('.content2 p:nth-child(11)').style.display = "block";
    document.querySelector('.content2 p:nth-child(12)').style.display = "block";
    document.querySelector('.content2 p:nth-child(13)').style.display = "block";
    document.querySelector('.content2').style.overflow = "scroll";
    if(answerSmall2.value == "A, B"){
        wronganswer1Small2.value = cdText;
        wronganswer2Small2.value = acText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = bcText;
        wronganswer5Small2.value = bdText;
    }else if(answerSmall2.value == "B, C"){
        wronganswer1Small2.value = cdText;
        wronganswer2Small2.value = acText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = bdText;
    }else if(answerSmall2.value == "A, C"){
        wronganswer1Small2.value = cdText;
        wronganswer2Small2.value = bcText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = bdText;
    }else if(answerSmall2.value == "A, D"){
        wronganswer1Small2.value = cdText;
        wronganswer2Small2.value = bcText;
        wronganswer3Small2.value = acText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = bdText;
    }else if(answerSmall2.value == "B, D"){
        wronganswer1Small2.value = cdText;
        wronganswer2Small2.value = bcText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = acText;
    }else if(answerSmall2.value == "C, D"){
        wronganswer1Small2.value = acText;
        wronganswer2Small2.value = bcText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = bdText;
    }else{
    }
}
  function twoOfFourAiue2() {
    answerSmall2 = document.getElementById("id_answerSmall2");
    wronganswer1Small2 = document.getElementById("id_wronganswer1Small2");
    wronganswer2Small2 = document.getElementById("id_wronganswer2Small2");
    wronganswer3Small2 = document.getElementById("id_wronganswer3Small2");
    wronganswer4Small2 = document.getElementById("id_wronganswer4Small2");
    wronganswer5Small2 = document.getElementById("id_wronganswer5Small2");
    wronganswer6Small2 = document.getElementById("id_wronganswer6Small2");
    abText = "ア、イ";
    acText = "ア、ウ";
    adText = "ア、エ";
    bcText = "イ、ウ";
    bdText = "イ、エ";
    cdText = "ウ、エ";  
    document.querySelector('.content2 p:nth-child(11)').style.display = "block";
    document.querySelector('.content2 p:nth-child(12)').style.display = "block";
    document.querySelector('.content2 p:nth-child(13)').style.display = "block";
    document.querySelector('.content2').style.overflow = "scroll";
    if(answerSmall2.value == "ア、イ"){
        wronganswer1Small2.value = cdText;
        wronganswer2Small2.value = acText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = bcText;
        wronganswer5Small2.value = bdText;
    }else if(answerSmall2.value == "イ、ウ"){
        wronganswer1Small2.value = cdText;
        wronganswer2Small2.value = acText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = bdText;
    }else if(answerSmall2.value == "ア、ウ"){
        wronganswer1Small2.value = cdText;
        wronganswer2Small2.value = bcText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = bdText;
    }else if(answerSmall2.value == "ア、エ"){
        wronganswer1Small2.value = cdText;
        wronganswer2Small2.value = bcText;
        wronganswer3Small2.value = acText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = bdText;
    }else if(answerSmall2.value == "イ、エ"){
        wronganswer1Small2.value = cdText;
        wronganswer2Small2.value = bcText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = acText;
    }else if(answerSmall2.value == "ウ、エ"){
        wronganswer1Small2.value = acText;
        wronganswer2Small2.value = bcText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = bdText;
    }else{
    }
  }
  function twoOfFive2() {
    answerSmall2 = document.getElementById("id_answerSmall2");
    wronganswer1Small2 = document.getElementById("id_wronganswer1Small2");
    wronganswer2Small2 = document.getElementById("id_wronganswer2Small2");
    wronganswer3Small2 = document.getElementById("id_wronganswer3Small2");
    wronganswer4Small2 = document.getElementById("id_wronganswer4Small2");
    wronganswer5Small2 = document.getElementById("id_wronganswer5Small2");
    wronganswer6Small2 = document.getElementById("id_wronganswer6Small2");
    wronganswer7Small2 = document.getElementById("id_wronganswer7Small2");
    wronganswer8Small2 = document.getElementById("id_wronganswer8Small2");
    wronganswer9Small2 = document.getElementById("id_wronganswer9Small2");
    abText = "A, B";
    acText = "A, C";
    adText = "A, D";
    bcText = "B, C";
    bdText = "B, D";
    cdText = "C, D";
    aeText = "A, E";
    beText = "B, E";
    ceText = "C, E";
    deText = "D, E";
    document.querySelector('.content2 p:nth-child(11)').style.display = "block";
    document.querySelector('.content2 p:nth-child(12)').style.display = "block";
    document.querySelector('.content2 p:nth-child(13)').style.display = "block";
    document.querySelector('.content2 p:nth-child(14)').style.display = "block";
    document.querySelector('.content2 p:nth-child(15)').style.display = "block";
    document.querySelector('.content2 p:nth-child(16)').style.display = "block";
    document.querySelector('.content2').style.overflow = "scroll";
    if(answerSmall2.value == "A, B"){
        wronganswer1Small2.value = cdText;
        wronganswer2Small2.value = acText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = bcText;
        wronganswer5Small2.value = bdText;
        wronganswer6Small2.value = aeText;
        wronganswer7Small2.value = beText;
        wronganswer8Small2.value = ceText;
        wronganswer9Small2.value = deText;
    }else if(answerSmall2.value == "B, C"){
        wronganswer1Small2.value = cdText;
        wronganswer2Small2.value = acText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = bdText;
        wronganswer6Small2.value = aeText;
        wronganswer7Small2.value = beText;
        wronganswer8Small2.value = ceText;
        wronganswer9Small2.value = deText;
    }else if(answerSmall2.value == "A, C"){
        wronganswer1Small2.value = cdText;
        wronganswer2Small2.value = bcText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = bdText;
        wronganswer6Small2.value = aeText;
        wronganswer7Small2.value = beText;
        wronganswer8Small2.value = ceText;
        wronganswer9Small2.value = deText;
    }else if(answerSmall2.value == "A, D"){
        wronganswer1Small2.value = cdText;
        wronganswer2Small2.value = bcText;
        wronganswer3Small2.value = acText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = bdText;
        wronganswer6Small2.value = aeText;
        wronganswer7Small2.value = beText;
        wronganswer8Small2.value = ceText;
        wronganswer9Small2.value = deText;
    }else if(answerSmall2.value == "B, D"){
        wronganswer1Small2.value = cdText;
        wronganswer2Small2.value = bcText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = acText;
        wronganswer6Small2.value = aeText;
        wronganswer7Small2.value = beText;
        wronganswer8Small2.value = ceText;
        wronganswer9Small2.value = deText;
    }else if(answerSmall2.value == "C, D"){
        wronganswer1Small2.value = acText;
        wronganswer2Small2.value = bcText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = bdText;
        wronganswer6Small2.value = aeText;
        wronganswer7Small2.value = beText;
        wronganswer8Small2.value = ceText;
        wronganswer9Small2.value = deText;
    }else if(answerSmall2.value == "B, E"){
        wronganswer1Small2.value = acText;
        wronganswer2Small2.value = bcText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = bdText;
        wronganswer6Small2.value = aeText;
        wronganswer7Small2.value = cdText;
        wronganswer8Small2.value = ceText;
        wronganswer9Small2.value = deText;
    }else if(answerSmall2.value == "C, E"){
        wronganswer1Small2.value = acText;
        wronganswer2Small2.value = bcText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = bdText;
        wronganswer6Small2.value = aeText;
        wronganswer7Small2.value = beText;
        wronganswer8Small2.value = cdText;
        wronganswer9Small2.value = deText;
    }else if(answerSmall2.value == "D, E"){
        wronganswer1Small2.value = acText;
        wronganswer2Small2.value = bcText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = bdText;
        wronganswer6Small2.value = aeText;
        wronganswer7Small2.value = beText;
        wronganswer8Small2.value = ceText;
        wronganswer9Small2.value = cdText;
    }else if(answerSmall2.value == "A, E"){
        wronganswer1Small2.value = acText;
        wronganswer2Small2.value = bcText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = bdText;
        wronganswer6Small2.value = cdText;
        wronganswer7Small2.value = beText;
        wronganswer8Small2.value = ceText;
        wronganswer9Small2.value = deText;
    }else{
    }
  }
  function twoOfFiveAiueo2() {
    answerSmall2 = document.getElementById("id_answerSmall2");
    wronganswer1Small2 = document.getElementById("id_wronganswer1Small2");
    wronganswer2Small2 = document.getElementById("id_wronganswer2Small2");
    wronganswer3Small2 = document.getElementById("id_wronganswer3Small2");
    wronganswer4Small2 = document.getElementById("id_wronganswer4Small2");
    wronganswer5Small2 = document.getElementById("id_wronganswer5Small2");
    wronganswer6Small2 = document.getElementById("id_wronganswer6Small2");
    wronganswer7Small2 = document.getElementById("id_wronganswer7Small2");
    wronganswer8Small2 = document.getElementById("id_wronganswer8Small2");
    wronganswer9Small2 = document.getElementById("id_wronganswer9Small2");  
    abText = "ア、イ";
    acText = "ア、ウ";
    adText = "ア、エ";
    bcText = "イ、ウ";
    bdText = "イ、エ";
    cdText = "ウ、エ";
    aeText = "ア、オ";
    beText = "イ、オ";
    ceText = "ウ、オ";
    deText = "エ、オ";
    document.querySelector('.content2 p:nth-child(11)').style.display = "block";
    document.querySelector('.content2 p:nth-child(12)').style.display = "block";
    document.querySelector('.content2 p:nth-child(13)').style.display = "block";
    document.querySelector('.content2 p:nth-child(14)').style.display = "block";
    document.querySelector('.content2 p:nth-child(15)').style.display = "block";
    document.querySelector('.content2 p:nth-child(16)').style.display = "block";
    document.querySelector('.content2').style.overflow = "scroll";
    if(answerSmall2.value == "ア、イ"){
        wronganswer1Small2.value = cdText;
        wronganswer2Small2.value = acText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = bcText;
        wronganswer5Small2.value = bdText;
        wronganswer6Small2.value = aeText;
        wronganswer7Small2.value = beText;
        wronganswer8Small2.value = ceText;
        wronganswer9Small2.value = deText;
    }else if(answerSmall2.value == "イ、ウ"){
        wronganswer1Small2.value = cdText;
        wronganswer2Small2.value = acText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = bdText;
        wronganswer6Small2.value = aeText;
        wronganswer7Small2.value = beText;
        wronganswer8Small2.value = ceText;
        wronganswer9Small2.value = deText;
    }else if(answerSmall2.value == "ア、ウ"){
        wronganswer1Small2.value = cdText;
        wronganswer2Small2.value = bcText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = bdText;
        wronganswer6Small2.value = aeText;
        wronganswer7Small2.value = beText;
        wronganswer8Small2.value = ceText;
        wronganswer9Small2.value = deText;
    }else if(answerSmall2.value == "ア、エ"){
        wronganswer1Small2.value = cdText;
        wronganswer2Small2.value = bcText;
        wronganswer3Small2.value = acText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = bdText;
        wronganswer6Small2.value = aeText;
        wronganswer7Small2.value = beText;
        wronganswer8Small2.value = ceText;
        wronganswer9Small2.value = deText;
    }else if(answerSmall2.value == "イ、エ"){
        wronganswer1Small2.value = cdText;
        wronganswer2Small2.value = bcText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = acText;
        wronganswer6Small2.value = aeText;
        wronganswer7Small2.value = beText;
        wronganswer8Small2.value = ceText;
        wronganswer9Small2.value = deText;
    }else if(answerSmall2.value == "ウ、エ"){
        wronganswer1Small2.value = acText;
        wronganswer2Small2.value = bcText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = bdText;
        wronganswer6Small2.value = aeText;
        wronganswer7Small2.value = beText;
        wronganswer8Small2.value = ceText;
        wronganswer9Small2.value = deText;
    }else if(answerSmall2.value == "イ、オ"){
        wronganswer1Small2.value = acText;
        wronganswer2Small2.value = bcText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = bdText;
        wronganswer6Small2.value = aeText;
        wronganswer7Small2.value = cdText;
        wronganswer8Small2.value = ceText;
        wronganswer9Small2.value = deText;
    }else if(answerSmall2.value == "ウ、オ"){
        wronganswer1Small2.value = acText;
        wronganswer2Small2.value = bcText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = bdText;
        wronganswer6Small2.value = aeText;
        wronganswer7Small2.value = beText;
        wronganswer8Small2.value = cdText;
        wronganswer9Small2.value = deText;
    }else if(answerSmall2.value == "エ、オ"){
        wronganswer1Small2.value = acText;
        wronganswer2Small2.value = bcText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = bdText;
        wronganswer6Small2.value = aeText;
        wronganswer7Small2.value = beText;
        wronganswer8Small2.value = ceText;
        wronganswer9Small2.value = cdText;
    }else if(answerSmall2.value == "ア、オ"){
        wronganswer1Small2.value = acText;
        wronganswer2Small2.value = bcText;
        wronganswer3Small2.value = adText;
        wronganswer4Small2.value = abText;
        wronganswer5Small2.value = bdText;
        wronganswer6Small2.value = cdText;
        wronganswer7Small2.value = beText;
        wronganswer8Small2.value = ceText;
        wronganswer9Small2.value = deText;
    }else{
    }
  }
  function threeOfFive2() {
    answerSmall2 = document.getElementById("id_answerSmall2");
    wronganswer1Small2 = document.getElementById("id_wronganswer1Small2");
    wronganswer2Small2 = document.getElementById("id_wronganswer2Small2");
    wronganswer3Small2 = document.getElementById("id_wronganswer3Small2");
    wronganswer4Small2 = document.getElementById("id_wronganswer4Small2");
    wronganswer5Small2 = document.getElementById("id_wronganswer5Small2");
    wronganswer6Small2 = document.getElementById("id_wronganswer6Small2");
    wronganswer7Small2 = document.getElementById("id_wronganswer7Small2");
    wronganswer8Small2 = document.getElementById("id_wronganswer8Small2");
    wronganswer9Small2 = document.getElementById("id_wronganswer9Small2");  
    abcText = "A, B, C";
    abdText = "A, B, D";
    abeText = "A, B, E";
    acdText = "A, C, D";
    aceText = "A, C, E";
    adeText = "A, D, E";
    bcdText = "B, C, D";
    bceText = "B, C, E";
    bdeText = "B, D, E";
    cdeText = "C, D, E";
    document.querySelector('.content2 p:nth-child(11)').style.display = "block";
    document.querySelector('.content2 p:nth-child(12)').style.display = "block";
    document.querySelector('.content2 p:nth-child(13)').style.display = "block";
    document.querySelector('.content2 p:nth-child(14)').style.display = "block";
    document.querySelector('.content2 p:nth-child(15)').style.display = "block";
    document.querySelector('.content2 p:nth-child(16)').style.display = "block";
    document.querySelector('.content2').style.overflow = "scroll";
    if(answerSmall2.value == "A, B, C"){
        wronganswer1Small2.value = abdText;
        wronganswer2Small2.value = abeText;
        wronganswer3Small2.value = acdText;
        wronganswer4Small2.value = aceText;
        wronganswer5Small2.value = adeText;
        wronganswer6Small2.value = bcdText;
        wronganswer7Small2.value = bceText;
        wronganswer8Small2.value = bdeText;
        wronganswer9Small2.value = cdeText;
    }else if(answerSmall2.value == "A, B, D"){
        wronganswer1Small2.value = abcText;
        wronganswer2Small2.value = abeText;
        wronganswer3Small2.value = acdText;
        wronganswer4Small2.value = aceText;
        wronganswer5Small2.value = adeText;
        wronganswer6Small2.value = bcdText;
        wronganswer7Small2.value = bceText;
        wronganswer8Small2.value = bdeText;
        wronganswer9Small2.value = cdeText;
    }else if(answerSmall2.value == "A, B, E"){
        wronganswer1Small2.value = abcText;
        wronganswer2Small2.value = abdText;
        wronganswer3Small2.value = acdText;
        wronganswer4Small2.value = aceText;
        wronganswer5Small2.value = adeText;
        wronganswer6Small2.value = bcdText;
        wronganswer7Small2.value = bceText;
        wronganswer8Small2.value = bdeText;
        wronganswer9Small2.value = cdeText;
    }else if(answerSmall2.value == "A, C, D"){
        wronganswer1Small2.value = abcText;
        wronganswer2Small2.value = abdText;
        wronganswer3Small2.value = abeText;
        wronganswer4Small2.value = aceText;
        wronganswer5Small2.value = adeText;
        wronganswer6Small2.value = bcdText;
        wronganswer7Small2.value = bceText;
        wronganswer8Small2.value = bdeText;
        wronganswer9Small2.value = cdeText;
    }else if(answerSmall2.value == "A, C, E"){
        wronganswer1Small2.value = abcText;
        wronganswer2Small2.value = abdText;
        wronganswer3Small2.value = abeText;
        wronganswer4Small2.value = acdText;
        wronganswer5Small2.value = adeText;
        wronganswer6Small2.value = bcdText;
        wronganswer7Small2.value = bceText;
        wronganswer8Small2.value = bdeText;
        wronganswer9Small2.value = cdeText;
    }else if(answerSmall2.value == "B, C, D"){
        wronganswer1Small2.value = abcText;
        wronganswer2Small2.value = abdText;
        wronganswer3Small2.value = abeText;
        wronganswer4Small2.value = acdText;
        wronganswer5Small2.value = aceText;
        wronganswer6Small2.value = adeText;
        wronganswer7Small2.value = bceText;
        wronganswer8Small2.value = bdeText;
        wronganswer9Small2.value = cdeText;
    }else if(answerSmall2.value == "B, C, E"){
        wronganswer1Small2.value = abcText;
        wronganswer2Small2.value = abdText;
        wronganswer3Small2.value = abeText;
        wronganswer4Small2.value = acdText;
        wronganswer5Small2.value = aceText;
        wronganswer6Small2.value = adeText;
        wronganswer7Small2.value = bcdText;
        wronganswer8Small2.value = bdeText;
        wronganswer9Small2.value = cdeText;
    }else if(answerSmall2.value == "B, D, E"){
        wronganswer1Small2.value = abcText;
        wronganswer2Small2.value = abdText;
        wronganswer3Small2.value = abeText;
        wronganswer4Small2.value = acdText;
        wronganswer5Small2.value = aceText;
        wronganswer6Small2.value = adeText;
        wronganswer7Small2.value = bcdText;
        wronganswer8Small2.value = bceText;
        wronganswer9Small2.value = cdeText;
    }else if(answerSmall2.value == "C, D, E"){
        wronganswer1Small2.value = abcText;
        wronganswer2Small2.value = abdText;
        wronganswer3Small2.value = abeText;
        wronganswer4Small2.value = acdText;
        wronganswer5Small2.value = aceText;
        wronganswer6Small2.value = adeText;
        wronganswer7Small2.value = bcdText;
        wronganswer8Small2.value = bceText;
        wronganswer9Small2.value = bdeText;
    }else if(answerSmall2.value == "A, D, E"){
        wronganswer1Small2.value = abcText;
        wronganswer2Small2.value = abdText;
        wronganswer3Small2.value = abeText;
        wronganswer4Small2.value = acdText;
        wronganswer5Small2.value = aceText;
        wronganswer6Small2.value = bcdText;
        wronganswer7Small2.value = bceText;
        wronganswer8Small2.value = bdeText;
        wronganswer9Small2.value = cdeText;
    }else{
    }
  }
  function threeOfFiveAiueo2() {
    answerSmall2 = document.getElementById("id_answerSmall2");
    wronganswer1Small2 = document.getElementById("id_wronganswer1Small2");
    wronganswer2Small2 = document.getElementById("id_wronganswer2Small2");
    wronganswer3Small2 = document.getElementById("id_wronganswer3Small2");
    wronganswer4Small2 = document.getElementById("id_wronganswer4Small2");
    wronganswer5Small2 = document.getElementById("id_wronganswer5Small2");
    wronganswer6Small2 = document.getElementById("id_wronganswer6Small2");
    wronganswer7Small2 = document.getElementById("id_wronganswer7Small2");
    wronganswer8Small2 = document.getElementById("id_wronganswer8Small2");
    wronganswer9Small2 = document.getElementById("id_wronganswer9Small2");   
    abcText = "ア、イ、ウ";
    abdText = "ア、イ、エ";
    abeText = "ア、イ、オ";
    acdText = "ア、ウ、エ";
    aceText = "ア、ウ、オ";
    adeText = "ア、エ、オ";
    bcdText = "イ、ウ、エ";
    bceText = "イ、ウ、オ";
    bdeText = "イ、エ、オ";
    cdeText = "ウ、エ、オ";
    document.querySelector('.content2 p:nth-child(11)').style.display = "block";
    document.querySelector('.content2 p:nth-child(12)').style.display = "block";
    document.querySelector('.content2 p:nth-child(13)').style.display = "block";
    document.querySelector('.content2 p:nth-child(14)').style.display = "block";
    document.querySelector('.content2 p:nth-child(15)').style.display = "block";
    document.querySelector('.content2 p:nth-child(16)').style.display = "block";
    document.querySelector('.content2').style.overflow = "scroll";
    if(answerSmall2.value == "ア、イ、ウ"){
        wronganswer1Small2.value = abdText;
        wronganswer2Small2.value = abeText;
        wronganswer3Small2.value = acdText;
        wronganswer4Small2.value = aceText;
        wronganswer5Small2.value = adeText;
        wronganswer6Small2.value = bcdText;
        wronganswer7Small2.value = bceText;
        wronganswer8Small2.value = bdeText;
        wronganswer9Small2.value = cdeText;
    }else if(answerSmall2.value == "ア、イ、エ"){
        wronganswer1Small2.value = abcText;
        wronganswer2Small2.value = abeText;
        wronganswer3Small2.value = acdText;
        wronganswer4Small2.value = aceText;
        wronganswer5Small2.value = adeText;
        wronganswer6Small2.value = bcdText;
        wronganswer7Small2.value = bceText;
        wronganswer8Small2.value = bdeText;
        wronganswer9Small2.value = cdeText;
    }else if(answerSmall2.value == "ア、イ、オ"){
        wronganswer1Small2.value = abcText;
        wronganswer2Small2.value = abdText;
        wronganswer3Small2.value = acdText;
        wronganswer4Small2.value = aceText;
        wronganswer5Small2.value = adeText;
        wronganswer6Small2.value = bcdText;
        wronganswer7Small2.value = bceText;
        wronganswer8Small2.value = bdeText;
        wronganswer9Small2.value = cdeText;
    }else if(answerSmall2.value == "ア、ウ、エ"){
        wronganswer1Small2.value = abcText;
        wronganswer2Small2.value = abdText;
        wronganswer3Small2.value = abeText;
        wronganswer4Small2.value = aceText;
        wronganswer5Small2.value = adeText;
        wronganswer6Small2.value = bcdText;
        wronganswer7Small2.value = bceText;
        wronganswer8Small2.value = bdeText;
        wronganswer9Small2.value = cdeText;
    }else if(answerSmall2.value == "ア、ウ、オ"){
        wronganswer1Small2.value = abcText;
        wronganswer2Small2.value = abdText;
        wronganswer3Small2.value = abeText;
        wronganswer4Small2.value = acdText;
        wronganswer5Small2.value = adeText;
        wronganswer6Small2.value = bcdText;
        wronganswer7Small2.value = bceText;
        wronganswer8Small2.value = bdeText;
        wronganswer9Small2.value = cdeText;
    }else if(answerSmall2.value == "イ、ウ、エ"){
        wronganswer1Small2.value = abcText;
        wronganswer2Small2.value = abdText;
        wronganswer3Small2.value = abeText;
        wronganswer4Small2.value = acdText;
        wronganswer5Small2.value = aceText;
        wronganswer6Small2.value = adeText;
        wronganswer7Small2.value = bceText;
        wronganswer8Small2.value = bdeText;
        wronganswer9Small2.value = cdeText;
    }else if(answerSmall2.value == "イ、ウ、オ"){
        wronganswer1Small2.value = abcText;
        wronganswer2Small2.value = abdText;
        wronganswer3Small2.value = abeText;
        wronganswer4Small2.value = acdText;
        wronganswer5Small2.value = aceText;
        wronganswer6Small2.value = adeText;
        wronganswer7Small2.value = bcdText;
        wronganswer8Small2.value = bdeText;
        wronganswer9Small2.value = cdeText;
    }else if(answerSmall2.value == "イ、エ、オ"){
        wronganswer1Small2.value = abcText;
        wronganswer2Small2.value = abdText;
        wronganswer3Small2.value = abeText;
        wronganswer4Small2.value = acdText;
        wronganswer5Small2.value = aceText;
        wronganswer6Small2.value = adeText;
        wronganswer7Small2.value = bcdText;
        wronganswer8Small2.value = bceText;
        wronganswer9Small2.value = cdeText;
    }else if(answerSmall2.value == "ウ、エ、オ"){
        wronganswer1Small2.value = abcText;
        wronganswer2Small2.value = abdText;
        wronganswer3Small2.value = abeText;
        wronganswer4Small2.value = acdText;
        wronganswer5Small2.value = aceText;
        wronganswer6Small2.value = adeText;
        wronganswer7Small2.value = bcdText;
        wronganswer8Small2.value = bceText;
        wronganswer9Small2.value = bdeText;
    }else if(answerSmall2.value == "ア、エ、オ"){
        wronganswer1Small2.value = abcText;
        wronganswer2Small2.value = abdText;
        wronganswer3Small2.value = abeText;
        wronganswer4Small2.value = acdText;
        wronganswer5Small2.value = aceText;
        wronganswer6Small2.value = bcdText;
        wronganswer7Small2.value = bceText;
        wronganswer8Small2.value = bdeText;
        wronganswer9Small2.value = cdeText;
    }else{
    }
  }
  function aiue2() {
    answerSmall2 = document.getElementById("id_answerSmall2");
    wronganswer1Small2 = document.getElementById("id_wronganswer1Small2");
    wronganswer2Small2 = document.getElementById("id_wronganswer2Small2");
    wronganswer3Small2 = document.getElementById("id_wronganswer3Small2");
    let aText = "ア";
    let iText = "イ";
    let uText = "ウ";
    let eText = "エ";
    if(answerSmall2.value == "ア"){
        wronganswer1Small2.value = iText;
        wronganswer2Small2.value = uText;
        wronganswer3Small2.value = eText;    
    }else if(answerSmall2.value == "イ"){
        wronganswer1Small2.value = aText;
        wronganswer2Small2.value = uText;
        wronganswer3Small2.value = eText; 
    }else if(answerSmall2.value == "ウ"){
        wronganswer1Small2.value = aText;
        wronganswer2Small2.value = iText;
        wronganswer3Small2.value = eText;       
    }else if(answerSmall2.value == "エ"){
        wronganswer1Small2.value = aText;
        wronganswer2Small2.value = iText;
        wronganswer3Small2.value = uText;     
    }else{
    }
  }
  function abcd2() {
    answerSmall2 = document.getElementById("id_answerSmall2");
    wronganswer1Small2 = document.getElementById("id_wronganswer1Small2");
    wronganswer2Small2 = document.getElementById("id_wronganswer2Small2");
    wronganswer3Small2 = document.getElementById("id_wronganswer3Small2");  
    aText = "A";
    bText = "B";
    cText = "C";
    dText = "D";
    if(answerSmall2.value == "A"){
        wronganswer1Small2.value = bText;
        wronganswer2Small2.value = cText;
        wronganswer3Small2.value = dText; 
    }else if(answerSmall2.value == "B"){
        wronganswer1Small2.value = aText;
        wronganswer2Small2.value = cText;
        wronganswer3Small2.value = dText;   
    }else if(answerSmall2.value == "C"){
        wronganswer1Small2.value = aText;
        wronganswer2Small2.value = bText;
        wronganswer3Small2.value = dText;  
    }else if(answerSmall2.value == "D"){
        wronganswer1Small2.value = aText;
        wronganswer2Small2.value = bText;
        wronganswer3Small2.value = cText; 
    }else{
    }
  }

  /*7/17 Small3*/
  function twoOfFour3() {
  answerSmall3 = document.getElementById("id_answerSmall3");
    wronganswer1Small3 = document.getElementById("id_wronganswer1Small3");
    wronganswer2Small3 = document.getElementById("id_wronganswer2Small3");
    wronganswer3Small3 = document.getElementById("id_wronganswer3Small3");
    wronganswer4Small3 = document.getElementById("id_wronganswer4Small3");
    wronganswer5Small3 = document.getElementById("id_wronganswer5Small3");
    wronganswer6Small3 = document.getElementById("id_wronganswer6Small3");
    abText = "A, B";
    acText = "A, C";
    adText = "A, D";
    bcText = "B, C";
    bdText = "B, D";
    cdText = "C, D";  
    document.querySelector('.content3 p:nth-child(11)').style.display = "block";
    document.querySelector('.content3 p:nth-child(12)').style.display = "block";
    document.querySelector('.content3 p:nth-child(13)').style.display = "block";
    document.querySelector('.content3').style.overflow = "scroll";
    if(answerSmall3.value == "A, B"){
        wronganswer1Small3.value = cdText;
        wronganswer2Small3.value = acText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = bcText;
        wronganswer5Small3.value = bdText;
    }else if(answerSmall3.value == "B, C"){
        wronganswer1Small3.value = cdText;
        wronganswer2Small3.value = acText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = bdText;
    }else if(answerSmall3.value == "A, C"){
        wronganswer1Small3.value = cdText;
        wronganswer2Small3.value = bcText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = bdText;
    }else if(answerSmall3.value == "A, D"){
        wronganswer1Small3.value = cdText;
        wronganswer2Small3.value = bcText;
        wronganswer3Small3.value = acText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = bdText;
    }else if(answerSmall3.value == "B, D"){
        wronganswer1Small3.value = cdText;
        wronganswer2Small3.value = bcText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = acText;
    }else if(answerSmall3.value == "C, D"){
        wronganswer1Small3.value = acText;
        wronganswer2Small3.value = bcText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = bdText;
    }else{
    }
}
  function twoOfFourAiue3() {
    answerSmall3 = document.getElementById("id_answerSmall3");
    wronganswer1Small3 = document.getElementById("id_wronganswer1Small3");
    wronganswer2Small3 = document.getElementById("id_wronganswer2Small3");
    wronganswer3Small3 = document.getElementById("id_wronganswer3Small3");
    wronganswer4Small3 = document.getElementById("id_wronganswer4Small3");
    wronganswer5Small3 = document.getElementById("id_wronganswer5Small3");
    wronganswer6Small3 = document.getElementById("id_wronganswer6Small3");
    abText = "ア、イ";
    acText = "ア、ウ";
    adText = "ア、エ";
    bcText = "イ、ウ";
    bdText = "イ、エ";
    cdText = "ウ、エ";  
    document.querySelector('.content3 p:nth-child(11)').style.display = "block";
    document.querySelector('.content3 p:nth-child(12)').style.display = "block";
    document.querySelector('.content3 p:nth-child(13)').style.display = "block";
    document.querySelector('.content3').style.overflow = "scroll";
    if(answerSmall3.value == "ア、イ"){
        wronganswer1Small3.value = cdText;
        wronganswer2Small3.value = acText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = bcText;
        wronganswer5Small3.value = bdText;
    }else if(answerSmall3.value == "イ、ウ"){
        wronganswer1Small3.value = cdText;
        wronganswer2Small3.value = acText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = bdText;
    }else if(answerSmall3.value == "ア、ウ"){
        wronganswer1Small3.value = cdText;
        wronganswer2Small3.value = bcText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = bdText;
    }else if(answerSmall3.value == "ア、エ"){
        wronganswer1Small3.value = cdText;
        wronganswer2Small3.value = bcText;
        wronganswer3Small3.value = acText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = bdText;
    }else if(answerSmall3.value == "イ、エ"){
        wronganswer1Small3.value = cdText;
        wronganswer2Small3.value = bcText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = acText;
    }else if(answerSmall3.value == "ウ、エ"){
        wronganswer1Small3.value = acText;
        wronganswer2Small3.value = bcText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = bdText;
    }else{
    }
  }
  function twoOfFive3() {
    answerSmall3 = document.getElementById("id_answerSmall3");
    wronganswer1Small3 = document.getElementById("id_wronganswer1Small3");
    wronganswer2Small3 = document.getElementById("id_wronganswer2Small3");
    wronganswer3Small3 = document.getElementById("id_wronganswer3Small3");
    wronganswer4Small3 = document.getElementById("id_wronganswer4Small3");
    wronganswer5Small3 = document.getElementById("id_wronganswer5Small3");
    wronganswer6Small3 = document.getElementById("id_wronganswer6Small3");
    wronganswer7Small3 = document.getElementById("id_wronganswer7Small3");
    wronganswer8Small3 = document.getElementById("id_wronganswer8Small3");
    wronganswer9Small3 = document.getElementById("id_wronganswer9Small3");
    abText = "A, B";
    acText = "A, C";
    adText = "A, D";
    bcText = "B, C";
    bdText = "B, D";
    cdText = "C, D";
    aeText = "A, E";
    beText = "B, E";
    ceText = "C, E";
    deText = "D, E";
    document.querySelector('.content3 p:nth-child(11)').style.display = "block";
    document.querySelector('.content3 p:nth-child(12)').style.display = "block";
    document.querySelector('.content3 p:nth-child(13)').style.display = "block";
    document.querySelector('.content3 p:nth-child(14)').style.display = "block";
    document.querySelector('.content3 p:nth-child(15)').style.display = "block";
    document.querySelector('.content3 p:nth-child(16)').style.display = "block";
    document.querySelector('.content3').style.overflow = "scroll";
    if(answerSmall3.value == "A, B"){
        wronganswer1Small3.value = cdText;
        wronganswer2Small3.value = acText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = bcText;
        wronganswer5Small3.value = bdText;
        wronganswer6Small3.value = aeText;
        wronganswer7Small3.value = beText;
        wronganswer8Small3.value = ceText;
        wronganswer9Small3.value = deText;
    }else if(answerSmall3.value == "B, C"){
        wronganswer1Small3.value = cdText;
        wronganswer2Small3.value = acText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = bdText;
        wronganswer6Small3.value = aeText;
        wronganswer7Small3.value = beText;
        wronganswer8Small3.value = ceText;
        wronganswer9Small3.value = deText;
    }else if(answerSmall3.value == "A, C"){
        wronganswer1Small3.value = cdText;
        wronganswer2Small3.value = bcText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = bdText;
        wronganswer6Small3.value = aeText;
        wronganswer7Small3.value = beText;
        wronganswer8Small3.value = ceText;
        wronganswer9Small3.value = deText;
    }else if(answerSmall3.value == "A, D"){
        wronganswer1Small3.value = cdText;
        wronganswer2Small3.value = bcText;
        wronganswer3Small3.value = acText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = bdText;
        wronganswer6Small3.value = aeText;
        wronganswer7Small3.value = beText;
        wronganswer8Small3.value = ceText;
        wronganswer9Small3.value = deText;
    }else if(answerSmall3.value == "B, D"){
        wronganswer1Small3.value = cdText;
        wronganswer2Small3.value = bcText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = acText;
        wronganswer6Small3.value = aeText;
        wronganswer7Small3.value = beText;
        wronganswer8Small3.value = ceText;
        wronganswer9Small3.value = deText;
    }else if(answerSmall3.value == "C, D"){
        wronganswer1Small3.value = acText;
        wronganswer2Small3.value = bcText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = bdText;
        wronganswer6Small3.value = aeText;
        wronganswer7Small3.value = beText;
        wronganswer8Small3.value = ceText;
        wronganswer9Small3.value = deText;
    }else if(answerSmall3.value == "B, E"){
        wronganswer1Small3.value = acText;
        wronganswer2Small3.value = bcText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = bdText;
        wronganswer6Small3.value = aeText;
        wronganswer7Small3.value = cdText;
        wronganswer8Small3.value = ceText;
        wronganswer9Small3.value = deText;
    }else if(answerSmall3.value == "C, E"){
        wronganswer1Small3.value = acText;
        wronganswer2Small3.value = bcText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = bdText;
        wronganswer6Small3.value = aeText;
        wronganswer7Small3.value = beText;
        wronganswer8Small3.value = cdText;
        wronganswer9Small3.value = deText;
    }else if(answerSmall3.value == "D, E"){
        wronganswer1Small3.value = acText;
        wronganswer2Small3.value = bcText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = bdText;
        wronganswer6Small3.value = aeText;
        wronganswer7Small3.value = beText;
        wronganswer8Small3.value = ceText;
        wronganswer9Small3.value = cdText;
    }else if(answerSmall3.value == "A, E"){
        wronganswer1Small3.value = acText;
        wronganswer2Small3.value = bcText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = bdText;
        wronganswer6Small3.value = cdText;
        wronganswer7Small3.value = beText;
        wronganswer8Small3.value = ceText;
        wronganswer9Small3.value = deText;
    }else{
    }
  }
  function twoOfFiveAiueo3() {
    answerSmall3 = document.getElementById("id_answerSmall3");
    wronganswer1Small3 = document.getElementById("id_wronganswer1Small3");
    wronganswer2Small3 = document.getElementById("id_wronganswer2Small3");
    wronganswer3Small3 = document.getElementById("id_wronganswer3Small3");
    wronganswer4Small3 = document.getElementById("id_wronganswer4Small3");
    wronganswer5Small3 = document.getElementById("id_wronganswer5Small3");
    wronganswer6Small3 = document.getElementById("id_wronganswer6Small3");
    wronganswer7Small3 = document.getElementById("id_wronganswer7Small3");
    wronganswer8Small3 = document.getElementById("id_wronganswer8Small3");
    wronganswer9Small3 = document.getElementById("id_wronganswer9Small3");  
    abText = "ア、イ";
    acText = "ア、ウ";
    adText = "ア、エ";
    bcText = "イ、ウ";
    bdText = "イ、エ";
    cdText = "ウ、エ";
    aeText = "ア、オ";
    beText = "イ、オ";
    ceText = "ウ、オ";
    deText = "エ、オ";
    document.querySelector('.content3 p:nth-child(11)').style.display = "block";
    document.querySelector('.content3 p:nth-child(12)').style.display = "block";
    document.querySelector('.content3 p:nth-child(13)').style.display = "block";
    document.querySelector('.content3 p:nth-child(14)').style.display = "block";
    document.querySelector('.content3 p:nth-child(15)').style.display = "block";
    document.querySelector('.content3 p:nth-child(16)').style.display = "block";
    document.querySelector('.content3').style.overflow = "scroll";
    if(answerSmall3.value == "ア、イ"){
        wronganswer1Small3.value = cdText;
        wronganswer2Small3.value = acText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = bcText;
        wronganswer5Small3.value = bdText;
        wronganswer6Small3.value = aeText;
        wronganswer7Small3.value = beText;
        wronganswer8Small3.value = ceText;
        wronganswer9Small3.value = deText;
    }else if(answerSmall3.value == "イ、ウ"){
        wronganswer1Small3.value = cdText;
        wronganswer2Small3.value = acText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = bdText;
        wronganswer6Small3.value = aeText;
        wronganswer7Small3.value = beText;
        wronganswer8Small3.value = ceText;
        wronganswer9Small3.value = deText;
    }else if(answerSmall3.value == "ア、ウ"){
        wronganswer1Small3.value = cdText;
        wronganswer2Small3.value = bcText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = bdText;
        wronganswer6Small3.value = aeText;
        wronganswer7Small3.value = beText;
        wronganswer8Small3.value = ceText;
        wronganswer9Small3.value = deText;
    }else if(answerSmall3.value == "ア、エ"){
        wronganswer1Small3.value = cdText;
        wronganswer2Small3.value = bcText;
        wronganswer3Small3.value = acText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = bdText;
        wronganswer6Small3.value = aeText;
        wronganswer7Small3.value = beText;
        wronganswer8Small3.value = ceText;
        wronganswer9Small3.value = deText;
    }else if(answerSmall3.value == "イ、エ"){
        wronganswer1Small3.value = cdText;
        wronganswer2Small3.value = bcText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = acText;
        wronganswer6Small3.value = aeText;
        wronganswer7Small3.value = beText;
        wronganswer8Small3.value = ceText;
        wronganswer9Small3.value = deText;
    }else if(answerSmall3.value == "ウ、エ"){
        wronganswer1Small3.value = acText;
        wronganswer2Small3.value = bcText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = bdText;
        wronganswer6Small3.value = aeText;
        wronganswer7Small3.value = beText;
        wronganswer8Small3.value = ceText;
        wronganswer9Small3.value = deText;
    }else if(answerSmall3.value == "イ、オ"){
        wronganswer1Small3.value = acText;
        wronganswer2Small3.value = bcText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = bdText;
        wronganswer6Small3.value = aeText;
        wronganswer7Small3.value = cdText;
        wronganswer8Small3.value = ceText;
        wronganswer9Small3.value = deText;
    }else if(answerSmall3.value == "ウ、オ"){
        wronganswer1Small3.value = acText;
        wronganswer2Small3.value = bcText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = bdText;
        wronganswer6Small3.value = aeText;
        wronganswer7Small3.value = beText;
        wronganswer8Small3.value = cdText;
        wronganswer9Small3.value = deText;
    }else if(answerSmall3.value == "エ、オ"){
        wronganswer1Small3.value = acText;
        wronganswer2Small3.value = bcText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = bdText;
        wronganswer6Small3.value = aeText;
        wronganswer7Small3.value = beText;
        wronganswer8Small3.value = ceText;
        wronganswer9Small3.value = cdText;
    }else if(answerSmall3.value == "ア、オ"){
        wronganswer1Small3.value = acText;
        wronganswer2Small3.value = bcText;
        wronganswer3Small3.value = adText;
        wronganswer4Small3.value = abText;
        wronganswer5Small3.value = bdText;
        wronganswer6Small3.value = cdText;
        wronganswer7Small3.value = beText;
        wronganswer8Small3.value = ceText;
        wronganswer9Small3.value = deText;
    }else{
    }
  }
  function threeOfFive3() {
    answerSmall3 = document.getElementById("id_answerSmall3");
    wronganswer1Small3 = document.getElementById("id_wronganswer1Small3");
    wronganswer2Small3 = document.getElementById("id_wronganswer2Small3");
    wronganswer3Small3 = document.getElementById("id_wronganswer3Small3");
    wronganswer4Small3 = document.getElementById("id_wronganswer4Small3");
    wronganswer5Small3 = document.getElementById("id_wronganswer5Small3");
    wronganswer6Small3 = document.getElementById("id_wronganswer6Small3");
    wronganswer7Small3 = document.getElementById("id_wronganswer7Small3");
    wronganswer8Small3 = document.getElementById("id_wronganswer8Small3");
    wronganswer9Small3 = document.getElementById("id_wronganswer9Small3");  
    abcText = "A, B, C";
    abdText = "A, B, D";
    abeText = "A, B, E";
    acdText = "A, C, D";
    aceText = "A, C, E";
    adeText = "A, D, E";
    bcdText = "B, C, D";
    bceText = "B, C, E";
    bdeText = "B, D, E";
    cdeText = "C, D, E";
    document.querySelector('.content3 p:nth-child(11)').style.display = "block";
    document.querySelector('.content3 p:nth-child(12)').style.display = "block";
    document.querySelector('.content3 p:nth-child(13)').style.display = "block";
    document.querySelector('.content3 p:nth-child(14)').style.display = "block";
    document.querySelector('.content3 p:nth-child(15)').style.display = "block";
    document.querySelector('.content3 p:nth-child(16)').style.display = "block";
    document.querySelector('.content3').style.overflow = "scroll";
    if(answerSmall3.value == "A, B, C"){
        wronganswer1Small3.value = abdText;
        wronganswer2Small3.value = abeText;
        wronganswer3Small3.value = acdText;
        wronganswer4Small3.value = aceText;
        wronganswer5Small3.value = adeText;
        wronganswer6Small3.value = bcdText;
        wronganswer7Small3.value = bceText;
        wronganswer8Small3.value = bdeText;
        wronganswer9Small3.value = cdeText;
    }else if(answerSmall3.value == "A, B, D"){
        wronganswer1Small3.value = abcText;
        wronganswer2Small3.value = abeText;
        wronganswer3Small3.value = acdText;
        wronganswer4Small3.value = aceText;
        wronganswer5Small3.value = adeText;
        wronganswer6Small3.value = bcdText;
        wronganswer7Small3.value = bceText;
        wronganswer8Small3.value = bdeText;
        wronganswer9Small3.value = cdeText;
    }else if(answerSmall3.value == "A, B, E"){
        wronganswer1Small3.value = abcText;
        wronganswer2Small3.value = abdText;
        wronganswer3Small3.value = acdText;
        wronganswer4Small3.value = aceText;
        wronganswer5Small3.value = adeText;
        wronganswer6Small3.value = bcdText;
        wronganswer7Small3.value = bceText;
        wronganswer8Small3.value = bdeText;
        wronganswer9Small3.value = cdeText;
    }else if(answerSmall3.value == "A, C, D"){
        wronganswer1Small3.value = abcText;
        wronganswer2Small3.value = abdText;
        wronganswer3Small3.value = abeText;
        wronganswer4Small3.value = aceText;
        wronganswer5Small3.value = adeText;
        wronganswer6Small3.value = bcdText;
        wronganswer7Small3.value = bceText;
        wronganswer8Small3.value = bdeText;
        wronganswer9Small3.value = cdeText;
    }else if(answerSmall3.value == "A, C, E"){
        wronganswer1Small3.value = abcText;
        wronganswer2Small3.value = abdText;
        wronganswer3Small3.value = abeText;
        wronganswer4Small3.value = acdText;
        wronganswer5Small3.value = adeText;
        wronganswer6Small3.value = bcdText;
        wronganswer7Small3.value = bceText;
        wronganswer8Small3.value = bdeText;
        wronganswer9Small3.value = cdeText;
    }else if(answerSmall3.value == "B, C, D"){
        wronganswer1Small3.value = abcText;
        wronganswer2Small3.value = abdText;
        wronganswer3Small3.value = abeText;
        wronganswer4Small3.value = acdText;
        wronganswer5Small3.value = aceText;
        wronganswer6Small3.value = adeText;
        wronganswer7Small3.value = bceText;
        wronganswer8Small3.value = bdeText;
        wronganswer9Small3.value = cdeText;
    }else if(answerSmall3.value == "B, C, E"){
        wronganswer1Small3.value = abcText;
        wronganswer2Small3.value = abdText;
        wronganswer3Small3.value = abeText;
        wronganswer4Small3.value = acdText;
        wronganswer5Small3.value = aceText;
        wronganswer6Small3.value = adeText;
        wronganswer7Small3.value = bcdText;
        wronganswer8Small3.value = bdeText;
        wronganswer9Small3.value = cdeText;
    }else if(answerSmall3.value == "B, D, E"){
        wronganswer1Small3.value = abcText;
        wronganswer2Small3.value = abdText;
        wronganswer3Small3.value = abeText;
        wronganswer4Small3.value = acdText;
        wronganswer5Small3.value = aceText;
        wronganswer6Small3.value = adeText;
        wronganswer7Small3.value = bcdText;
        wronganswer8Small3.value = bceText;
        wronganswer9Small3.value = cdeText;
    }else if(answerSmall3.value == "C, D, E"){
        wronganswer1Small3.value = abcText;
        wronganswer2Small3.value = abdText;
        wronganswer3Small3.value = abeText;
        wronganswer4Small3.value = acdText;
        wronganswer5Small3.value = aceText;
        wronganswer6Small3.value = adeText;
        wronganswer7Small3.value = bcdText;
        wronganswer8Small3.value = bceText;
        wronganswer9Small3.value = bdeText;
    }else if(answerSmall3.value == "A, D, E"){
        wronganswer1Small3.value = abcText;
        wronganswer2Small3.value = abdText;
        wronganswer3Small3.value = abeText;
        wronganswer4Small3.value = acdText;
        wronganswer5Small3.value = aceText;
        wronganswer6Small3.value = bcdText;
        wronganswer7Small3.value = bceText;
        wronganswer8Small3.value = bdeText;
        wronganswer9Small3.value = cdeText;
    }else{
    }
  }
  function threeOfFiveAiueo3() {
    answerSmall3 = document.getElementById("id_answerSmall3");
    wronganswer1Small3 = document.getElementById("id_wronganswer1Small3");
    wronganswer2Small3 = document.getElementById("id_wronganswer2Small3");
    wronganswer3Small3 = document.getElementById("id_wronganswer3Small3");
    wronganswer4Small3 = document.getElementById("id_wronganswer4Small3");
    wronganswer5Small3 = document.getElementById("id_wronganswer5Small3");
    wronganswer6Small3 = document.getElementById("id_wronganswer6Small3");
    wronganswer7Small3 = document.getElementById("id_wronganswer7Small3");
    wronganswer8Small3 = document.getElementById("id_wronganswer8Small3");
    wronganswer9Small3 = document.getElementById("id_wronganswer9Small3");   
    abcText = "ア、イ、ウ";
    abdText = "ア、イ、エ";
    abeText = "ア、イ、オ";
    acdText = "ア、ウ、エ";
    aceText = "ア、ウ、オ";
    adeText = "ア、エ、オ";
    bcdText = "イ、ウ、エ";
    bceText = "イ、ウ、オ";
    bdeText = "イ、エ、オ";
    cdeText = "ウ、エ、オ";
    document.querySelector('.content3 p:nth-child(11)').style.display = "block";
    document.querySelector('.content3 p:nth-child(12)').style.display = "block";
    document.querySelector('.content3 p:nth-child(13)').style.display = "block";
    document.querySelector('.content3 p:nth-child(14)').style.display = "block";
    document.querySelector('.content3 p:nth-child(15)').style.display = "block";
    document.querySelector('.content3 p:nth-child(16)').style.display = "block";
    document.querySelector('.content3').style.overflow = "scroll";
    if(answerSmall3.value == "ア、イ、ウ"){
        wronganswer1Small3.value = abdText;
        wronganswer2Small3.value = abeText;
        wronganswer3Small3.value = acdText;
        wronganswer4Small3.value = aceText;
        wronganswer5Small3.value = adeText;
        wronganswer6Small3.value = bcdText;
        wronganswer7Small3.value = bceText;
        wronganswer8Small3.value = bdeText;
        wronganswer9Small3.value = cdeText;
    }else if(answerSmall3.value == "ア、イ、エ"){
        wronganswer1Small3.value = abcText;
        wronganswer2Small3.value = abeText;
        wronganswer3Small3.value = acdText;
        wronganswer4Small3.value = aceText;
        wronganswer5Small3.value = adeText;
        wronganswer6Small3.value = bcdText;
        wronganswer7Small3.value = bceText;
        wronganswer8Small3.value = bdeText;
        wronganswer9Small3.value = cdeText;
    }else if(answerSmall3.value == "ア、イ、オ"){
        wronganswer1Small3.value = abcText;
        wronganswer2Small3.value = abdText;
        wronganswer3Small3.value = acdText;
        wronganswer4Small3.value = aceText;
        wronganswer5Small3.value = adeText;
        wronganswer6Small3.value = bcdText;
        wronganswer7Small3.value = bceText;
        wronganswer8Small3.value = bdeText;
        wronganswer9Small3.value = cdeText;
    }else if(answerSmall3.value == "ア、ウ、エ"){
        wronganswer1Small3.value = abcText;
        wronganswer2Small3.value = abdText;
        wronganswer3Small3.value = abeText;
        wronganswer4Small3.value = aceText;
        wronganswer5Small3.value = adeText;
        wronganswer6Small3.value = bcdText;
        wronganswer7Small3.value = bceText;
        wronganswer8Small3.value = bdeText;
        wronganswer9Small3.value = cdeText;
    }else if(answerSmall3.value == "ア、ウ、オ"){
        wronganswer1Small3.value = abcText;
        wronganswer2Small3.value = abdText;
        wronganswer3Small3.value = abeText;
        wronganswer4Small3.value = acdText;
        wronganswer5Small3.value = adeText;
        wronganswer6Small3.value = bcdText;
        wronganswer7Small3.value = bceText;
        wronganswer8Small3.value = bdeText;
        wronganswer9Small3.value = cdeText;
    }else if(answerSmall3.value == "イ、ウ、エ"){
        wronganswer1Small3.value = abcText;
        wronganswer2Small3.value = abdText;
        wronganswer3Small3.value = abeText;
        wronganswer4Small3.value = acdText;
        wronganswer5Small3.value = aceText;
        wronganswer6Small3.value = adeText;
        wronganswer7Small3.value = bceText;
        wronganswer8Small3.value = bdeText;
        wronganswer9Small3.value = cdeText;
    }else if(answerSmall3.value == "イ、ウ、オ"){
        wronganswer1Small3.value = abcText;
        wronganswer2Small3.value = abdText;
        wronganswer3Small3.value = abeText;
        wronganswer4Small3.value = acdText;
        wronganswer5Small3.value = aceText;
        wronganswer6Small3.value = adeText;
        wronganswer7Small3.value = bcdText;
        wronganswer8Small3.value = bdeText;
        wronganswer9Small3.value = cdeText;
    }else if(answerSmall3.value == "イ、エ、オ"){
        wronganswer1Small3.value = abcText;
        wronganswer2Small3.value = abdText;
        wronganswer3Small3.value = abeText;
        wronganswer4Small3.value = acdText;
        wronganswer5Small3.value = aceText;
        wronganswer6Small3.value = adeText;
        wronganswer7Small3.value = bcdText;
        wronganswer8Small3.value = bceText;
        wronganswer9Small3.value = cdeText;
    }else if(answerSmall3.value == "ウ、エ、オ"){
        wronganswer1Small3.value = abcText;
        wronganswer2Small3.value = abdText;
        wronganswer3Small3.value = abeText;
        wronganswer4Small3.value = acdText;
        wronganswer5Small3.value = aceText;
        wronganswer6Small3.value = adeText;
        wronganswer7Small3.value = bcdText;
        wronganswer8Small3.value = bceText;
        wronganswer9Small3.value = bdeText;
    }else if(answerSmall3.value == "ア、エ、オ"){
        wronganswer1Small3.value = abcText;
        wronganswer2Small3.value = abdText;
        wronganswer3Small3.value = abeText;
        wronganswer4Small3.value = acdText;
        wronganswer5Small3.value = aceText;
        wronganswer6Small3.value = bcdText;
        wronganswer7Small3.value = bceText;
        wronganswer8Small3.value = bdeText;
        wronganswer9Small3.value = cdeText;
    }else{
    }
  }
  function aiue3() {
    answerSmall3 = document.getElementById("id_answerSmall3");
    wronganswer1Small3 = document.getElementById("id_wronganswer1Small3");
    wronganswer2Small3 = document.getElementById("id_wronganswer2Small3");
    wronganswer3Small3 = document.getElementById("id_wronganswer3Small3");
    aText = "ア";
    iText = "イ";
    uText = "ウ";
    eText = "エ";
    if(answerSmall3.value == "ア"){
        wronganswer1Small3.value = iText;
        wronganswer2Small3.value = uText;
        wronganswer3Small3.value = eText;    
    }else if(answerSmall3.value == "イ"){
        wronganswer1Small3.value = aText;
        wronganswer2Small3.value = uText;
        wronganswer3Small3.value = eText; 
    }else if(answerSmall3.value == "ウ"){
        wronganswer1Small3.value = aText;
        wronganswer2Small3.value = iText;
        wronganswer3Small3.value = eText;       
    }else if(answerSmall3.value == "エ"){
        wronganswer1Small3.value = aText;
        wronganswer2Small3.value = iText;
        wronganswer3Small3.value = uText;     
    }else{
    }
  }
  function abcd3() {
    answerSmall3 = document.getElementById("id_answerSmall3");
    wronganswer1Small3 = document.getElementById("id_wronganswer1Small3");
    wronganswer2Small3 = document.getElementById("id_wronganswer2Small3");
    wronganswer3Small3 = document.getElementById("id_wronganswer3Small3");  
    aText = "A";
    bText = "B";
    cText = "C";
    dText = "D";
    if(answerSmall3.value == "A"){
        wronganswer1Small3.value = bText;
        wronganswer2Small3.value = cText;
        wronganswer3Small3.value = dText; 
    }else if(answerSmall3.value == "B"){
        wronganswer1Small3.value = aText;
        wronganswer2Small3.value = cText;
        wronganswer3Small3.value = dText;   
    }else if(answerSmall3.value == "C"){
        wronganswer1Small3.value = aText;
        wronganswer2Small3.value = bText;
        wronganswer3Small3.value = dText;  
    }else if(answerSmall3.value == "D"){
        wronganswer1Small3.value = aText;
        wronganswer2Small3.value = bText;
        wronganswer3Small3.value = cText; 
    }else{
    }
  }

  /*7/17 Small4*/
  function twoOfFour4() {
  answerSmall4 = document.getElementById("id_answerSmall4");
    wronganswer1Small4 = document.getElementById("id_wronganswer1Small4");
    wronganswer2Small4 = document.getElementById("id_wronganswer2Small4");
    wronganswer3Small4 = document.getElementById("id_wronganswer3Small4");
    wronganswer4Small4 = document.getElementById("id_wronganswer4Small4");
    wronganswer5Small4 = document.getElementById("id_wronganswer5Small4");
    wronganswer6Small4 = document.getElementById("id_wronganswer6Small4");
    abText = "A, B";
    acText = "A, C";
    adText = "A, D";
    bcText = "B, C";
    bdText = "B, D";
    cdText = "C, D";  
    document.querySelector('.content4 p:nth-child(11)').style.display = "block";
    document.querySelector('.content4 p:nth-child(12)').style.display = "block";
    document.querySelector('.content4 p:nth-child(13)').style.display = "block";
    document.querySelector('.content4').style.overflow = "scroll";
    if(answerSmall4.value == "A, B"){
        wronganswer1Small4.value = cdText;
        wronganswer2Small4.value = acText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = bcText;
        wronganswer5Small4.value = bdText;
    }else if(answerSmall4.value == "B, C"){
        wronganswer1Small4.value = cdText;
        wronganswer2Small4.value = acText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = bdText;
    }else if(answerSmall4.value == "A, C"){
        wronganswer1Small4.value = cdText;
        wronganswer2Small4.value = bcText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = bdText;
    }else if(answerSmall4.value == "A, D"){
        wronganswer1Small4.value = cdText;
        wronganswer2Small4.value = bcText;
        wronganswer3Small4.value = acText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = bdText;
    }else if(answerSmall4.value == "B, D"){
        wronganswer1Small4.value = cdText;
        wronganswer2Small4.value = bcText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = acText;
    }else if(answerSmall4.value == "C, D"){
        wronganswer1Small4.value = acText;
        wronganswer2Small4.value = bcText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = bdText;
    }else{
    }
}
  function twoOfFourAiue4() {
    answerSmall4 = document.getElementById("id_answerSmall4");
    wronganswer1Small4 = document.getElementById("id_wronganswer1Small4");
    wronganswer2Small4 = document.getElementById("id_wronganswer2Small4");
    wronganswer3Small4 = document.getElementById("id_wronganswer3Small4");
    wronganswer4Small4 = document.getElementById("id_wronganswer4Small4");
    wronganswer5Small4 = document.getElementById("id_wronganswer5Small4");
    wronganswer6Small4 = document.getElementById("id_wronganswer6Small4");
    abText = "ア、イ";
    acText = "ア、ウ";
    adText = "ア、エ";
    bcText = "イ、ウ";
    bdText = "イ、エ";
    cdText = "ウ、エ";  
    document.querySelector('.content4 p:nth-child(11)').style.display = "block";
    document.querySelector('.content4 p:nth-child(12)').style.display = "block";
    document.querySelector('.content4 p:nth-child(13)').style.display = "block";
    document.querySelector('.content4').style.overflow = "scroll";
    if(answerSmall4.value == "ア、イ"){
        wronganswer1Small4.value = cdText;
        wronganswer2Small4.value = acText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = bcText;
        wronganswer5Small4.value = bdText;
    }else if(answerSmall4.value == "イ、ウ"){
        wronganswer1Small4.value = cdText;
        wronganswer2Small4.value = acText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = bdText;
    }else if(answerSmall4.value == "ア、ウ"){
        wronganswer1Small4.value = cdText;
        wronganswer2Small4.value = bcText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = bdText;
    }else if(answerSmall4.value == "ア、エ"){
        wronganswer1Small4.value = cdText;
        wronganswer2Small4.value = bcText;
        wronganswer3Small4.value = acText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = bdText;
    }else if(answerSmall4.value == "イ、エ"){
        wronganswer1Small4.value = cdText;
        wronganswer2Small4.value = bcText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = acText;
    }else if(answerSmall4.value == "ウ、エ"){
        wronganswer1Small4.value = acText;
        wronganswer2Small4.value = bcText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = bdText;
    }else{
    }
  }
  function twoOfFive4() {
    answerSmall4 = document.getElementById("id_answerSmall4");
    wronganswer1Small4 = document.getElementById("id_wronganswer1Small4");
    wronganswer2Small4 = document.getElementById("id_wronganswer2Small4");
    wronganswer3Small4 = document.getElementById("id_wronganswer3Small4");
    wronganswer4Small4 = document.getElementById("id_wronganswer4Small4");
    wronganswer5Small4 = document.getElementById("id_wronganswer5Small4");
    wronganswer6Small4 = document.getElementById("id_wronganswer6Small4");
    wronganswer7Small4 = document.getElementById("id_wronganswer7Small4");
    wronganswer8Small4 = document.getElementById("id_wronganswer8Small4");
    wronganswer9Small4 = document.getElementById("id_wronganswer9Small4");
    abText = "A, B";
    acText = "A, C";
    adText = "A, D";
    bcText = "B, C";
    bdText = "B, D";
    cdText = "C, D";
    aeText = "A, E";
    beText = "B, E";
    ceText = "C, E";
    deText = "D, E";
    document.querySelector('.content4 p:nth-child(11)').style.display = "block";
    document.querySelector('.content4 p:nth-child(12)').style.display = "block";
    document.querySelector('.content4 p:nth-child(13)').style.display = "block";
    document.querySelector('.content4 p:nth-child(14)').style.display = "block";
    document.querySelector('.content4 p:nth-child(15)').style.display = "block";
    document.querySelector('.content4 p:nth-child(16)').style.display = "block";
    document.querySelector('.content4').style.overflow = "scroll";
    if(answerSmall4.value == "A, B"){
        wronganswer1Small4.value = cdText;
        wronganswer2Small4.value = acText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = bcText;
        wronganswer5Small4.value = bdText;
        wronganswer6Small4.value = aeText;
        wronganswer7Small4.value = beText;
        wronganswer8Small4.value = ceText;
        wronganswer9Small4.value = deText;
    }else if(answerSmall4.value == "B, C"){
        wronganswer1Small4.value = cdText;
        wronganswer2Small4.value = acText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = bdText;
        wronganswer6Small4.value = aeText;
        wronganswer7Small4.value = beText;
        wronganswer8Small4.value = ceText;
        wronganswer9Small4.value = deText;
    }else if(answerSmall4.value == "A, C"){
        wronganswer1Small4.value = cdText;
        wronganswer2Small4.value = bcText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = bdText;
        wronganswer6Small4.value = aeText;
        wronganswer7Small4.value = beText;
        wronganswer8Small4.value = ceText;
        wronganswer9Small4.value = deText;
    }else if(answerSmall4.value == "A, D"){
        wronganswer1Small4.value = cdText;
        wronganswer2Small4.value = bcText;
        wronganswer3Small4.value = acText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = bdText;
        wronganswer6Small4.value = aeText;
        wronganswer7Small4.value = beText;
        wronganswer8Small4.value = ceText;
        wronganswer9Small4.value = deText;
    }else if(answerSmall4.value == "B, D"){
        wronganswer1Small4.value = cdText;
        wronganswer2Small4.value = bcText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = acText;
        wronganswer6Small4.value = aeText;
        wronganswer7Small4.value = beText;
        wronganswer8Small4.value = ceText;
        wronganswer9Small4.value = deText;
    }else if(answerSmall4.value == "C, D"){
        wronganswer1Small4.value = acText;
        wronganswer2Small4.value = bcText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = bdText;
        wronganswer6Small4.value = aeText;
        wronganswer7Small4.value = beText;
        wronganswer8Small4.value = ceText;
        wronganswer9Small4.value = deText;
    }else if(answerSmall4.value == "B, E"){
        wronganswer1Small4.value = acText;
        wronganswer2Small4.value = bcText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = bdText;
        wronganswer6Small4.value = aeText;
        wronganswer7Small4.value = cdText;
        wronganswer8Small4.value = ceText;
        wronganswer9Small4.value = deText;
    }else if(answerSmall4.value == "C, E"){
        wronganswer1Small4.value = acText;
        wronganswer2Small4.value = bcText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = bdText;
        wronganswer6Small4.value = aeText;
        wronganswer7Small4.value = beText;
        wronganswer8Small4.value = cdText;
        wronganswer9Small4.value = deText;
    }else if(answerSmall4.value == "D, E"){
        wronganswer1Small4.value = acText;
        wronganswer2Small4.value = bcText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = bdText;
        wronganswer6Small4.value = aeText;
        wronganswer7Small4.value = beText;
        wronganswer8Small4.value = ceText;
        wronganswer9Small4.value = cdText;
    }else if(answerSmall4.value == "A, E"){
        wronganswer1Small4.value = acText;
        wronganswer2Small4.value = bcText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = bdText;
        wronganswer6Small4.value = cdText;
        wronganswer7Small4.value = beText;
        wronganswer8Small4.value = ceText;
        wronganswer9Small4.value = deText;
    }else{
    }
  }
  function twoOfFiveAiueo4() {
    answerSmall4 = document.getElementById("id_answerSmall4");
    wronganswer1Small4 = document.getElementById("id_wronganswer1Small4");
    wronganswer2Small4 = document.getElementById("id_wronganswer2Small4");
    wronganswer3Small4 = document.getElementById("id_wronganswer3Small4");
    wronganswer4Small4 = document.getElementById("id_wronganswer4Small4");
    wronganswer5Small4 = document.getElementById("id_wronganswer5Small4");
    wronganswer6Small4 = document.getElementById("id_wronganswer6Small4");
    wronganswer7Small4 = document.getElementById("id_wronganswer7Small4");
    wronganswer8Small4 = document.getElementById("id_wronganswer8Small4");
    wronganswer9Small4 = document.getElementById("id_wronganswer9Small4");  
    abText = "ア、イ";
    acText = "ア、ウ";
    adText = "ア、エ";
    bcText = "イ、ウ";
    bdText = "イ、エ";
    cdText = "ウ、エ";
    aeText = "ア、オ";
    beText = "イ、オ";
    ceText = "ウ、オ";
    deText = "エ、オ";
    document.querySelector('.content4 p:nth-child(11)').style.display = "block";
    document.querySelector('.content4 p:nth-child(12)').style.display = "block";
    document.querySelector('.content4 p:nth-child(13)').style.display = "block";
    document.querySelector('.content4 p:nth-child(14)').style.display = "block";
    document.querySelector('.content4 p:nth-child(15)').style.display = "block";
    document.querySelector('.content4 p:nth-child(16)').style.display = "block";
    document.querySelector('.content4').style.overflow = "scroll";
    if(answerSmall4.value == "ア、イ"){
        wronganswer1Small4.value = cdText;
        wronganswer2Small4.value = acText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = bcText;
        wronganswer5Small4.value = bdText;
        wronganswer6Small4.value = aeText;
        wronganswer7Small4.value = beText;
        wronganswer8Small4.value = ceText;
        wronganswer9Small4.value = deText;
    }else if(answerSmall4.value == "イ、ウ"){
        wronganswer1Small4.value = cdText;
        wronganswer2Small4.value = acText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = bdText;
        wronganswer6Small4.value = aeText;
        wronganswer7Small4.value = beText;
        wronganswer8Small4.value = ceText;
        wronganswer9Small4.value = deText;
    }else if(answerSmall4.value == "ア、ウ"){
        wronganswer1Small4.value = cdText;
        wronganswer2Small4.value = bcText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = bdText;
        wronganswer6Small4.value = aeText;
        wronganswer7Small4.value = beText;
        wronganswer8Small4.value = ceText;
        wronganswer9Small4.value = deText;
    }else if(answerSmall4.value == "ア、エ"){
        wronganswer1Small4.value = cdText;
        wronganswer2Small4.value = bcText;
        wronganswer3Small4.value = acText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = bdText;
        wronganswer6Small4.value = aeText;
        wronganswer7Small4.value = beText;
        wronganswer8Small4.value = ceText;
        wronganswer9Small4.value = deText;
    }else if(answerSmall4.value == "イ、エ"){
        wronganswer1Small4.value = cdText;
        wronganswer2Small4.value = bcText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = acText;
        wronganswer6Small4.value = aeText;
        wronganswer7Small4.value = beText;
        wronganswer8Small4.value = ceText;
        wronganswer9Small4.value = deText;
    }else if(answerSmall4.value == "ウ、エ"){
        wronganswer1Small4.value = acText;
        wronganswer2Small4.value = bcText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = bdText;
        wronganswer6Small4.value = aeText;
        wronganswer7Small4.value = beText;
        wronganswer8Small4.value = ceText;
        wronganswer9Small4.value = deText;
    }else if(answerSmall4.value == "イ、オ"){
        wronganswer1Small4.value = acText;
        wronganswer2Small4.value = bcText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = bdText;
        wronganswer6Small4.value = aeText;
        wronganswer7Small4.value = cdText;
        wronganswer8Small4.value = ceText;
        wronganswer9Small4.value = deText;
    }else if(answerSmall4.value == "ウ、オ"){
        wronganswer1Small4.value = acText;
        wronganswer2Small4.value = bcText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = bdText;
        wronganswer6Small4.value = aeText;
        wronganswer7Small4.value = beText;
        wronganswer8Small4.value = cdText;
        wronganswer9Small4.value = deText;
    }else if(answerSmall4.value == "エ、オ"){
        wronganswer1Small4.value = acText;
        wronganswer2Small4.value = bcText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = bdText;
        wronganswer6Small4.value = aeText;
        wronganswer7Small4.value = beText;
        wronganswer8Small4.value = ceText;
        wronganswer9Small4.value = cdText;
    }else if(answerSmall4.value == "ア、オ"){
        wronganswer1Small4.value = acText;
        wronganswer2Small4.value = bcText;
        wronganswer3Small4.value = adText;
        wronganswer4Small4.value = abText;
        wronganswer5Small4.value = bdText;
        wronganswer6Small4.value = cdText;
        wronganswer7Small4.value = beText;
        wronganswer8Small4.value = ceText;
        wronganswer9Small4.value = deText;
    }else{
    }
  }
  function threeOfFive4() {
    answerSmall4 = document.getElementById("id_answerSmall4");
    wronganswer1Small4 = document.getElementById("id_wronganswer1Small4");
    wronganswer2Small4 = document.getElementById("id_wronganswer2Small4");
    wronganswer3Small4 = document.getElementById("id_wronganswer3Small4");
    wronganswer4Small4 = document.getElementById("id_wronganswer4Small4");
    wronganswer5Small4 = document.getElementById("id_wronganswer5Small4");
    wronganswer6Small4 = document.getElementById("id_wronganswer6Small4");
    wronganswer7Small4 = document.getElementById("id_wronganswer7Small4");
    wronganswer8Small4 = document.getElementById("id_wronganswer8Small4");
    wronganswer9Small4 = document.getElementById("id_wronganswer9Small4");  
    abcText = "A, B, C";
    abdText = "A, B, D";
    abeText = "A, B, E";
    acdText = "A, C, D";
    aceText = "A, C, E";
    adeText = "A, D, E";
    bcdText = "B, C, D";
    bceText = "B, C, E";
    bdeText = "B, D, E";
    cdeText = "C, D, E";
    document.querySelector('.content4 p:nth-child(11)').style.display = "block";
    document.querySelector('.content4 p:nth-child(12)').style.display = "block";
    document.querySelector('.content4 p:nth-child(13)').style.display = "block";
    document.querySelector('.content4 p:nth-child(14)').style.display = "block";
    document.querySelector('.content4 p:nth-child(15)').style.display = "block";
    document.querySelector('.content4 p:nth-child(16)').style.display = "block";
    document.querySelector('.content4').style.overflow = "scroll";
    if(answerSmall4.value == "A, B, C"){
        wronganswer1Small4.value = abdText;
        wronganswer2Small4.value = abeText;
        wronganswer3Small4.value = acdText;
        wronganswer4Small4.value = aceText;
        wronganswer5Small4.value = adeText;
        wronganswer6Small4.value = bcdText;
        wronganswer7Small4.value = bceText;
        wronganswer8Small4.value = bdeText;
        wronganswer9Small4.value = cdeText;
    }else if(answerSmall4.value == "A, B, D"){
        wronganswer1Small4.value = abcText;
        wronganswer2Small4.value = abeText;
        wronganswer3Small4.value = acdText;
        wronganswer4Small4.value = aceText;
        wronganswer5Small4.value = adeText;
        wronganswer6Small4.value = bcdText;
        wronganswer7Small4.value = bceText;
        wronganswer8Small4.value = bdeText;
        wronganswer9Small4.value = cdeText;
    }else if(answerSmall4.value == "A, B, E"){
        wronganswer1Small4.value = abcText;
        wronganswer2Small4.value = abdText;
        wronganswer3Small4.value = acdText;
        wronganswer4Small4.value = aceText;
        wronganswer5Small4.value = adeText;
        wronganswer6Small4.value = bcdText;
        wronganswer7Small4.value = bceText;
        wronganswer8Small4.value = bdeText;
        wronganswer9Small4.value = cdeText;
    }else if(answerSmall4.value == "A, C, D"){
        wronganswer1Small4.value = abcText;
        wronganswer2Small4.value = abdText;
        wronganswer3Small4.value = abeText;
        wronganswer4Small4.value = aceText;
        wronganswer5Small4.value = adeText;
        wronganswer6Small4.value = bcdText;
        wronganswer7Small4.value = bceText;
        wronganswer8Small4.value = bdeText;
        wronganswer9Small4.value = cdeText;
    }else if(answerSmall4.value == "A, C, E"){
        wronganswer1Small4.value = abcText;
        wronganswer2Small4.value = abdText;
        wronganswer3Small4.value = abeText;
        wronganswer4Small4.value = acdText;
        wronganswer5Small4.value = adeText;
        wronganswer6Small4.value = bcdText;
        wronganswer7Small4.value = bceText;
        wronganswer8Small4.value = bdeText;
        wronganswer9Small4.value = cdeText;
    }else if(answerSmall4.value == "B, C, D"){
        wronganswer1Small4.value = abcText;
        wronganswer2Small4.value = abdText;
        wronganswer3Small4.value = abeText;
        wronganswer4Small4.value = acdText;
        wronganswer5Small4.value = aceText;
        wronganswer6Small4.value = adeText;
        wronganswer7Small4.value = bceText;
        wronganswer8Small4.value = bdeText;
        wronganswer9Small4.value = cdeText;
    }else if(answerSmall4.value == "B, C, E"){
        wronganswer1Small4.value = abcText;
        wronganswer2Small4.value = abdText;
        wronganswer3Small4.value = abeText;
        wronganswer4Small4.value = acdText;
        wronganswer5Small4.value = aceText;
        wronganswer6Small4.value = adeText;
        wronganswer7Small4.value = bcdText;
        wronganswer8Small4.value = bdeText;
        wronganswer9Small4.value = cdeText;
    }else if(answerSmall4.value == "B, D, E"){
        wronganswer1Small4.value = abcText;
        wronganswer2Small4.value = abdText;
        wronganswer3Small4.value = abeText;
        wronganswer4Small4.value = acdText;
        wronganswer5Small4.value = aceText;
        wronganswer6Small4.value = adeText;
        wronganswer7Small4.value = bcdText;
        wronganswer8Small4.value = bceText;
        wronganswer9Small4.value = cdeText;
    }else if(answerSmall4.value == "C, D, E"){
        wronganswer1Small4.value = abcText;
        wronganswer2Small4.value = abdText;
        wronganswer3Small4.value = abeText;
        wronganswer4Small4.value = acdText;
        wronganswer5Small4.value = aceText;
        wronganswer6Small4.value = adeText;
        wronganswer7Small4.value = bcdText;
        wronganswer8Small4.value = bceText;
        wronganswer9Small4.value = bdeText;
    }else if(answerSmall4.value == "A, D, E"){
        wronganswer1Small4.value = abcText;
        wronganswer2Small4.value = abdText;
        wronganswer3Small4.value = abeText;
        wronganswer4Small4.value = acdText;
        wronganswer5Small4.value = aceText;
        wronganswer6Small4.value = bcdText;
        wronganswer7Small4.value = bceText;
        wronganswer8Small4.value = bdeText;
        wronganswer9Small4.value = cdeText;
    }else{
    }
  }
  function threeOfFiveAiueo4() {
    answerSmall4 = document.getElementById("id_answerSmall4");
    wronganswer1Small4 = document.getElementById("id_wronganswer1Small4");
    wronganswer2Small4 = document.getElementById("id_wronganswer2Small4");
    wronganswer3Small4 = document.getElementById("id_wronganswer3Small4");
    wronganswer4Small4 = document.getElementById("id_wronganswer4Small4");
    wronganswer5Small4 = document.getElementById("id_wronganswer5Small4");
    wronganswer6Small4 = document.getElementById("id_wronganswer6Small4");
    wronganswer7Small4 = document.getElementById("id_wronganswer7Small4");
    wronganswer8Small4 = document.getElementById("id_wronganswer8Small4");
    wronganswer9Small4 = document.getElementById("id_wronganswer9Small4");   
    abcText = "ア、イ、ウ";
    abdText = "ア、イ、エ";
    abeText = "ア、イ、オ";
    acdText = "ア、ウ、エ";
    aceText = "ア、ウ、オ";
    adeText = "ア、エ、オ";
    bcdText = "イ、ウ、エ";
    bceText = "イ、ウ、オ";
    bdeText = "イ、エ、オ";
    cdeText = "ウ、エ、オ";
    document.querySelector('.content4 p:nth-child(11)').style.display = "block";
    document.querySelector('.content4 p:nth-child(12)').style.display = "block";
    document.querySelector('.content4 p:nth-child(13)').style.display = "block";
    document.querySelector('.content4 p:nth-child(14)').style.display = "block";
    document.querySelector('.content4 p:nth-child(15)').style.display = "block";
    document.querySelector('.content4 p:nth-child(16)').style.display = "block";
    document.querySelector('.content4').style.overflow = "scroll";
    if(answerSmall4.value == "ア、イ、ウ"){
        wronganswer1Small4.value = abdText;
        wronganswer2Small4.value = abeText;
        wronganswer3Small4.value = acdText;
        wronganswer4Small4.value = aceText;
        wronganswer5Small4.value = adeText;
        wronganswer6Small4.value = bcdText;
        wronganswer7Small4.value = bceText;
        wronganswer8Small4.value = bdeText;
        wronganswer9Small4.value = cdeText;
    }else if(answerSmall4.value == "ア、イ、エ"){
        wronganswer1Small4.value = abcText;
        wronganswer2Small4.value = abeText;
        wronganswer3Small4.value = acdText;
        wronganswer4Small4.value = aceText;
        wronganswer5Small4.value = adeText;
        wronganswer6Small4.value = bcdText;
        wronganswer7Small4.value = bceText;
        wronganswer8Small4.value = bdeText;
        wronganswer9Small4.value = cdeText;
    }else if(answerSmall4.value == "ア、イ、オ"){
        wronganswer1Small4.value = abcText;
        wronganswer2Small4.value = abdText;
        wronganswer3Small4.value = acdText;
        wronganswer4Small4.value = aceText;
        wronganswer5Small4.value = adeText;
        wronganswer6Small4.value = bcdText;
        wronganswer7Small4.value = bceText;
        wronganswer8Small4.value = bdeText;
        wronganswer9Small4.value = cdeText;
    }else if(answerSmall4.value == "ア、ウ、エ"){
        wronganswer1Small4.value = abcText;
        wronganswer2Small4.value = abdText;
        wronganswer3Small4.value = abeText;
        wronganswer4Small4.value = aceText;
        wronganswer5Small4.value = adeText;
        wronganswer6Small4.value = bcdText;
        wronganswer7Small4.value = bceText;
        wronganswer8Small4.value = bdeText;
        wronganswer9Small4.value = cdeText;
    }else if(answerSmall4.value == "ア、ウ、オ"){
        wronganswer1Small4.value = abcText;
        wronganswer2Small4.value = abdText;
        wronganswer3Small4.value = abeText;
        wronganswer4Small4.value = acdText;
        wronganswer5Small4.value = adeText;
        wronganswer6Small4.value = bcdText;
        wronganswer7Small4.value = bceText;
        wronganswer8Small4.value = bdeText;
        wronganswer9Small4.value = cdeText;
    }else if(answerSmall4.value == "イ、ウ、エ"){
        wronganswer1Small4.value = abcText;
        wronganswer2Small4.value = abdText;
        wronganswer3Small4.value = abeText;
        wronganswer4Small4.value = acdText;
        wronganswer5Small4.value = aceText;
        wronganswer6Small4.value = adeText;
        wronganswer7Small4.value = bceText;
        wronganswer8Small4.value = bdeText;
        wronganswer9Small4.value = cdeText;
    }else if(answerSmall4.value == "イ、ウ、オ"){
        wronganswer1Small4.value = abcText;
        wronganswer2Small4.value = abdText;
        wronganswer3Small4.value = abeText;
        wronganswer4Small4.value = acdText;
        wronganswer5Small4.value = aceText;
        wronganswer6Small4.value = adeText;
        wronganswer7Small4.value = bcdText;
        wronganswer8Small4.value = bdeText;
        wronganswer9Small4.value = cdeText;
    }else if(answerSmall4.value == "イ、エ、オ"){
        wronganswer1Small4.value = abcText;
        wronganswer2Small4.value = abdText;
        wronganswer3Small4.value = abeText;
        wronganswer4Small4.value = acdText;
        wronganswer5Small4.value = aceText;
        wronganswer6Small4.value = adeText;
        wronganswer7Small4.value = bcdText;
        wronganswer8Small4.value = bceText;
        wronganswer9Small4.value = cdeText;
    }else if(answerSmall4.value == "ウ、エ、オ"){
        wronganswer1Small4.value = abcText;
        wronganswer2Small4.value = abdText;
        wronganswer3Small4.value = abeText;
        wronganswer4Small4.value = acdText;
        wronganswer5Small4.value = aceText;
        wronganswer6Small4.value = adeText;
        wronganswer7Small4.value = bcdText;
        wronganswer8Small4.value = bceText;
        wronganswer9Small4.value = bdeText;
    }else if(answerSmall4.value == "ア、エ、オ"){
        wronganswer1Small4.value = abcText;
        wronganswer2Small4.value = abdText;
        wronganswer3Small4.value = abeText;
        wronganswer4Small4.value = acdText;
        wronganswer5Small4.value = aceText;
        wronganswer6Small4.value = bcdText;
        wronganswer7Small4.value = bceText;
        wronganswer8Small4.value = bdeText;
        wronganswer9Small4.value = cdeText;
    }else{
    }
  }
  function aiue4() {
    answerSmall4 = document.getElementById("id_answerSmall4");
    wronganswer1Small4 = document.getElementById("id_wronganswer1Small4");
    wronganswer2Small4 = document.getElementById("id_wronganswer2Small4");
    wronganswer3Small4 = document.getElementById("id_wronganswer3Small4");
    aText = "ア";
    iText = "イ";
    uText = "ウ";
    eText = "エ";
    if(answerSmall4.value == "ア"){
        wronganswer1Small4.value = iText;
        wronganswer2Small4.value = uText;
        wronganswer3Small4.value = eText;    
    }else if(answerSmall4.value == "イ"){
        wronganswer1Small4.value = aText;
        wronganswer2Small4.value = uText;
        wronganswer3Small4.value = eText; 
    }else if(answerSmall4.value == "ウ"){
        wronganswer1Small4.value = aText;
        wronganswer2Small4.value = iText;
        wronganswer3Small4.value = eText;       
    }else if(answerSmall4.value == "エ"){
        wronganswer1Small4.value = aText;
        wronganswer2Small4.value = iText;
        wronganswer3Small4.value = uText;     
    }else{
    }
  }
  function abcd4() {
    answerSmall4 = document.getElementById("id_answerSmall4");
    wronganswer1Small4 = document.getElementById("id_wronganswer1Small4");
    wronganswer2Small4 = document.getElementById("id_wronganswer2Small4");
    wronganswer3Small4 = document.getElementById("id_wronganswer3Small4");  
    aText = "A";
    bText = "B";
    cText = "C";
    dText = "D";
    if(answerSmall4.value == "A"){
        wronganswer1Small4.value = bText;
        wronganswer2Small4.value = cText;
        wronganswer3Small4.value = dText; 
    }else if(answerSmall4.value == "B"){
        wronganswer1Small4.value = aText;
        wronganswer2Small4.value = cText;
        wronganswer3Small4.value = dText;   
    }else if(answerSmall4.value == "C"){
        wronganswer1Small4.value = aText;
        wronganswer2Small4.value = bText;
        wronganswer3Small4.value = dText;  
    }else if(answerSmall4.value == "D"){
        wronganswer1Small4.value = aText;
        wronganswer2Small4.value = bText;
        wronganswer3Small4.value = cText; 
    }else{
    }
  }

  /*7/17 Small5*/
  function twoOfFour5() {
  answerSmall5 = document.getElementById("id_answerSmall5");
    wronganswer1Small5 = document.getElementById("id_wronganswer1Small5");
    wronganswer2Small5 = document.getElementById("id_wronganswer2Small5");
    wronganswer3Small5 = document.getElementById("id_wronganswer3Small5");
    wronganswer4Small5 = document.getElementById("id_wronganswer4Small5");
    wronganswer5Small5 = document.getElementById("id_wronganswer5Small5");
    wronganswer6Small5 = document.getElementById("id_wronganswer6Small5");
    abText = "A, B";
    acText = "A, C";
    adText = "A, D";
    bcText = "B, C";
    bdText = "B, D";
    cdText = "C, D";  
    document.querySelector('.content5 p:nth-child(11)').style.display = "block";
    document.querySelector('.content5 p:nth-child(12)').style.display = "block";
    document.querySelector('.content5 p:nth-child(13)').style.display = "block";
    document.querySelector('.content5').style.overflow = "scroll";
    if(answerSmall5.value == "A, B"){
        wronganswer1Small5.value = cdText;
        wronganswer2Small5.value = acText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = bcText;
        wronganswer5Small5.value = bdText;
    }else if(answerSmall5.value == "B, C"){
        wronganswer1Small5.value = cdText;
        wronganswer2Small5.value = acText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = bdText;
    }else if(answerSmall5.value == "A, C"){
        wronganswer1Small5.value = cdText;
        wronganswer2Small5.value = bcText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = bdText;
    }else if(answerSmall5.value == "A, D"){
        wronganswer1Small5.value = cdText;
        wronganswer2Small5.value = bcText;
        wronganswer3Small5.value = acText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = bdText;
    }else if(answerSmall5.value == "B, D"){
        wronganswer1Small5.value = cdText;
        wronganswer2Small5.value = bcText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = acText;
    }else if(answerSmall5.value == "C, D"){
        wronganswer1Small5.value = acText;
        wronganswer2Small5.value = bcText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = bdText;
    }else{
    }
}
  function twoOfFourAiue5() {
    answerSmall5 = document.getElementById("id_answerSmall5");
    wronganswer1Small5 = document.getElementById("id_wronganswer1Small5");
    wronganswer2Small5 = document.getElementById("id_wronganswer2Small5");
    wronganswer3Small5 = document.getElementById("id_wronganswer3Small5");
    wronganswer4Small5 = document.getElementById("id_wronganswer4Small5");
    wronganswer5Small5 = document.getElementById("id_wronganswer5Small5");
    wronganswer6Small5 = document.getElementById("id_wronganswer6Small5");
    abText = "ア、イ";
    acText = "ア、ウ";
    adText = "ア、エ";
    bcText = "イ、ウ";
    bdText = "イ、エ";
    cdText = "ウ、エ";  
    document.querySelector('.content5 p:nth-child(11)').style.display = "block";
    document.querySelector('.content5 p:nth-child(12)').style.display = "block";
    document.querySelector('.content5 p:nth-child(13)').style.display = "block";
    document.querySelector('.content5').style.overflow = "scroll";
    if(answerSmall5.value == "ア、イ"){
        wronganswer1Small5.value = cdText;
        wronganswer2Small5.value = acText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = bcText;
        wronganswer5Small5.value = bdText;
    }else if(answerSmall5.value == "イ、ウ"){
        wronganswer1Small5.value = cdText;
        wronganswer2Small5.value = acText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = bdText;
    }else if(answerSmall5.value == "ア、ウ"){
        wronganswer1Small5.value = cdText;
        wronganswer2Small5.value = bcText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = bdText;
    }else if(answerSmall5.value == "ア、エ"){
        wronganswer1Small5.value = cdText;
        wronganswer2Small5.value = bcText;
        wronganswer3Small5.value = acText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = bdText;
    }else if(answerSmall5.value == "イ、エ"){
        wronganswer1Small5.value = cdText;
        wronganswer2Small5.value = bcText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = acText;
    }else if(answerSmall5.value == "ウ、エ"){
        wronganswer1Small5.value = acText;
        wronganswer2Small5.value = bcText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = bdText;
    }else{
    }
  }
  function twoOfFive5() {
    answerSmall5 = document.getElementById("id_answerSmall5");
    wronganswer1Small5 = document.getElementById("id_wronganswer1Small5");
    wronganswer2Small5 = document.getElementById("id_wronganswer2Small5");
    wronganswer3Small5 = document.getElementById("id_wronganswer3Small5");
    wronganswer4Small5 = document.getElementById("id_wronganswer4Small5");
    wronganswer5Small5 = document.getElementById("id_wronganswer5Small5");
    wronganswer6Small5 = document.getElementById("id_wronganswer6Small5");
    wronganswer7Small5 = document.getElementById("id_wronganswer7Small5");
    wronganswer8Small5 = document.getElementById("id_wronganswer8Small5");
    wronganswer9Small5 = document.getElementById("id_wronganswer9Small5");
    abText = "A, B";
    acText = "A, C";
    adText = "A, D";
    bcText = "B, C";
    bdText = "B, D";
    cdText = "C, D";
    aeText = "A, E";
    beText = "B, E";
    ceText = "C, E";
    deText = "D, E";
    document.querySelector('.content5 p:nth-child(11)').style.display = "block";
    document.querySelector('.content5 p:nth-child(12)').style.display = "block";
    document.querySelector('.content5 p:nth-child(13)').style.display = "block";
    document.querySelector('.content5 p:nth-child(14)').style.display = "block";
    document.querySelector('.content5 p:nth-child(15)').style.display = "block";
    document.querySelector('.content5 p:nth-child(16)').style.display = "block";
    document.querySelector('.content5').style.overflow = "scroll";
    if(answerSmall5.value == "A, B"){
        wronganswer1Small5.value = cdText;
        wronganswer2Small5.value = acText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = bcText;
        wronganswer5Small5.value = bdText;
        wronganswer6Small5.value = aeText;
        wronganswer7Small5.value = beText;
        wronganswer8Small5.value = ceText;
        wronganswer9Small5.value = deText;
    }else if(answerSmall5.value == "B, C"){
        wronganswer1Small5.value = cdText;
        wronganswer2Small5.value = acText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = bdText;
        wronganswer6Small5.value = aeText;
        wronganswer7Small5.value = beText;
        wronganswer8Small5.value = ceText;
        wronganswer9Small5.value = deText;
    }else if(answerSmall5.value == "A, C"){
        wronganswer1Small5.value = cdText;
        wronganswer2Small5.value = bcText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = bdText;
        wronganswer6Small5.value = aeText;
        wronganswer7Small5.value = beText;
        wronganswer8Small5.value = ceText;
        wronganswer9Small5.value = deText;
    }else if(answerSmall5.value == "A, D"){
        wronganswer1Small5.value = cdText;
        wronganswer2Small5.value = bcText;
        wronganswer3Small5.value = acText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = bdText;
        wronganswer6Small5.value = aeText;
        wronganswer7Small5.value = beText;
        wronganswer8Small5.value = ceText;
        wronganswer9Small5.value = deText;
    }else if(answerSmall5.value == "B, D"){
        wronganswer1Small5.value = cdText;
        wronganswer2Small5.value = bcText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = acText;
        wronganswer6Small5.value = aeText;
        wronganswer7Small5.value = beText;
        wronganswer8Small5.value = ceText;
        wronganswer9Small5.value = deText;
    }else if(answerSmall5.value == "C, D"){
        wronganswer1Small5.value = acText;
        wronganswer2Small5.value = bcText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = bdText;
        wronganswer6Small5.value = aeText;
        wronganswer7Small5.value = beText;
        wronganswer8Small5.value = ceText;
        wronganswer9Small5.value = deText;
    }else if(answerSmall5.value == "B, E"){
        wronganswer1Small5.value = acText;
        wronganswer2Small5.value = bcText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = bdText;
        wronganswer6Small5.value = aeText;
        wronganswer7Small5.value = cdText;
        wronganswer8Small5.value = ceText;
        wronganswer9Small5.value = deText;
    }else if(answerSmall5.value == "C, E"){
        wronganswer1Small5.value = acText;
        wronganswer2Small5.value = bcText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = bdText;
        wronganswer6Small5.value = aeText;
        wronganswer7Small5.value = beText;
        wronganswer8Small5.value = cdText;
        wronganswer9Small5.value = deText;
    }else if(answerSmall5.value == "D, E"){
        wronganswer1Small5.value = acText;
        wronganswer2Small5.value = bcText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = bdText;
        wronganswer6Small5.value = aeText;
        wronganswer7Small5.value = beText;
        wronganswer8Small5.value = ceText;
        wronganswer9Small5.value = cdText;
    }else if(answerSmall5.value == "A, E"){
        wronganswer1Small5.value = acText;
        wronganswer2Small5.value = bcText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = bdText;
        wronganswer6Small5.value = cdText;
        wronganswer7Small5.value = beText;
        wronganswer8Small5.value = ceText;
        wronganswer9Small5.value = deText;
    }else{
    }
  }
  function twoOfFiveAiueo5() {
    answerSmall5 = document.getElementById("id_answerSmall5");
    wronganswer1Small5 = document.getElementById("id_wronganswer1Small5");
    wronganswer2Small5 = document.getElementById("id_wronganswer2Small5");
    wronganswer3Small5 = document.getElementById("id_wronganswer3Small5");
    wronganswer4Small5 = document.getElementById("id_wronganswer4Small5");
    wronganswer5Small5 = document.getElementById("id_wronganswer5Small5");
    wronganswer6Small5 = document.getElementById("id_wronganswer6Small5");
    wronganswer7Small5 = document.getElementById("id_wronganswer7Small5");
    wronganswer8Small5 = document.getElementById("id_wronganswer8Small5");
    wronganswer9Small5 = document.getElementById("id_wronganswer9Small5");  
    abText = "ア、イ";
    acText = "ア、ウ";
    adText = "ア、エ";
    bcText = "イ、ウ";
    bdText = "イ、エ";
    cdText = "ウ、エ";
    aeText = "ア、オ";
    beText = "イ、オ";
    ceText = "ウ、オ";
    deText = "エ、オ";
    document.querySelector('.content5 p:nth-child(11)').style.display = "block";
    document.querySelector('.content5 p:nth-child(12)').style.display = "block";
    document.querySelector('.content5 p:nth-child(13)').style.display = "block";
    document.querySelector('.content5 p:nth-child(14)').style.display = "block";
    document.querySelector('.content5 p:nth-child(15)').style.display = "block";
    document.querySelector('.content5 p:nth-child(16)').style.display = "block";
    document.querySelector('.content5').style.overflow = "scroll";
    if(answerSmall5.value == "ア、イ"){
        wronganswer1Small5.value = cdText;
        wronganswer2Small5.value = acText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = bcText;
        wronganswer5Small5.value = bdText;
        wronganswer6Small5.value = aeText;
        wronganswer7Small5.value = beText;
        wronganswer8Small5.value = ceText;
        wronganswer9Small5.value = deText;
    }else if(answerSmall5.value == "イ、ウ"){
        wronganswer1Small5.value = cdText;
        wronganswer2Small5.value = acText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = bdText;
        wronganswer6Small5.value = aeText;
        wronganswer7Small5.value = beText;
        wronganswer8Small5.value = ceText;
        wronganswer9Small5.value = deText;
    }else if(answerSmall5.value == "ア、ウ"){
        wronganswer1Small5.value = cdText;
        wronganswer2Small5.value = bcText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = bdText;
        wronganswer6Small5.value = aeText;
        wronganswer7Small5.value = beText;
        wronganswer8Small5.value = ceText;
        wronganswer9Small5.value = deText;
    }else if(answerSmall5.value == "ア、エ"){
        wronganswer1Small5.value = cdText;
        wronganswer2Small5.value = bcText;
        wronganswer3Small5.value = acText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = bdText;
        wronganswer6Small5.value = aeText;
        wronganswer7Small5.value = beText;
        wronganswer8Small5.value = ceText;
        wronganswer9Small5.value = deText;
    }else if(answerSmall5.value == "イ、エ"){
        wronganswer1Small5.value = cdText;
        wronganswer2Small5.value = bcText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = acText;
        wronganswer6Small5.value = aeText;
        wronganswer7Small5.value = beText;
        wronganswer8Small5.value = ceText;
        wronganswer9Small5.value = deText;
    }else if(answerSmall5.value == "ウ、エ"){
        wronganswer1Small5.value = acText;
        wronganswer2Small5.value = bcText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = bdText;
        wronganswer6Small5.value = aeText;
        wronganswer7Small5.value = beText;
        wronganswer8Small5.value = ceText;
        wronganswer9Small5.value = deText;
    }else if(answerSmall5.value == "イ、オ"){
        wronganswer1Small5.value = acText;
        wronganswer2Small5.value = bcText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = bdText;
        wronganswer6Small5.value = aeText;
        wronganswer7Small5.value = cdText;
        wronganswer8Small5.value = ceText;
        wronganswer9Small5.value = deText;
    }else if(answerSmall5.value == "ウ、オ"){
        wronganswer1Small5.value = acText;
        wronganswer2Small5.value = bcText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = bdText;
        wronganswer6Small5.value = aeText;
        wronganswer7Small5.value = beText;
        wronganswer8Small5.value = cdText;
        wronganswer9Small5.value = deText;
    }else if(answerSmall5.value == "エ、オ"){
        wronganswer1Small5.value = acText;
        wronganswer2Small5.value = bcText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = bdText;
        wronganswer6Small5.value = aeText;
        wronganswer7Small5.value = beText;
        wronganswer8Small5.value = ceText;
        wronganswer9Small5.value = cdText;
    }else if(answerSmall5.value == "ア、オ"){
        wronganswer1Small5.value = acText;
        wronganswer2Small5.value = bcText;
        wronganswer3Small5.value = adText;
        wronganswer4Small5.value = abText;
        wronganswer5Small5.value = bdText;
        wronganswer6Small5.value = cdText;
        wronganswer7Small5.value = beText;
        wronganswer8Small5.value = ceText;
        wronganswer9Small5.value = deText;
    }else{
    }
  }
  function threeOfFive5() {
    answerSmall5 = document.getElementById("id_answerSmall5");
    wronganswer1Small5 = document.getElementById("id_wronganswer1Small5");
    wronganswer2Small5 = document.getElementById("id_wronganswer2Small5");
    wronganswer3Small5 = document.getElementById("id_wronganswer3Small5");
    wronganswer4Small5 = document.getElementById("id_wronganswer4Small5");
    wronganswer5Small5 = document.getElementById("id_wronganswer5Small5");
    wronganswer6Small5 = document.getElementById("id_wronganswer6Small5");
    wronganswer7Small5 = document.getElementById("id_wronganswer7Small5");
    wronganswer8Small5 = document.getElementById("id_wronganswer8Small5");
    wronganswer9Small5 = document.getElementById("id_wronganswer9Small5");  
    abcText = "A, B, C";
    abdText = "A, B, D";
    abeText = "A, B, E";
    acdText = "A, C, D";
    aceText = "A, C, E";
    adeText = "A, D, E";
    bcdText = "B, C, D";
    bceText = "B, C, E";
    bdeText = "B, D, E";
    cdeText = "C, D, E";
    document.querySelector('.content5 p:nth-child(11)').style.display = "block";
    document.querySelector('.content5 p:nth-child(12)').style.display = "block";
    document.querySelector('.content5 p:nth-child(13)').style.display = "block";
    document.querySelector('.content5 p:nth-child(14)').style.display = "block";
    document.querySelector('.content5 p:nth-child(15)').style.display = "block";
    document.querySelector('.content5 p:nth-child(16)').style.display = "block";
    document.querySelector('.content5').style.overflow = "scroll";
    if(answerSmall5.value == "A, B, C"){
        wronganswer1Small5.value = abdText;
        wronganswer2Small5.value = abeText;
        wronganswer3Small5.value = acdText;
        wronganswer4Small5.value = aceText;
        wronganswer5Small5.value = adeText;
        wronganswer6Small5.value = bcdText;
        wronganswer7Small5.value = bceText;
        wronganswer8Small5.value = bdeText;
        wronganswer9Small5.value = cdeText;
    }else if(answerSmall5.value == "A, B, D"){
        wronganswer1Small5.value = abcText;
        wronganswer2Small5.value = abeText;
        wronganswer3Small5.value = acdText;
        wronganswer4Small5.value = aceText;
        wronganswer5Small5.value = adeText;
        wronganswer6Small5.value = bcdText;
        wronganswer7Small5.value = bceText;
        wronganswer8Small5.value = bdeText;
        wronganswer9Small5.value = cdeText;
    }else if(answerSmall5.value == "A, B, E"){
        wronganswer1Small5.value = abcText;
        wronganswer2Small5.value = abdText;
        wronganswer3Small5.value = acdText;
        wronganswer4Small5.value = aceText;
        wronganswer5Small5.value = adeText;
        wronganswer6Small5.value = bcdText;
        wronganswer7Small5.value = bceText;
        wronganswer8Small5.value = bdeText;
        wronganswer9Small5.value = cdeText;
    }else if(answerSmall5.value == "A, C, D"){
        wronganswer1Small5.value = abcText;
        wronganswer2Small5.value = abdText;
        wronganswer3Small5.value = abeText;
        wronganswer4Small5.value = aceText;
        wronganswer5Small5.value = adeText;
        wronganswer6Small5.value = bcdText;
        wronganswer7Small5.value = bceText;
        wronganswer8Small5.value = bdeText;
        wronganswer9Small5.value = cdeText;
    }else if(answerSmall5.value == "A, C, E"){
        wronganswer1Small5.value = abcText;
        wronganswer2Small5.value = abdText;
        wronganswer3Small5.value = abeText;
        wronganswer4Small5.value = acdText;
        wronganswer5Small5.value = adeText;
        wronganswer6Small5.value = bcdText;
        wronganswer7Small5.value = bceText;
        wronganswer8Small5.value = bdeText;
        wronganswer9Small5.value = cdeText;
    }else if(answerSmall5.value == "B, C, D"){
        wronganswer1Small5.value = abcText;
        wronganswer2Small5.value = abdText;
        wronganswer3Small5.value = abeText;
        wronganswer4Small5.value = acdText;
        wronganswer5Small5.value = aceText;
        wronganswer6Small5.value = adeText;
        wronganswer7Small5.value = bceText;
        wronganswer8Small5.value = bdeText;
        wronganswer9Small5.value = cdeText;
    }else if(answerSmall5.value == "B, C, E"){
        wronganswer1Small5.value = abcText;
        wronganswer2Small5.value = abdText;
        wronganswer3Small5.value = abeText;
        wronganswer4Small5.value = acdText;
        wronganswer5Small5.value = aceText;
        wronganswer6Small5.value = adeText;
        wronganswer7Small5.value = bcdText;
        wronganswer8Small5.value = bdeText;
        wronganswer9Small5.value = cdeText;
    }else if(answerSmall5.value == "B, D, E"){
        wronganswer1Small5.value = abcText;
        wronganswer2Small5.value = abdText;
        wronganswer3Small5.value = abeText;
        wronganswer4Small5.value = acdText;
        wronganswer5Small5.value = aceText;
        wronganswer6Small5.value = adeText;
        wronganswer7Small5.value = bcdText;
        wronganswer8Small5.value = bceText;
        wronganswer9Small5.value = cdeText;
    }else if(answerSmall5.value == "C, D, E"){
        wronganswer1Small5.value = abcText;
        wronganswer2Small5.value = abdText;
        wronganswer3Small5.value = abeText;
        wronganswer4Small5.value = acdText;
        wronganswer5Small5.value = aceText;
        wronganswer6Small5.value = adeText;
        wronganswer7Small5.value = bcdText;
        wronganswer8Small5.value = bceText;
        wronganswer9Small5.value = bdeText;
    }else if(answerSmall5.value == "A, D, E"){
        wronganswer1Small5.value = abcText;
        wronganswer2Small5.value = abdText;
        wronganswer3Small5.value = abeText;
        wronganswer4Small5.value = acdText;
        wronganswer5Small5.value = aceText;
        wronganswer6Small5.value = bcdText;
        wronganswer7Small5.value = bceText;
        wronganswer8Small5.value = bdeText;
        wronganswer9Small5.value = cdeText;
    }else{
    }
  }
  function threeOfFiveAiueo5() {
    answerSmall5 = document.getElementById("id_answerSmall5");
    wronganswer1Small5 = document.getElementById("id_wronganswer1Small5");
    wronganswer2Small5 = document.getElementById("id_wronganswer2Small5");
    wronganswer3Small5 = document.getElementById("id_wronganswer3Small5");
    wronganswer4Small5 = document.getElementById("id_wronganswer4Small5");
    wronganswer5Small5 = document.getElementById("id_wronganswer5Small5");
    wronganswer6Small5 = document.getElementById("id_wronganswer6Small5");
    wronganswer7Small5 = document.getElementById("id_wronganswer7Small5");
    wronganswer8Small5 = document.getElementById("id_wronganswer8Small5");
    wronganswer9Small5 = document.getElementById("id_wronganswer9Small5");   
    abcText = "ア、イ、ウ";
    abdText = "ア、イ、エ";
    abeText = "ア、イ、オ";
    acdText = "ア、ウ、エ";
    aceText = "ア、ウ、オ";
    adeText = "ア、エ、オ";
    bcdText = "イ、ウ、エ";
    bceText = "イ、ウ、オ";
    bdeText = "イ、エ、オ";
    cdeText = "ウ、エ、オ";
    document.querySelector('.content5 p:nth-child(11)').style.display = "block";
    document.querySelector('.content5 p:nth-child(12)').style.display = "block";
    document.querySelector('.content5 p:nth-child(13)').style.display = "block";
    document.querySelector('.content5 p:nth-child(14)').style.display = "block";
    document.querySelector('.content5 p:nth-child(15)').style.display = "block";
    document.querySelector('.content5 p:nth-child(16)').style.display = "block";
    document.querySelector('.content5').style.overflow = "scroll";
    if(answerSmall5.value == "ア、イ、ウ"){
        wronganswer1Small5.value = abdText;
        wronganswer2Small5.value = abeText;
        wronganswer3Small5.value = acdText;
        wronganswer4Small5.value = aceText;
        wronganswer5Small5.value = adeText;
        wronganswer6Small5.value = bcdText;
        wronganswer7Small5.value = bceText;
        wronganswer8Small5.value = bdeText;
        wronganswer9Small5.value = cdeText;
    }else if(answerSmall5.value == "ア、イ、エ"){
        wronganswer1Small5.value = abcText;
        wronganswer2Small5.value = abeText;
        wronganswer3Small5.value = acdText;
        wronganswer4Small5.value = aceText;
        wronganswer5Small5.value = adeText;
        wronganswer6Small5.value = bcdText;
        wronganswer7Small5.value = bceText;
        wronganswer8Small5.value = bdeText;
        wronganswer9Small5.value = cdeText;
    }else if(answerSmall5.value == "ア、イ、オ"){
        wronganswer1Small5.value = abcText;
        wronganswer2Small5.value = abdText;
        wronganswer3Small5.value = acdText;
        wronganswer4Small5.value = aceText;
        wronganswer5Small5.value = adeText;
        wronganswer6Small5.value = bcdText;
        wronganswer7Small5.value = bceText;
        wronganswer8Small5.value = bdeText;
        wronganswer9Small5.value = cdeText;
    }else if(answerSmall5.value == "ア、ウ、エ"){
        wronganswer1Small5.value = abcText;
        wronganswer2Small5.value = abdText;
        wronganswer3Small5.value = abeText;
        wronganswer4Small5.value = aceText;
        wronganswer5Small5.value = adeText;
        wronganswer6Small5.value = bcdText;
        wronganswer7Small5.value = bceText;
        wronganswer8Small5.value = bdeText;
        wronganswer9Small5.value = cdeText;
    }else if(answerSmall5.value == "ア、ウ、オ"){
        wronganswer1Small5.value = abcText;
        wronganswer2Small5.value = abdText;
        wronganswer3Small5.value = abeText;
        wronganswer4Small5.value = acdText;
        wronganswer5Small5.value = adeText;
        wronganswer6Small5.value = bcdText;
        wronganswer7Small5.value = bceText;
        wronganswer8Small5.value = bdeText;
        wronganswer9Small5.value = cdeText;
    }else if(answerSmall5.value == "イ、ウ、エ"){
        wronganswer1Small5.value = abcText;
        wronganswer2Small5.value = abdText;
        wronganswer3Small5.value = abeText;
        wronganswer4Small5.value = acdText;
        wronganswer5Small5.value = aceText;
        wronganswer6Small5.value = adeText;
        wronganswer7Small5.value = bceText;
        wronganswer8Small5.value = bdeText;
        wronganswer9Small5.value = cdeText;
    }else if(answerSmall5.value == "イ、ウ、オ"){
        wronganswer1Small5.value = abcText;
        wronganswer2Small5.value = abdText;
        wronganswer3Small5.value = abeText;
        wronganswer4Small5.value = acdText;
        wronganswer5Small5.value = aceText;
        wronganswer6Small5.value = adeText;
        wronganswer7Small5.value = bcdText;
        wronganswer8Small5.value = bdeText;
        wronganswer9Small5.value = cdeText;
    }else if(answerSmall5.value == "イ、エ、オ"){
        wronganswer1Small5.value = abcText;
        wronganswer2Small5.value = abdText;
        wronganswer3Small5.value = abeText;
        wronganswer4Small5.value = acdText;
        wronganswer5Small5.value = aceText;
        wronganswer6Small5.value = adeText;
        wronganswer7Small5.value = bcdText;
        wronganswer8Small5.value = bceText;
        wronganswer9Small5.value = cdeText;
    }else if(answerSmall5.value == "ウ、エ、オ"){
        wronganswer1Small5.value = abcText;
        wronganswer2Small5.value = abdText;
        wronganswer3Small5.value = abeText;
        wronganswer4Small5.value = acdText;
        wronganswer5Small5.value = aceText;
        wronganswer6Small5.value = adeText;
        wronganswer7Small5.value = bcdText;
        wronganswer8Small5.value = bceText;
        wronganswer9Small5.value = bdeText;
    }else if(answerSmall5.value == "ア、エ、オ"){
        wronganswer1Small5.value = abcText;
        wronganswer2Small5.value = abdText;
        wronganswer3Small5.value = abeText;
        wronganswer4Small5.value = acdText;
        wronganswer5Small5.value = aceText;
        wronganswer6Small5.value = bcdText;
        wronganswer7Small5.value = bceText;
        wronganswer8Small5.value = bdeText;
        wronganswer9Small5.value = cdeText;
    }else{
    }
  }
  function aiue5() {
    answerSmall5 = document.getElementById("id_answerSmall5");
    wronganswer1Small5 = document.getElementById("id_wronganswer1Small5");
    wronganswer2Small5 = document.getElementById("id_wronganswer2Small5");
    wronganswer3Small5 = document.getElementById("id_wronganswer3Small5");
    aText = "ア";
    iText = "イ";
    uText = "ウ";
    eText = "エ";
    if(answerSmall5.value == "ア"){
        wronganswer1Small5.value = iText;
        wronganswer2Small5.value = uText;
        wronganswer3Small5.value = eText;    
    }else if(answerSmall5.value == "イ"){
        wronganswer1Small5.value = aText;
        wronganswer2Small5.value = uText;
        wronganswer3Small5.value = eText; 
    }else if(answerSmall5.value == "ウ"){
        wronganswer1Small5.value = aText;
        wronganswer2Small5.value = iText;
        wronganswer3Small5.value = eText;       
    }else if(answerSmall5.value == "エ"){
        wronganswer1Small5.value = aText;
        wronganswer2Small5.value = iText;
        wronganswer3Small5.value = uText;     
    }else{
    }
  }
  function abcd5() {
    answerSmall5 = document.getElementById("id_answerSmall5");
    wronganswer1Small5 = document.getElementById("id_wronganswer1Small5");
    wronganswer2Small5 = document.getElementById("id_wronganswer2Small5");
    wronganswer3Small5 = document.getElementById("id_wronganswer3Small5");  
    aText = "A";
    bText = "B";
    cText = "C";
    dText = "D";
    if(answerSmall5.value == "A"){
        wronganswer1Small5.value = bText;
        wronganswer2Small5.value = cText;
        wronganswer3Small5.value = dText; 
    }else if(answerSmall5.value == "B"){
        wronganswer1Small5.value = aText;
        wronganswer2Small5.value = cText;
        wronganswer3Small5.value = dText;   
    }else if(answerSmall5.value == "C"){
        wronganswer1Small5.value = aText;
        wronganswer2Small5.value = bText;
        wronganswer3Small5.value = dText;  
    }else if(answerSmall5.value == "D"){
        wronganswer1Small5.value = aText;
        wronganswer2Small5.value = bText;
        wronganswer3Small5.value = cText; 
    }else{
    }
  }

  /*7/17 Small6*/
  function twoOfFour6() {
  answerSmall6 = document.getElementById("id_answerSmall6");
    wronganswer1Small6 = document.getElementById("id_wronganswer1Small6");
    wronganswer2Small6 = document.getElementById("id_wronganswer2Small6");
    wronganswer3Small6 = document.getElementById("id_wronganswer3Small6");
    wronganswer4Small6 = document.getElementById("id_wronganswer4Small6");
    wronganswer5Small6 = document.getElementById("id_wronganswer5Small6");
    wronganswer6Small6 = document.getElementById("id_wronganswer6Small6");
    abText = "A, B";
    acText = "A, C";
    adText = "A, D";
    bcText = "B, C";
    bdText = "B, D";
    cdText = "C, D";  
    document.querySelector('.content6 p:nth-child(11)').style.display = "block";
    document.querySelector('.content6 p:nth-child(12)').style.display = "block";
    document.querySelector('.content6 p:nth-child(13)').style.display = "block";
    document.querySelector('.content6').style.overflow = "scroll";
    if(answerSmall6.value == "A, B"){
        wronganswer1Small6.value = cdText;
        wronganswer2Small6.value = acText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = bcText;
        wronganswer5Small6.value = bdText;
    }else if(answerSmall6.value == "B, C"){
        wronganswer1Small6.value = cdText;
        wronganswer2Small6.value = acText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = bdText;
    }else if(answerSmall6.value == "A, C"){
        wronganswer1Small6.value = cdText;
        wronganswer2Small6.value = bcText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = bdText;
    }else if(answerSmall6.value == "A, D"){
        wronganswer1Small6.value = cdText;
        wronganswer2Small6.value = bcText;
        wronganswer3Small6.value = acText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = bdText;
    }else if(answerSmall6.value == "B, D"){
        wronganswer1Small6.value = cdText;
        wronganswer2Small6.value = bcText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = acText;
    }else if(answerSmall6.value == "C, D"){
        wronganswer1Small6.value = acText;
        wronganswer2Small6.value = bcText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = bdText;
    }else{
    }
}
  function twoOfFourAiue6() {
    answerSmall6 = document.getElementById("id_answerSmall6");
    wronganswer1Small6 = document.getElementById("id_wronganswer1Small6");
    wronganswer2Small6 = document.getElementById("id_wronganswer2Small6");
    wronganswer3Small6 = document.getElementById("id_wronganswer3Small6");
    wronganswer4Small6 = document.getElementById("id_wronganswer4Small6");
    wronganswer5Small6 = document.getElementById("id_wronganswer5Small6");
    wronganswer6Small6 = document.getElementById("id_wronganswer6Small6");
    abText = "ア、イ";
    acText = "ア、ウ";
    adText = "ア、エ";
    bcText = "イ、ウ";
    bdText = "イ、エ";
    cdText = "ウ、エ";  
    document.querySelector('.content6 p:nth-child(11)').style.display = "block";
    document.querySelector('.content6 p:nth-child(12)').style.display = "block";
    document.querySelector('.content6 p:nth-child(13)').style.display = "block";
    document.querySelector('.content6').style.overflow = "scroll";
    if(answerSmall6.value == "ア、イ"){
        wronganswer1Small6.value = cdText;
        wronganswer2Small6.value = acText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = bcText;
        wronganswer5Small6.value = bdText;
    }else if(answerSmall6.value == "イ、ウ"){
        wronganswer1Small6.value = cdText;
        wronganswer2Small6.value = acText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = bdText;
    }else if(answerSmall6.value == "ア、ウ"){
        wronganswer1Small6.value = cdText;
        wronganswer2Small6.value = bcText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = bdText;
    }else if(answerSmall6.value == "ア、エ"){
        wronganswer1Small6.value = cdText;
        wronganswer2Small6.value = bcText;
        wronganswer3Small6.value = acText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = bdText;
    }else if(answerSmall6.value == "イ、エ"){
        wronganswer1Small6.value = cdText;
        wronganswer2Small6.value = bcText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = acText;
    }else if(answerSmall6.value == "ウ、エ"){
        wronganswer1Small6.value = acText;
        wronganswer2Small6.value = bcText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = bdText;
    }else{
    }
  }
  function twoOfFive6() {
    answerSmall6 = document.getElementById("id_answerSmall6");
    wronganswer1Small6 = document.getElementById("id_wronganswer1Small6");
    wronganswer2Small6 = document.getElementById("id_wronganswer2Small6");
    wronganswer3Small6 = document.getElementById("id_wronganswer3Small6");
    wronganswer4Small6 = document.getElementById("id_wronganswer4Small6");
    wronganswer5Small6 = document.getElementById("id_wronganswer5Small6");
    wronganswer6Small6 = document.getElementById("id_wronganswer6Small6");
    wronganswer7Small6 = document.getElementById("id_wronganswer7Small6");
    wronganswer8Small6 = document.getElementById("id_wronganswer8Small6");
    wronganswer9Small6 = document.getElementById("id_wronganswer9Small6");
    abText = "A, B";
    acText = "A, C";
    adText = "A, D";
    bcText = "B, C";
    bdText = "B, D";
    cdText = "C, D";
    aeText = "A, E";
    beText = "B, E";
    ceText = "C, E";
    deText = "D, E";
    document.querySelector('.content6 p:nth-child(11)').style.display = "block";
    document.querySelector('.content6 p:nth-child(12)').style.display = "block";
    document.querySelector('.content6 p:nth-child(13)').style.display = "block";
    document.querySelector('.content6 p:nth-child(14)').style.display = "block";
    document.querySelector('.content6 p:nth-child(15)').style.display = "block";
    document.querySelector('.content6 p:nth-child(16)').style.display = "block";
    document.querySelector('.content6').style.overflow = "scroll";
    if(answerSmall6.value == "A, B"){
        wronganswer1Small6.value = cdText;
        wronganswer2Small6.value = acText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = bcText;
        wronganswer5Small6.value = bdText;
        wronganswer6Small6.value = aeText;
        wronganswer7Small6.value = beText;
        wronganswer8Small6.value = ceText;
        wronganswer9Small6.value = deText;
    }else if(answerSmall6.value == "B, C"){
        wronganswer1Small6.value = cdText;
        wronganswer2Small6.value = acText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = bdText;
        wronganswer6Small6.value = aeText;
        wronganswer7Small6.value = beText;
        wronganswer8Small6.value = ceText;
        wronganswer9Small6.value = deText;
    }else if(answerSmall6.value == "A, C"){
        wronganswer1Small6.value = cdText;
        wronganswer2Small6.value = bcText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = bdText;
        wronganswer6Small6.value = aeText;
        wronganswer7Small6.value = beText;
        wronganswer8Small6.value = ceText;
        wronganswer9Small6.value = deText;
    }else if(answerSmall6.value == "A, D"){
        wronganswer1Small6.value = cdText;
        wronganswer2Small6.value = bcText;
        wronganswer3Small6.value = acText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = bdText;
        wronganswer6Small6.value = aeText;
        wronganswer7Small6.value = beText;
        wronganswer8Small6.value = ceText;
        wronganswer9Small6.value = deText;
    }else if(answerSmall6.value == "B, D"){
        wronganswer1Small6.value = cdText;
        wronganswer2Small6.value = bcText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = acText;
        wronganswer6Small6.value = aeText;
        wronganswer7Small6.value = beText;
        wronganswer8Small6.value = ceText;
        wronganswer9Small6.value = deText;
    }else if(answerSmall6.value == "C, D"){
        wronganswer1Small6.value = acText;
        wronganswer2Small6.value = bcText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = bdText;
        wronganswer6Small6.value = aeText;
        wronganswer7Small6.value = beText;
        wronganswer8Small6.value = ceText;
        wronganswer9Small6.value = deText;
    }else if(answerSmall6.value == "B, E"){
        wronganswer1Small6.value = acText;
        wronganswer2Small6.value = bcText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = bdText;
        wronganswer6Small6.value = aeText;
        wronganswer7Small6.value = cdText;
        wronganswer8Small6.value = ceText;
        wronganswer9Small6.value = deText;
    }else if(answerSmall6.value == "C, E"){
        wronganswer1Small6.value = acText;
        wronganswer2Small6.value = bcText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = bdText;
        wronganswer6Small6.value = aeText;
        wronganswer7Small6.value = beText;
        wronganswer8Small6.value = cdText;
        wronganswer9Small6.value = deText;
    }else if(answerSmall6.value == "D, E"){
        wronganswer1Small6.value = acText;
        wronganswer2Small6.value = bcText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = bdText;
        wronganswer6Small6.value = aeText;
        wronganswer7Small6.value = beText;
        wronganswer8Small6.value = ceText;
        wronganswer9Small6.value = cdText;
    }else if(answerSmall6.value == "A, E"){
        wronganswer1Small6.value = acText;
        wronganswer2Small6.value = bcText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = bdText;
        wronganswer6Small6.value = cdText;
        wronganswer7Small6.value = beText;
        wronganswer8Small6.value = ceText;
        wronganswer9Small6.value = deText;
    }else{
    }
  }
  function twoOfFiveAiueo6() {
    answerSmall6 = document.getElementById("id_answerSmall6");
    wronganswer1Small6 = document.getElementById("id_wronganswer1Small6");
    wronganswer2Small6 = document.getElementById("id_wronganswer2Small6");
    wronganswer3Small6 = document.getElementById("id_wronganswer3Small6");
    wronganswer4Small6 = document.getElementById("id_wronganswer4Small6");
    wronganswer5Small6 = document.getElementById("id_wronganswer5Small6");
    wronganswer6Small6 = document.getElementById("id_wronganswer6Small6");
    wronganswer7Small6 = document.getElementById("id_wronganswer7Small6");
    wronganswer8Small6 = document.getElementById("id_wronganswer8Small6");
    wronganswer9Small6 = document.getElementById("id_wronganswer9Small6");  
    abText = "ア、イ";
    acText = "ア、ウ";
    adText = "ア、エ";
    bcText = "イ、ウ";
    bdText = "イ、エ";
    cdText = "ウ、エ";
    aeText = "ア、オ";
    beText = "イ、オ";
    ceText = "ウ、オ";
    deText = "エ、オ";
    document.querySelector('.content6 p:nth-child(11)').style.display = "block";
    document.querySelector('.content6 p:nth-child(12)').style.display = "block";
    document.querySelector('.content6 p:nth-child(13)').style.display = "block";
    document.querySelector('.content6 p:nth-child(14)').style.display = "block";
    document.querySelector('.content6 p:nth-child(15)').style.display = "block";
    document.querySelector('.content6 p:nth-child(16)').style.display = "block";
    document.querySelector('.content6').style.overflow = "scroll";
    if(answerSmall6.value == "ア、イ"){
        wronganswer1Small6.value = cdText;
        wronganswer2Small6.value = acText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = bcText;
        wronganswer5Small6.value = bdText;
        wronganswer6Small6.value = aeText;
        wronganswer7Small6.value = beText;
        wronganswer8Small6.value = ceText;
        wronganswer9Small6.value = deText;
    }else if(answerSmall6.value == "イ、ウ"){
        wronganswer1Small6.value = cdText;
        wronganswer2Small6.value = acText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = bdText;
        wronganswer6Small6.value = aeText;
        wronganswer7Small6.value = beText;
        wronganswer8Small6.value = ceText;
        wronganswer9Small6.value = deText;
    }else if(answerSmall6.value == "ア、ウ"){
        wronganswer1Small6.value = cdText;
        wronganswer2Small6.value = bcText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = bdText;
        wronganswer6Small6.value = aeText;
        wronganswer7Small6.value = beText;
        wronganswer8Small6.value = ceText;
        wronganswer9Small6.value = deText;
    }else if(answerSmall6.value == "ア、エ"){
        wronganswer1Small6.value = cdText;
        wronganswer2Small6.value = bcText;
        wronganswer3Small6.value = acText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = bdText;
        wronganswer6Small6.value = aeText;
        wronganswer7Small6.value = beText;
        wronganswer8Small6.value = ceText;
        wronganswer9Small6.value = deText;
    }else if(answerSmall6.value == "イ、エ"){
        wronganswer1Small6.value = cdText;
        wronganswer2Small6.value = bcText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = acText;
        wronganswer6Small6.value = aeText;
        wronganswer7Small6.value = beText;
        wronganswer8Small6.value = ceText;
        wronganswer9Small6.value = deText;
    }else if(answerSmall6.value == "ウ、エ"){
        wronganswer1Small6.value = acText;
        wronganswer2Small6.value = bcText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = bdText;
        wronganswer6Small6.value = aeText;
        wronganswer7Small6.value = beText;
        wronganswer8Small6.value = ceText;
        wronganswer9Small6.value = deText;
    }else if(answerSmall6.value == "イ、オ"){
        wronganswer1Small6.value = acText;
        wronganswer2Small6.value = bcText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = bdText;
        wronganswer6Small6.value = aeText;
        wronganswer7Small6.value = cdText;
        wronganswer8Small6.value = ceText;
        wronganswer9Small6.value = deText;
    }else if(answerSmall6.value == "ウ、オ"){
        wronganswer1Small6.value = acText;
        wronganswer2Small6.value = bcText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = bdText;
        wronganswer6Small6.value = aeText;
        wronganswer7Small6.value = beText;
        wronganswer8Small6.value = cdText;
        wronganswer9Small6.value = deText;
    }else if(answerSmall6.value == "エ、オ"){
        wronganswer1Small6.value = acText;
        wronganswer2Small6.value = bcText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = bdText;
        wronganswer6Small6.value = aeText;
        wronganswer7Small6.value = beText;
        wronganswer8Small6.value = ceText;
        wronganswer9Small6.value = cdText;
    }else if(answerSmall6.value == "ア、オ"){
        wronganswer1Small6.value = acText;
        wronganswer2Small6.value = bcText;
        wronganswer3Small6.value = adText;
        wronganswer4Small6.value = abText;
        wronganswer5Small6.value = bdText;
        wronganswer6Small6.value = cdText;
        wronganswer7Small6.value = beText;
        wronganswer8Small6.value = ceText;
        wronganswer9Small6.value = deText;
    }else{
    }
  }
  function threeOfFive6() {
    answerSmall6 = document.getElementById("id_answerSmall6");
    wronganswer1Small6 = document.getElementById("id_wronganswer1Small6");
    wronganswer2Small6 = document.getElementById("id_wronganswer2Small6");
    wronganswer3Small6 = document.getElementById("id_wronganswer3Small6");
    wronganswer4Small6 = document.getElementById("id_wronganswer4Small6");
    wronganswer5Small6 = document.getElementById("id_wronganswer5Small6");
    wronganswer6Small6 = document.getElementById("id_wronganswer6Small6");
    wronganswer7Small6 = document.getElementById("id_wronganswer7Small6");
    wronganswer8Small6 = document.getElementById("id_wronganswer8Small6");
    wronganswer9Small6 = document.getElementById("id_wronganswer9Small6");  
    abcText = "A, B, C";
    abdText = "A, B, D";
    abeText = "A, B, E";
    acdText = "A, C, D";
    aceText = "A, C, E";
    adeText = "A, D, E";
    bcdText = "B, C, D";
    bceText = "B, C, E";
    bdeText = "B, D, E";
    cdeText = "C, D, E";
    document.querySelector('.content6 p:nth-child(11)').style.display = "block";
    document.querySelector('.content6 p:nth-child(12)').style.display = "block";
    document.querySelector('.content6 p:nth-child(13)').style.display = "block";
    document.querySelector('.content6 p:nth-child(14)').style.display = "block";
    document.querySelector('.content6 p:nth-child(15)').style.display = "block";
    document.querySelector('.content6 p:nth-child(16)').style.display = "block";
    document.querySelector('.content6').style.overflow = "scroll";
    if(answerSmall6.value == "A, B, C"){
        wronganswer1Small6.value = abdText;
        wronganswer2Small6.value = abeText;
        wronganswer3Small6.value = acdText;
        wronganswer4Small6.value = aceText;
        wronganswer5Small6.value = adeText;
        wronganswer6Small6.value = bcdText;
        wronganswer7Small6.value = bceText;
        wronganswer8Small6.value = bdeText;
        wronganswer9Small6.value = cdeText;
    }else if(answerSmall6.value == "A, B, D"){
        wronganswer1Small6.value = abcText;
        wronganswer2Small6.value = abeText;
        wronganswer3Small6.value = acdText;
        wronganswer4Small6.value = aceText;
        wronganswer5Small6.value = adeText;
        wronganswer6Small6.value = bcdText;
        wronganswer7Small6.value = bceText;
        wronganswer8Small6.value = bdeText;
        wronganswer9Small6.value = cdeText;
    }else if(answerSmall6.value == "A, B, E"){
        wronganswer1Small6.value = abcText;
        wronganswer2Small6.value = abdText;
        wronganswer3Small6.value = acdText;
        wronganswer4Small6.value = aceText;
        wronganswer5Small6.value = adeText;
        wronganswer6Small6.value = bcdText;
        wronganswer7Small6.value = bceText;
        wronganswer8Small6.value = bdeText;
        wronganswer9Small6.value = cdeText;
    }else if(answerSmall6.value == "A, C, D"){
        wronganswer1Small6.value = abcText;
        wronganswer2Small6.value = abdText;
        wronganswer3Small6.value = abeText;
        wronganswer4Small6.value = aceText;
        wronganswer5Small6.value = adeText;
        wronganswer6Small6.value = bcdText;
        wronganswer7Small6.value = bceText;
        wronganswer8Small6.value = bdeText;
        wronganswer9Small6.value = cdeText;
    }else if(answerSmall6.value == "A, C, E"){
        wronganswer1Small6.value = abcText;
        wronganswer2Small6.value = abdText;
        wronganswer3Small6.value = abeText;
        wronganswer4Small6.value = acdText;
        wronganswer5Small6.value = adeText;
        wronganswer6Small6.value = bcdText;
        wronganswer7Small6.value = bceText;
        wronganswer8Small6.value = bdeText;
        wronganswer9Small6.value = cdeText;
    }else if(answerSmall6.value == "B, C, D"){
        wronganswer1Small6.value = abcText;
        wronganswer2Small6.value = abdText;
        wronganswer3Small6.value = abeText;
        wronganswer4Small6.value = acdText;
        wronganswer5Small6.value = aceText;
        wronganswer6Small6.value = adeText;
        wronganswer7Small6.value = bceText;
        wronganswer8Small6.value = bdeText;
        wronganswer9Small6.value = cdeText;
    }else if(answerSmall6.value == "B, C, E"){
        wronganswer1Small6.value = abcText;
        wronganswer2Small6.value = abdText;
        wronganswer3Small6.value = abeText;
        wronganswer4Small6.value = acdText;
        wronganswer5Small6.value = aceText;
        wronganswer6Small6.value = adeText;
        wronganswer7Small6.value = bcdText;
        wronganswer8Small6.value = bdeText;
        wronganswer9Small6.value = cdeText;
    }else if(answerSmall6.value == "B, D, E"){
        wronganswer1Small6.value = abcText;
        wronganswer2Small6.value = abdText;
        wronganswer3Small6.value = abeText;
        wronganswer4Small6.value = acdText;
        wronganswer5Small6.value = aceText;
        wronganswer6Small6.value = adeText;
        wronganswer7Small6.value = bcdText;
        wronganswer8Small6.value = bceText;
        wronganswer9Small6.value = cdeText;
    }else if(answerSmall6.value == "C, D, E"){
        wronganswer1Small6.value = abcText;
        wronganswer2Small6.value = abdText;
        wronganswer3Small6.value = abeText;
        wronganswer4Small6.value = acdText;
        wronganswer5Small6.value = aceText;
        wronganswer6Small6.value = adeText;
        wronganswer7Small6.value = bcdText;
        wronganswer8Small6.value = bceText;
        wronganswer9Small6.value = bdeText;
    }else if(answerSmall6.value == "A, D, E"){
        wronganswer1Small6.value = abcText;
        wronganswer2Small6.value = abdText;
        wronganswer3Small6.value = abeText;
        wronganswer4Small6.value = acdText;
        wronganswer5Small6.value = aceText;
        wronganswer6Small6.value = bcdText;
        wronganswer7Small6.value = bceText;
        wronganswer8Small6.value = bdeText;
        wronganswer9Small6.value = cdeText;
    }else{
    }
  }
  function threeOfFiveAiueo6() {
    answerSmall6 = document.getElementById("id_answerSmall6");
    wronganswer1Small6 = document.getElementById("id_wronganswer1Small6");
    wronganswer2Small6 = document.getElementById("id_wronganswer2Small6");
    wronganswer3Small6 = document.getElementById("id_wronganswer3Small6");
    wronganswer4Small6 = document.getElementById("id_wronganswer4Small6");
    wronganswer5Small6 = document.getElementById("id_wronganswer5Small6");
    wronganswer6Small6 = document.getElementById("id_wronganswer6Small6");
    wronganswer7Small6 = document.getElementById("id_wronganswer7Small6");
    wronganswer8Small6 = document.getElementById("id_wronganswer8Small6");
    wronganswer9Small6 = document.getElementById("id_wronganswer9Small6");   
    abcText = "ア、イ、ウ";
    abdText = "ア、イ、エ";
    abeText = "ア、イ、オ";
    acdText = "ア、ウ、エ";
    aceText = "ア、ウ、オ";
    adeText = "ア、エ、オ";
    bcdText = "イ、ウ、エ";
    bceText = "イ、ウ、オ";
    bdeText = "イ、エ、オ";
    cdeText = "ウ、エ、オ";
    document.querySelector('.content6 p:nth-child(11)').style.display = "block";
    document.querySelector('.content6 p:nth-child(12)').style.display = "block";
    document.querySelector('.content6 p:nth-child(13)').style.display = "block";
    document.querySelector('.content6 p:nth-child(14)').style.display = "block";
    document.querySelector('.content6 p:nth-child(15)').style.display = "block";
    document.querySelector('.content6 p:nth-child(16)').style.display = "block";
    document.querySelector('.content6').style.overflow = "scroll";
    if(answerSmall6.value == "ア、イ、ウ"){
        wronganswer1Small6.value = abdText;
        wronganswer2Small6.value = abeText;
        wronganswer3Small6.value = acdText;
        wronganswer4Small6.value = aceText;
        wronganswer5Small6.value = adeText;
        wronganswer6Small6.value = bcdText;
        wronganswer7Small6.value = bceText;
        wronganswer8Small6.value = bdeText;
        wronganswer9Small6.value = cdeText;
    }else if(answerSmall6.value == "ア、イ、エ"){
        wronganswer1Small6.value = abcText;
        wronganswer2Small6.value = abeText;
        wronganswer3Small6.value = acdText;
        wronganswer4Small6.value = aceText;
        wronganswer5Small6.value = adeText;
        wronganswer6Small6.value = bcdText;
        wronganswer7Small6.value = bceText;
        wronganswer8Small6.value = bdeText;
        wronganswer9Small6.value = cdeText;
    }else if(answerSmall6.value == "ア、イ、オ"){
        wronganswer1Small6.value = abcText;
        wronganswer2Small6.value = abdText;
        wronganswer3Small6.value = acdText;
        wronganswer4Small6.value = aceText;
        wronganswer5Small6.value = adeText;
        wronganswer6Small6.value = bcdText;
        wronganswer7Small6.value = bceText;
        wronganswer8Small6.value = bdeText;
        wronganswer9Small6.value = cdeText;
    }else if(answerSmall6.value == "ア、ウ、エ"){
        wronganswer1Small6.value = abcText;
        wronganswer2Small6.value = abdText;
        wronganswer3Small6.value = abeText;
        wronganswer4Small6.value = aceText;
        wronganswer5Small6.value = adeText;
        wronganswer6Small6.value = bcdText;
        wronganswer7Small6.value = bceText;
        wronganswer8Small6.value = bdeText;
        wronganswer9Small6.value = cdeText;
    }else if(answerSmall6.value == "ア、ウ、オ"){
        wronganswer1Small6.value = abcText;
        wronganswer2Small6.value = abdText;
        wronganswer3Small6.value = abeText;
        wronganswer4Small6.value = acdText;
        wronganswer5Small6.value = adeText;
        wronganswer6Small6.value = bcdText;
        wronganswer7Small6.value = bceText;
        wronganswer8Small6.value = bdeText;
        wronganswer9Small6.value = cdeText;
    }else if(answerSmall6.value == "イ、ウ、エ"){
        wronganswer1Small6.value = abcText;
        wronganswer2Small6.value = abdText;
        wronganswer3Small6.value = abeText;
        wronganswer4Small6.value = acdText;
        wronganswer5Small6.value = aceText;
        wronganswer6Small6.value = adeText;
        wronganswer7Small6.value = bceText;
        wronganswer8Small6.value = bdeText;
        wronganswer9Small6.value = cdeText;
    }else if(answerSmall6.value == "イ、ウ、オ"){
        wronganswer1Small6.value = abcText;
        wronganswer2Small6.value = abdText;
        wronganswer3Small6.value = abeText;
        wronganswer4Small6.value = acdText;
        wronganswer5Small6.value = aceText;
        wronganswer6Small6.value = adeText;
        wronganswer7Small6.value = bcdText;
        wronganswer8Small6.value = bdeText;
        wronganswer9Small6.value = cdeText;
    }else if(answerSmall6.value == "イ、エ、オ"){
        wronganswer1Small6.value = abcText;
        wronganswer2Small6.value = abdText;
        wronganswer3Small6.value = abeText;
        wronganswer4Small6.value = acdText;
        wronganswer5Small6.value = aceText;
        wronganswer6Small6.value = adeText;
        wronganswer7Small6.value = bcdText;
        wronganswer8Small6.value = bceText;
        wronganswer9Small6.value = cdeText;
    }else if(answerSmall6.value == "ウ、エ、オ"){
        wronganswer1Small6.value = abcText;
        wronganswer2Small6.value = abdText;
        wronganswer3Small6.value = abeText;
        wronganswer4Small6.value = acdText;
        wronganswer5Small6.value = aceText;
        wronganswer6Small6.value = adeText;
        wronganswer7Small6.value = bcdText;
        wronganswer8Small6.value = bceText;
        wronganswer9Small6.value = bdeText;
    }else if(answerSmall6.value == "ア、エ、オ"){
        wronganswer1Small6.value = abcText;
        wronganswer2Small6.value = abdText;
        wronganswer3Small6.value = abeText;
        wronganswer4Small6.value = acdText;
        wronganswer5Small6.value = aceText;
        wronganswer6Small6.value = bcdText;
        wronganswer7Small6.value = bceText;
        wronganswer8Small6.value = bdeText;
        wronganswer9Small6.value = cdeText;
    }else{
    }
  }
  function aiue6() {
    answerSmall6 = document.getElementById("id_answerSmall6");
    wronganswer1Small6 = document.getElementById("id_wronganswer1Small6");
    wronganswer2Small6 = document.getElementById("id_wronganswer2Small6");
    wronganswer3Small6 = document.getElementById("id_wronganswer3Small6");
    aText = "ア";
    iText = "イ";
    uText = "ウ";
    eText = "エ";
    if(answerSmall6.value == "ア"){
        wronganswer1Small6.value = iText;
        wronganswer2Small6.value = uText;
        wronganswer3Small6.value = eText;    
    }else if(answerSmall6.value == "イ"){
        wronganswer1Small6.value = aText;
        wronganswer2Small6.value = uText;
        wronganswer3Small6.value = eText; 
    }else if(answerSmall6.value == "ウ"){
        wronganswer1Small6.value = aText;
        wronganswer2Small6.value = iText;
        wronganswer3Small6.value = eText;       
    }else if(answerSmall6.value == "エ"){
        wronganswer1Small6.value = aText;
        wronganswer2Small6.value = iText;
        wronganswer3Small6.value = uText;     
    }else{
    }
  }
  function abcd6() {
    answerSmall6 = document.getElementById("id_answerSmall6");
    wronganswer1Small6 = document.getElementById("id_wronganswer1Small6");
    wronganswer2Small6 = document.getElementById("id_wronganswer2Small6");
    wronganswer3Small6 = document.getElementById("id_wronganswer3Small6");  
    aText = "A";
    bText = "B";
    cText = "C";
    dText = "D";
    if(answerSmall6.value == "A"){
        wronganswer1Small6.value = bText;
        wronganswer2Small6.value = cText;
        wronganswer3Small6.value = dText; 
    }else if(answerSmall6.value == "B"){
        wronganswer1Small6.value = aText;
        wronganswer2Small6.value = cText;
        wronganswer3Small6.value = dText;   
    }else if(answerSmall6.value == "C"){
        wronganswer1Small6.value = aText;
        wronganswer2Small6.value = bText;
        wronganswer3Small6.value = dText;  
    }else if(answerSmall6.value == "D"){
        wronganswer1Small6.value = aText;
        wronganswer2Small6.value = bText;
        wronganswer3Small6.value = cText; 
    }else{
    }
  }

  /*7/17 Small7*/
  function twoOfFour7() {
  answerSmall7 = document.getElementById("id_answerSmall7");
    wronganswer1Small7 = document.getElementById("id_wronganswer1Small7");
    wronganswer2Small7 = document.getElementById("id_wronganswer2Small7");
    wronganswer3Small7 = document.getElementById("id_wronganswer3Small7");
    wronganswer4Small7 = document.getElementById("id_wronganswer4Small7");
    wronganswer5Small7 = document.getElementById("id_wronganswer5Small7");
    wronganswer6Small7 = document.getElementById("id_wronganswer6Small7");
    abText = "A, B";
    acText = "A, C";
    adText = "A, D";
    bcText = "B, C";
    bdText = "B, D";
    cdText = "C, D";  
    document.querySelector('.content7 p:nth-child(11)').style.display = "block";
    document.querySelector('.content7 p:nth-child(12)').style.display = "block";
    document.querySelector('.content7 p:nth-child(13)').style.display = "block";
    document.querySelector('.content7').style.overflow = "scroll";
    if(answerSmall7.value == "A, B"){
        wronganswer1Small7.value = cdText;
        wronganswer2Small7.value = acText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = bcText;
        wronganswer5Small7.value = bdText;
    }else if(answerSmall7.value == "B, C"){
        wronganswer1Small7.value = cdText;
        wronganswer2Small7.value = acText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = bdText;
    }else if(answerSmall7.value == "A, C"){
        wronganswer1Small7.value = cdText;
        wronganswer2Small7.value = bcText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = bdText;
    }else if(answerSmall7.value == "A, D"){
        wronganswer1Small7.value = cdText;
        wronganswer2Small7.value = bcText;
        wronganswer3Small7.value = acText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = bdText;
    }else if(answerSmall7.value == "B, D"){
        wronganswer1Small7.value = cdText;
        wronganswer2Small7.value = bcText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = acText;
    }else if(answerSmall7.value == "C, D"){
        wronganswer1Small7.value = acText;
        wronganswer2Small7.value = bcText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = bdText;
    }else{
    }
}
  function twoOfFourAiue7() {
    answerSmall7 = document.getElementById("id_answerSmall7");
    wronganswer1Small7 = document.getElementById("id_wronganswer1Small7");
    wronganswer2Small7 = document.getElementById("id_wronganswer2Small7");
    wronganswer3Small7 = document.getElementById("id_wronganswer3Small7");
    wronganswer4Small7 = document.getElementById("id_wronganswer4Small7");
    wronganswer5Small7 = document.getElementById("id_wronganswer5Small7");
    wronganswer6Small7 = document.getElementById("id_wronganswer6Small7");
    abText = "ア、イ";
    acText = "ア、ウ";
    adText = "ア、エ";
    bcText = "イ、ウ";
    bdText = "イ、エ";
    cdText = "ウ、エ";  
    document.querySelector('.content7 p:nth-child(11)').style.display = "block";
    document.querySelector('.content7 p:nth-child(12)').style.display = "block";
    document.querySelector('.content7 p:nth-child(13)').style.display = "block";
    document.querySelector('.content7').style.overflow = "scroll";
    if(answerSmall7.value == "ア、イ"){
        wronganswer1Small7.value = cdText;
        wronganswer2Small7.value = acText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = bcText;
        wronganswer5Small7.value = bdText;
    }else if(answerSmall7.value == "イ、ウ"){
        wronganswer1Small7.value = cdText;
        wronganswer2Small7.value = acText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = bdText;
    }else if(answerSmall7.value == "ア、ウ"){
        wronganswer1Small7.value = cdText;
        wronganswer2Small7.value = bcText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = bdText;
    }else if(answerSmall7.value == "ア、エ"){
        wronganswer1Small7.value = cdText;
        wronganswer2Small7.value = bcText;
        wronganswer3Small7.value = acText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = bdText;
    }else if(answerSmall7.value == "イ、エ"){
        wronganswer1Small7.value = cdText;
        wronganswer2Small7.value = bcText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = acText;
    }else if(answerSmall7.value == "ウ、エ"){
        wronganswer1Small7.value = acText;
        wronganswer2Small7.value = bcText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = bdText;
    }else{
    }
  }
  function twoOfFive7() {
    answerSmall7 = document.getElementById("id_answerSmall7");
    wronganswer1Small7 = document.getElementById("id_wronganswer1Small7");
    wronganswer2Small7 = document.getElementById("id_wronganswer2Small7");
    wronganswer3Small7 = document.getElementById("id_wronganswer3Small7");
    wronganswer4Small7 = document.getElementById("id_wronganswer4Small7");
    wronganswer5Small7 = document.getElementById("id_wronganswer5Small7");
    wronganswer6Small7 = document.getElementById("id_wronganswer6Small7");
    wronganswer7Small7 = document.getElementById("id_wronganswer7Small7");
    wronganswer8Small7 = document.getElementById("id_wronganswer8Small7");
    wronganswer9Small7 = document.getElementById("id_wronganswer9Small7");
    abText = "A, B";
    acText = "A, C";
    adText = "A, D";
    bcText = "B, C";
    bdText = "B, D";
    cdText = "C, D";
    aeText = "A, E";
    beText = "B, E";
    ceText = "C, E";
    deText = "D, E";
    document.querySelector('.content7 p:nth-child(11)').style.display = "block";
    document.querySelector('.content7 p:nth-child(12)').style.display = "block";
    document.querySelector('.content7 p:nth-child(13)').style.display = "block";
    document.querySelector('.content7 p:nth-child(14)').style.display = "block";
    document.querySelector('.content7 p:nth-child(15)').style.display = "block";
    document.querySelector('.content7 p:nth-child(16)').style.display = "block";
    document.querySelector('.content7').style.overflow = "scroll";
    if(answerSmall7.value == "A, B"){
        wronganswer1Small7.value = cdText;
        wronganswer2Small7.value = acText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = bcText;
        wronganswer5Small7.value = bdText;
        wronganswer6Small7.value = aeText;
        wronganswer7Small7.value = beText;
        wronganswer8Small7.value = ceText;
        wronganswer9Small7.value = deText;
    }else if(answerSmall7.value == "B, C"){
        wronganswer1Small7.value = cdText;
        wronganswer2Small7.value = acText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = bdText;
        wronganswer6Small7.value = aeText;
        wronganswer7Small7.value = beText;
        wronganswer8Small7.value = ceText;
        wronganswer9Small7.value = deText;
    }else if(answerSmall7.value == "A, C"){
        wronganswer1Small7.value = cdText;
        wronganswer2Small7.value = bcText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = bdText;
        wronganswer6Small7.value = aeText;
        wronganswer7Small7.value = beText;
        wronganswer8Small7.value = ceText;
        wronganswer9Small7.value = deText;
    }else if(answerSmall7.value == "A, D"){
        wronganswer1Small7.value = cdText;
        wronganswer2Small7.value = bcText;
        wronganswer3Small7.value = acText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = bdText;
        wronganswer6Small7.value = aeText;
        wronganswer7Small7.value = beText;
        wronganswer8Small7.value = ceText;
        wronganswer9Small7.value = deText;
    }else if(answerSmall7.value == "B, D"){
        wronganswer1Small7.value = cdText;
        wronganswer2Small7.value = bcText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = acText;
        wronganswer6Small7.value = aeText;
        wronganswer7Small7.value = beText;
        wronganswer8Small7.value = ceText;
        wronganswer9Small7.value = deText;
    }else if(answerSmall7.value == "C, D"){
        wronganswer1Small7.value = acText;
        wronganswer2Small7.value = bcText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = bdText;
        wronganswer6Small7.value = aeText;
        wronganswer7Small7.value = beText;
        wronganswer8Small7.value = ceText;
        wronganswer9Small7.value = deText;
    }else if(answerSmall7.value == "B, E"){
        wronganswer1Small7.value = acText;
        wronganswer2Small7.value = bcText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = bdText;
        wronganswer6Small7.value = aeText;
        wronganswer7Small7.value = cdText;
        wronganswer8Small7.value = ceText;
        wronganswer9Small7.value = deText;
    }else if(answerSmall7.value == "C, E"){
        wronganswer1Small7.value = acText;
        wronganswer2Small7.value = bcText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = bdText;
        wronganswer6Small7.value = aeText;
        wronganswer7Small7.value = beText;
        wronganswer8Small7.value = cdText;
        wronganswer9Small7.value = deText;
    }else if(answerSmall7.value == "D, E"){
        wronganswer1Small7.value = acText;
        wronganswer2Small7.value = bcText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = bdText;
        wronganswer6Small7.value = aeText;
        wronganswer7Small7.value = beText;
        wronganswer8Small7.value = ceText;
        wronganswer9Small7.value = cdText;
    }else if(answerSmall7.value == "A, E"){
        wronganswer1Small7.value = acText;
        wronganswer2Small7.value = bcText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = bdText;
        wronganswer6Small7.value = cdText;
        wronganswer7Small7.value = beText;
        wronganswer8Small7.value = ceText;
        wronganswer9Small7.value = deText;
    }else{
    }
  }
  function twoOfFiveAiueo7() {
    answerSmall7 = document.getElementById("id_answerSmall7");
    wronganswer1Small7 = document.getElementById("id_wronganswer1Small7");
    wronganswer2Small7 = document.getElementById("id_wronganswer2Small7");
    wronganswer3Small7 = document.getElementById("id_wronganswer3Small7");
    wronganswer4Small7 = document.getElementById("id_wronganswer4Small7");
    wronganswer5Small7 = document.getElementById("id_wronganswer5Small7");
    wronganswer6Small7 = document.getElementById("id_wronganswer6Small7");
    wronganswer7Small7 = document.getElementById("id_wronganswer7Small7");
    wronganswer8Small7 = document.getElementById("id_wronganswer8Small7");
    wronganswer9Small7 = document.getElementById("id_wronganswer9Small7");  
    abText = "ア、イ";
    acText = "ア、ウ";
    adText = "ア、エ";
    bcText = "イ、ウ";
    bdText = "イ、エ";
    cdText = "ウ、エ";
    aeText = "ア、オ";
    beText = "イ、オ";
    ceText = "ウ、オ";
    deText = "エ、オ";
    document.querySelector('.content7 p:nth-child(11)').style.display = "block";
    document.querySelector('.content7 p:nth-child(12)').style.display = "block";
    document.querySelector('.content7 p:nth-child(13)').style.display = "block";
    document.querySelector('.content7 p:nth-child(14)').style.display = "block";
    document.querySelector('.content7 p:nth-child(15)').style.display = "block";
    document.querySelector('.content7 p:nth-child(16)').style.display = "block";
    document.querySelector('.content7').style.overflow = "scroll";
    if(answerSmall7.value == "ア、イ"){
        wronganswer1Small7.value = cdText;
        wronganswer2Small7.value = acText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = bcText;
        wronganswer5Small7.value = bdText;
        wronganswer6Small7.value = aeText;
        wronganswer7Small7.value = beText;
        wronganswer8Small7.value = ceText;
        wronganswer9Small7.value = deText;
    }else if(answerSmall7.value == "イ、ウ"){
        wronganswer1Small7.value = cdText;
        wronganswer2Small7.value = acText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = bdText;
        wronganswer6Small7.value = aeText;
        wronganswer7Small7.value = beText;
        wronganswer8Small7.value = ceText;
        wronganswer9Small7.value = deText;
    }else if(answerSmall7.value == "ア、ウ"){
        wronganswer1Small7.value = cdText;
        wronganswer2Small7.value = bcText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = bdText;
        wronganswer6Small7.value = aeText;
        wronganswer7Small7.value = beText;
        wronganswer8Small7.value = ceText;
        wronganswer9Small7.value = deText;
    }else if(answerSmall7.value == "ア、エ"){
        wronganswer1Small7.value = cdText;
        wronganswer2Small7.value = bcText;
        wronganswer3Small7.value = acText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = bdText;
        wronganswer6Small7.value = aeText;
        wronganswer7Small7.value = beText;
        wronganswer8Small7.value = ceText;
        wronganswer9Small7.value = deText;
    }else if(answerSmall7.value == "イ、エ"){
        wronganswer1Small7.value = cdText;
        wronganswer2Small7.value = bcText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = acText;
        wronganswer6Small7.value = aeText;
        wronganswer7Small7.value = beText;
        wronganswer8Small7.value = ceText;
        wronganswer9Small7.value = deText;
    }else if(answerSmall7.value == "ウ、エ"){
        wronganswer1Small7.value = acText;
        wronganswer2Small7.value = bcText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = bdText;
        wronganswer6Small7.value = aeText;
        wronganswer7Small7.value = beText;
        wronganswer8Small7.value = ceText;
        wronganswer9Small7.value = deText;
    }else if(answerSmall7.value == "イ、オ"){
        wronganswer1Small7.value = acText;
        wronganswer2Small7.value = bcText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = bdText;
        wronganswer6Small7.value = aeText;
        wronganswer7Small7.value = cdText;
        wronganswer8Small7.value = ceText;
        wronganswer9Small7.value = deText;
    }else if(answerSmall7.value == "ウ、オ"){
        wronganswer1Small7.value = acText;
        wronganswer2Small7.value = bcText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = bdText;
        wronganswer6Small7.value = aeText;
        wronganswer7Small7.value = beText;
        wronganswer8Small7.value = cdText;
        wronganswer9Small7.value = deText;
    }else if(answerSmall7.value == "エ、オ"){
        wronganswer1Small7.value = acText;
        wronganswer2Small7.value = bcText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = bdText;
        wronganswer6Small7.value = aeText;
        wronganswer7Small7.value = beText;
        wronganswer8Small7.value = ceText;
        wronganswer9Small7.value = cdText;
    }else if(answerSmall7.value == "ア、オ"){
        wronganswer1Small7.value = acText;
        wronganswer2Small7.value = bcText;
        wronganswer3Small7.value = adText;
        wronganswer4Small7.value = abText;
        wronganswer5Small7.value = bdText;
        wronganswer6Small7.value = cdText;
        wronganswer7Small7.value = beText;
        wronganswer8Small7.value = ceText;
        wronganswer9Small7.value = deText;
    }else{
    }
  }
  function threeOfFive7() {
    answerSmall7 = document.getElementById("id_answerSmall7");
    wronganswer1Small7 = document.getElementById("id_wronganswer1Small7");
    wronganswer2Small7 = document.getElementById("id_wronganswer2Small7");
    wronganswer3Small7 = document.getElementById("id_wronganswer3Small7");
    wronganswer4Small7 = document.getElementById("id_wronganswer4Small7");
    wronganswer5Small7 = document.getElementById("id_wronganswer5Small7");
    wronganswer6Small7 = document.getElementById("id_wronganswer6Small7");
    wronganswer7Small7 = document.getElementById("id_wronganswer7Small7");
    wronganswer8Small7 = document.getElementById("id_wronganswer8Small7");
    wronganswer9Small7 = document.getElementById("id_wronganswer9Small7");  
    abcText = "A, B, C";
    abdText = "A, B, D";
    abeText = "A, B, E";
    acdText = "A, C, D";
    aceText = "A, C, E";
    adeText = "A, D, E";
    bcdText = "B, C, D";
    bceText = "B, C, E";
    bdeText = "B, D, E";
    cdeText = "C, D, E";
    document.querySelector('.content7 p:nth-child(11)').style.display = "block";
    document.querySelector('.content7 p:nth-child(12)').style.display = "block";
    document.querySelector('.content7 p:nth-child(13)').style.display = "block";
    document.querySelector('.content7 p:nth-child(14)').style.display = "block";
    document.querySelector('.content7 p:nth-child(15)').style.display = "block";
    document.querySelector('.content7 p:nth-child(16)').style.display = "block";
    document.querySelector('.content7').style.overflow = "scroll";
    if(answerSmall7.value == "A, B, C"){
        wronganswer1Small7.value = abdText;
        wronganswer2Small7.value = abeText;
        wronganswer3Small7.value = acdText;
        wronganswer4Small7.value = aceText;
        wronganswer5Small7.value = adeText;
        wronganswer6Small7.value = bcdText;
        wronganswer7Small7.value = bceText;
        wronganswer8Small7.value = bdeText;
        wronganswer9Small7.value = cdeText;
    }else if(answerSmall7.value == "A, B, D"){
        wronganswer1Small7.value = abcText;
        wronganswer2Small7.value = abeText;
        wronganswer3Small7.value = acdText;
        wronganswer4Small7.value = aceText;
        wronganswer5Small7.value = adeText;
        wronganswer6Small7.value = bcdText;
        wronganswer7Small7.value = bceText;
        wronganswer8Small7.value = bdeText;
        wronganswer9Small7.value = cdeText;
    }else if(answerSmall7.value == "A, B, E"){
        wronganswer1Small7.value = abcText;
        wronganswer2Small7.value = abdText;
        wronganswer3Small7.value = acdText;
        wronganswer4Small7.value = aceText;
        wronganswer5Small7.value = adeText;
        wronganswer6Small7.value = bcdText;
        wronganswer7Small7.value = bceText;
        wronganswer8Small7.value = bdeText;
        wronganswer9Small7.value = cdeText;
    }else if(answerSmall7.value == "A, C, D"){
        wronganswer1Small7.value = abcText;
        wronganswer2Small7.value = abdText;
        wronganswer3Small7.value = abeText;
        wronganswer4Small7.value = aceText;
        wronganswer5Small7.value = adeText;
        wronganswer6Small7.value = bcdText;
        wronganswer7Small7.value = bceText;
        wronganswer8Small7.value = bdeText;
        wronganswer9Small7.value = cdeText;
    }else if(answerSmall7.value == "A, C, E"){
        wronganswer1Small7.value = abcText;
        wronganswer2Small7.value = abdText;
        wronganswer3Small7.value = abeText;
        wronganswer4Small7.value = acdText;
        wronganswer5Small7.value = adeText;
        wronganswer6Small7.value = bcdText;
        wronganswer7Small7.value = bceText;
        wronganswer8Small7.value = bdeText;
        wronganswer9Small7.value = cdeText;
    }else if(answerSmall7.value == "B, C, D"){
        wronganswer1Small7.value = abcText;
        wronganswer2Small7.value = abdText;
        wronganswer3Small7.value = abeText;
        wronganswer4Small7.value = acdText;
        wronganswer5Small7.value = aceText;
        wronganswer6Small7.value = adeText;
        wronganswer7Small7.value = bceText;
        wronganswer8Small7.value = bdeText;
        wronganswer9Small7.value = cdeText;
    }else if(answerSmall7.value == "B, C, E"){
        wronganswer1Small7.value = abcText;
        wronganswer2Small7.value = abdText;
        wronganswer3Small7.value = abeText;
        wronganswer4Small7.value = acdText;
        wronganswer5Small7.value = aceText;
        wronganswer6Small7.value = adeText;
        wronganswer7Small7.value = bcdText;
        wronganswer8Small7.value = bdeText;
        wronganswer9Small7.value = cdeText;
    }else if(answerSmall7.value == "B, D, E"){
        wronganswer1Small7.value = abcText;
        wronganswer2Small7.value = abdText;
        wronganswer3Small7.value = abeText;
        wronganswer4Small7.value = acdText;
        wronganswer5Small7.value = aceText;
        wronganswer6Small7.value = adeText;
        wronganswer7Small7.value = bcdText;
        wronganswer8Small7.value = bceText;
        wronganswer9Small7.value = cdeText;
    }else if(answerSmall7.value == "C, D, E"){
        wronganswer1Small7.value = abcText;
        wronganswer2Small7.value = abdText;
        wronganswer3Small7.value = abeText;
        wronganswer4Small7.value = acdText;
        wronganswer5Small7.value = aceText;
        wronganswer6Small7.value = adeText;
        wronganswer7Small7.value = bcdText;
        wronganswer8Small7.value = bceText;
        wronganswer9Small7.value = bdeText;
    }else if(answerSmall7.value == "A, D, E"){
        wronganswer1Small7.value = abcText;
        wronganswer2Small7.value = abdText;
        wronganswer3Small7.value = abeText;
        wronganswer4Small7.value = acdText;
        wronganswer5Small7.value = aceText;
        wronganswer6Small7.value = bcdText;
        wronganswer7Small7.value = bceText;
        wronganswer8Small7.value = bdeText;
        wronganswer9Small7.value = cdeText;
    }else{
    }
  }
  function threeOfFiveAiueo7() {
    answerSmall7 = document.getElementById("id_answerSmall7");
    wronganswer1Small7 = document.getElementById("id_wronganswer1Small7");
    wronganswer2Small7 = document.getElementById("id_wronganswer2Small7");
    wronganswer3Small7 = document.getElementById("id_wronganswer3Small7");
    wronganswer4Small7 = document.getElementById("id_wronganswer4Small7");
    wronganswer5Small7 = document.getElementById("id_wronganswer5Small7");
    wronganswer6Small7 = document.getElementById("id_wronganswer6Small7");
    wronganswer7Small7 = document.getElementById("id_wronganswer7Small7");
    wronganswer8Small7 = document.getElementById("id_wronganswer8Small7");
    wronganswer9Small7 = document.getElementById("id_wronganswer9Small7");   
    abcText = "ア、イ、ウ";
    abdText = "ア、イ、エ";
    abeText = "ア、イ、オ";
    acdText = "ア、ウ、エ";
    aceText = "ア、ウ、オ";
    adeText = "ア、エ、オ";
    bcdText = "イ、ウ、エ";
    bceText = "イ、ウ、オ";
    bdeText = "イ、エ、オ";
    cdeText = "ウ、エ、オ";
    document.querySelector('.content7 p:nth-child(11)').style.display = "block";
    document.querySelector('.content7 p:nth-child(12)').style.display = "block";
    document.querySelector('.content7 p:nth-child(13)').style.display = "block";
    document.querySelector('.content7 p:nth-child(14)').style.display = "block";
    document.querySelector('.content7 p:nth-child(15)').style.display = "block";
    document.querySelector('.content7 p:nth-child(16)').style.display = "block";
    document.querySelector('.content7').style.overflow = "scroll";
    if(answerSmall7.value == "ア、イ、ウ"){
        wronganswer1Small7.value = abdText;
        wronganswer2Small7.value = abeText;
        wronganswer3Small7.value = acdText;
        wronganswer4Small7.value = aceText;
        wronganswer5Small7.value = adeText;
        wronganswer6Small7.value = bcdText;
        wronganswer7Small7.value = bceText;
        wronganswer8Small7.value = bdeText;
        wronganswer9Small7.value = cdeText;
    }else if(answerSmall7.value == "ア、イ、エ"){
        wronganswer1Small7.value = abcText;
        wronganswer2Small7.value = abeText;
        wronganswer3Small7.value = acdText;
        wronganswer4Small7.value = aceText;
        wronganswer5Small7.value = adeText;
        wronganswer6Small7.value = bcdText;
        wronganswer7Small7.value = bceText;
        wronganswer8Small7.value = bdeText;
        wronganswer9Small7.value = cdeText;
    }else if(answerSmall7.value == "ア、イ、オ"){
        wronganswer1Small7.value = abcText;
        wronganswer2Small7.value = abdText;
        wronganswer3Small7.value = acdText;
        wronganswer4Small7.value = aceText;
        wronganswer5Small7.value = adeText;
        wronganswer6Small7.value = bcdText;
        wronganswer7Small7.value = bceText;
        wronganswer8Small7.value = bdeText;
        wronganswer9Small7.value = cdeText;
    }else if(answerSmall7.value == "ア、ウ、エ"){
        wronganswer1Small7.value = abcText;
        wronganswer2Small7.value = abdText;
        wronganswer3Small7.value = abeText;
        wronganswer4Small7.value = aceText;
        wronganswer5Small7.value = adeText;
        wronganswer6Small7.value = bcdText;
        wronganswer7Small7.value = bceText;
        wronganswer8Small7.value = bdeText;
        wronganswer9Small7.value = cdeText;
    }else if(answerSmall7.value == "ア、ウ、オ"){
        wronganswer1Small7.value = abcText;
        wronganswer2Small7.value = abdText;
        wronganswer3Small7.value = abeText;
        wronganswer4Small7.value = acdText;
        wronganswer5Small7.value = adeText;
        wronganswer6Small7.value = bcdText;
        wronganswer7Small7.value = bceText;
        wronganswer8Small7.value = bdeText;
        wronganswer9Small7.value = cdeText;
    }else if(answerSmall7.value == "イ、ウ、エ"){
        wronganswer1Small7.value = abcText;
        wronganswer2Small7.value = abdText;
        wronganswer3Small7.value = abeText;
        wronganswer4Small7.value = acdText;
        wronganswer5Small7.value = aceText;
        wronganswer6Small7.value = adeText;
        wronganswer7Small7.value = bceText;
        wronganswer8Small7.value = bdeText;
        wronganswer9Small7.value = cdeText;
    }else if(answerSmall7.value == "イ、ウ、オ"){
        wronganswer1Small7.value = abcText;
        wronganswer2Small7.value = abdText;
        wronganswer3Small7.value = abeText;
        wronganswer4Small7.value = acdText;
        wronganswer5Small7.value = aceText;
        wronganswer6Small7.value = adeText;
        wronganswer7Small7.value = bcdText;
        wronganswer8Small7.value = bdeText;
        wronganswer9Small7.value = cdeText;
    }else if(answerSmall7.value == "イ、エ、オ"){
        wronganswer1Small7.value = abcText;
        wronganswer2Small7.value = abdText;
        wronganswer3Small7.value = abeText;
        wronganswer4Small7.value = acdText;
        wronganswer5Small7.value = aceText;
        wronganswer6Small7.value = adeText;
        wronganswer7Small7.value = bcdText;
        wronganswer8Small7.value = bceText;
        wronganswer9Small7.value = cdeText;
    }else if(answerSmall7.value == "ウ、エ、オ"){
        wronganswer1Small7.value = abcText;
        wronganswer2Small7.value = abdText;
        wronganswer3Small7.value = abeText;
        wronganswer4Small7.value = acdText;
        wronganswer5Small7.value = aceText;
        wronganswer6Small7.value = adeText;
        wronganswer7Small7.value = bcdText;
        wronganswer8Small7.value = bceText;
        wronganswer9Small7.value = bdeText;
    }else if(answerSmall7.value == "ア、エ、オ"){
        wronganswer1Small7.value = abcText;
        wronganswer2Small7.value = abdText;
        wronganswer3Small7.value = abeText;
        wronganswer4Small7.value = acdText;
        wronganswer5Small7.value = aceText;
        wronganswer6Small7.value = bcdText;
        wronganswer7Small7.value = bceText;
        wronganswer8Small7.value = bdeText;
        wronganswer9Small7.value = cdeText;
    }else{
    }
  }
  function aiue7() {
    answerSmall7 = document.getElementById("id_answerSmall7");
    wronganswer1Small7 = document.getElementById("id_wronganswer1Small7");
    wronganswer2Small7 = document.getElementById("id_wronganswer2Small7");
    wronganswer3Small7 = document.getElementById("id_wronganswer3Small7");
    aText = "ア";
    iText = "イ";
    uText = "ウ";
    eText = "エ";
    if(answerSmall7.value == "ア"){
        wronganswer1Small7.value = iText;
        wronganswer2Small7.value = uText;
        wronganswer3Small7.value = eText;    
    }else if(answerSmall7.value == "イ"){
        wronganswer1Small7.value = aText;
        wronganswer2Small7.value = uText;
        wronganswer3Small7.value = eText; 
    }else if(answerSmall7.value == "ウ"){
        wronganswer1Small7.value = aText;
        wronganswer2Small7.value = iText;
        wronganswer3Small7.value = eText;       
    }else if(answerSmall7.value == "エ"){
        wronganswer1Small7.value = aText;
        wronganswer2Small7.value = iText;
        wronganswer3Small7.value = uText;     
    }else{
    }
  }
  function abcd7() {
    answerSmall7 = document.getElementById("id_answerSmall7");
    wronganswer1Small7 = document.getElementById("id_wronganswer1Small7");
    wronganswer2Small7 = document.getElementById("id_wronganswer2Small7");
    wronganswer3Small7 = document.getElementById("id_wronganswer3Small7");  
    aText = "A";
    bText = "B";
    cText = "C";
    dText = "D";
    if(answerSmall7.value == "A"){
        wronganswer1Small7.value = bText;
        wronganswer2Small7.value = cText;
        wronganswer3Small7.value = dText; 
    }else if(answerSmall7.value == "B"){
        wronganswer1Small7.value = aText;
        wronganswer2Small7.value = cText;
        wronganswer3Small7.value = dText;   
    }else if(answerSmall7.value == "C"){
        wronganswer1Small7.value = aText;
        wronganswer2Small7.value = bText;
        wronganswer3Small7.value = dText;  
    }else if(answerSmall7.value == "D"){
        wronganswer1Small7.value = aText;
        wronganswer2Small7.value = bText;
        wronganswer3Small7.value = cText; 
    }else{
    }
  }

  /*7/17 Small8*/
  function twoOfFour8() {
  answerSmall8 = document.getElementById("id_answerSmall8");
    wronganswer1Small8 = document.getElementById("id_wronganswer1Small8");
    wronganswer2Small8 = document.getElementById("id_wronganswer2Small8");
    wronganswer3Small8 = document.getElementById("id_wronganswer3Small8");
    wronganswer4Small8 = document.getElementById("id_wronganswer4Small8");
    wronganswer5Small8 = document.getElementById("id_wronganswer5Small8");
    wronganswer6Small8 = document.getElementById("id_wronganswer6Small8");
    abText = "A, B";
    acText = "A, C";
    adText = "A, D";
    bcText = "B, C";
    bdText = "B, D";
    cdText = "C, D";  
    document.querySelector('.content8 p:nth-child(11)').style.display = "block";
    document.querySelector('.content8 p:nth-child(12)').style.display = "block";
    document.querySelector('.content8 p:nth-child(13)').style.display = "block";
    document.querySelector('.content8').style.overflow = "scroll";
    if(answerSmall8.value == "A, B"){
        wronganswer1Small8.value = cdText;
        wronganswer2Small8.value = acText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = bcText;
        wronganswer5Small8.value = bdText;
    }else if(answerSmall8.value == "B, C"){
        wronganswer1Small8.value = cdText;
        wronganswer2Small8.value = acText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = bdText;
    }else if(answerSmall8.value == "A, C"){
        wronganswer1Small8.value = cdText;
        wronganswer2Small8.value = bcText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = bdText;
    }else if(answerSmall8.value == "A, D"){
        wronganswer1Small8.value = cdText;
        wronganswer2Small8.value = bcText;
        wronganswer3Small8.value = acText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = bdText;
    }else if(answerSmall8.value == "B, D"){
        wronganswer1Small8.value = cdText;
        wronganswer2Small8.value = bcText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = acText;
    }else if(answerSmall8.value == "C, D"){
        wronganswer1Small8.value = acText;
        wronganswer2Small8.value = bcText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = bdText;
    }else{
    }
}
  function twoOfFourAiue8() {
    answerSmall8 = document.getElementById("id_answerSmall8");
    wronganswer1Small8 = document.getElementById("id_wronganswer1Small8");
    wronganswer2Small8 = document.getElementById("id_wronganswer2Small8");
    wronganswer3Small8 = document.getElementById("id_wronganswer3Small8");
    wronganswer4Small8 = document.getElementById("id_wronganswer4Small8");
    wronganswer5Small8 = document.getElementById("id_wronganswer5Small8");
    wronganswer6Small8 = document.getElementById("id_wronganswer6Small8");
    abText = "ア、イ";
    acText = "ア、ウ";
    adText = "ア、エ";
    bcText = "イ、ウ";
    bdText = "イ、エ";
    cdText = "ウ、エ";  
    document.querySelector('.content8 p:nth-child(11)').style.display = "block";
    document.querySelector('.content8 p:nth-child(12)').style.display = "block";
    document.querySelector('.content8 p:nth-child(13)').style.display = "block";
    document.querySelector('.content8').style.overflow = "scroll";
    if(answerSmall8.value == "ア、イ"){
        wronganswer1Small8.value = cdText;
        wronganswer2Small8.value = acText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = bcText;
        wronganswer5Small8.value = bdText;
    }else if(answerSmall8.value == "イ、ウ"){
        wronganswer1Small8.value = cdText;
        wronganswer2Small8.value = acText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = bdText;
    }else if(answerSmall8.value == "ア、ウ"){
        wronganswer1Small8.value = cdText;
        wronganswer2Small8.value = bcText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = bdText;
    }else if(answerSmall8.value == "ア、エ"){
        wronganswer1Small8.value = cdText;
        wronganswer2Small8.value = bcText;
        wronganswer3Small8.value = acText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = bdText;
    }else if(answerSmall8.value == "イ、エ"){
        wronganswer1Small8.value = cdText;
        wronganswer2Small8.value = bcText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = acText;
    }else if(answerSmall8.value == "ウ、エ"){
        wronganswer1Small8.value = acText;
        wronganswer2Small8.value = bcText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = bdText;
    }else{
    }
  }
  function twoOfFive8() {
    answerSmall8 = document.getElementById("id_answerSmall8");
    wronganswer1Small8 = document.getElementById("id_wronganswer1Small8");
    wronganswer2Small8 = document.getElementById("id_wronganswer2Small8");
    wronganswer3Small8 = document.getElementById("id_wronganswer3Small8");
    wronganswer4Small8 = document.getElementById("id_wronganswer4Small8");
    wronganswer5Small8 = document.getElementById("id_wronganswer5Small8");
    wronganswer6Small8 = document.getElementById("id_wronganswer6Small8");
    wronganswer7Small8 = document.getElementById("id_wronganswer7Small8");
    wronganswer8Small8 = document.getElementById("id_wronganswer8Small8");
    wronganswer9Small8 = document.getElementById("id_wronganswer9Small8");
    abText = "A, B";
    acText = "A, C";
    adText = "A, D";
    bcText = "B, C";
    bdText = "B, D";
    cdText = "C, D";
    aeText = "A, E";
    beText = "B, E";
    ceText = "C, E";
    deText = "D, E";
    document.querySelector('.content8 p:nth-child(11)').style.display = "block";
    document.querySelector('.content8 p:nth-child(12)').style.display = "block";
    document.querySelector('.content8 p:nth-child(13)').style.display = "block";
    document.querySelector('.content8 p:nth-child(14)').style.display = "block";
    document.querySelector('.content8 p:nth-child(15)').style.display = "block";
    document.querySelector('.content8 p:nth-child(16)').style.display = "block";
    document.querySelector('.content8').style.overflow = "scroll";
    if(answerSmall8.value == "A, B"){
        wronganswer1Small8.value = cdText;
        wronganswer2Small8.value = acText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = bcText;
        wronganswer5Small8.value = bdText;
        wronganswer6Small8.value = aeText;
        wronganswer7Small8.value = beText;
        wronganswer8Small8.value = ceText;
        wronganswer9Small8.value = deText;
    }else if(answerSmall8.value == "B, C"){
        wronganswer1Small8.value = cdText;
        wronganswer2Small8.value = acText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = bdText;
        wronganswer6Small8.value = aeText;
        wronganswer7Small8.value = beText;
        wronganswer8Small8.value = ceText;
        wronganswer9Small8.value = deText;
    }else if(answerSmall8.value == "A, C"){
        wronganswer1Small8.value = cdText;
        wronganswer2Small8.value = bcText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = bdText;
        wronganswer6Small8.value = aeText;
        wronganswer7Small8.value = beText;
        wronganswer8Small8.value = ceText;
        wronganswer9Small8.value = deText;
    }else if(answerSmall8.value == "A, D"){
        wronganswer1Small8.value = cdText;
        wronganswer2Small8.value = bcText;
        wronganswer3Small8.value = acText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = bdText;
        wronganswer6Small8.value = aeText;
        wronganswer7Small8.value = beText;
        wronganswer8Small8.value = ceText;
        wronganswer9Small8.value = deText;
    }else if(answerSmall8.value == "B, D"){
        wronganswer1Small8.value = cdText;
        wronganswer2Small8.value = bcText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = acText;
        wronganswer6Small8.value = aeText;
        wronganswer7Small8.value = beText;
        wronganswer8Small8.value = ceText;
        wronganswer9Small8.value = deText;
    }else if(answerSmall8.value == "C, D"){
        wronganswer1Small8.value = acText;
        wronganswer2Small8.value = bcText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = bdText;
        wronganswer6Small8.value = aeText;
        wronganswer7Small8.value = beText;
        wronganswer8Small8.value = ceText;
        wronganswer9Small8.value = deText;
    }else if(answerSmall8.value == "B, E"){
        wronganswer1Small8.value = acText;
        wronganswer2Small8.value = bcText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = bdText;
        wronganswer6Small8.value = aeText;
        wronganswer7Small8.value = cdText;
        wronganswer8Small8.value = ceText;
        wronganswer9Small8.value = deText;
    }else if(answerSmall8.value == "C, E"){
        wronganswer1Small8.value = acText;
        wronganswer2Small8.value = bcText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = bdText;
        wronganswer6Small8.value = aeText;
        wronganswer7Small8.value = beText;
        wronganswer8Small8.value = cdText;
        wronganswer9Small8.value = deText;
    }else if(answerSmall8.value == "D, E"){
        wronganswer1Small8.value = acText;
        wronganswer2Small8.value = bcText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = bdText;
        wronganswer6Small8.value = aeText;
        wronganswer7Small8.value = beText;
        wronganswer8Small8.value = ceText;
        wronganswer9Small8.value = cdText;
    }else if(answerSmall8.value == "A, E"){
        wronganswer1Small8.value = acText;
        wronganswer2Small8.value = bcText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = bdText;
        wronganswer6Small8.value = cdText;
        wronganswer7Small8.value = beText;
        wronganswer8Small8.value = ceText;
        wronganswer9Small8.value = deText;
    }else{
    }
  }
  function twoOfFiveAiueo8() {
    answerSmall8 = document.getElementById("id_answerSmall8");
    wronganswer1Small8 = document.getElementById("id_wronganswer1Small8");
    wronganswer2Small8 = document.getElementById("id_wronganswer2Small8");
    wronganswer3Small8 = document.getElementById("id_wronganswer3Small8");
    wronganswer4Small8 = document.getElementById("id_wronganswer4Small8");
    wronganswer5Small8 = document.getElementById("id_wronganswer5Small8");
    wronganswer6Small8 = document.getElementById("id_wronganswer6Small8");
    wronganswer7Small8 = document.getElementById("id_wronganswer7Small8");
    wronganswer8Small8 = document.getElementById("id_wronganswer8Small8");
    wronganswer9Small8 = document.getElementById("id_wronganswer9Small8");  
    abText = "ア、イ";
    acText = "ア、ウ";
    adText = "ア、エ";
    bcText = "イ、ウ";
    bdText = "イ、エ";
    cdText = "ウ、エ";
    aeText = "ア、オ";
    beText = "イ、オ";
    ceText = "ウ、オ";
    deText = "エ、オ";
    document.querySelector('.content8 p:nth-child(11)').style.display = "block";
    document.querySelector('.content8 p:nth-child(12)').style.display = "block";
    document.querySelector('.content8 p:nth-child(13)').style.display = "block";
    document.querySelector('.content8 p:nth-child(14)').style.display = "block";
    document.querySelector('.content8 p:nth-child(15)').style.display = "block";
    document.querySelector('.content8 p:nth-child(16)').style.display = "block";
    document.querySelector('.content8').style.overflow = "scroll";
    if(answerSmall8.value == "ア、イ"){
        wronganswer1Small8.value = cdText;
        wronganswer2Small8.value = acText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = bcText;
        wronganswer5Small8.value = bdText;
        wronganswer6Small8.value = aeText;
        wronganswer7Small8.value = beText;
        wronganswer8Small8.value = ceText;
        wronganswer9Small8.value = deText;
    }else if(answerSmall8.value == "イ、ウ"){
        wronganswer1Small8.value = cdText;
        wronganswer2Small8.value = acText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = bdText;
        wronganswer6Small8.value = aeText;
        wronganswer7Small8.value = beText;
        wronganswer8Small8.value = ceText;
        wronganswer9Small8.value = deText;
    }else if(answerSmall8.value == "ア、ウ"){
        wronganswer1Small8.value = cdText;
        wronganswer2Small8.value = bcText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = bdText;
        wronganswer6Small8.value = aeText;
        wronganswer7Small8.value = beText;
        wronganswer8Small8.value = ceText;
        wronganswer9Small8.value = deText;
    }else if(answerSmall8.value == "ア、エ"){
        wronganswer1Small8.value = cdText;
        wronganswer2Small8.value = bcText;
        wronganswer3Small8.value = acText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = bdText;
        wronganswer6Small8.value = aeText;
        wronganswer7Small8.value = beText;
        wronganswer8Small8.value = ceText;
        wronganswer9Small8.value = deText;
    }else if(answerSmall8.value == "イ、エ"){
        wronganswer1Small8.value = cdText;
        wronganswer2Small8.value = bcText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = acText;
        wronganswer6Small8.value = aeText;
        wronganswer7Small8.value = beText;
        wronganswer8Small8.value = ceText;
        wronganswer9Small8.value = deText;
    }else if(answerSmall8.value == "ウ、エ"){
        wronganswer1Small8.value = acText;
        wronganswer2Small8.value = bcText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = bdText;
        wronganswer6Small8.value = aeText;
        wronganswer7Small8.value = beText;
        wronganswer8Small8.value = ceText;
        wronganswer9Small8.value = deText;
    }else if(answerSmall8.value == "イ、オ"){
        wronganswer1Small8.value = acText;
        wronganswer2Small8.value = bcText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = bdText;
        wronganswer6Small8.value = aeText;
        wronganswer7Small8.value = cdText;
        wronganswer8Small8.value = ceText;
        wronganswer9Small8.value = deText;
    }else if(answerSmall8.value == "ウ、オ"){
        wronganswer1Small8.value = acText;
        wronganswer2Small8.value = bcText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = bdText;
        wronganswer6Small8.value = aeText;
        wronganswer7Small8.value = beText;
        wronganswer8Small8.value = cdText;
        wronganswer9Small8.value = deText;
    }else if(answerSmall8.value == "エ、オ"){
        wronganswer1Small8.value = acText;
        wronganswer2Small8.value = bcText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = bdText;
        wronganswer6Small8.value = aeText;
        wronganswer7Small8.value = beText;
        wronganswer8Small8.value = ceText;
        wronganswer9Small8.value = cdText;
    }else if(answerSmall8.value == "ア、オ"){
        wronganswer1Small8.value = acText;
        wronganswer2Small8.value = bcText;
        wronganswer3Small8.value = adText;
        wronganswer4Small8.value = abText;
        wronganswer5Small8.value = bdText;
        wronganswer6Small8.value = cdText;
        wronganswer7Small8.value = beText;
        wronganswer8Small8.value = ceText;
        wronganswer9Small8.value = deText;
    }else{
    }
  }
  function threeOfFive8() {
    answerSmall8 = document.getElementById("id_answerSmall8");
    wronganswer1Small8 = document.getElementById("id_wronganswer1Small8");
    wronganswer2Small8 = document.getElementById("id_wronganswer2Small8");
    wronganswer3Small8 = document.getElementById("id_wronganswer3Small8");
    wronganswer4Small8 = document.getElementById("id_wronganswer4Small8");
    wronganswer5Small8 = document.getElementById("id_wronganswer5Small8");
    wronganswer6Small8 = document.getElementById("id_wronganswer6Small8");
    wronganswer7Small8 = document.getElementById("id_wronganswer7Small8");
    wronganswer8Small8 = document.getElementById("id_wronganswer8Small8");
    wronganswer9Small8 = document.getElementById("id_wronganswer9Small8");  
    abcText = "A, B, C";
    abdText = "A, B, D";
    abeText = "A, B, E";
    acdText = "A, C, D";
    aceText = "A, C, E";
    adeText = "A, D, E";
    bcdText = "B, C, D";
    bceText = "B, C, E";
    bdeText = "B, D, E";
    cdeText = "C, D, E";
    document.querySelector('.content8 p:nth-child(11)').style.display = "block";
    document.querySelector('.content8 p:nth-child(12)').style.display = "block";
    document.querySelector('.content8 p:nth-child(13)').style.display = "block";
    document.querySelector('.content8 p:nth-child(14)').style.display = "block";
    document.querySelector('.content8 p:nth-child(15)').style.display = "block";
    document.querySelector('.content8 p:nth-child(16)').style.display = "block";
    document.querySelector('.content8').style.overflow = "scroll";
    if(answerSmall8.value == "A, B, C"){
        wronganswer1Small8.value = abdText;
        wronganswer2Small8.value = abeText;
        wronganswer3Small8.value = acdText;
        wronganswer4Small8.value = aceText;
        wronganswer5Small8.value = adeText;
        wronganswer6Small8.value = bcdText;
        wronganswer7Small8.value = bceText;
        wronganswer8Small8.value = bdeText;
        wronganswer9Small8.value = cdeText;
    }else if(answerSmall8.value == "A, B, D"){
        wronganswer1Small8.value = abcText;
        wronganswer2Small8.value = abeText;
        wronganswer3Small8.value = acdText;
        wronganswer4Small8.value = aceText;
        wronganswer5Small8.value = adeText;
        wronganswer6Small8.value = bcdText;
        wronganswer7Small8.value = bceText;
        wronganswer8Small8.value = bdeText;
        wronganswer9Small8.value = cdeText;
    }else if(answerSmall8.value == "A, B, E"){
        wronganswer1Small8.value = abcText;
        wronganswer2Small8.value = abdText;
        wronganswer3Small8.value = acdText;
        wronganswer4Small8.value = aceText;
        wronganswer5Small8.value = adeText;
        wronganswer6Small8.value = bcdText;
        wronganswer7Small8.value = bceText;
        wronganswer8Small8.value = bdeText;
        wronganswer9Small8.value = cdeText;
    }else if(answerSmall8.value == "A, C, D"){
        wronganswer1Small8.value = abcText;
        wronganswer2Small8.value = abdText;
        wronganswer3Small8.value = abeText;
        wronganswer4Small8.value = aceText;
        wronganswer5Small8.value = adeText;
        wronganswer6Small8.value = bcdText;
        wronganswer7Small8.value = bceText;
        wronganswer8Small8.value = bdeText;
        wronganswer9Small8.value = cdeText;
    }else if(answerSmall8.value == "A, C, E"){
        wronganswer1Small8.value = abcText;
        wronganswer2Small8.value = abdText;
        wronganswer3Small8.value = abeText;
        wronganswer4Small8.value = acdText;
        wronganswer5Small8.value = adeText;
        wronganswer6Small8.value = bcdText;
        wronganswer7Small8.value = bceText;
        wronganswer8Small8.value = bdeText;
        wronganswer9Small8.value = cdeText;
    }else if(answerSmall8.value == "B, C, D"){
        wronganswer1Small8.value = abcText;
        wronganswer2Small8.value = abdText;
        wronganswer3Small8.value = abeText;
        wronganswer4Small8.value = acdText;
        wronganswer5Small8.value = aceText;
        wronganswer6Small8.value = adeText;
        wronganswer7Small8.value = bceText;
        wronganswer8Small8.value = bdeText;
        wronganswer9Small8.value = cdeText;
    }else if(answerSmall8.value == "B, C, E"){
        wronganswer1Small8.value = abcText;
        wronganswer2Small8.value = abdText;
        wronganswer3Small8.value = abeText;
        wronganswer4Small8.value = acdText;
        wronganswer5Small8.value = aceText;
        wronganswer6Small8.value = adeText;
        wronganswer7Small8.value = bcdText;
        wronganswer8Small8.value = bdeText;
        wronganswer9Small8.value = cdeText;
    }else if(answerSmall8.value == "B, D, E"){
        wronganswer1Small8.value = abcText;
        wronganswer2Small8.value = abdText;
        wronganswer3Small8.value = abeText;
        wronganswer4Small8.value = acdText;
        wronganswer5Small8.value = aceText;
        wronganswer6Small8.value = adeText;
        wronganswer7Small8.value = bcdText;
        wronganswer8Small8.value = bceText;
        wronganswer9Small8.value = cdeText;
    }else if(answerSmall8.value == "C, D, E"){
        wronganswer1Small8.value = abcText;
        wronganswer2Small8.value = abdText;
        wronganswer3Small8.value = abeText;
        wronganswer4Small8.value = acdText;
        wronganswer5Small8.value = aceText;
        wronganswer6Small8.value = adeText;
        wronganswer7Small8.value = bcdText;
        wronganswer8Small8.value = bceText;
        wronganswer9Small8.value = bdeText;
    }else if(answerSmall8.value == "A, D, E"){
        wronganswer1Small8.value = abcText;
        wronganswer2Small8.value = abdText;
        wronganswer3Small8.value = abeText;
        wronganswer4Small8.value = acdText;
        wronganswer5Small8.value = aceText;
        wronganswer6Small8.value = bcdText;
        wronganswer7Small8.value = bceText;
        wronganswer8Small8.value = bdeText;
        wronganswer9Small8.value = cdeText;
    }else{
    }
  }
  function threeOfFiveAiueo8() {
    answerSmall8 = document.getElementById("id_answerSmall8");
    wronganswer1Small8 = document.getElementById("id_wronganswer1Small8");
    wronganswer2Small8 = document.getElementById("id_wronganswer2Small8");
    wronganswer3Small8 = document.getElementById("id_wronganswer3Small8");
    wronganswer4Small8 = document.getElementById("id_wronganswer4Small8");
    wronganswer5Small8 = document.getElementById("id_wronganswer5Small8");
    wronganswer6Small8 = document.getElementById("id_wronganswer6Small8");
    wronganswer7Small8 = document.getElementById("id_wronganswer7Small8");
    wronganswer8Small8 = document.getElementById("id_wronganswer8Small8");
    wronganswer9Small8 = document.getElementById("id_wronganswer9Small8");   
    abcText = "ア、イ、ウ";
    abdText = "ア、イ、エ";
    abeText = "ア、イ、オ";
    acdText = "ア、ウ、エ";
    aceText = "ア、ウ、オ";
    adeText = "ア、エ、オ";
    bcdText = "イ、ウ、エ";
    bceText = "イ、ウ、オ";
    bdeText = "イ、エ、オ";
    cdeText = "ウ、エ、オ";
    document.querySelector('.content8 p:nth-child(11)').style.display = "block";
    document.querySelector('.content8 p:nth-child(12)').style.display = "block";
    document.querySelector('.content8 p:nth-child(13)').style.display = "block";
    document.querySelector('.content8 p:nth-child(14)').style.display = "block";
    document.querySelector('.content8 p:nth-child(15)').style.display = "block";
    document.querySelector('.content8 p:nth-child(16)').style.display = "block";
    document.querySelector('.content8').style.overflow = "scroll";
    if(answerSmall8.value == "ア、イ、ウ"){
        wronganswer1Small8.value = abdText;
        wronganswer2Small8.value = abeText;
        wronganswer3Small8.value = acdText;
        wronganswer4Small8.value = aceText;
        wronganswer5Small8.value = adeText;
        wronganswer6Small8.value = bcdText;
        wronganswer7Small8.value = bceText;
        wronganswer8Small8.value = bdeText;
        wronganswer9Small8.value = cdeText;
    }else if(answerSmall8.value == "ア、イ、エ"){
        wronganswer1Small8.value = abcText;
        wronganswer2Small8.value = abeText;
        wronganswer3Small8.value = acdText;
        wronganswer4Small8.value = aceText;
        wronganswer5Small8.value = adeText;
        wronganswer6Small8.value = bcdText;
        wronganswer7Small8.value = bceText;
        wronganswer8Small8.value = bdeText;
        wronganswer9Small8.value = cdeText;
    }else if(answerSmall8.value == "ア、イ、オ"){
        wronganswer1Small8.value = abcText;
        wronganswer2Small8.value = abdText;
        wronganswer3Small8.value = acdText;
        wronganswer4Small8.value = aceText;
        wronganswer5Small8.value = adeText;
        wronganswer6Small8.value = bcdText;
        wronganswer7Small8.value = bceText;
        wronganswer8Small8.value = bdeText;
        wronganswer9Small8.value = cdeText;
    }else if(answerSmall8.value == "ア、ウ、エ"){
        wronganswer1Small8.value = abcText;
        wronganswer2Small8.value = abdText;
        wronganswer3Small8.value = abeText;
        wronganswer4Small8.value = aceText;
        wronganswer5Small8.value = adeText;
        wronganswer6Small8.value = bcdText;
        wronganswer7Small8.value = bceText;
        wronganswer8Small8.value = bdeText;
        wronganswer9Small8.value = cdeText;
    }else if(answerSmall8.value == "ア、ウ、オ"){
        wronganswer1Small8.value = abcText;
        wronganswer2Small8.value = abdText;
        wronganswer3Small8.value = abeText;
        wronganswer4Small8.value = acdText;
        wronganswer5Small8.value = adeText;
        wronganswer6Small8.value = bcdText;
        wronganswer7Small8.value = bceText;
        wronganswer8Small8.value = bdeText;
        wronganswer9Small8.value = cdeText;
    }else if(answerSmall8.value == "イ、ウ、エ"){
        wronganswer1Small8.value = abcText;
        wronganswer2Small8.value = abdText;
        wronganswer3Small8.value = abeText;
        wronganswer4Small8.value = acdText;
        wronganswer5Small8.value = aceText;
        wronganswer6Small8.value = adeText;
        wronganswer7Small8.value = bceText;
        wronganswer8Small8.value = bdeText;
        wronganswer9Small8.value = cdeText;
    }else if(answerSmall8.value == "イ、ウ、オ"){
        wronganswer1Small8.value = abcText;
        wronganswer2Small8.value = abdText;
        wronganswer3Small8.value = abeText;
        wronganswer4Small8.value = acdText;
        wronganswer5Small8.value = aceText;
        wronganswer6Small8.value = adeText;
        wronganswer7Small8.value = bcdText;
        wronganswer8Small8.value = bdeText;
        wronganswer9Small8.value = cdeText;
    }else if(answerSmall8.value == "イ、エ、オ"){
        wronganswer1Small8.value = abcText;
        wronganswer2Small8.value = abdText;
        wronganswer3Small8.value = abeText;
        wronganswer4Small8.value = acdText;
        wronganswer5Small8.value = aceText;
        wronganswer6Small8.value = adeText;
        wronganswer7Small8.value = bcdText;
        wronganswer8Small8.value = bceText;
        wronganswer9Small8.value = cdeText;
    }else if(answerSmall8.value == "ウ、エ、オ"){
        wronganswer1Small8.value = abcText;
        wronganswer2Small8.value = abdText;
        wronganswer3Small8.value = abeText;
        wronganswer4Small8.value = acdText;
        wronganswer5Small8.value = aceText;
        wronganswer6Small8.value = adeText;
        wronganswer7Small8.value = bcdText;
        wronganswer8Small8.value = bceText;
        wronganswer9Small8.value = bdeText;
    }else if(answerSmall8.value == "ア、エ、オ"){
        wronganswer1Small8.value = abcText;
        wronganswer2Small8.value = abdText;
        wronganswer3Small8.value = abeText;
        wronganswer4Small8.value = acdText;
        wronganswer5Small8.value = aceText;
        wronganswer6Small8.value = bcdText;
        wronganswer7Small8.value = bceText;
        wronganswer8Small8.value = bdeText;
        wronganswer9Small8.value = cdeText;
    }else{
    }
  }
  function aiue8() {
    answerSmall8 = document.getElementById("id_answerSmall8");
    wronganswer1Small8 = document.getElementById("id_wronganswer1Small8");
    wronganswer2Small8 = document.getElementById("id_wronganswer2Small8");
    wronganswer3Small8 = document.getElementById("id_wronganswer3Small8");
    aText = "ア";
    iText = "イ";
    uText = "ウ";
    eText = "エ";
    if(answerSmall8.value == "ア"){
        wronganswer1Small8.value = iText;
        wronganswer2Small8.value = uText;
        wronganswer3Small8.value = eText;    
    }else if(answerSmall8.value == "イ"){
        wronganswer1Small8.value = aText;
        wronganswer2Small8.value = uText;
        wronganswer3Small8.value = eText; 
    }else if(answerSmall8.value == "ウ"){
        wronganswer1Small8.value = aText;
        wronganswer2Small8.value = iText;
        wronganswer3Small8.value = eText;       
    }else if(answerSmall8.value == "エ"){
        wronganswer1Small8.value = aText;
        wronganswer2Small8.value = iText;
        wronganswer3Small8.value = uText;     
    }else{
    }
  }
  function abcd8() {
    answerSmall8 = document.getElementById("id_answerSmall8");
    wronganswer1Small8 = document.getElementById("id_wronganswer1Small8");
    wronganswer2Small8 = document.getElementById("id_wronganswer2Small8");
    wronganswer3Small8 = document.getElementById("id_wronganswer3Small8");  
    aText = "A";
    bText = "B";
    cText = "C";
    dText = "D";
    if(answerSmall8.value == "A"){
        wronganswer1Small8.value = bText;
        wronganswer2Small8.value = cText;
        wronganswer3Small8.value = dText; 
    }else if(answerSmall8.value == "B"){
        wronganswer1Small8.value = aText;
        wronganswer2Small8.value = cText;
        wronganswer3Small8.value = dText;   
    }else if(answerSmall8.value == "C"){
        wronganswer1Small8.value = aText;
        wronganswer2Small8.value = bText;
        wronganswer3Small8.value = dText;  
    }else if(answerSmall8.value == "D"){
        wronganswer1Small8.value = aText;
        wronganswer2Small8.value = bText;
        wronganswer3Small8.value = cText; 
    }else{
    }
  }

  /*7/17 Small9*/
  function twoOfFour9() {
  answerSmall9 = document.getElementById("id_answerSmall9");
    wronganswer1Small9 = document.getElementById("id_wronganswer1Small9");
    wronganswer2Small9 = document.getElementById("id_wronganswer2Small9");
    wronganswer3Small9 = document.getElementById("id_wronganswer3Small9");
    wronganswer4Small9 = document.getElementById("id_wronganswer4Small9");
    wronganswer5Small9 = document.getElementById("id_wronganswer5Small9");
    wronganswer6Small9 = document.getElementById("id_wronganswer6Small9");
    abText = "A, B";
    acText = "A, C";
    adText = "A, D";
    bcText = "B, C";
    bdText = "B, D";
    cdText = "C, D";  
    document.querySelector('.content9 p:nth-child(11)').style.display = "block";
    document.querySelector('.content9 p:nth-child(12)').style.display = "block";
    document.querySelector('.content9 p:nth-child(13)').style.display = "block";
    document.querySelector('.content9').style.overflow = "scroll";
    if(answerSmall9.value == "A, B"){
        wronganswer1Small9.value = cdText;
        wronganswer2Small9.value = acText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = bcText;
        wronganswer5Small9.value = bdText;
    }else if(answerSmall9.value == "B, C"){
        wronganswer1Small9.value = cdText;
        wronganswer2Small9.value = acText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = bdText;
    }else if(answerSmall9.value == "A, C"){
        wronganswer1Small9.value = cdText;
        wronganswer2Small9.value = bcText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = bdText;
    }else if(answerSmall9.value == "A, D"){
        wronganswer1Small9.value = cdText;
        wronganswer2Small9.value = bcText;
        wronganswer3Small9.value = acText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = bdText;
    }else if(answerSmall9.value == "B, D"){
        wronganswer1Small9.value = cdText;
        wronganswer2Small9.value = bcText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = acText;
    }else if(answerSmall9.value == "C, D"){
        wronganswer1Small9.value = acText;
        wronganswer2Small9.value = bcText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = bdText;
    }else{
    }
}
  function twoOfFourAiue9() {
    answerSmall9 = document.getElementById("id_answerSmall9");
    wronganswer1Small9 = document.getElementById("id_wronganswer1Small9");
    wronganswer2Small9 = document.getElementById("id_wronganswer2Small9");
    wronganswer3Small9 = document.getElementById("id_wronganswer3Small9");
    wronganswer4Small9 = document.getElementById("id_wronganswer4Small9");
    wronganswer5Small9 = document.getElementById("id_wronganswer5Small9");
    wronganswer6Small9 = document.getElementById("id_wronganswer6Small9");
    abText = "ア、イ";
    acText = "ア、ウ";
    adText = "ア、エ";
    bcText = "イ、ウ";
    bdText = "イ、エ";
    cdText = "ウ、エ";  
    document.querySelector('.content9 p:nth-child(11)').style.display = "block";
    document.querySelector('.content9 p:nth-child(12)').style.display = "block";
    document.querySelector('.content9 p:nth-child(13)').style.display = "block";
    document.querySelector('.content9').style.overflow = "scroll";
    if(answerSmall9.value == "ア、イ"){
        wronganswer1Small9.value = cdText;
        wronganswer2Small9.value = acText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = bcText;
        wronganswer5Small9.value = bdText;
    }else if(answerSmall9.value == "イ、ウ"){
        wronganswer1Small9.value = cdText;
        wronganswer2Small9.value = acText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = bdText;
    }else if(answerSmall9.value == "ア、ウ"){
        wronganswer1Small9.value = cdText;
        wronganswer2Small9.value = bcText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = bdText;
    }else if(answerSmall9.value == "ア、エ"){
        wronganswer1Small9.value = cdText;
        wronganswer2Small9.value = bcText;
        wronganswer3Small9.value = acText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = bdText;
    }else if(answerSmall9.value == "イ、エ"){
        wronganswer1Small9.value = cdText;
        wronganswer2Small9.value = bcText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = acText;
    }else if(answerSmall9.value == "ウ、エ"){
        wronganswer1Small9.value = acText;
        wronganswer2Small9.value = bcText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = bdText;
    }else{
    }
  }
  function twoOfFive9() {
    answerSmall9 = document.getElementById("id_answerSmall9");
    wronganswer1Small9 = document.getElementById("id_wronganswer1Small9");
    wronganswer2Small9 = document.getElementById("id_wronganswer2Small9");
    wronganswer3Small9 = document.getElementById("id_wronganswer3Small9");
    wronganswer4Small9 = document.getElementById("id_wronganswer4Small9");
    wronganswer5Small9 = document.getElementById("id_wronganswer5Small9");
    wronganswer6Small9 = document.getElementById("id_wronganswer6Small9");
    wronganswer7Small9 = document.getElementById("id_wronganswer7Small9");
    wronganswer8Small9 = document.getElementById("id_wronganswer8Small9");
    wronganswer9Small9 = document.getElementById("id_wronganswer9Small9");
    abText = "A, B";
    acText = "A, C";
    adText = "A, D";
    bcText = "B, C";
    bdText = "B, D";
    cdText = "C, D";
    aeText = "A, E";
    beText = "B, E";
    ceText = "C, E";
    deText = "D, E";
    document.querySelector('.content9 p:nth-child(11)').style.display = "block";
    document.querySelector('.content9 p:nth-child(12)').style.display = "block";
    document.querySelector('.content9 p:nth-child(13)').style.display = "block";
    document.querySelector('.content9 p:nth-child(14)').style.display = "block";
    document.querySelector('.content9 p:nth-child(15)').style.display = "block";
    document.querySelector('.content9 p:nth-child(16)').style.display = "block";
    document.querySelector('.content9').style.overflow = "scroll";
    if(answerSmall9.value == "A, B"){
        wronganswer1Small9.value = cdText;
        wronganswer2Small9.value = acText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = bcText;
        wronganswer5Small9.value = bdText;
        wronganswer6Small9.value = aeText;
        wronganswer7Small9.value = beText;
        wronganswer8Small9.value = ceText;
        wronganswer9Small9.value = deText;
    }else if(answerSmall9.value == "B, C"){
        wronganswer1Small9.value = cdText;
        wronganswer2Small9.value = acText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = bdText;
        wronganswer6Small9.value = aeText;
        wronganswer7Small9.value = beText;
        wronganswer8Small9.value = ceText;
        wronganswer9Small9.value = deText;
    }else if(answerSmall9.value == "A, C"){
        wronganswer1Small9.value = cdText;
        wronganswer2Small9.value = bcText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = bdText;
        wronganswer6Small9.value = aeText;
        wronganswer7Small9.value = beText;
        wronganswer8Small9.value = ceText;
        wronganswer9Small9.value = deText;
    }else if(answerSmall9.value == "A, D"){
        wronganswer1Small9.value = cdText;
        wronganswer2Small9.value = bcText;
        wronganswer3Small9.value = acText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = bdText;
        wronganswer6Small9.value = aeText;
        wronganswer7Small9.value = beText;
        wronganswer8Small9.value = ceText;
        wronganswer9Small9.value = deText;
    }else if(answerSmall9.value == "B, D"){
        wronganswer1Small9.value = cdText;
        wronganswer2Small9.value = bcText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = acText;
        wronganswer6Small9.value = aeText;
        wronganswer7Small9.value = beText;
        wronganswer8Small9.value = ceText;
        wronganswer9Small9.value = deText;
    }else if(answerSmall9.value == "C, D"){
        wronganswer1Small9.value = acText;
        wronganswer2Small9.value = bcText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = bdText;
        wronganswer6Small9.value = aeText;
        wronganswer7Small9.value = beText;
        wronganswer8Small9.value = ceText;
        wronganswer9Small9.value = deText;
    }else if(answerSmall9.value == "B, E"){
        wronganswer1Small9.value = acText;
        wronganswer2Small9.value = bcText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = bdText;
        wronganswer6Small9.value = aeText;
        wronganswer7Small9.value = cdText;
        wronganswer8Small9.value = ceText;
        wronganswer9Small9.value = deText;
    }else if(answerSmall9.value == "C, E"){
        wronganswer1Small9.value = acText;
        wronganswer2Small9.value = bcText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = bdText;
        wronganswer6Small9.value = aeText;
        wronganswer7Small9.value = beText;
        wronganswer8Small9.value = cdText;
        wronganswer9Small9.value = deText;
    }else if(answerSmall9.value == "D, E"){
        wronganswer1Small9.value = acText;
        wronganswer2Small9.value = bcText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = bdText;
        wronganswer6Small9.value = aeText;
        wronganswer7Small9.value = beText;
        wronganswer8Small9.value = ceText;
        wronganswer9Small9.value = cdText;
    }else if(answerSmall9.value == "A, E"){
        wronganswer1Small9.value = acText;
        wronganswer2Small9.value = bcText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = bdText;
        wronganswer6Small9.value = cdText;
        wronganswer7Small9.value = beText;
        wronganswer8Small9.value = ceText;
        wronganswer9Small9.value = deText;
    }else{
    }
  }
  function twoOfFiveAiueo9() {
    answerSmall9 = document.getElementById("id_answerSmall9");
    wronganswer1Small9 = document.getElementById("id_wronganswer1Small9");
    wronganswer2Small9 = document.getElementById("id_wronganswer2Small9");
    wronganswer3Small9 = document.getElementById("id_wronganswer3Small9");
    wronganswer4Small9 = document.getElementById("id_wronganswer4Small9");
    wronganswer5Small9 = document.getElementById("id_wronganswer5Small9");
    wronganswer6Small9 = document.getElementById("id_wronganswer6Small9");
    wronganswer7Small9 = document.getElementById("id_wronganswer7Small9");
    wronganswer8Small9 = document.getElementById("id_wronganswer8Small9");
    wronganswer9Small9 = document.getElementById("id_wronganswer9Small9");  
    abText = "ア、イ";
    acText = "ア、ウ";
    adText = "ア、エ";
    bcText = "イ、ウ";
    bdText = "イ、エ";
    cdText = "ウ、エ";
    aeText = "ア、オ";
    beText = "イ、オ";
    ceText = "ウ、オ";
    deText = "エ、オ";
    document.querySelector('.content9 p:nth-child(11)').style.display = "block";
    document.querySelector('.content9 p:nth-child(12)').style.display = "block";
    document.querySelector('.content9 p:nth-child(13)').style.display = "block";
    document.querySelector('.content9 p:nth-child(14)').style.display = "block";
    document.querySelector('.content9 p:nth-child(15)').style.display = "block";
    document.querySelector('.content9 p:nth-child(16)').style.display = "block";
    document.querySelector('.content9').style.overflow = "scroll";
    if(answerSmall9.value == "ア、イ"){
        wronganswer1Small9.value = cdText;
        wronganswer2Small9.value = acText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = bcText;
        wronganswer5Small9.value = bdText;
        wronganswer6Small9.value = aeText;
        wronganswer7Small9.value = beText;
        wronganswer8Small9.value = ceText;
        wronganswer9Small9.value = deText;
    }else if(answerSmall9.value == "イ、ウ"){
        wronganswer1Small9.value = cdText;
        wronganswer2Small9.value = acText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = bdText;
        wronganswer6Small9.value = aeText;
        wronganswer7Small9.value = beText;
        wronganswer8Small9.value = ceText;
        wronganswer9Small9.value = deText;
    }else if(answerSmall9.value == "ア、ウ"){
        wronganswer1Small9.value = cdText;
        wronganswer2Small9.value = bcText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = bdText;
        wronganswer6Small9.value = aeText;
        wronganswer7Small9.value = beText;
        wronganswer8Small9.value = ceText;
        wronganswer9Small9.value = deText;
    }else if(answerSmall9.value == "ア、エ"){
        wronganswer1Small9.value = cdText;
        wronganswer2Small9.value = bcText;
        wronganswer3Small9.value = acText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = bdText;
        wronganswer6Small9.value = aeText;
        wronganswer7Small9.value = beText;
        wronganswer8Small9.value = ceText;
        wronganswer9Small9.value = deText;
    }else if(answerSmall9.value == "イ、エ"){
        wronganswer1Small9.value = cdText;
        wronganswer2Small9.value = bcText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = acText;
        wronganswer6Small9.value = aeText;
        wronganswer7Small9.value = beText;
        wronganswer8Small9.value = ceText;
        wronganswer9Small9.value = deText;
    }else if(answerSmall9.value == "ウ、エ"){
        wronganswer1Small9.value = acText;
        wronganswer2Small9.value = bcText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = bdText;
        wronganswer6Small9.value = aeText;
        wronganswer7Small9.value = beText;
        wronganswer8Small9.value = ceText;
        wronganswer9Small9.value = deText;
    }else if(answerSmall9.value == "イ、オ"){
        wronganswer1Small9.value = acText;
        wronganswer2Small9.value = bcText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = bdText;
        wronganswer6Small9.value = aeText;
        wronganswer7Small9.value = cdText;
        wronganswer8Small9.value = ceText;
        wronganswer9Small9.value = deText;
    }else if(answerSmall9.value == "ウ、オ"){
        wronganswer1Small9.value = acText;
        wronganswer2Small9.value = bcText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = bdText;
        wronganswer6Small9.value = aeText;
        wronganswer7Small9.value = beText;
        wronganswer8Small9.value = cdText;
        wronganswer9Small9.value = deText;
    }else if(answerSmall9.value == "エ、オ"){
        wronganswer1Small9.value = acText;
        wronganswer2Small9.value = bcText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = bdText;
        wronganswer6Small9.value = aeText;
        wronganswer7Small9.value = beText;
        wronganswer8Small9.value = ceText;
        wronganswer9Small9.value = cdText;
    }else if(answerSmall9.value == "ア、オ"){
        wronganswer1Small9.value = acText;
        wronganswer2Small9.value = bcText;
        wronganswer3Small9.value = adText;
        wronganswer4Small9.value = abText;
        wronganswer5Small9.value = bdText;
        wronganswer6Small9.value = cdText;
        wronganswer7Small9.value = beText;
        wronganswer8Small9.value = ceText;
        wronganswer9Small9.value = deText;
    }else{
    }
  }
  function threeOfFive9() {
    answerSmall9 = document.getElementById("id_answerSmall9");
    wronganswer1Small9 = document.getElementById("id_wronganswer1Small9");
    wronganswer2Small9 = document.getElementById("id_wronganswer2Small9");
    wronganswer3Small9 = document.getElementById("id_wronganswer3Small9");
    wronganswer4Small9 = document.getElementById("id_wronganswer4Small9");
    wronganswer5Small9 = document.getElementById("id_wronganswer5Small9");
    wronganswer6Small9 = document.getElementById("id_wronganswer6Small9");
    wronganswer7Small9 = document.getElementById("id_wronganswer7Small9");
    wronganswer8Small9 = document.getElementById("id_wronganswer8Small9");
    wronganswer9Small9 = document.getElementById("id_wronganswer9Small9");  
    abcText = "A, B, C";
    abdText = "A, B, D";
    abeText = "A, B, E";
    acdText = "A, C, D";
    aceText = "A, C, E";
    adeText = "A, D, E";
    bcdText = "B, C, D";
    bceText = "B, C, E";
    bdeText = "B, D, E";
    cdeText = "C, D, E";
    document.querySelector('.content9 p:nth-child(11)').style.display = "block";
    document.querySelector('.content9 p:nth-child(12)').style.display = "block";
    document.querySelector('.content9 p:nth-child(13)').style.display = "block";
    document.querySelector('.content9 p:nth-child(14)').style.display = "block";
    document.querySelector('.content9 p:nth-child(15)').style.display = "block";
    document.querySelector('.content9 p:nth-child(16)').style.display = "block";
    document.querySelector('.content9').style.overflow = "scroll";
    if(answerSmall9.value == "A, B, C"){
        wronganswer1Small9.value = abdText;
        wronganswer2Small9.value = abeText;
        wronganswer3Small9.value = acdText;
        wronganswer4Small9.value = aceText;
        wronganswer5Small9.value = adeText;
        wronganswer6Small9.value = bcdText;
        wronganswer7Small9.value = bceText;
        wronganswer8Small9.value = bdeText;
        wronganswer9Small9.value = cdeText;
    }else if(answerSmall9.value == "A, B, D"){
        wronganswer1Small9.value = abcText;
        wronganswer2Small9.value = abeText;
        wronganswer3Small9.value = acdText;
        wronganswer4Small9.value = aceText;
        wronganswer5Small9.value = adeText;
        wronganswer6Small9.value = bcdText;
        wronganswer7Small9.value = bceText;
        wronganswer8Small9.value = bdeText;
        wronganswer9Small9.value = cdeText;
    }else if(answerSmall9.value == "A, B, E"){
        wronganswer1Small9.value = abcText;
        wronganswer2Small9.value = abdText;
        wronganswer3Small9.value = acdText;
        wronganswer4Small9.value = aceText;
        wronganswer5Small9.value = adeText;
        wronganswer6Small9.value = bcdText;
        wronganswer7Small9.value = bceText;
        wronganswer8Small9.value = bdeText;
        wronganswer9Small9.value = cdeText;
    }else if(answerSmall9.value == "A, C, D"){
        wronganswer1Small9.value = abcText;
        wronganswer2Small9.value = abdText;
        wronganswer3Small9.value = abeText;
        wronganswer4Small9.value = aceText;
        wronganswer5Small9.value = adeText;
        wronganswer6Small9.value = bcdText;
        wronganswer7Small9.value = bceText;
        wronganswer8Small9.value = bdeText;
        wronganswer9Small9.value = cdeText;
    }else if(answerSmall9.value == "A, C, E"){
        wronganswer1Small9.value = abcText;
        wronganswer2Small9.value = abdText;
        wronganswer3Small9.value = abeText;
        wronganswer4Small9.value = acdText;
        wronganswer5Small9.value = adeText;
        wronganswer6Small9.value = bcdText;
        wronganswer7Small9.value = bceText;
        wronganswer8Small9.value = bdeText;
        wronganswer9Small9.value = cdeText;
    }else if(answerSmall9.value == "B, C, D"){
        wronganswer1Small9.value = abcText;
        wronganswer2Small9.value = abdText;
        wronganswer3Small9.value = abeText;
        wronganswer4Small9.value = acdText;
        wronganswer5Small9.value = aceText;
        wronganswer6Small9.value = adeText;
        wronganswer7Small9.value = bceText;
        wronganswer8Small9.value = bdeText;
        wronganswer9Small9.value = cdeText;
    }else if(answerSmall9.value == "B, C, E"){
        wronganswer1Small9.value = abcText;
        wronganswer2Small9.value = abdText;
        wronganswer3Small9.value = abeText;
        wronganswer4Small9.value = acdText;
        wronganswer5Small9.value = aceText;
        wronganswer6Small9.value = adeText;
        wronganswer7Small9.value = bcdText;
        wronganswer8Small9.value = bdeText;
        wronganswer9Small9.value = cdeText;
    }else if(answerSmall9.value == "B, D, E"){
        wronganswer1Small9.value = abcText;
        wronganswer2Small9.value = abdText;
        wronganswer3Small9.value = abeText;
        wronganswer4Small9.value = acdText;
        wronganswer5Small9.value = aceText;
        wronganswer6Small9.value = adeText;
        wronganswer7Small9.value = bcdText;
        wronganswer8Small9.value = bceText;
        wronganswer9Small9.value = cdeText;
    }else if(answerSmall9.value == "C, D, E"){
        wronganswer1Small9.value = abcText;
        wronganswer2Small9.value = abdText;
        wronganswer3Small9.value = abeText;
        wronganswer4Small9.value = acdText;
        wronganswer5Small9.value = aceText;
        wronganswer6Small9.value = adeText;
        wronganswer7Small9.value = bcdText;
        wronganswer8Small9.value = bceText;
        wronganswer9Small9.value = bdeText;
    }else if(answerSmall9.value == "A, D, E"){
        wronganswer1Small9.value = abcText;
        wronganswer2Small9.value = abdText;
        wronganswer3Small9.value = abeText;
        wronganswer4Small9.value = acdText;
        wronganswer5Small9.value = aceText;
        wronganswer6Small9.value = bcdText;
        wronganswer7Small9.value = bceText;
        wronganswer8Small9.value = bdeText;
        wronganswer9Small9.value = cdeText;
    }else{
    }
  }
  function threeOfFiveAiueo9() {
    answerSmall9 = document.getElementById("id_answerSmall9");
    wronganswer1Small9 = document.getElementById("id_wronganswer1Small9");
    wronganswer2Small9 = document.getElementById("id_wronganswer2Small9");
    wronganswer3Small9 = document.getElementById("id_wronganswer3Small9");
    wronganswer4Small9 = document.getElementById("id_wronganswer4Small9");
    wronganswer5Small9 = document.getElementById("id_wronganswer5Small9");
    wronganswer6Small9 = document.getElementById("id_wronganswer6Small9");
    wronganswer7Small9 = document.getElementById("id_wronganswer7Small9");
    wronganswer8Small9 = document.getElementById("id_wronganswer8Small9");
    wronganswer9Small9 = document.getElementById("id_wronganswer9Small9");   
    abcText = "ア、イ、ウ";
    abdText = "ア、イ、エ";
    abeText = "ア、イ、オ";
    acdText = "ア、ウ、エ";
    aceText = "ア、ウ、オ";
    adeText = "ア、エ、オ";
    bcdText = "イ、ウ、エ";
    bceText = "イ、ウ、オ";
    bdeText = "イ、エ、オ";
    cdeText = "ウ、エ、オ";
    document.querySelector('.content9 p:nth-child(11)').style.display = "block";
    document.querySelector('.content9 p:nth-child(12)').style.display = "block";
    document.querySelector('.content9 p:nth-child(13)').style.display = "block";
    document.querySelector('.content9 p:nth-child(14)').style.display = "block";
    document.querySelector('.content9 p:nth-child(15)').style.display = "block";
    document.querySelector('.content9 p:nth-child(16)').style.display = "block";
    document.querySelector('.content9').style.overflow = "scroll";
    if(answerSmall9.value == "ア、イ、ウ"){
        wronganswer1Small9.value = abdText;
        wronganswer2Small9.value = abeText;
        wronganswer3Small9.value = acdText;
        wronganswer4Small9.value = aceText;
        wronganswer5Small9.value = adeText;
        wronganswer6Small9.value = bcdText;
        wronganswer7Small9.value = bceText;
        wronganswer8Small9.value = bdeText;
        wronganswer9Small9.value = cdeText;
    }else if(answerSmall9.value == "ア、イ、エ"){
        wronganswer1Small9.value = abcText;
        wronganswer2Small9.value = abeText;
        wronganswer3Small9.value = acdText;
        wronganswer4Small9.value = aceText;
        wronganswer5Small9.value = adeText;
        wronganswer6Small9.value = bcdText;
        wronganswer7Small9.value = bceText;
        wronganswer8Small9.value = bdeText;
        wronganswer9Small9.value = cdeText;
    }else if(answerSmall9.value == "ア、イ、オ"){
        wronganswer1Small9.value = abcText;
        wronganswer2Small9.value = abdText;
        wronganswer3Small9.value = acdText;
        wronganswer4Small9.value = aceText;
        wronganswer5Small9.value = adeText;
        wronganswer6Small9.value = bcdText;
        wronganswer7Small9.value = bceText;
        wronganswer8Small9.value = bdeText;
        wronganswer9Small9.value = cdeText;
    }else if(answerSmall9.value == "ア、ウ、エ"){
        wronganswer1Small9.value = abcText;
        wronganswer2Small9.value = abdText;
        wronganswer3Small9.value = abeText;
        wronganswer4Small9.value = aceText;
        wronganswer5Small9.value = adeText;
        wronganswer6Small9.value = bcdText;
        wronganswer7Small9.value = bceText;
        wronganswer8Small9.value = bdeText;
        wronganswer9Small9.value = cdeText;
    }else if(answerSmall9.value == "ア、ウ、オ"){
        wronganswer1Small9.value = abcText;
        wronganswer2Small9.value = abdText;
        wronganswer3Small9.value = abeText;
        wronganswer4Small9.value = acdText;
        wronganswer5Small9.value = adeText;
        wronganswer6Small9.value = bcdText;
        wronganswer7Small9.value = bceText;
        wronganswer8Small9.value = bdeText;
        wronganswer9Small9.value = cdeText;
    }else if(answerSmall9.value == "イ、ウ、エ"){
        wronganswer1Small9.value = abcText;
        wronganswer2Small9.value = abdText;
        wronganswer3Small9.value = abeText;
        wronganswer4Small9.value = acdText;
        wronganswer5Small9.value = aceText;
        wronganswer6Small9.value = adeText;
        wronganswer7Small9.value = bceText;
        wronganswer8Small9.value = bdeText;
        wronganswer9Small9.value = cdeText;
    }else if(answerSmall9.value == "イ、ウ、オ"){
        wronganswer1Small9.value = abcText;
        wronganswer2Small9.value = abdText;
        wronganswer3Small9.value = abeText;
        wronganswer4Small9.value = acdText;
        wronganswer5Small9.value = aceText;
        wronganswer6Small9.value = adeText;
        wronganswer7Small9.value = bcdText;
        wronganswer8Small9.value = bdeText;
        wronganswer9Small9.value = cdeText;
    }else if(answerSmall9.value == "イ、エ、オ"){
        wronganswer1Small9.value = abcText;
        wronganswer2Small9.value = abdText;
        wronganswer3Small9.value = abeText;
        wronganswer4Small9.value = acdText;
        wronganswer5Small9.value = aceText;
        wronganswer6Small9.value = adeText;
        wronganswer7Small9.value = bcdText;
        wronganswer8Small9.value = bceText;
        wronganswer9Small9.value = cdeText;
    }else if(answerSmall9.value == "ウ、エ、オ"){
        wronganswer1Small9.value = abcText;
        wronganswer2Small9.value = abdText;
        wronganswer3Small9.value = abeText;
        wronganswer4Small9.value = acdText;
        wronganswer5Small9.value = aceText;
        wronganswer6Small9.value = adeText;
        wronganswer7Small9.value = bcdText;
        wronganswer8Small9.value = bceText;
        wronganswer9Small9.value = bdeText;
    }else if(answerSmall9.value == "ア、エ、オ"){
        wronganswer1Small9.value = abcText;
        wronganswer2Small9.value = abdText;
        wronganswer3Small9.value = abeText;
        wronganswer4Small9.value = acdText;
        wronganswer5Small9.value = aceText;
        wronganswer6Small9.value = bcdText;
        wronganswer7Small9.value = bceText;
        wronganswer8Small9.value = bdeText;
        wronganswer9Small9.value = cdeText;
    }else{
    }
  }
  function aiue9() {
    answerSmall9 = document.getElementById("id_answerSmall9");
    wronganswer1Small9 = document.getElementById("id_wronganswer1Small9");
    wronganswer2Small9 = document.getElementById("id_wronganswer2Small9");
    wronganswer3Small9 = document.getElementById("id_wronganswer3Small9");
    aText = "ア";
    iText = "イ";
    uText = "ウ";
    eText = "エ";
    if(answerSmall9.value == "ア"){
        wronganswer1Small9.value = iText;
        wronganswer2Small9.value = uText;
        wronganswer3Small9.value = eText;    
    }else if(answerSmall9.value == "イ"){
        wronganswer1Small9.value = aText;
        wronganswer2Small9.value = uText;
        wronganswer3Small9.value = eText; 
    }else if(answerSmall9.value == "ウ"){
        wronganswer1Small9.value = aText;
        wronganswer2Small9.value = iText;
        wronganswer3Small9.value = eText;       
    }else if(answerSmall9.value == "エ"){
        wronganswer1Small9.value = aText;
        wronganswer2Small9.value = iText;
        wronganswer3Small9.value = uText;     
    }else{
    }
  }
  function abcd9() {
    answerSmall9 = document.getElementById("id_answerSmall9");
    wronganswer1Small9 = document.getElementById("id_wronganswer1Small9");
    wronganswer2Small9 = document.getElementById("id_wronganswer2Small9");
    wronganswer3Small9 = document.getElementById("id_wronganswer3Small9");  
    aText = "A";
    bText = "B";
    cText = "C";
    dText = "D";
    if(answerSmall9.value == "A"){
        wronganswer1Small9.value = bText;
        wronganswer2Small9.value = cText;
        wronganswer3Small9.value = dText; 
    }else if(answerSmall9.value == "B"){
        wronganswer1Small9.value = aText;
        wronganswer2Small9.value = cText;
        wronganswer3Small9.value = dText;   
    }else if(answerSmall9.value == "C"){
        wronganswer1Small9.value = aText;
        wronganswer2Small9.value = bText;
        wronganswer3Small9.value = dText;  
    }else if(answerSmall9.value == "D"){
        wronganswer1Small9.value = aText;
        wronganswer2Small9.value = bText;
        wronganswer3Small9.value = cText; 
    }else{
    }
  }

  /*7/17 Small10*/
  function twoOfFour10() {
  answerSmall10 = document.getElementById("id_answerSmall10");
    wronganswer1Small10 = document.getElementById("id_wronganswer1Small10");
    wronganswer2Small10 = document.getElementById("id_wronganswer2Small10");
    wronganswer3Small10 = document.getElementById("id_wronganswer3Small10");
    wronganswer4Small10 = document.getElementById("id_wronganswer4Small10");
    wronganswer5Small10 = document.getElementById("id_wronganswer5Small10");
    wronganswer6Small10 = document.getElementById("id_wronganswer6Small10");
    abText = "A, B";
    acText = "A, C";
    adText = "A, D";
    bcText = "B, C";
    bdText = "B, D";
    cdText = "C, D";  
    document.querySelector('.content10 p:nth-child(11)').style.display = "block";
    document.querySelector('.content10 p:nth-child(12)').style.display = "block";
    document.querySelector('.content10 p:nth-child(13)').style.display = "block";
    document.querySelector('.content10').style.overflow = "scroll";
    if(answerSmall10.value == "A, B"){
        wronganswer1Small10.value = cdText;
        wronganswer2Small10.value = acText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = bcText;
        wronganswer5Small10.value = bdText;
    }else if(answerSmall10.value == "B, C"){
        wronganswer1Small10.value = cdText;
        wronganswer2Small10.value = acText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = bdText;
    }else if(answerSmall10.value == "A, C"){
        wronganswer1Small10.value = cdText;
        wronganswer2Small10.value = bcText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = bdText;
    }else if(answerSmall10.value == "A, D"){
        wronganswer1Small10.value = cdText;
        wronganswer2Small10.value = bcText;
        wronganswer3Small10.value = acText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = bdText;
    }else if(answerSmall10.value == "B, D"){
        wronganswer1Small10.value = cdText;
        wronganswer2Small10.value = bcText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = acText;
    }else if(answerSmall10.value == "C, D"){
        wronganswer1Small10.value = acText;
        wronganswer2Small10.value = bcText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = bdText;
    }else{
    }
}
  function twoOfFourAiue10() {
    answerSmall10 = document.getElementById("id_answerSmall10");
    wronganswer1Small10 = document.getElementById("id_wronganswer1Small10");
    wronganswer2Small10 = document.getElementById("id_wronganswer2Small10");
    wronganswer3Small10 = document.getElementById("id_wronganswer3Small10");
    wronganswer4Small10 = document.getElementById("id_wronganswer4Small10");
    wronganswer5Small10 = document.getElementById("id_wronganswer5Small10");
    wronganswer6Small10 = document.getElementById("id_wronganswer6Small10");
    abText = "ア、イ";
    acText = "ア、ウ";
    adText = "ア、エ";
    bcText = "イ、ウ";
    bdText = "イ、エ";
    cdText = "ウ、エ";  
    document.querySelector('.content10 p:nth-child(11)').style.display = "block";
    document.querySelector('.content10 p:nth-child(12)').style.display = "block";
    document.querySelector('.content10 p:nth-child(13)').style.display = "block";
    document.querySelector('.content10').style.overflow = "scroll";
    if(answerSmall10.value == "ア、イ"){
        wronganswer1Small10.value = cdText;
        wronganswer2Small10.value = acText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = bcText;
        wronganswer5Small10.value = bdText;
    }else if(answerSmall10.value == "イ、ウ"){
        wronganswer1Small10.value = cdText;
        wronganswer2Small10.value = acText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = bdText;
    }else if(answerSmall10.value == "ア、ウ"){
        wronganswer1Small10.value = cdText;
        wronganswer2Small10.value = bcText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = bdText;
    }else if(answerSmall10.value == "ア、エ"){
        wronganswer1Small10.value = cdText;
        wronganswer2Small10.value = bcText;
        wronganswer3Small10.value = acText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = bdText;
    }else if(answerSmall10.value == "イ、エ"){
        wronganswer1Small10.value = cdText;
        wronganswer2Small10.value = bcText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = acText;
    }else if(answerSmall10.value == "ウ、エ"){
        wronganswer1Small10.value = acText;
        wronganswer2Small10.value = bcText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = bdText;
    }else{
    }
  }
  function twoOfFive10() {
    answerSmall10 = document.getElementById("id_answerSmall10");
    wronganswer1Small10 = document.getElementById("id_wronganswer1Small10");
    wronganswer2Small10 = document.getElementById("id_wronganswer2Small10");
    wronganswer3Small10 = document.getElementById("id_wronganswer3Small10");
    wronganswer4Small10 = document.getElementById("id_wronganswer4Small10");
    wronganswer5Small10 = document.getElementById("id_wronganswer5Small10");
    wronganswer6Small10 = document.getElementById("id_wronganswer6Small10");
    wronganswer7Small10 = document.getElementById("id_wronganswer7Small10");
    wronganswer8Small10 = document.getElementById("id_wronganswer8Small10");
    wronganswer9Small10 = document.getElementById("id_wronganswer9Small10");
    abText = "A, B";
    acText = "A, C";
    adText = "A, D";
    bcText = "B, C";
    bdText = "B, D";
    cdText = "C, D";
    aeText = "A, E";
    beText = "B, E";
    ceText = "C, E";
    deText = "D, E";
    document.querySelector('.content10 p:nth-child(11)').style.display = "block";
    document.querySelector('.content10 p:nth-child(12)').style.display = "block";
    document.querySelector('.content10 p:nth-child(13)').style.display = "block";
    document.querySelector('.content10 p:nth-child(14)').style.display = "block";
    document.querySelector('.content10 p:nth-child(15)').style.display = "block";
    document.querySelector('.content10 p:nth-child(16)').style.display = "block";
    document.querySelector('.content10').style.overflow = "scroll";
    if(answerSmall10.value == "A, B"){
        wronganswer1Small10.value = cdText;
        wronganswer2Small10.value = acText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = bcText;
        wronganswer5Small10.value = bdText;
        wronganswer6Small10.value = aeText;
        wronganswer7Small10.value = beText;
        wronganswer8Small10.value = ceText;
        wronganswer9Small10.value = deText;
    }else if(answerSmall10.value == "B, C"){
        wronganswer1Small10.value = cdText;
        wronganswer2Small10.value = acText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = bdText;
        wronganswer6Small10.value = aeText;
        wronganswer7Small10.value = beText;
        wronganswer8Small10.value = ceText;
        wronganswer9Small10.value = deText;
    }else if(answerSmall10.value == "A, C"){
        wronganswer1Small10.value = cdText;
        wronganswer2Small10.value = bcText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = bdText;
        wronganswer6Small10.value = aeText;
        wronganswer7Small10.value = beText;
        wronganswer8Small10.value = ceText;
        wronganswer9Small10.value = deText;
    }else if(answerSmall10.value == "A, D"){
        wronganswer1Small10.value = cdText;
        wronganswer2Small10.value = bcText;
        wronganswer3Small10.value = acText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = bdText;
        wronganswer6Small10.value = aeText;
        wronganswer7Small10.value = beText;
        wronganswer8Small10.value = ceText;
        wronganswer9Small10.value = deText;
    }else if(answerSmall10.value == "B, D"){
        wronganswer1Small10.value = cdText;
        wronganswer2Small10.value = bcText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = acText;
        wronganswer6Small10.value = aeText;
        wronganswer7Small10.value = beText;
        wronganswer8Small10.value = ceText;
        wronganswer9Small10.value = deText;
    }else if(answerSmall10.value == "C, D"){
        wronganswer1Small10.value = acText;
        wronganswer2Small10.value = bcText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = bdText;
        wronganswer6Small10.value = aeText;
        wronganswer7Small10.value = beText;
        wronganswer8Small10.value = ceText;
        wronganswer9Small10.value = deText;
    }else if(answerSmall10.value == "B, E"){
        wronganswer1Small10.value = acText;
        wronganswer2Small10.value = bcText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = bdText;
        wronganswer6Small10.value = aeText;
        wronganswer7Small10.value = cdText;
        wronganswer8Small10.value = ceText;
        wronganswer9Small10.value = deText;
    }else if(answerSmall10.value == "C, E"){
        wronganswer1Small10.value = acText;
        wronganswer2Small10.value = bcText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = bdText;
        wronganswer6Small10.value = aeText;
        wronganswer7Small10.value = beText;
        wronganswer8Small10.value = cdText;
        wronganswer9Small10.value = deText;
    }else if(answerSmall10.value == "D, E"){
        wronganswer1Small10.value = acText;
        wronganswer2Small10.value = bcText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = bdText;
        wronganswer6Small10.value = aeText;
        wronganswer7Small10.value = beText;
        wronganswer8Small10.value = ceText;
        wronganswer9Small10.value = cdText;
    }else if(answerSmall10.value == "A, E"){
        wronganswer1Small10.value = acText;
        wronganswer2Small10.value = bcText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = bdText;
        wronganswer6Small10.value = cdText;
        wronganswer7Small10.value = beText;
        wronganswer8Small10.value = ceText;
        wronganswer9Small10.value = deText;
    }else{
    }
  }
  function twoOfFiveAiueo10() {
    answerSmall10 = document.getElementById("id_answerSmall10");
    wronganswer1Small10 = document.getElementById("id_wronganswer1Small10");
    wronganswer2Small10 = document.getElementById("id_wronganswer2Small10");
    wronganswer3Small10 = document.getElementById("id_wronganswer3Small10");
    wronganswer4Small10 = document.getElementById("id_wronganswer4Small10");
    wronganswer5Small10 = document.getElementById("id_wronganswer5Small10");
    wronganswer6Small10 = document.getElementById("id_wronganswer6Small10");
    wronganswer7Small10 = document.getElementById("id_wronganswer7Small10");
    wronganswer8Small10 = document.getElementById("id_wronganswer8Small10");
    wronganswer9Small10 = document.getElementById("id_wronganswer9Small10");  
    abText = "ア、イ";
    acText = "ア、ウ";
    adText = "ア、エ";
    bcText = "イ、ウ";
    bdText = "イ、エ";
    cdText = "ウ、エ";
    aeText = "ア、オ";
    beText = "イ、オ";
    ceText = "ウ、オ";
    deText = "エ、オ";
    document.querySelector('.content10 p:nth-child(11)').style.display = "block";
    document.querySelector('.content10 p:nth-child(12)').style.display = "block";
    document.querySelector('.content10 p:nth-child(13)').style.display = "block";
    document.querySelector('.content10 p:nth-child(14)').style.display = "block";
    document.querySelector('.content10 p:nth-child(15)').style.display = "block";
    document.querySelector('.content10 p:nth-child(16)').style.display = "block";
    document.querySelector('.content10').style.overflow = "scroll";
    if(answerSmall10.value == "ア、イ"){
        wronganswer1Small10.value = cdText;
        wronganswer2Small10.value = acText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = bcText;
        wronganswer5Small10.value = bdText;
        wronganswer6Small10.value = aeText;
        wronganswer7Small10.value = beText;
        wronganswer8Small10.value = ceText;
        wronganswer9Small10.value = deText;
    }else if(answerSmall10.value == "イ、ウ"){
        wronganswer1Small10.value = cdText;
        wronganswer2Small10.value = acText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = bdText;
        wronganswer6Small10.value = aeText;
        wronganswer7Small10.value = beText;
        wronganswer8Small10.value = ceText;
        wronganswer9Small10.value = deText;
    }else if(answerSmall10.value == "ア、ウ"){
        wronganswer1Small10.value = cdText;
        wronganswer2Small10.value = bcText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = bdText;
        wronganswer6Small10.value = aeText;
        wronganswer7Small10.value = beText;
        wronganswer8Small10.value = ceText;
        wronganswer9Small10.value = deText;
    }else if(answerSmall10.value == "ア、エ"){
        wronganswer1Small10.value = cdText;
        wronganswer2Small10.value = bcText;
        wronganswer3Small10.value = acText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = bdText;
        wronganswer6Small10.value = aeText;
        wronganswer7Small10.value = beText;
        wronganswer8Small10.value = ceText;
        wronganswer9Small10.value = deText;
    }else if(answerSmall10.value == "イ、エ"){
        wronganswer1Small10.value = cdText;
        wronganswer2Small10.value = bcText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = acText;
        wronganswer6Small10.value = aeText;
        wronganswer7Small10.value = beText;
        wronganswer8Small10.value = ceText;
        wronganswer9Small10.value = deText;
    }else if(answerSmall10.value == "ウ、エ"){
        wronganswer1Small10.value = acText;
        wronganswer2Small10.value = bcText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = bdText;
        wronganswer6Small10.value = aeText;
        wronganswer7Small10.value = beText;
        wronganswer8Small10.value = ceText;
        wronganswer9Small10.value = deText;
    }else if(answerSmall10.value == "イ、オ"){
        wronganswer1Small10.value = acText;
        wronganswer2Small10.value = bcText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = bdText;
        wronganswer6Small10.value = aeText;
        wronganswer7Small10.value = cdText;
        wronganswer8Small10.value = ceText;
        wronganswer9Small10.value = deText;
    }else if(answerSmall10.value == "ウ、オ"){
        wronganswer1Small10.value = acText;
        wronganswer2Small10.value = bcText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = bdText;
        wronganswer6Small10.value = aeText;
        wronganswer7Small10.value = beText;
        wronganswer8Small10.value = cdText;
        wronganswer9Small10.value = deText;
    }else if(answerSmall10.value == "エ、オ"){
        wronganswer1Small10.value = acText;
        wronganswer2Small10.value = bcText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = bdText;
        wronganswer6Small10.value = aeText;
        wronganswer7Small10.value = beText;
        wronganswer8Small10.value = ceText;
        wronganswer9Small10.value = cdText;
    }else if(answerSmall10.value == "ア、オ"){
        wronganswer1Small10.value = acText;
        wronganswer2Small10.value = bcText;
        wronganswer3Small10.value = adText;
        wronganswer4Small10.value = abText;
        wronganswer5Small10.value = bdText;
        wronganswer6Small10.value = cdText;
        wronganswer7Small10.value = beText;
        wronganswer8Small10.value = ceText;
        wronganswer9Small10.value = deText;
    }else{
    }
  }
  function threeOfFive10() {
    answerSmall10 = document.getElementById("id_answerSmall10");
    wronganswer1Small10 = document.getElementById("id_wronganswer1Small10");
    wronganswer2Small10 = document.getElementById("id_wronganswer2Small10");
    wronganswer3Small10 = document.getElementById("id_wronganswer3Small10");
    wronganswer4Small10 = document.getElementById("id_wronganswer4Small10");
    wronganswer5Small10 = document.getElementById("id_wronganswer5Small10");
    wronganswer6Small10 = document.getElementById("id_wronganswer6Small10");
    wronganswer7Small10 = document.getElementById("id_wronganswer7Small10");
    wronganswer8Small10 = document.getElementById("id_wronganswer8Small10");
    wronganswer9Small10 = document.getElementById("id_wronganswer9Small10");  
    abcText = "A, B, C";
    abdText = "A, B, D";
    abeText = "A, B, E";
    acdText = "A, C, D";
    aceText = "A, C, E";
    adeText = "A, D, E";
    bcdText = "B, C, D";
    bceText = "B, C, E";
    bdeText = "B, D, E";
    cdeText = "C, D, E";
    document.querySelector('.content10 p:nth-child(11)').style.display = "block";
    document.querySelector('.content10 p:nth-child(12)').style.display = "block";
    document.querySelector('.content10 p:nth-child(13)').style.display = "block";
    document.querySelector('.content10 p:nth-child(14)').style.display = "block";
    document.querySelector('.content10 p:nth-child(15)').style.display = "block";
    document.querySelector('.content10 p:nth-child(16)').style.display = "block";
    document.querySelector('.content10').style.overflow = "scroll";
    if(answerSmall10.value == "A, B, C"){
        wronganswer1Small10.value = abdText;
        wronganswer2Small10.value = abeText;
        wronganswer3Small10.value = acdText;
        wronganswer4Small10.value = aceText;
        wronganswer5Small10.value = adeText;
        wronganswer6Small10.value = bcdText;
        wronganswer7Small10.value = bceText;
        wronganswer8Small10.value = bdeText;
        wronganswer9Small10.value = cdeText;
    }else if(answerSmall10.value == "A, B, D"){
        wronganswer1Small10.value = abcText;
        wronganswer2Small10.value = abeText;
        wronganswer3Small10.value = acdText;
        wronganswer4Small10.value = aceText;
        wronganswer5Small10.value = adeText;
        wronganswer6Small10.value = bcdText;
        wronganswer7Small10.value = bceText;
        wronganswer8Small10.value = bdeText;
        wronganswer9Small10.value = cdeText;
    }else if(answerSmall10.value == "A, B, E"){
        wronganswer1Small10.value = abcText;
        wronganswer2Small10.value = abdText;
        wronganswer3Small10.value = acdText;
        wronganswer4Small10.value = aceText;
        wronganswer5Small10.value = adeText;
        wronganswer6Small10.value = bcdText;
        wronganswer7Small10.value = bceText;
        wronganswer8Small10.value = bdeText;
        wronganswer9Small10.value = cdeText;
    }else if(answerSmall10.value == "A, C, D"){
        wronganswer1Small10.value = abcText;
        wronganswer2Small10.value = abdText;
        wronganswer3Small10.value = abeText;
        wronganswer4Small10.value = aceText;
        wronganswer5Small10.value = adeText;
        wronganswer6Small10.value = bcdText;
        wronganswer7Small10.value = bceText;
        wronganswer8Small10.value = bdeText;
        wronganswer9Small10.value = cdeText;
    }else if(answerSmall10.value == "A, C, E"){
        wronganswer1Small10.value = abcText;
        wronganswer2Small10.value = abdText;
        wronganswer3Small10.value = abeText;
        wronganswer4Small10.value = acdText;
        wronganswer5Small10.value = adeText;
        wronganswer6Small10.value = bcdText;
        wronganswer7Small10.value = bceText;
        wronganswer8Small10.value = bdeText;
        wronganswer9Small10.value = cdeText;
    }else if(answerSmall10.value == "B, C, D"){
        wronganswer1Small10.value = abcText;
        wronganswer2Small10.value = abdText;
        wronganswer3Small10.value = abeText;
        wronganswer4Small10.value = acdText;
        wronganswer5Small10.value = aceText;
        wronganswer6Small10.value = adeText;
        wronganswer7Small10.value = bceText;
        wronganswer8Small10.value = bdeText;
        wronganswer9Small10.value = cdeText;
    }else if(answerSmall10.value == "B, C, E"){
        wronganswer1Small10.value = abcText;
        wronganswer2Small10.value = abdText;
        wronganswer3Small10.value = abeText;
        wronganswer4Small10.value = acdText;
        wronganswer5Small10.value = aceText;
        wronganswer6Small10.value = adeText;
        wronganswer7Small10.value = bcdText;
        wronganswer8Small10.value = bdeText;
        wronganswer9Small10.value = cdeText;
    }else if(answerSmall10.value == "B, D, E"){
        wronganswer1Small10.value = abcText;
        wronganswer2Small10.value = abdText;
        wronganswer3Small10.value = abeText;
        wronganswer4Small10.value = acdText;
        wronganswer5Small10.value = aceText;
        wronganswer6Small10.value = adeText;
        wronganswer7Small10.value = bcdText;
        wronganswer8Small10.value = bceText;
        wronganswer9Small10.value = cdeText;
    }else if(answerSmall10.value == "C, D, E"){
        wronganswer1Small10.value = abcText;
        wronganswer2Small10.value = abdText;
        wronganswer3Small10.value = abeText;
        wronganswer4Small10.value = acdText;
        wronganswer5Small10.value = aceText;
        wronganswer6Small10.value = adeText;
        wronganswer7Small10.value = bcdText;
        wronganswer8Small10.value = bceText;
        wronganswer9Small10.value = bdeText;
    }else if(answerSmall10.value == "A, D, E"){
        wronganswer1Small10.value = abcText;
        wronganswer2Small10.value = abdText;
        wronganswer3Small10.value = abeText;
        wronganswer4Small10.value = acdText;
        wronganswer5Small10.value = aceText;
        wronganswer6Small10.value = bcdText;
        wronganswer7Small10.value = bceText;
        wronganswer8Small10.value = bdeText;
        wronganswer9Small10.value = cdeText;
    }else{
    }
  }
  function threeOfFiveAiueo10() {
    answerSmall10 = document.getElementById("id_answerSmall10");
    wronganswer1Small10 = document.getElementById("id_wronganswer1Small10");
    wronganswer2Small10 = document.getElementById("id_wronganswer2Small10");
    wronganswer3Small10 = document.getElementById("id_wronganswer3Small10");
    wronganswer4Small10 = document.getElementById("id_wronganswer4Small10");
    wronganswer5Small10 = document.getElementById("id_wronganswer5Small10");
    wronganswer6Small10 = document.getElementById("id_wronganswer6Small10");
    wronganswer7Small10 = document.getElementById("id_wronganswer7Small10");
    wronganswer8Small10 = document.getElementById("id_wronganswer8Small10");
    wronganswer9Small10 = document.getElementById("id_wronganswer9Small10");   
    abcText = "ア、イ、ウ";
    abdText = "ア、イ、エ";
    abeText = "ア、イ、オ";
    acdText = "ア、ウ、エ";
    aceText = "ア、ウ、オ";
    adeText = "ア、エ、オ";
    bcdText = "イ、ウ、エ";
    bceText = "イ、ウ、オ";
    bdeText = "イ、エ、オ";
    cdeText = "ウ、エ、オ";
    document.querySelector('.content10 p:nth-child(11)').style.display = "block";
    document.querySelector('.content10 p:nth-child(12)').style.display = "block";
    document.querySelector('.content10 p:nth-child(13)').style.display = "block";
    document.querySelector('.content10 p:nth-child(14)').style.display = "block";
    document.querySelector('.content10 p:nth-child(15)').style.display = "block";
    document.querySelector('.content10 p:nth-child(16)').style.display = "block";
    document.querySelector('.content10').style.overflow = "scroll";
    if(answerSmall10.value == "ア、イ、ウ"){
        wronganswer1Small10.value = abdText;
        wronganswer2Small10.value = abeText;
        wronganswer3Small10.value = acdText;
        wronganswer4Small10.value = aceText;
        wronganswer5Small10.value = adeText;
        wronganswer6Small10.value = bcdText;
        wronganswer7Small10.value = bceText;
        wronganswer8Small10.value = bdeText;
        wronganswer9Small10.value = cdeText;
    }else if(answerSmall10.value == "ア、イ、エ"){
        wronganswer1Small10.value = abcText;
        wronganswer2Small10.value = abeText;
        wronganswer3Small10.value = acdText;
        wronganswer4Small10.value = aceText;
        wronganswer5Small10.value = adeText;
        wronganswer6Small10.value = bcdText;
        wronganswer7Small10.value = bceText;
        wronganswer8Small10.value = bdeText;
        wronganswer9Small10.value = cdeText;
    }else if(answerSmall10.value == "ア、イ、オ"){
        wronganswer1Small10.value = abcText;
        wronganswer2Small10.value = abdText;
        wronganswer3Small10.value = acdText;
        wronganswer4Small10.value = aceText;
        wronganswer5Small10.value = adeText;
        wronganswer6Small10.value = bcdText;
        wronganswer7Small10.value = bceText;
        wronganswer8Small10.value = bdeText;
        wronganswer9Small10.value = cdeText;
    }else if(answerSmall10.value == "ア、ウ、エ"){
        wronganswer1Small10.value = abcText;
        wronganswer2Small10.value = abdText;
        wronganswer3Small10.value = abeText;
        wronganswer4Small10.value = aceText;
        wronganswer5Small10.value = adeText;
        wronganswer6Small10.value = bcdText;
        wronganswer7Small10.value = bceText;
        wronganswer8Small10.value = bdeText;
        wronganswer9Small10.value = cdeText;
    }else if(answerSmall10.value == "ア、ウ、オ"){
        wronganswer1Small10.value = abcText;
        wronganswer2Small10.value = abdText;
        wronganswer3Small10.value = abeText;
        wronganswer4Small10.value = acdText;
        wronganswer5Small10.value = adeText;
        wronganswer6Small10.value = bcdText;
        wronganswer7Small10.value = bceText;
        wronganswer8Small10.value = bdeText;
        wronganswer9Small10.value = cdeText;
    }else if(answerSmall10.value == "イ、ウ、エ"){
        wronganswer1Small10.value = abcText;
        wronganswer2Small10.value = abdText;
        wronganswer3Small10.value = abeText;
        wronganswer4Small10.value = acdText;
        wronganswer5Small10.value = aceText;
        wronganswer6Small10.value = adeText;
        wronganswer7Small10.value = bceText;
        wronganswer8Small10.value = bdeText;
        wronganswer9Small10.value = cdeText;
    }else if(answerSmall10.value == "イ、ウ、オ"){
        wronganswer1Small10.value = abcText;
        wronganswer2Small10.value = abdText;
        wronganswer3Small10.value = abeText;
        wronganswer4Small10.value = acdText;
        wronganswer5Small10.value = aceText;
        wronganswer6Small10.value = adeText;
        wronganswer7Small10.value = bcdText;
        wronganswer8Small10.value = bdeText;
        wronganswer9Small10.value = cdeText;
    }else if(answerSmall10.value == "イ、エ、オ"){
        wronganswer1Small10.value = abcText;
        wronganswer2Small10.value = abdText;
        wronganswer3Small10.value = abeText;
        wronganswer4Small10.value = acdText;
        wronganswer5Small10.value = aceText;
        wronganswer6Small10.value = adeText;
        wronganswer7Small10.value = bcdText;
        wronganswer8Small10.value = bceText;
        wronganswer9Small10.value = cdeText;
    }else if(answerSmall10.value == "ウ、エ、オ"){
        wronganswer1Small10.value = abcText;
        wronganswer2Small10.value = abdText;
        wronganswer3Small10.value = abeText;
        wronganswer4Small10.value = acdText;
        wronganswer5Small10.value = aceText;
        wronganswer6Small10.value = adeText;
        wronganswer7Small10.value = bcdText;
        wronganswer8Small10.value = bceText;
        wronganswer9Small10.value = bdeText;
    }else if(answerSmall10.value == "ア、エ、オ"){
        wronganswer1Small10.value = abcText;
        wronganswer2Small10.value = abdText;
        wronganswer3Small10.value = abeText;
        wronganswer4Small10.value = acdText;
        wronganswer5Small10.value = aceText;
        wronganswer6Small10.value = bcdText;
        wronganswer7Small10.value = bceText;
        wronganswer8Small10.value = bdeText;
        wronganswer9Small10.value = cdeText;
    }else{
    }
  }
  function aiue10() {
    answerSmall10 = document.getElementById("id_answerSmall10");
    wronganswer1Small10 = document.getElementById("id_wronganswer1Small10");
    wronganswer2Small10 = document.getElementById("id_wronganswer2Small10");
    wronganswer3Small10 = document.getElementById("id_wronganswer3Small10");
    aText = "ア";
    iText = "イ";
    uText = "ウ";
    eText = "エ";
    if(answerSmall10.value == "ア"){
        wronganswer1Small10.value = iText;
        wronganswer2Small10.value = uText;
        wronganswer3Small10.value = eText;    
    }else if(answerSmall10.value == "イ"){
        wronganswer1Small10.value = aText;
        wronganswer2Small10.value = uText;
        wronganswer3Small10.value = eText; 
    }else if(answerSmall10.value == "ウ"){
        wronganswer1Small10.value = aText;
        wronganswer2Small10.value = iText;
        wronganswer3Small10.value = eText;       
    }else if(answerSmall10.value == "エ"){
        wronganswer1Small10.value = aText;
        wronganswer2Small10.value = iText;
        wronganswer3Small10.value = uText;     
    }else{
    }
  }
  function abcd10() {
    answerSmall10 = document.getElementById("id_answerSmall10");
    wronganswer1Small10 = document.getElementById("id_wronganswer1Small10");
    wronganswer2Small10 = document.getElementById("id_wronganswer2Small10");
    wronganswer3Small10 = document.getElementById("id_wronganswer3Small10");  
    aText = "A";
    bText = "B";
    cText = "C";
    dText = "D";
    if(answerSmall10.value == "A"){
        wronganswer1Small10.value = bText;
        wronganswer2Small10.value = cText;
        wronganswer3Small10.value = dText; 
    }else if(answerSmall10.value == "B"){
        wronganswer1Small10.value = aText;
        wronganswer2Small10.value = cText;
        wronganswer3Small10.value = dText;   
    }else if(answerSmall10.value == "C"){
        wronganswer1Small10.value = aText;
        wronganswer2Small10.value = bText;
        wronganswer3Small10.value = dText;  
    }else if(answerSmall10.value == "D"){
        wronganswer1Small10.value = aText;
        wronganswer2Small10.value = bText;
        wronganswer3Small10.value = cText; 
    }else{
    }
  }