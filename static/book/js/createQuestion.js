 //textareaの要素取得
 let textarea = document.getElementById('id_question');
 //textareaのデフォルトの要素の高さを取得
 let ch = textarea.clientHeight;

 //textareaのinputイベント
 textarea.addEventListener('input', ()=>{
     //textareaの高さを再設定（デフォルトの高さから計算するため）
     textarea.style.height = ch + 'px';
     //textareaの入力内容の高さを取得
     let sh = textarea.scrollHeight;
     //textareaの高さに入力内容の高さを設定
     textarea.style.height = sh + 'px';
 });

 let textareaAns = document.getElementById('id_answer');
 let chAns = textareaAns.clientHeight;
 textareaAns.addEventListener('input', ()=>{
     textareaAns.style.height = chAns + 'px';
     let shAns = textareaAns.scrollHeight;
     textareaAns.style.height = shAns + 'px';
 });

 let textareaWAns1 = document.getElementById('id_wronganswer1');
 let ch1 = textareaWAns1.clientHeight;
 textareaWAns1.addEventListener('input', ()=>{
     textareaWAns1.style.height = ch1 + 'px';
     let sh1 = textareaWAns1.scrollHeight;
     textareaWAns1.style.height = sh1 + 'px';
 });

 let textareaWAns2 = document.getElementById('id_wronganswer2');
 let ch2 = textareaWAns2.clientHeight;
 textareaWAns2.addEventListener('input', ()=>{
     textareaWAns2.style.height = ch2 + 'px';
     let sh2 = textareaWAns2.scrollHeight;
     textareaWAns2.style.height = sh2 + 'px';
 });

 let textareaWAns3 = document.getElementById('id_wronganswer3');
 let ch3 = textareaWAns3.clientHeight;
 textareaWAns3.addEventListener('input', ()=>{
     textareaWAns3.style.height = ch3 + 'px';
     let sh3 = textareaWAns3.scrollHeight;
     textareaWAns3.style.height = sh3 + 'px';
 });

 let textareaWAns4 = document.getElementById('id_wronganswer4');
 let ch4 = textareaWAns4.clientHeight;
 textareaWAns4.addEventListener('input', ()=>{
     textareaWAns4.style.height = ch4 + 'px';
     let sh4 = textareaWAns4.scrollHeight;
     textareaWAns4.style.height = sh4 + 'px';
 });

 let textareaWAns5 = document.getElementById('id_wronganswer5');
 let ch5 = textareaWAns5.clientHeight;
 textareaWAns5.addEventListener('input', ()=>{
     textareaWAns5.style.height = ch5 + 'px';
     let sh5 = textareaWAns5.scrollHeight;
     textareaWAns5.style.height = sh5 + 'px';
 });

 let textareaWAns6 = document.getElementById('id_wronganswer6');
 let ch6 = textareaWAns6.clientHeight;
 textareaWAns6.addEventListener('input', ()=>{
     textareaWAns6.style.height = ch6 + 'px';
     let sh6 = textareaWAns6.scrollHeight;
     textareaWAns6.style.height = sh6 + 'px';
 });

 let textareaWAns7 = document.getElementById('id_wronganswer7');
 let ch7 = textareaWAns7.clientHeight;
 textareaWAns7.addEventListener('input', ()=>{
     textareaWAns7.style.height = ch7 + 'px';
     let sh7 = textareaWAns7.scrollHeight;
     textareaWAns7.style.height = sh7 + 'px';
 });

 let textareaWAns8 = document.getElementById('id_wronganswer8');
 let ch8 = textareaWAns8.clientHeight;
 textareaWAns8.addEventListener('input', ()=>{
     textareaWAns8.style.height = ch8 + 'px';
     let sh8 = textareaWAns8.scrollHeight;
     textareaWAns8.style.height = sh8 + 'px';
 });

 let textareaWAns9 = document.getElementById('id_wronganswer9');
 let ch9 = textareaWAns9.clientHeight;
 textareaWAns9.addEventListener('input', ()=>{
     textareaWAns9.style.height = ch9 + 'px';
     let sh9 = textareaWAns9.scrollHeight;
     textareaWAns9.style.height = sh9 + 'px';
 });

 let textareaEx = document.getElementById('id_explanation');
 let chEx = textareaEx.clientHeight;
 textareaEx.addEventListener('input', ()=>{
     textareaEx.style.height = chEx + 'px';
     let shEx = textareaEx.scrollHeight;
     textareaEx.style.height = shEx + 'px';
 });

 let textareaHint1 = document.getElementById('id_hint1');
 let chHint1 = textareaHint1.clientHeight;
 textareaHint1.addEventListener('input', ()=>{
     textareaHint1.style.height = chHint1 + 'px';
     let shHint1 = textareaHint1.scrollHeight;
     textareaHint1.style.height = shHint1 + 'px';
 });

 let textareaHint2 = document.getElementById('id_hint2');
 let chHint2 = textareaHint2.clientHeight;
 textareaHint2.addEventListener('input', ()=>{
     textareaHint2.style.height = chHint2 + 'px';
     let shHint2 = textareaHint2.scrollHeight;
     textareaHint2.style.height = shHint2 + 'px';
 });





function twoOfFour() {
    answer = document.getElementById("id_answer");
    wronganswer1 = document.getElementById("id_wronganswer1");
    wronganswer2 = document.getElementById("id_wronganswer2");
    wronganswer3 = document.getElementById("id_wronganswer3");
    wronganswer4 = document.getElementById("id_wronganswer4");
    wronganswer5 = document.getElementById("id_wronganswer5");
    wronganswer6 = document.getElementById("id_wronganswer6");
   
    abText = "A, B";
    acText = "A, C";
    adText = "A, D";
    bcText = "B, C";
    bdText = "B, D";
    cdText = "C, D";  

    document.querySelector('.yokonarabi p:nth-child(10)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(11)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(12)').style.display = "block";

    if(answer.value == "A, B"){
        wronganswer1.innerText = cdText;
        wronganswer2.innerText = acText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = bcText;
        wronganswer5.innerText = bdText;
    }else if(answer.value == "B, C"){
        wronganswer1.innerText = cdText;
        wronganswer2.innerText = acText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = bdText;
    }else if(answer.value == "A, C"){
        wronganswer1.innerText = cdText;
        wronganswer2.innerText = bcText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = bdText;
    }else if(answer.value == "A, D"){
        wronganswer1.innerText = cdText;
        wronganswer2.innerText = bcText;
        wronganswer3.innerText = acText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = bdText;
    }else if(answer.value == "B, D"){
        wronganswer1.innerText = cdText;
        wronganswer2.innerText = bcText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = acText;
    }else if(answer.value == "C, D"){
        wronganswer1.innerText = acText;
        wronganswer2.innerText = bcText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = bdText;
    }else{

    }
  }

  function twoOfFourAiue() {
    answer = document.getElementById("id_answer");
    wronganswer1 = document.getElementById("id_wronganswer1");
    wronganswer2 = document.getElementById("id_wronganswer2");
    wronganswer3 = document.getElementById("id_wronganswer3");
    wronganswer4 = document.getElementById("id_wronganswer4");
    wronganswer5 = document.getElementById("id_wronganswer5");
    wronganswer6 = document.getElementById("id_wronganswer6");
   
    abText = "ア、イ";
    acText = "ア、ウ";
    adText = "ア、エ";
    bcText = "イ、ウ";
    bdText = "イ、エ";
    cdText = "ウ、エ";  

    document.querySelector('.yokonarabi p:nth-child(10)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(11)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(12)').style.display = "block";

    if(answer.value == "ア、イ"){
        wronganswer1.innerText = cdText;
        wronganswer2.innerText = acText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = bcText;
        wronganswer5.innerText = bdText;
    }else if(answer.value == "イ、ウ"){
        wronganswer1.innerText = cdText;
        wronganswer2.innerText = acText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = bdText;
    }else if(answer.value == "ア、ウ"){
        wronganswer1.innerText = cdText;
        wronganswer2.innerText = bcText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = bdText;
    }else if(answer.value == "ア、エ"){
        wronganswer1.innerText = cdText;
        wronganswer2.innerText = bcText;
        wronganswer3.innerText = acText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = bdText;
    }else if(answer.value == "イ、エ"){
        wronganswer1.innerText = cdText;
        wronganswer2.innerText = bcText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = acText;
    }else if(answer.value == "ウ、エ"){
        wronganswer1.innerText = acText;
        wronganswer2.innerText = bcText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = bdText;
    }else{

    }
  }

  function twoOfFive() {
    answer = document.getElementById("id_answer");
    wronganswer1 = document.getElementById("id_wronganswer1");
    wronganswer2 = document.getElementById("id_wronganswer2");
    wronganswer3 = document.getElementById("id_wronganswer3");
    wronganswer4 = document.getElementById("id_wronganswer4");
    wronganswer5 = document.getElementById("id_wronganswer5");
    wronganswer6 = document.getElementById("id_wronganswer6");
    wronganswer7 = document.getElementById("id_wronganswer7");
    wronganswer8 = document.getElementById("id_wronganswer8");
    wronganswer9 = document.getElementById("id_wronganswer9");
   
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

    document.querySelector('.yokonarabi p:nth-child(10)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(11)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(12)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(13)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(14)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(15)').style.display = "block";

    if(answer.value == "A, B"){
        wronganswer1.innerText = cdText;
        wronganswer2.innerText = acText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = bcText;
        wronganswer5.innerText = bdText;
        wronganswer6.innerText = aeText;
        wronganswer7.innerText = beText;
        wronganswer8.innerText = ceText;
        wronganswer9.innerText = deText;
    }else if(answer.value == "B, C"){
        wronganswer1.innerText = cdText;
        wronganswer2.innerText = acText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = bdText;
        wronganswer6.innerText = aeText;
        wronganswer7.innerText = beText;
        wronganswer8.innerText = ceText;
        wronganswer9.innerText = deText;
    }else if(answer.value == "A, C"){
        wronganswer1.innerText = cdText;
        wronganswer2.innerText = bcText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = bdText;
        wronganswer6.innerText = aeText;
        wronganswer7.innerText = beText;
        wronganswer8.innerText = ceText;
        wronganswer9.innerText = deText;
    }else if(answer.value == "A, D"){
        wronganswer1.innerText = cdText;
        wronganswer2.innerText = bcText;
        wronganswer3.innerText = acText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = bdText;
        wronganswer6.innerText = aeText;
        wronganswer7.innerText = beText;
        wronganswer8.innerText = ceText;
        wronganswer9.innerText = deText;
    }else if(answer.value == "B, D"){
        wronganswer1.innerText = cdText;
        wronganswer2.innerText = bcText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = acText;
        wronganswer6.innerText = aeText;
        wronganswer7.innerText = beText;
        wronganswer8.innerText = ceText;
        wronganswer9.innerText = deText;
    }else if(answer.value == "C, D"){
        wronganswer1.innerText = acText;
        wronganswer2.innerText = bcText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = bdText;
        wronganswer6.innerText = aeText;
        wronganswer7.innerText = beText;
        wronganswer8.innerText = ceText;
        wronganswer9.innerText = deText;
    }else if(answer.value == "B, E"){
        wronganswer1.innerText = acText;
        wronganswer2.innerText = bcText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = bdText;
        wronganswer6.innerText = aeText;
        wronganswer7.innerText = cdText;
        wronganswer8.innerText = ceText;
        wronganswer9.innerText = deText;
    }else if(answer.value == "C, E"){
        wronganswer1.innerText = acText;
        wronganswer2.innerText = bcText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = bdText;
        wronganswer6.innerText = aeText;
        wronganswer7.innerText = beText;
        wronganswer8.innerText = cdText;
        wronganswer9.innerText = deText;
    }else if(answer.value == "D, E"){
        wronganswer1.innerText = acText;
        wronganswer2.innerText = bcText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = bdText;
        wronganswer6.innerText = aeText;
        wronganswer7.innerText = beText;
        wronganswer8.innerText = ceText;
        wronganswer9.innerText = cdText;
    }else if(answer.value == "A, E"){
        wronganswer1.innerText = acText;
        wronganswer2.innerText = bcText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = bdText;
        wronganswer6.innerText = cdText;
        wronganswer7.innerText = beText;
        wronganswer8.innerText = ceText;
        wronganswer9.innerText = deText;
    }else{

    }
  }

  function twoOfFiveAiueo() {
    answer = document.getElementById("id_answer");
    wronganswer1 = document.getElementById("id_wronganswer1");
    wronganswer2 = document.getElementById("id_wronganswer2");
    wronganswer3 = document.getElementById("id_wronganswer3");
    wronganswer4 = document.getElementById("id_wronganswer4");
    wronganswer5 = document.getElementById("id_wronganswer5");
    wronganswer6 = document.getElementById("id_wronganswer6");
    wronganswer7 = document.getElementById("id_wronganswer7");
    wronganswer8 = document.getElementById("id_wronganswer8");
    wronganswer9 = document.getElementById("id_wronganswer9");
   
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

    document.querySelector('.yokonarabi p:nth-child(10)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(11)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(12)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(13)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(14)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(15)').style.display = "block";

    if(answer.value == "ア、イ"){
        wronganswer1.innerText = cdText;
        wronganswer2.innerText = acText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = bcText;
        wronganswer5.innerText = bdText;
        wronganswer6.innerText = aeText;
        wronganswer7.innerText = beText;
        wronganswer8.innerText = ceText;
        wronganswer9.innerText = deText;
    }else if(answer.value == "イ、ウ"){
        wronganswer1.innerText = cdText;
        wronganswer2.innerText = acText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = bdText;
        wronganswer6.innerText = aeText;
        wronganswer7.innerText = beText;
        wronganswer8.innerText = ceText;
        wronganswer9.innerText = deText;
    }else if(answer.value == "ア、ウ"){
        wronganswer1.innerText = cdText;
        wronganswer2.innerText = bcText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = bdText;
        wronganswer6.innerText = aeText;
        wronganswer7.innerText = beText;
        wronganswer8.innerText = ceText;
        wronganswer9.innerText = deText;
    }else if(answer.value == "ア、エ"){
        wronganswer1.innerText = cdText;
        wronganswer2.innerText = bcText;
        wronganswer3.innerText = acText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = bdText;
        wronganswer6.innerText = aeText;
        wronganswer7.innerText = beText;
        wronganswer8.innerText = ceText;
        wronganswer9.innerText = deText;
    }else if(answer.value == "イ、エ"){
        wronganswer1.innerText = cdText;
        wronganswer2.innerText = bcText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = acText;
        wronganswer6.innerText = aeText;
        wronganswer7.innerText = beText;
        wronganswer8.innerText = ceText;
        wronganswer9.innerText = deText;
    }else if(answer.value == "ウ、エ"){
        wronganswer1.innerText = acText;
        wronganswer2.innerText = bcText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = bdText;
        wronganswer6.innerText = aeText;
        wronganswer7.innerText = beText;
        wronganswer8.innerText = ceText;
        wronganswer9.innerText = deText;
    }else if(answer.value == "イ、オ"){
        wronganswer1.innerText = acText;
        wronganswer2.innerText = bcText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = bdText;
        wronganswer6.innerText = aeText;
        wronganswer7.innerText = cdText;
        wronganswer8.innerText = ceText;
        wronganswer9.innerText = deText;
    }else if(answer.value == "ウ、オ"){
        wronganswer1.innerText = acText;
        wronganswer2.innerText = bcText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = bdText;
        wronganswer6.innerText = aeText;
        wronganswer7.innerText = beText;
        wronganswer8.innerText = cdText;
        wronganswer9.innerText = deText;
    }else if(answer.value == "エ、オ"){
        wronganswer1.innerText = acText;
        wronganswer2.innerText = bcText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = bdText;
        wronganswer6.innerText = aeText;
        wronganswer7.innerText = beText;
        wronganswer8.innerText = ceText;
        wronganswer9.innerText = cdText;
    }else if(answer.value == "ア、オ"){
        wronganswer1.innerText = acText;
        wronganswer2.innerText = bcText;
        wronganswer3.innerText = adText;
        wronganswer4.innerText = abText;
        wronganswer5.innerText = bdText;
        wronganswer6.innerText = cdText;
        wronganswer7.innerText = beText;
        wronganswer8.innerText = ceText;
        wronganswer9.innerText = deText;
    }else{

    }
  }

  function threeOfFive() {
    answer = document.getElementById("id_answer");
    wronganswer1 = document.getElementById("id_wronganswer1");
    wronganswer2 = document.getElementById("id_wronganswer2");
    wronganswer3 = document.getElementById("id_wronganswer3");
    wronganswer4 = document.getElementById("id_wronganswer4");
    wronganswer5 = document.getElementById("id_wronganswer5");
    wronganswer6 = document.getElementById("id_wronganswer6");
    wronganswer7 = document.getElementById("id_wronganswer7");
    wronganswer8 = document.getElementById("id_wronganswer8");
    wronganswer9 = document.getElementById("id_wronganswer9");
   
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

    document.querySelector('.yokonarabi p:nth-child(10)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(11)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(12)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(13)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(14)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(15)').style.display = "block";

    if(answer.value == "A, B, C"){
        wronganswer1.innerText = abdText;
        wronganswer2.innerText = abeText;
        wronganswer3.innerText = acdText;
        wronganswer4.innerText = aceText;
        wronganswer5.innerText = adeText;
        wronganswer6.innerText = bcdText;
        wronganswer7.innerText = bceText;
        wronganswer8.innerText = bdeText;
        wronganswer9.innerText = cdeText;
    }else if(answer.value == "A, B, D"){
        wronganswer1.innerText = abcText;
        wronganswer2.innerText = abeText;
        wronganswer3.innerText = acdText;
        wronganswer4.innerText = aceText;
        wronganswer5.innerText = adeText;
        wronganswer6.innerText = bcdText;
        wronganswer7.innerText = bceText;
        wronganswer8.innerText = bdeText;
        wronganswer9.innerText = cdeText;
    }else if(answer.value == "A, B, E"){
        wronganswer1.innerText = abcText;
        wronganswer2.innerText = abdText;
        wronganswer3.innerText = acdText;
        wronganswer4.innerText = aceText;
        wronganswer5.innerText = adeText;
        wronganswer6.innerText = bcdText;
        wronganswer7.innerText = bceText;
        wronganswer8.innerText = bdeText;
        wronganswer9.innerText = cdeText;
    }else if(answer.value == "A, C, D"){
        wronganswer1.innerText = abcText;
        wronganswer2.innerText = abdText;
        wronganswer3.innerText = abeText;
        wronganswer4.innerText = aceText;
        wronganswer5.innerText = adeText;
        wronganswer6.innerText = bcdText;
        wronganswer7.innerText = bceText;
        wronganswer8.innerText = bdeText;
        wronganswer9.innerText = cdeText;
    }else if(answer.value == "A, C, E"){
        wronganswer1.innerText = abcText;
        wronganswer2.innerText = abdText;
        wronganswer3.innerText = abeText;
        wronganswer4.innerText = acdText;
        wronganswer5.innerText = adeText;
        wronganswer6.innerText = bcdText;
        wronganswer7.innerText = bceText;
        wronganswer8.innerText = bdeText;
        wronganswer9.innerText = cdeText;
    }else if(answer.value == "B, C, D"){
        wronganswer1.innerText = abcText;
        wronganswer2.innerText = abdText;
        wronganswer3.innerText = abeText;
        wronganswer4.innerText = acdText;
        wronganswer5.innerText = aceText;
        wronganswer6.innerText = adeText;
        wronganswer7.innerText = bceText;
        wronganswer8.innerText = bdeText;
        wronganswer9.innerText = cdeText;
    }else if(answer.value == "B, C, E"){
        wronganswer1.innerText = abcText;
        wronganswer2.innerText = abdText;
        wronganswer3.innerText = abeText;
        wronganswer4.innerText = acdText;
        wronganswer5.innerText = aceText;
        wronganswer6.innerText = adeText;
        wronganswer7.innerText = bcdText;
        wronganswer8.innerText = bdeText;
        wronganswer9.innerText = cdeText;
    }else if(answer.value == "B, D, E"){
        wronganswer1.innerText = abcText;
        wronganswer2.innerText = abdText;
        wronganswer3.innerText = abeText;
        wronganswer4.innerText = acdText;
        wronganswer5.innerText = aceText;
        wronganswer6.innerText = adeText;
        wronganswer7.innerText = bcdText;
        wronganswer8.innerText = bceText;
        wronganswer9.innerText = cdeText;
    }else if(answer.value == "C, D, E"){
        wronganswer1.innerText = abcText;
        wronganswer2.innerText = abdText;
        wronganswer3.innerText = abeText;
        wronganswer4.innerText = acdText;
        wronganswer5.innerText = aceText;
        wronganswer6.innerText = adeText;
        wronganswer7.innerText = bcdText;
        wronganswer8.innerText = bceText;
        wronganswer9.innerText = bdeText;
    }else if(answer.value == "A, D, E"){
        wronganswer1.innerText = abcText;
        wronganswer2.innerText = abdText;
        wronganswer3.innerText = abeText;
        wronganswer4.innerText = acdText;
        wronganswer5.innerText = aceText;
        wronganswer6.innerText = bcdText;
        wronganswer7.innerText = bceText;
        wronganswer8.innerText = bdeText;
        wronganswer9.innerText = cdeText;
    }else{

    }
  }

  function threeOfFiveAiueo() {
    answer = document.getElementById("id_answer");
    wronganswer1 = document.getElementById("id_wronganswer1");
    wronganswer2 = document.getElementById("id_wronganswer2");
    wronganswer3 = document.getElementById("id_wronganswer3");
    wronganswer4 = document.getElementById("id_wronganswer4");
    wronganswer5 = document.getElementById("id_wronganswer5");
    wronganswer6 = document.getElementById("id_wronganswer6");
    wronganswer7 = document.getElementById("id_wronganswer7");
    wronganswer8 = document.getElementById("id_wronganswer8");
    wronganswer9 = document.getElementById("id_wronganswer9");
   
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

    document.querySelector('.yokonarabi p:nth-child(10)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(11)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(12)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(13)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(14)').style.display = "block";
    document.querySelector('.yokonarabi p:nth-child(15)').style.display = "block";

    if(answer.value == "ア、イ、ウ"){
        wronganswer1.innerText = abdText;
        wronganswer2.innerText = abeText;
        wronganswer3.innerText = acdText;
        wronganswer4.innerText = aceText;
        wronganswer5.innerText = adeText;
        wronganswer6.innerText = bcdText;
        wronganswer7.innerText = bceText;
        wronganswer8.innerText = bdeText;
        wronganswer9.innerText = cdeText;
    }else if(answer.value == "ア、イ、エ"){
        wronganswer1.innerText = abcText;
        wronganswer2.innerText = abeText;
        wronganswer3.innerText = acdText;
        wronganswer4.innerText = aceText;
        wronganswer5.innerText = adeText;
        wronganswer6.innerText = bcdText;
        wronganswer7.innerText = bceText;
        wronganswer8.innerText = bdeText;
        wronganswer9.innerText = cdeText;
    }else if(answer.value == "ア、イ、オ"){
        wronganswer1.innerText = abcText;
        wronganswer2.innerText = abdText;
        wronganswer3.innerText = acdText;
        wronganswer4.innerText = aceText;
        wronganswer5.innerText = adeText;
        wronganswer6.innerText = bcdText;
        wronganswer7.innerText = bceText;
        wronganswer8.innerText = bdeText;
        wronganswer9.innerText = cdeText;
    }else if(answer.value == "ア、ウ、エ"){
        wronganswer1.innerText = abcText;
        wronganswer2.innerText = abdText;
        wronganswer3.innerText = abeText;
        wronganswer4.innerText = aceText;
        wronganswer5.innerText = adeText;
        wronganswer6.innerText = bcdText;
        wronganswer7.innerText = bceText;
        wronganswer8.innerText = bdeText;
        wronganswer9.innerText = cdeText;
    }else if(answer.value == "ア、ウ、オ"){
        wronganswer1.innerText = abcText;
        wronganswer2.innerText = abdText;
        wronganswer3.innerText = abeText;
        wronganswer4.innerText = acdText;
        wronganswer5.innerText = adeText;
        wronganswer6.innerText = bcdText;
        wronganswer7.innerText = bceText;
        wronganswer8.innerText = bdeText;
        wronganswer9.innerText = cdeText;
    }else if(answer.value == "イ、ウ、エ"){
        wronganswer1.innerText = abcText;
        wronganswer2.innerText = abdText;
        wronganswer3.innerText = abeText;
        wronganswer4.innerText = acdText;
        wronganswer5.innerText = aceText;
        wronganswer6.innerText = adeText;
        wronganswer7.innerText = bceText;
        wronganswer8.innerText = bdeText;
        wronganswer9.innerText = cdeText;
    }else if(answer.value == "イ、ウ、オ"){
        wronganswer1.innerText = abcText;
        wronganswer2.innerText = abdText;
        wronganswer3.innerText = abeText;
        wronganswer4.innerText = acdText;
        wronganswer5.innerText = aceText;
        wronganswer6.innerText = adeText;
        wronganswer7.innerText = bcdText;
        wronganswer8.innerText = bdeText;
        wronganswer9.innerText = cdeText;
    }else if(answer.value == "イ、エ、オ"){
        wronganswer1.innerText = abcText;
        wronganswer2.innerText = abdText;
        wronganswer3.innerText = abeText;
        wronganswer4.innerText = acdText;
        wronganswer5.innerText = aceText;
        wronganswer6.innerText = adeText;
        wronganswer7.innerText = bcdText;
        wronganswer8.innerText = bceText;
        wronganswer9.innerText = cdeText;
    }else if(answer.value == "ウ、エ、オ"){
        wronganswer1.innerText = abcText;
        wronganswer2.innerText = abdText;
        wronganswer3.innerText = abeText;
        wronganswer4.innerText = acdText;
        wronganswer5.innerText = aceText;
        wronganswer6.innerText = adeText;
        wronganswer7.innerText = bcdText;
        wronganswer8.innerText = bceText;
        wronganswer9.innerText = bdeText;
    }else if(answer.value == "ア、エ、オ"){
        wronganswer1.innerText = abcText;
        wronganswer2.innerText = abdText;
        wronganswer3.innerText = abeText;
        wronganswer4.innerText = acdText;
        wronganswer5.innerText = aceText;
        wronganswer6.innerText = bcdText;
        wronganswer7.innerText = bceText;
        wronganswer8.innerText = bdeText;
        wronganswer9.innerText = cdeText;
    }else{

    }
  }

  function aiue() {
    answer = document.getElementById("id_answer");
    wronganswer1 = document.getElementById("id_wronganswer1");
    wronganswer2 = document.getElementById("id_wronganswer2");
    wronganswer3 = document.getElementById("id_wronganswer3");
    
    aText = "ア";
    iText = "イ";
    uText = "ウ";
    eText = "エ";

    /*document.querySelector('.yokonarabi p:nth-child(10)').style.display = "block";*/
    
    if(answer.value == "ア"){
        wronganswer1.innerText = iText;
        wronganswer2.innerText = uText;
        wronganswer3.innerText = eText;
        
    }else if(answer.value == "イ"){
        wronganswer1.innerText = aText;
        wronganswer2.innerText = uText;
        wronganswer3.innerText = eText;
        
    }else if(answer.value == "ウ"){
        wronganswer1.innerText = aText;
        wronganswer2.innerText = iText;
        wronganswer3.innerText = eText;
        
    }else if(answer.value == "エ"){
        wronganswer1.innerText = aText;
        wronganswer2.innerText = iText;
        wronganswer3.innerText = uText;
        
    }else{

    }
  }

  function abcd() {
    answer = document.getElementById("id_answer");
    wronganswer1 = document.getElementById("id_wronganswer1");
    wronganswer2 = document.getElementById("id_wronganswer2");
    wronganswer3 = document.getElementById("id_wronganswer3");
    
    aText = "A";
    bText = "B";
    cText = "C";
    dText = "D";

    /*document.querySelector('.yokonarabi p:nth-child(10)').style.display = "block";*/
    
    if(answer.value == "A"){
        wronganswer1.innerText = bText;
        wronganswer2.innerText = cText;
        wronganswer3.innerText = dText;
        
    }else if(answer.value == "B"){
        wronganswer1.innerText = aText;
        wronganswer2.innerText = cText;
        wronganswer3.innerText = dText;
        
    }else if(answer.value == "C"){
        wronganswer1.innerText = aText;
        wronganswer2.innerText = bText;
        wronganswer3.innerText = dText;
        
    }else if(answer.value == "D"){
        wronganswer1.innerText = aText;
        wronganswer2.innerText = bText;
        wronganswer3.innerText = cText;
        
    }else{

    }
  }

function appearAuto() {
   
    categoryAuto = document.getElementById("id_category");
    shosekiAuto = document.getElementById("id_shoseki");
    
  
    if( shosekiAuto.innerText == 'Python3エンジニア認定基礎試験問題集' ) {
        categoryAutoText = 'Python3エンジニア認定基礎試験';
        categoryAuto.innerText = categoryAutoText;
        }
}