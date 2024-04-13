//textareaの要素取得
let textarea = document.getElementById('id_text');
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


$(function() {
    $('input[id^="id_expendingCost"]').change(function() {
        //inputタグの値を取得
        let val01 = $("input#id_expendingCost1").val();
        let val02 = $("input#id_expendingCost2").val();
        let val03 = $("input#id_expendingCost3").val();
        let val04 = $("input#id_expendingCost4").val();
        let val05 = $("input#id_expendingCost5").val();

        /*var val02 = $('#id_expendingCost2').text();
        var val03 = $('#id_expendingCost3').text();
        var val04 = $('#id_expendingCost4').text();
        var val05 = $('#id_expendingCost5').text();*/
    
        //取得した値がない場合は「0」を入れる←※ココ大事！
        /*val01 = val01 == '' ? 0 : val01;
        val02 = val02 == '' ? 0 : val02;
        val03 = val03 == '' ? 0 : val03;
        val04 = val04 == '' ? 0 : val04;
        val05 = val05 == '' ? 0 : val05;*/
    
        //整数値に変換し足し算をします。
        let val = parseInt(val01) + parseInt(val02) + parseInt(val03) + parseInt(val04) + parseInt(val05);
        /*var val = Math.trunc(val01) + 4 + 5+ 5 +6*/
        /*let val = parseInt(val01)*/

        //idがtotalの要素にテキストを書き換えます。
        $('#total').text(val);
    });
});

