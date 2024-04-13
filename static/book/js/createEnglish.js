let sentense1Auto = document.getElementById("id_sentense1");
let sentense2Auto = document.getElementById("id_sentense2");
let sentense3Auto = document.getElementById("id_sentense3");
let sentense4Auto = document.getElementById("id_sentense4");
let sentense5Auto = document.getElementById("id_sentense5");
let sentense6Auto = document.getElementById("id_sentense6");
let sentense7Auto = document.getElementById("id_sentense7");
let sentense8Auto = document.getElementById("id_sentense8");
let sentense9Auto = document.getElementById("id_sentense9");
let sentense10Auto = document.getElementById("id_sentense10");
let sentense11Auto = document.getElementById("id_sentense11");
let sentense12Auto = document.getElementById("id_sentense12");
let sentense13Auto = document.getElementById("id_sentense13");
let sentense14Auto = document.getElementById("id_sentense14");
let sentense15Auto = document.getElementById("id_sentense15");
let sentense16Auto = document.getElementById("id_sentense16");
let sentense17Auto = document.getElementById("id_sentense17");
let sentense18Auto = document.getElementById("id_sentense18");
let sentense19Auto = document.getElementById("id_sentense19");
let sentense20Auto = document.getElementById("id_sentense20");

//6/4
function divideSentense(){

    let para = String(document.getElementById("id_paragraph").value);
    let dividedList = para.split('.',20);
    sentense1Auto.innerText = dividedList[0];
    sentense2Auto.innerText = dividedList[1];
    sentense3Auto.innerText = dividedList[2];
    sentense4Auto.innerText = dividedList[3];
    sentense5Auto.innerText = dividedList[4];
    sentense6Auto.innerText = dividedList[5];
    sentense7Auto.innerText = dividedList[6];
    sentense8Auto.innerText = dividedList[7];
    sentense9Auto.innerText = dividedList[8];
    sentense10Auto.innerText = dividedList[9];
    sentense11Auto.innerText = dividedList[10];
    sentense12Auto.innerText = dividedList[11];
    sentense13Auto.innerText = dividedList[12];
    sentense14Auto.innerText = dividedList[13];
    sentense15Auto.innerText = dividedList[14];
    sentense16Auto.innerText = dividedList[15];
    sentense17Auto.innerText = dividedList[16];
    sentense18Auto.innerText = dividedList[17];
    sentense19Auto.innerText = dividedList[18];
    sentense20Auto.innerText = dividedList[19];


}

/*7/4*/
 //textareaの要素取得
 let textarea = document.getElementById('id_title');
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


 let teAria = document.getElementById('id_paragraph');
 let ch0 = teAria.clientHeight;
 teAria.addEventListener('input', ()=>{
     teAria.style.height = ch0 + 'px';
     let sh0 = teAria.scrollHeight;
     teAria.style.height = sh0 + 'px';
 });



 let teAria1 = document.getElementById('id_sentense1');
 let ch1 = teAria1.clientHeight;
 teAria1.addEventListener('input', ()=>{
     teAria1.style.height = ch1 + 'px';
     let sh1 = teAria1.scrollHeight;
     teAria1.style.height = sh1 + 'px';
 });
 let teAria1y = document.getElementById('id_japanese1');
 let ch1y = teAria1y.clientHeight;
 teAria1y.addEventListener('input', ()=>{
     teAria1y.style.height = ch1y + 'px';
     let sh1y = teAria1y.scrollHeight;
     teAria1y.style.height = sh1y + 'px';
 });


 let teAria2 = document.getElementById('id_sentense2');
 let ch2 = teAria2.clientHeight;
 teAria2.addEventListener('input', ()=>{
     teAria2.style.height = ch2 + 'px';
     let sh2 = teAria2.scrollHeight;
     teAria2.style.height = sh2 + 'px';
 });
 let teAria2y = document.getElementById('id_japanese2');
 let ch2y = teAria2y.clientHeight;
 teAria2y.addEventListener('input', ()=>{
     teAria2y.style.height = ch2y + 'px';
     let sh2y = teAria2y.scrollHeight;
     teAria2y.style.height = sh2y + 'px';
 });



 let teAria3 = document.getElementById('id_sentense3');
 let ch3 = teAria3.clientHeight;
 teAria3.addEventListener('input', ()=>{
     teAria3.style.height = ch3 + 'px';
     let sh3 = teAria3.scrollHeight;
     teAria3.style.height = sh3 + 'px';
 });
 let teAria3y = document.getElementById('id_japanese3');
 let ch3y = teAria3y.clientHeight;
 teAria3y.addEventListener('input', ()=>{
     teAria3y.style.height = ch3y + 'px';
     let sh3y = teAria3y.scrollHeight;
     teAria3y.style.height = sh3y + 'px';
 });



 let teAria4 = document.getElementById('id_sentense4');
 let ch4 = teAria4.clientHeight;
 teAria4.addEventListener('input', ()=>{
     teAria4.style.height = ch4 + 'px';
     let sh4 = teAria4.scrollHeight;
     teAria4.style.height = sh4 + 'px';
 });
 let teAria4y = document.getElementById('id_japanese4');
 let ch4y = teAria4y.clientHeight;
 teAria4y.addEventListener('input', ()=>{
     teAria4y.style.height = ch4y + 'px';
     let sh4y = teAria4y.scrollHeight;
     teAria4y.style.height = sh4y + 'px';
 });



 let teAria5 = document.getElementById('id_sentense5');
 let ch5 = teAria5.clientHeight;
 teAria5.addEventListener('input', ()=>{
     teAria5.style.height = ch5 + 'px';
     let sh5 = teAria5.scrollHeight;
     teAria5.style.height = sh5 + 'px';
 });
 let teAria5y = document.getElementById('id_japanese5');
 let ch5y = teAria5y.clientHeight;
 teAria5y.addEventListener('input', ()=>{
     teAria5y.style.height = ch5y + 'px';
     let sh5y = teAria5y.scrollHeight;
     teAria5y.style.height = sh5y + 'px';
 });


 let teAria6 = document.getElementById('id_sentense6');
 let ch6 = teAria6.clientHeight;
 teAria6.addEventListener('input', ()=>{
     teAria6.style.height = ch6 + 'px';
     let sh6 = teAria6.scrollHeight;
     teAria6.style.height = sh6 + 'px';
 });
 let teAria6y = document.getElementById('id_japanese6');
 let ch6y = teAria6y.clientHeight;
 teAria6y.addEventListener('input', ()=>{
     teAria6y.style.height = ch6y + 'px';
     let sh6y = teAria6y.scrollHeight;
     teAria6y.style.height = sh6y + 'px';
 });


 let teAria7 = document.getElementById('id_sentense7');
 let ch7 = teAria7.clientHeight;
 teAria7.addEventListener('input', ()=>{
     teAria7.style.height = ch7 + 'px';
     let sh7 = teAria7.scrollHeight;
     teAria7.style.height = sh7 + 'px';
 });
 let teAria7y = document.getElementById('id_japanese7');
 let ch7y = teAria7y.clientHeight;
 teAria7y.addEventListener('input', ()=>{
     teAria7y.style.height = ch7y + 'px';
     let sh7y = teAria7y.scrollHeight;
     teAria7y.style.height = sh7y + 'px';
 });



 let teAria8 = document.getElementById('id_sentense8');
 let ch8 = teAria8.clientHeight;
 teAria8.addEventListener('input', ()=>{
     teAria8.style.height = ch8 + 'px';
     let sh8 = teAria8.scrollHeight;
     teAria8.style.height = sh8 + 'px';
 });
 let teAria8y = document.getElementById('id_japanese8');
 let ch8y = teAria8y.clientHeight;
 teAria8y.addEventListener('input', ()=>{
     teAria8y.style.height = ch8y + 'px';
     let sh8y = teAria8y.scrollHeight;
     teAria8y.style.height = sh8y + 'px';
 });



 let teAria9 = document.getElementById('id_sentense9');
 let ch9 = teAria9.clientHeight;
 teAria9.addEventListener('input', ()=>{
     teAria9.style.height = ch9 + 'px';
     let sh9 = teAria9.scrollHeight;
     teAria9.style.height = sh9 + 'px';
 });
 let teAria9y = document.getElementById('id_japanese9');
 let ch9y = teAria9y.clientHeight;
 teAria9y.addEventListener('input', ()=>{
     teAria9y.style.height = ch9y + 'px';
     let sh9y = teAria9y.scrollHeight;
     teAria9y.style.height = sh9y + 'px';
 });



 let teAria10 = document.getElementById('id_sentense10');
 let ch10 = teAria10.clientHeight;
 teAria10.addEventListener('input', ()=>{
     teAria10.style.height = ch10 + 'px';
     let sh10 = teAria10.scrollHeight;
     teAria10.style.height = sh10 + 'px';
 });
 let teAria10y = document.getElementById('id_japanese10');
 let ch10y = teAria10y.clientHeight;
 teAria10y.addEventListener('input', ()=>{
     teAria10y.style.height = ch10y + 'px';
     let sh10y = teAria10y.scrollHeight;
     teAria10y.style.height = sh10y + 'px';
 });



 let teAria11 = document.getElementById('id_sentense11');
 let ch11 = teAria11.clientHeight;
 teAria11.addEventListener('input', ()=>{
     teAria11.style.height = ch11 + 'px';
     let sh11 = teAria11.scrollHeight;
     teAria11.style.height = sh11 + 'px';
 });
 let teAria11y = document.getElementById('id_japanese11');
 let ch11y = teAria11y.clientHeight;
 teAria11y.addEventListener('input', ()=>{
     teAria11y.style.height = ch11y + 'px';
     let sh11y = teAria11y.scrollHeight;
     teAria11y.style.height = sh11y + 'px';
 });



 let teAria12 = document.getElementById('id_sentense12');
 let ch12 = teAria12.clientHeight;
 teAria12.addEventListener('input', ()=>{
     teAria12.style.height = ch12 + 'px';
     let sh12 = teAria12.scrollHeight;
     teAria12.style.height = sh12 + 'px';
 });
 let teAria12y = document.getElementById('id_japanese12');
 let ch12y = teAria12y.clientHeight;
 teAria12y.addEventListener('input', ()=>{
     teAria12y.style.height = ch12y + 'px';
     let sh12y = teAria12y.scrollHeight;
     teAria12y.style.height = sh12y + 'px';
 });



 let teAria13 = document.getElementById('id_sentense13');
 let ch13 = teAria13.clientHeight;
 teAria13.addEventListener('input', ()=>{
     teAria13.style.height = ch13 + 'px';
     let sh13 = teAria13.scrollHeight;
     teAria13.style.height = sh13 + 'px';
 });
 let teAria13y = document.getElementById('id_japanese13');
 let ch13y = teAria13y.clientHeight;
 teAria13y.addEventListener('input', ()=>{
     teAria13y.style.height = ch13y + 'px';
     let sh13y = teAria13y.scrollHeight;
     teAria13y.style.height = sh13y + 'px';
 });




 let teAria14 = document.getElementById('id_sentense14');
 let ch14 = teAria14.clientHeight;
 teAria14.addEventListener('input', ()=>{
     teAria14.style.height = ch14 + 'px';
     let sh14 = teAria14.scrollHeight;
     teAria14.style.height = sh14 + 'px';
 });
 let teAria14y = document.getElementById('id_japanese14');
 let ch14y = teAria14y.clientHeight;
 teAria14y.addEventListener('input', ()=>{
     teAria14y.style.height = ch14y + 'px';
     let sh14y = teAria14y.scrollHeight;
     teAria14y.style.height = sh14y + 'px';
 });



 let teAria15 = document.getElementById('id_sentense15');
 let ch15 = teAria15.clientHeight;
 teAria15.addEventListener('input', ()=>{
     teAria15.style.height = ch15 + 'px';
     let sh15 = teAria15.scrollHeight;
     teAria15.style.height = sh15 + 'px';
 });
 let teAria15y = document.getElementById('id_japanese15');
 let ch15y = teAria15y.clientHeight;
 teAria15y.addEventListener('input', ()=>{
     teAria15y.style.height = ch15y + 'px';
     let sh15y = teAria15y.scrollHeight;
     teAria15y.style.height = sh15y + 'px';
 });



 let teAria16 = document.getElementById('id_sentense16');
 let ch16 = teAria16.clientHeight;
 teAria16.addEventListener('input', ()=>{
     teAria16.style.height = ch16 + 'px';
     let sh16 = teAria16.scrollHeight;
     teAria16.style.height = sh16 + 'px';
 });
 let teAria16y = document.getElementById('id_japanese16');
 let ch16y = teAria16y.clientHeight;
 teAria16y.addEventListener('input', ()=>{
     teAria16y.style.height = ch16y + 'px';
     let sh16y = teAria16y.scrollHeight;
     teAria16y.style.height = sh16y + 'px';
 });



 let teAria17 = document.getElementById('id_sentense17');
 let ch17 = teAria17.clientHeight;
 teAria17.addEventListener('input', ()=>{
     teAria17.style.height = ch17 + 'px';
     let sh17 = teAria17.scrollHeight;
     teAria17.style.height = sh17 + 'px';
 });
 let teAria17y = document.getElementById('id_japanese17');
 let ch17y = teAria17y.clientHeight;
 teAria17y.addEventListener('input', ()=>{
     teAria17y.style.height = ch17y + 'px';
     let sh17y = teAria17y.scrollHeight;
     teAria17y.style.height = sh17y + 'px';
 });



 let teAria18 = document.getElementById('id_sentense18');
 let ch18 = teAria18.clientHeight;
 teAria18.addEventListener('input', ()=>{
     teAria18.style.height = ch18 + 'px';
     let sh18 = teAria18.scrollHeight;
     teAria18.style.height = sh18 + 'px';
 });
 let teAria18y = document.getElementById('id_japanese18');
 let ch18y = teAria18y.clientHeight;
 teAria18y.addEventListener('input', ()=>{
     teAria18y.style.height = ch18y + 'px';
     let sh18y = teAria18y.scrollHeight;
     teAria18y.style.height = sh18y + 'px';
 });



 let teAria19 = document.getElementById('id_sentense19');
 let ch19 = teAria19.clientHeight;
 teAria19.addEventListener('input', ()=>{
     teAria19.style.height = ch19 + 'px';
     let sh19 = teAria19.scrollHeight;
     teAria19.style.height = sh19 + 'px';
 });
 let teAria19y = document.getElementById('id_japanese19');
 let ch19y = teAria19y.clientHeight;
 teAria19y.addEventListener('input', ()=>{
     teAria19y.style.height = ch19y + 'px';
     let sh19y = teAria19y.scrollHeight;
     teAria19y.style.height = sh19y + 'px';
 });



 let teAria20 = document.getElementById('id_sentense20');
 let ch20 = teAria20.clientHeight;
 teAria20.addEventListener('input', ()=>{
     teAria20.style.height = ch20 + 'px';
     let sh20 = teAria20.scrollHeight;
     teAria20.style.height = sh20 + 'px';
 });
 let teAria20y = document.getElementById('id_japanese20');
 let ch20y = teAria20y.clientHeight;
 teAria20y.addEventListener('input', ()=>{
     teAria20y.style.height = ch20y + 'px';
     let sh20y = teAria20y.scrollHeight;
     teAria20y.style.height = sh20y + 'px';
 });



 let teAriaex = document.getElementById('id_explanation');
 let chex = teAriaex.clientHeight;
 teAriaex.addEventListener('input', ()=>{
     teAriaex.style.height = chex + 'px';
     let shex = teAriaex.scrollHeight;
     teAriaex.style.height = shex + 'px';
 });
