let select = document.querySelector('[name="input_shoseki"]');

let categoryAuto = document.getElementById("id_category");
let shosekiAuto = document.getElementById("id_shoseki");

select.onchange = event => { 
  // console.log(select.selectedIndex);
  if(select.value == 'Python3エンジニア認定基礎試験問題集' || select.value == 'Python3エンジニア認定基礎試験Web問題') {
        let categoryAutoText = 'Python3エンジニア認定基礎試験';
        categoryAuto.value = categoryAutoText;
    }else if(select.value == 'スッキリわかるPython入門'){
        let categoryAutoText = 'Python(全般)';
        categoryAuto.value = categoryAutoText;
    }else if(select.value == 'キタミ式ITイラスト塾　応用情報技術者　令和03年' || select.value == '令和04年【春期】　応用情報技術者　過去問題集' || select.value == '応用情報技術者　試験によくでる問題集【午後】'){
        let categoryAutoText = 'AP';
        categoryAuto.value = categoryAutoText;
    }else if(select.value == 'データベーススペシャリスト教科書令和4年度'){
        let categoryAutoText = 'DATABASE SPECIALIST';
        categoryAuto.value = categoryAutoText;
    }else if(select.value == 'Python3エンジニア認定データ分析試験Web問題'){
        let categoryAutoText = 'Python3エンジニア認定データ分析試験';
        categoryAuto.value = categoryAutoText;
    }else if(select.value == 'ディープラーニングG検定ジェネラリスト要点整理テキスト&問題集'){
        let categoryAutoText = 'G検定';
        categoryAuto.value = categoryAutoText;
    }else if(select.value == 'LINUC教科書LINUCレベル1スピードマスター問題集 VERSION10.0対応'){
        let categoryAutoText = 'LinuC1';
        categoryAuto.value = categoryAutoText;
    }else if(select.value == 'LPICレベル1スピードマスター問題集'){
        let categoryAutoText = 'LPIC1';
        categoryAuto.value = categoryAutoText;
    }else if(select.value == '統計検定2級　模擬問題集1' || select.value == '統計検定2級　模擬問題集2' || select.value == '統計検定2級　模擬問題集3'){
        let categoryAutoText = '統計検定2級';
        categoryAuto.value = categoryAutoText;
    }else if(select.value == 'Bronze 12c SQL 基礎問題集'){
        let categoryAutoText = 'Bronze 12c SQL基礎';
        categoryAuto.value = categoryAutoText;
    }else if(select.value == 'Python3エンジニア認定実践試験Web問題'){
        let categoryAutoText = 'Python3エンジニア認定実践試験';
        categoryAuto.value = categoryAutoText;
    }else if(select.value == 'シェルワンライナー100本ノック'){
        let categoryAutoText = 'Linux';
        categoryAuto.value = categoryAutoText;
    }else if(select.value == 'Excel VBA スタンダード'){
        let categoryAutoText = 'Excel VBA';
        categoryAuto.value = categoryAutoText;
    }else if(select.value == '基本情報技術者らくらく突破 Python'){
        let categoryAutoText = 'FE';
        categoryAuto.value = categoryAutoText;
    }else if(select.value == 'キタミ式ITイラスト塾　基本情報技術者　令和02年'){
        let categoryAutoText = 'FE';
        categoryAuto.value = categoryAutoText;
    }else if(select.value == '情報セキュリティマネジメント教科書令和2年度'){
        let categoryAutoText = '情報セキュリティマネジメント';
        categoryAuto.value = categoryAutoText;
    }else if(select.value == 'Access VBA スタンダード'){
        let categoryAutoText = 'Access VBA';
        categoryAuto.value = categoryAutoText;
    }else if(select.value == '徹底攻略データサイエンティスト検定リテラシーレベル問題集'){
        let categoryAutoText = 'データ　サイエンティスト';
        categoryAuto.value = categoryAutoText;
    }else if(select.value == '徹底攻略ディープラーニングE資格エンジニア問題集'){
        let categoryAutoText = 'ディープラーニングE資格';
        categoryAuto.value = categoryAutoText;
    }else if(select.value == '徹底攻略 Java SE Bronze 問題集'){
        let categoryAutoText = 'JAVA';
        categoryAuto.value = categoryAutoText;
    }else if(select.value == 'スッキリわかるJava入門第3版'){
        let categoryAutoText = 'JAVA';
        categoryAuto.value = categoryAutoText;
    }else if(select.value == 'スッキリわかるサーブレット&JSP第3版'){
        let categoryAutoText = 'JAVA';
        categoryAuto.value = categoryAutoText;
    }else if(select.value == '新TOEIC TEST 頻出1200語&JSP第3版'){
        let categoryAutoText = 'TOEIC';
        categoryAuto.value = categoryAutoText;
    /*else{
        categoryAuto.value = '';
    }*/
    

}
}

// 7/29
/*
let sel1 = document.querySelector('[name="input_thumbnailBig1"]');
sel1.onchange = event => { 
     
    if(sel1.value != ''){
        document.querySelector('.bigBig p:nth-child(4)').style.display = "block";
        
    };
}
let sel2= document.querySelector('[name="input_thumbnailBig2"]');
sel2.onchange = event => { 
    
    if(sel2.value != ''){
        document.querySelector('.bigBig p:nth-child(5)').style.display = "block";
        
    };
}
let sel3= document.querySelector('[name="input_thumbnailBig3"]');
sel3.onchange = event => { 
    
    if(sel3.value != ''){
        document.querySelector('.bigBig p:nth-child(6)').style.display = "block";
        
    };
}
let sel4= document.querySelector('[name="input_thumbnailBig4"]');
sel4.onchange = event => { 
    
    if(sel4.value != ''){
        document.querySelector('.bigBig p:nth-child(7)').style.display = "block";
        
    };
}







let select2 = document.querySelector('[name="input_thumbnailQ1Small1"]');
select2.onchange = event => { 
    
    if(select2.value != ''){
        document.querySelector('.content1 p:nth-child(4)').style.display = "block";
        document.querySelector('.content1').style.overflow = "scroll";
    };
}
let select22= document.querySelector('[name="input_thumbnailQ2Small1"]');
select22.onchange = event => { 
    
    if(select22.value != ''){
        document.querySelector('.content1 p:nth-child(5)').style.display = "block";
        document.querySelector('.content1').style.overflow = "scroll";
    };
}


let se2 = document.querySelector('[name="input_thumbnailQ1Small2"]');
se2.onchange = event => { 
    
    if(se2.value != ''){
        document.querySelector('.content2 p:nth-child(4)').style.display = "block";
        document.querySelector('.content2').style.overflow = "scroll";
    };
}
let se22= document.querySelector('[name="input_thumbnailQ2Small2"]');
se22.onchange = event => { 
    
    if(se22.value != ''){
        document.querySelector('.content2 p:nth-child(5)').style.display = "block";
        document.querySelector('.content2').style.overflow = "scroll";
    };
}

let se3 = document.querySelector('[name="input_thumbnailQ1Small3"]');
se3.onchange = event => { 
    
    if(se3.value != ''){
        document.querySelector('.content3 p:nth-child(4)').style.display = "block";
        document.querySelector('.content3').style.overflow = "scroll";
    };
}
let se33= document.querySelector('[name="input_thumbnailQ2Small3"]');
se33.onchange = event => { 
    
    if(se33.value != ''){
        document.querySelector('.content3 p:nth-child(5)').style.display = "block";
        document.querySelector('.content3').style.overflow = "scroll";
    };
}

let se4 = document.querySelector('[name="input_thumbnailQ1Small4"]');
se4.onchange = event => { 
    
    if(se4.value != ''){
        document.querySelector('.content4 p:nth-child(4)').style.display = "block";
        document.querySelector('.content4').style.overflow = "scroll";
    };
}
let se44= document.querySelector('[name="input_thumbnailQ2Small4"]');
se44.onchange = event => { 
    
    if(se44.value != ''){
        document.querySelector('.content4 p:nth-child(5)').style.display = "block";
        document.querySelector('.content4').style.overflow = "scroll";
    };
}

let se5 = document.querySelector('[name="input_thumbnailQ1Small5"]');
se5.onchange = event => { 
    
    if(se5.value != ''){
        document.querySelector('.content5 p:nth-child(4)').style.display = "block";
        document.querySelector('.content5').style.overflow = "scroll";
    };
}
let se55= document.querySelector('[name="input_thumbnailQ2Small5"]');
se55.onchange = event => { 
    
    if(se55.value != ''){
        document.querySelector('.content5 p:nth-child(5)').style.display = "block";
        document.querySelector('.content5').style.overflow = "scroll";
    };
}

let se6 = document.querySelector('[name="input_thumbnailQ1Small6"]');
se6.onchange = event => { 
    
    if(se6.value != ''){
        document.querySelector('.content6 p:nth-child(4)').style.display = "block";
        document.querySelector('.content6').style.overflow = "scroll";
    };
}
let se66= document.querySelector('[name="input_thumbnailQ2Small6"]');
se33.onchange = event => { 
    
    if(se66.value != ''){
        document.querySelector('.content6 p:nth-child(5)').style.display = "block";
        document.querySelector('.content6').style.overflow = "scroll";
    };
}

let se7 = document.querySelector('[name="input_thumbnailQ1Small7"]');
se7.onchange = event => { 
    
    if(se7.value != ''){
        document.querySelector('.content7 p:nth-child(4)').style.display = "block";
        document.querySelector('.content7').style.overflow = "scroll";
    };
}
let se77= document.querySelector('[name="input_thumbnailQ2Small7"]');
se77.onchange = event => { 
    
    if(se77.value != ''){
        document.querySelector('.content7 p:nth-child(5)').style.display = "block";
        document.querySelector('.content7').style.overflow = "scroll";
    };
}

let se8 = document.querySelector('[name="input_thumbnailQ1Small8"]');
se8.onchange = event => { 
    
    if(se8.value != ''){
        document.querySelector('.content8 p:nth-child(4)').style.display = "block";
        document.querySelector('.content8').style.overflow = "scroll";
    };
}
let se88= document.querySelector('[name="input_thumbnailQ2Small8"]');
se88.onchange = event => { 
    
    if(se88.value != ''){
        document.querySelector('.content8 p:nth-child(5)').style.display = "block";
        document.querySelector('.content8').style.overflow = "scroll";
    };
}

let se9 = document.querySelector('[name="input_thumbnailQ1Small9"]');
se9.onchange = event => { 
    
    if(se9.value != ''){
        document.querySelector('.content9 p:nth-child(4)').style.display = "block";
        document.querySelector('.content9').style.overflow = "scroll";
    };
}
let se99= document.querySelector('[name="input_thumbnailQ2Small9"]');
se99.onchange = event => { 
    
    if(se99.value != ''){
        document.querySelector('.content9 p:nth-child(5)').style.display = "block";
        document.querySelector('.content9').style.overflow = "scroll";
    };
}

let se10 = document.querySelector('[name="input_thumbnailQ1Small10"]');
se10.onchange = event => { 
    
    if(se10.value != ''){
        document.querySelector('.content10 p:nth-child(4)').style.display = "block";
        document.querySelector('.content10').style.overflow = "scroll";
    };
}
let se1010= document.querySelector('[name="input_thumbnailQ2Small10"]');
se1010.onchange = event => { 
    
    if(se1010.value != ''){
        document.querySelector('.content10 p:nth-child(5)').style.display = "block";
        document.querySelector('.content10').style.overflow = "scroll";
    };
}




if(document.querySelector(`[name='switch1']`).checked == true){
    
}else{

    




let select3Small1 = document.querySelector('[name="input_wronganswer3Small1"]');
select3Small1.onchange = event => {     
    
    if(select3Small1.value != ''){
        document.querySelector('.yokonarabi p:nth-child(11)').style.display = "block";
       
        document.querySelector('.content1').style.overflow = "scroll";
        
    };
}

let select4Small1 = document.querySelector('[name="input_wronganswer4Small1"]');
select4Small1.onchange = event => {     
    if(select4Small1.value != ''){
        document.querySelector('.yokonarabi p:nth-child(12)').style.display = "block";  

        document.querySelector('.content1').style.overflow = "scroll";  
        
    };
}
let select5Small1 = document.querySelector('[name="input_wronganswer5Small1"]');
select5Small1.onchange = event => {     
    if(select5Small1.value != ''){
        document.querySelector('.yokonarabi p:nth-child(13)').style.display = "block";
        
        document.querySelector('.content1').style.overflow = "scroll";    
    };
}
let select6Small1 = document.querySelector('[name="input_wronganswer6Small1"]');
select6Small1.onchange = event => {     
    if(select6Small1.value != ''){
        document.querySelector('.yokonarabi p:nth-child(14)').style.display = "block";
        
        document.querySelector('.content1').style.overflow = "scroll";      
    };
}
let select7Small1 = document.querySelector('[name="input_wronganswer7Small1"]');
select7Small1.onchange = event => {     
    if(select7Small1.value != ''){
        document.querySelector('.yokonarabi p:nth-child(15)').style.display = "block";
        
        document.querySelector('.content1').style.overflow = "scroll";   
    };
}
let select8Small1 = document.querySelector('[name="input_wronganswer8Small1"]');
select8Small1.onchange = event => {     
    if(select8Small1.value != ''){
        document.querySelector('.yokonarabi p:nth-child(16)').style.display = "block";
        
        document.querySelector('.content1').style.overflow = "scroll";
    };
}
let select10Small1 = document.querySelector('[name="input_hint1Small1"]');
select10Small1.onchange = event => {     
    if(select10Small1.value != ''){
        document.querySelector('.yokonarabi p:nth-child(22)').style.display = "block";
        
        document.querySelector('.content1').style.overflow = "scroll";   
    };
}
let select23Small1 = document.querySelector('[name="input_thumbnailA1Small1"]');
select23Small1.onchange = event => {     
    if(select23Small1.value != ''){
        document.querySelector('.yokonarabi p:nth-child(19)').style.display = "block";
        
        document.querySelector('.content1').style.overflow = "scroll";
    };
}
let select24Small1 = document.querySelector('[name="input_thumbnailA2Small1"]');
select24Small1.onchange = event => {   
    if(select24Small1.value != ''){
        document.querySelector('.yokonarabi p:nth-child(20)').style.display = "block";
        
        document.querySelector('.content1').style.overflow = "scroll";
    };
}


let select3Small2 = document.querySelector('[name="input_wronganswer3Small2"]');
select3Small2.onchange = event => {     
    if(select3Small2.value != ''){
        document.querySelector('.content2 p:nth-child(11)').style.display = "block";
        document.querySelector('.content2').style.overflow = "scroll";    
    };
}
let select4Small2 = document.querySelector('[name="input_wronganswer4Small2"]');
select4Small2.onchange = event => {     
    if(select4Small2.value != ''){
        document.querySelector('.content2 p:nth-child(12)').style.display = "block";
        document.querySelector('.content2').style.overflow = "scroll";       
    };
}
let select5Small2 = document.querySelector('[name="input_wronganswer5Small2"]');
select5Small2.onchange = event => {     
    if(select5Small2.value != ''){
        document.querySelector('.content2 p:nth-child(13)').style.display = "block";
        document.querySelector('.content2').style.overflow = "scroll";      
    };
}
let select6Small2 = document.querySelector('[name="input_wronganswer6Small2"]');
select6Small2.onchange = event => {     
    if(select6Small2.value != ''){
        document.querySelector('.content2 p:nth-child(14)').style.display = "block";
        document.querySelector('.content2').style.overflow = "scroll";      
    };
}
let select7Small2 = document.querySelector('[name="input_wronganswer7Small2"]');
select7Small2.onchange = event => {     
    if(select7Small2.value != ''){
        document.querySelector('.content2 p:nth-child(15)').style.display = "block";
        document.querySelector('.content2').style.overflow = "scroll";      
    };
}
let select8Small2 = document.querySelector('[name="input_wronganswer8Small2"]');
select8Small2.onchange = event => {     
    if(select8Small2.value != ''){
        document.querySelector('.content2 p:nth-child(16)').style.display = "block";
        document.querySelector('.content2').style.overflow = "scroll";       
    };
}
let select10Small2 = document.querySelector('[name="input_hint1Small2"]');
select10Small2.onchange = event => {     
    if(select10Small2.value != ''){
        document.querySelector('.content2 p:nth-child(22)').style.display = "block";
        document.querySelector('.content2').style.overflow = "scroll";    
    };
}
let select23Small2 = document.querySelector('[name="input_thumbnailA1Small2"]');
select23Small2.onchange = event => {     
    if(select23Small2.value != ''){
        document.querySelector('.content2 p:nth-child(19)').style.display = "block";
        document.querySelector('.content2').style.overflow = "scroll";     
    };
}
let select24Small2 = document.querySelector('[name="input_thumbnailA2Small2"]');
select24Small2.onchange = event => {   
    if(select24Small2.value != ''){
        document.querySelector('.content2 p:nth-child(20)').style.display = "block";
        document.querySelector('.content2').style.overflow = "scroll";
    };
}


let select3Small3 = document.querySelector('[name="input_wronganswer3Small3"]');
select3Small3.onchange = event => {     
    if(select3Small3.value != ''){
        document.querySelector('.content3 p:nth-child(11)').style.display = "block";
        document.querySelector('.content3').style.overflow = "scroll";     
    };
}
let select4Small3 = document.querySelector('[name="input_wronganswer4Small3"]');
select4Small3.onchange = event => {     
    if(select4Small3.value != ''){
        document.querySelector('.content3 p:nth-child(12)').style.display = "block";
        document.querySelector('.content3').style.overflow = "scroll";      
    };
}
let select5Small3 = document.querySelector('[name="input_wronganswer5Small3"]');
select5Small3.onchange = event => {     
    if(select5Small3.value != ''){
        document.querySelector('.content3 p:nth-child(13)').style.display = "block";
        document.querySelector('.content3').style.overflow = "scroll";   
    };
}
let select6Small3 = document.querySelector('[name="input_wronganswer6Small3"]');
select6Small3.onchange = event => {     
    if(select6Small3.value != ''){
        document.querySelector('.content3 p:nth-child(14)').style.display = "block";
        document.querySelector('.content3').style.overflow = "scroll";       
    };
}
let select7Small3 = document.querySelector('[name="input_wronganswer7Small3"]');
select7Small3.onchange = event => {     
    if(select7Small3.value != ''){
        document.querySelector('.content3 p:nth-child(15)').style.display = "block";
        document.querySelector('.content3').style.overflow = "scroll";     
    };
}
let select8Small3 = document.querySelector('[name="input_wronganswer8Small3"]');
select8Small3.onchange = event => {     
    if(select8Small3.value != ''){
        document.querySelector('.content3 p:nth-child(16)').style.display = "block";
        document.querySelector('.content3').style.overflow = "scroll";      
    };
}
let select10Small3 = document.querySelector('[name="input_hint1Small3"]');
select10Small3.onchange = event => {     
    if(select10Small3.value != ''){
        document.querySelector('.content3 p:nth-child(22)').style.display = "block";
        document.querySelector('.content3').style.overflow = "scroll";   
    };
}
let select23Small3 = document.querySelector('[name="input_thumbnailA1Small3"]');
select23Small3.onchange = event => {     
    if(select23Small3.value != ''){
        document.querySelector('.content3 p:nth-child(19)').style.display = "block";
        document.querySelector('.content3').style.overflow = "scroll";     
    };
}
let select24Small3 = document.querySelector('[name="input_thumbnailA2Small3"]');
select24Small3.onchange = event => {   
    if(select24Small3.value != ''){
        document.querySelector('.content3 p:nth-child(20)').style.display = "block";
        document.querySelector('.content3').style.overflow = "scroll";
    };
}


let select3Small4 = document.querySelector('[name="input_wronganswer3Small4"]');
select3Small4.onchange = event => {     
    if(select3Small4.value != ''){
        document.querySelector('.content4 p:nth-child(11)').style.display = "block";
        document.querySelector('.content4').style.overflow = "scroll";    
    };
}
let select4Small4 = document.querySelector('[name="input_wronganswer4Small4"]');
select4Small4.onchange = event => {     
    if(select4Small4.value != ''){
        document.querySelector('.content4 p:nth-child(12)').style.display = "block";
        document.querySelector('.content4').style.overflow = "scroll";        
    };
}
let select5Small4 = document.querySelector('[name="input_wronganswer5Small4"]');
select5Small4.onchange = event => {     
    if(select5Small4.value != ''){
        document.querySelector('.content4 p:nth-child(13)').style.display = "block";
        document.querySelector('.content4').style.overflow = "scroll";       
    };
}
let select6Small4 = document.querySelector('[name="input_wronganswer6Small4"]');
select6Small4.onchange = event => {     
    if(select6Small4.value != ''){
        document.querySelector('.content4 p:nth-child(14)').style.display = "block";
        document.querySelector('.content4').style.overflow = "scroll";       
    };
}
let select7Small4 = document.querySelector('[name="input_wronganswer7Small4"]');
select7Small4.onchange = event => {     
    if(select7Small4.value != ''){
        document.querySelector('.content4 p:nth-child(15)').style.display = "block";
        document.querySelector('.content4').style.overflow = "scroll";    
    };
}
let select8Small4 = document.querySelector('[name="input_wronganswer8Small4"]');
select8Small4.onchange = event => {     
    if(select8Small4.value != ''){
        document.querySelector('.content4 p:nth-child(16)').style.display = "block";
        document.querySelector('.content4').style.overflow = "scroll";       
    };
}
let select10Small4 = document.querySelector('[name="input_hint1Small4"]');
select10Small4.onchange = event => {     
    if(select10Small4.value != ''){
        document.querySelector('.content4 p:nth-child(22)').style.display = "block";
        document.querySelector('.content4').style.overflow = "scroll";       
    };
}
let select23Small4 = document.querySelector('[name="input_thumbnailA1Small4"]');
select23Small4.onchange = event => {     
    if(select23Small4.value != ''){
        document.querySelector('.content4 p:nth-child(19)').style.display = "block";
        document.querySelector('.content4').style.overflow = "scroll";     
    };
}
let select24Small4 = document.querySelector('[name="input_thumbnailA2Small4"]');
select24Small4.onchange = event => {   
    if(select24Small4.value != ''){
        document.querySelector('.content4 p:nth-child(20)').style.display = "block";
        document.querySelector('.content4').style.overflow = "scroll";
    };
}


let select3Small5 = document.querySelector('[name="input_wronganswer3Small5"]');
select3Small5.onchange = event => {     
    if(select3Small5.value != ''){
        document.querySelector('.content5 p:nth-child(11)').style.display = "block";
        document.querySelector('.content5').style.overflow = "scroll";    
    };
}
let select4Small5 = document.querySelector('[name="input_wronganswer4Small5"]');
select4Small5.onchange = event => {     
    if(select4Small5.value != ''){
        document.querySelector('.content5 p:nth-child(12)').style.display = "block";
        document.querySelector('.content5').style.overflow = "scroll";       
    };
}
let select5Small5 = document.querySelector('[name="input_wronganswer5Small5"]');
select5Small5.onchange = event => {     
    if(select5Small5.value != ''){
        document.querySelector('.content5 p:nth-child(13)').style.display = "block";
        document.querySelector('.content5').style.overflow = "scroll";      
    };
}
let select6Small5 = document.querySelector('[name="input_wronganswer6Small5"]');
select6Small5.onchange = event => {     
    if(select6Small5.value != ''){
        document.querySelector('.content5 p:nth-child(14)').style.display = "block";
        document.querySelector('.content5').style.overflow = "scroll";      
    };
}
let select7Small5 = document.querySelector('[name="input_wronganswer7Small5"]');
select7Small5.onchange = event => {     
    if(select7Small5.value != ''){
        document.querySelector('.content5 p:nth-child(15)').style.display = "block";
        document.querySelector('.content5').style.overflow = "scroll";      
    };
}
let select8Small5 = document.querySelector('[name="input_wronganswer8Small5"]');
select8Small5.onchange = event => {     
    if(select8Small5.value != ''){
        document.querySelector('.content5 p:nth-child(16)').style.display = "block";
        document.querySelector('.content5').style.overflow = "scroll";      
    };
}
let select10Small5 = document.querySelector('[name="input_hint1Small5"]');
select10Small5.onchange = event => {     
    if(select10Small5.value != ''){
        document.querySelector('.content5 p:nth-child(22)').style.display = "block";
        document.querySelector('.content5').style.overflow = "scroll";      
    };
}
let select23Small5 = document.querySelector('[name="input_thumbnailA1Small5"]');
select23Small5.onchange = event => {     
    if(select23Small5.value != ''){
        document.querySelector('.content5 p:nth-child(19)').style.display = "block";
        document.querySelector('.content5').style.overflow = "scroll";     
    };
}
let select24Small5 = document.querySelector('[name="input_thumbnailA2Small5"]');
select24Small5.onchange = event => {   
    if(select24Small5.value != ''){
        document.querySelector('.content5 p:nth-child(20)').style.display = "block";
        document.querySelector('.content5').style.overflow = "scroll";
    };
}



let select3Small6 = document.querySelector('[name="input_wronganswer3Small6"]');
select3Small6.onchange = event => {     
    if(select3Small6.value != ''){
        document.querySelector('.content6 p:nth-child(11)').style.display = "block";
        document.querySelector('.content6').style.overflow = "scroll";    
    };
}
let select4Small6 = document.querySelector('[name="input_wronganswer4Small6"]');
select4Small6.onchange = event => {     
    if(select4Small6.value != ''){
        document.querySelector('.content6 p:nth-child(12)').style.display = "block";
        document.querySelector('.content6').style.overflow = "scroll";       
    };
}
let select5Small6 = document.querySelector('[name="input_wronganswer5Small6"]');
select5Small6.onchange = event => {     
    if(select5Small6.value != ''){
        document.querySelector('.content6 p:nth-child(13)').style.display = "block";
        document.querySelector('.content6').style.overflow = "scroll";      
    };
}
let select6Small6 = document.querySelector('[name="input_wronganswer6Small6"]');
select6Small6.onchange = event => {     
    if(select6Small6.value != ''){
        document.querySelector('.content6 p:nth-child(14)').style.display = "block";
        document.querySelector('.content6').style.overflow = "scroll";    
    };
}
let select7Small6 = document.querySelector('[name="input_wronganswer7Small6"]');
select7Small6.onchange = event => {     
    if(select7Small6.value != ''){
        document.querySelector('.content6 p:nth-child(15)').style.display = "block";
        document.querySelector('.content6').style.overflow = "scroll";     
    };
}
let select8Small6 = document.querySelector('[name="input_wronganswer8Small6"]');
select8Small6.onchange = event => {     
    if(select8Small6.value != ''){
        document.querySelector('.content6 p:nth-child(16)').style.display = "block";
        document.querySelector('.content6').style.overflow = "scroll";      
    };
}
let select10Small6 = document.querySelector('[name="input_hint1Small6"]');
select10Small6.onchange = event => {     
    if(select10Small6.value != ''){
        document.querySelector('.content6 p:nth-child(22)').style.display = "block";
        document.querySelector('.content6').style.overflow = "scroll";       
    };
}
let select23Small6 = document.querySelector('[name="input_thumbnailA1Small6"]');
select23Small6.onchange = event => {     
    if(select23Small6.value != ''){
        document.querySelector('.content6 p:nth-child(19)').style.display = "block";
        document.querySelector('.content6').style.overflow = "scroll";    
    };
}
let select24Small6 = document.querySelector('[name="input_thumbnailA2Small6"]');
select24Small6.onchange = event => {   
    if(select24Small6.value != ''){
        document.querySelector('.content6 p:nth-child(20)').style.display = "block";
        document.querySelector('.content6').style.overflow = "scroll";
    };
}


let select3Small7 = document.querySelector('[name="input_wronganswer3Small7"]');
select3Small7.onchange = event => {     
    if(select3Small7.value != ''){
        document.querySelector('.content7 p:nth-child(11)').style.display = "block";
        document.querySelector('.content7').style.overflow = "scroll";        
    };
}
let select4Small7 = document.querySelector('[name="input_wronganswer4Small7"]');
select4Small7.onchange = event => {     
    if(select4Small7.value != ''){
        document.querySelector('.content7 p:nth-child(12)').style.display = "block";
        document.querySelector('.content7').style.overflow = "scroll";       
    };
}
let select5Small7 = document.querySelector('[name="input_wronganswer5Small7"]');
select5Small7.onchange = event => {     
    if(select5Small7.value != ''){
        document.querySelector('.content7 p:nth-child(13)').style.display = "block";
        document.querySelector('.content7').style.overflow = "scroll";     
    };
}
let select6Small7 = document.querySelector('[name="input_wronganswer6Small7"]');
select6Small7.onchange = event => {     
    if(select6Small7.value != ''){
        document.querySelector('.content7 p:nth-child(14)').style.display = "block";
        document.querySelector('.content7').style.overflow = "scroll";      
    };
}
let select7Small7 = document.querySelector('[name="input_wronganswer7Small7"]');
select7Small7.onchange = event => {     
    if(select7Small7.value != ''){
        document.querySelector('.content7 p:nth-child(15)').style.display = "block";
        document.querySelector('.content7').style.overflow = "scroll";     
    };
}
let select8Small7 = document.querySelector('[name="input_wronganswer8Small7"]');
select8Small7.onchange = event => {     
    if(select8Small7.value != ''){
        document.querySelector('.content7 p:nth-child(16)').style.display = "block";
        document.querySelector('.content7').style.overflow = "scroll";      
    };
}
let select10Small7 = document.querySelector('[name="input_hint1Small7"]');
select10Small7.onchange = event => {     
    if(select10Small7.value != ''){
        document.querySelector('.content7 p:nth-child(22)').style.display = "block";
        document.querySelector('.content7').style.overflow = "scroll";     
    };
}
let select23Small7 = document.querySelector('[name="input_thumbnailA1Small7"]');
select23Small7.onchange = event => {     
    if(select23Small7.value != ''){
        document.querySelector('.content7 p:nth-child(19)').style.display = "block";
        document.querySelector('.content7').style.overflow = "scroll";     
    };
}
let select24Small7 = document.querySelector('[name="input_thumbnailA2Small7"]');
select24Small7.onchange = event => {   
    if(select24Small7.value != ''){
        document.querySelector('.content7 p:nth-child(20)').style.display = "block";
        document.querySelector('.content7').style.overflow = "scroll";
    };
}



let select3Small8 = document.querySelector('[name="input_wronganswer3Small8"]');
select3Small8.onchange = event => {     
    if(select3Small8.value != ''){
        document.querySelector('.content8 p:nth-child(11)').style.display = "block";
        document.querySelector('.content8').style.overflow = "scroll";      
    };
}
let select4Small8 = document.querySelector('[name="input_wronganswer4Small8"]');
select4Small8.onchange = event => {     
    if(select4Small8.value != ''){
        document.querySelector('.content8 p:nth-child(12)').style.display = "block";
        document.querySelector('.content8').style.overflow = "scroll";       
    };
}
let select5Small8 = document.querySelector('[name="input_wronganswer5Small8"]');
select5Small8.onchange = event => {     
    if(select5Small8.value != ''){
        document.querySelector('.content8 p:nth-child(13)').style.display = "block";
        document.querySelector('.content8').style.overflow = "scroll";       
    };
}
let select6Small8 = document.querySelector('[name="input_wronganswer6Small8"]');
select6Small8.onchange = event => {     
    if(select6Small8.value != ''){
        document.querySelector('.content8 p:nth-child(14)').style.display = "block";
        document.querySelector('.content8').style.overflow = "scroll";      
    };
}
let select7Small8 = document.querySelector('[name="input_wronganswer7Small8"]');
select7Small8.onchange = event => {     
    if(select7Small8.value != ''){
        document.querySelector('.content8 p:nth-child(15)').style.display = "block";
        document.querySelector('.content8').style.overflow = "scroll";    
    };
}
let select8Small8 = document.querySelector('[name="input_wronganswer8Small8"]');
select8Small8.onchange = event => {     
    if(select8Small8.value != ''){
        document.querySelector('.content8 p:nth-child(16)').style.display = "block";
        document.querySelector('.content8').style.overflow = "scroll";       
    };
}
let select10Small8 = document.querySelector('[name="input_hint1Small8"]');
select10Small8.onchange = event => {     
    if(select10Small8.value != ''){
        document.querySelector('.content8 p:nth-child(22)').style.display = "block";
        document.querySelector('.content8').style.overflow = "scroll";       
    };
}
let select23Small8 = document.querySelector('[name="input_thumbnailA1Small8"]');
select23Small8.onchange = event => {     
    if(select23Small8.value != ''){
        document.querySelector('.content8 p:nth-child(19)').style.display = "block";
        document.querySelector('.content8').style.overflow = "scroll";     
    };
}
let select24Small8 = document.querySelector('[name="input_thumbnailA2Small8"]');
select24Small8.onchange = event => {   
    if(select24Small8.value != ''){
        document.querySelector('.content8 p:nth-child(20)').style.display = "block";
        document.querySelector('.content8').style.overflow = "scroll";
    };
}


let select3Small9 = document.querySelector('[name="input_wronganswer3Small9"]');
select3Small9.onchange = event => {     
    if(select3Small9.value != ''){
        document.querySelector('.content9 p:nth-child(11)').style.display = "block";
        document.querySelector('.content9').style.overflow = "scroll";    
    };
}
let select4Small9 = document.querySelector('[name="input_wronganswer4Small9"]');
select4Small9.onchange = event => {     
    if(select4Small9.value != ''){
        document.querySelector('.content9 p:nth-child(12)').style.display = "block";
        document.querySelector('.content9').style.overflow = "scroll";       
    };
}
let select5Small9 = document.querySelector('[name="input_wronganswer5Small9"]');
select5Small9.onchange = event => {     
    if(select5Small9.value != ''){
        document.querySelector('.content9 p:nth-child(13)').style.display = "block";
        document.querySelector('.content9').style.overflow = "scroll";        
    };
}
let select6Small9 = document.querySelector('[name="input_wronganswer6Small9"]');
select6Small9.onchange = event => {     
    if(select6Small9.value != ''){
        document.querySelector('.content9 p:nth-child(14)').style.display = "block";
        document.querySelector('.content9').style.overflow = "scroll";       
    };
}
let select7Small9 = document.querySelector('[name="input_wronganswer7Small9"]');
select7Small9.onchange = event => {     
    if(select7Small9.value != ''){
        document.querySelector('.content9 p:nth-child(15)').style.display = "block";
        document.querySelector('.content9').style.overflow = "scroll";      
    };
}
let select8Small9 = document.querySelector('[name="input_wronganswer8Small9"]');
select8Small9.onchange = event => {     
    if(select8Small9.value != ''){
        document.querySelector('.content9 p:nth-child(16)').style.display = "block";
        document.querySelector('.content9').style.overflow = "scroll";       
    };
}
let select10Small9 = document.querySelector('[name="input_hint1Small9"]');
select10Small9.onchange = event => {     
    if(select10Small9.value != ''){
        document.querySelector('.content9 p:nth-child(22)').style.display = "block";
        document.querySelector('.content9').style.overflow = "scroll";       
    };
}
let select23Small9 = document.querySelector('[name="input_thumbnailA1Small9"]');
select23Small9.onchange = event => {     
    if(select23Small9.value != ''){
        document.querySelector('.content9 p:nth-child(19)').style.display = "block";
        document.querySelector('.content9').style.overflow = "scroll";    
    };
}
let select24Small9 = document.querySelector('[name="input_thumbnailA2Small9"]');
select24Small9.onchange = event => {   
    if(select24Small9.value != ''){
        document.querySelector('.content9 p:nth-child(20)').style.display = "block";
        document.querySelector('.content9').style.overflow = "scroll";
    };
}


let select3Small10 = document.querySelector('[name="input_wronganswer3Small10"]');
select3Small10.onchange = event => {     
    if(select3Small10.value != ''){
        document.querySelector('.content10 p:nth-child(11)').style.display = "block";
        document.querySelector('.content10').style.overflow = "scroll";    
    };
}
let select4Small10 = document.querySelector('[name="input_wronganswer4Small10"]');
select4Small10.onchange = event => {     
    if(select4Small10.value != ''){
        document.querySelector('.content10 p:nth-child(12)').style.display = "block";
        document.querySelector('.content10').style.overflow = "scroll";       
    };
}
let select5Small10 = document.querySelector('[name="input_wronganswer5Small10"]');
select5Small10.onchange = event => {     
    if(select5Small10.value != ''){
        document.querySelector('.content10 p:nth-child(13)').style.display = "block";
        document.querySelector('.content10').style.overflow = "scroll";        
    };
}
let select6Small10 = document.querySelector('[name="input_wronganswer6Small10"]');
select6Small10.onchange = event => {     
    if(select6Small10.value != ''){
        document.querySelector('.content10 p:nth-child(14)').style.display = "block";
        document.querySelector('.content10').style.overflow = "scroll";       
    };
}
let select7Small10 = document.querySelector('[name="input_wronganswer7Small10"]');
select7Small10.onchange = event => {     
    if(select7Small10.value != ''){
        document.querySelector('.content10 p:nth-child(15)').style.display = "block";
        document.querySelector('.content10').style.overflow = "scroll";      
    };
}
let select8Small10 = document.querySelector('[name="input_wronganswer8Small10"]');
select8Small10.onchange = event => {     
    if(select8Small10.value != ''){
        document.querySelector('.content10 p:nth-child(16)').style.display = "block";
        document.querySelector('.content10').style.overflow = "scroll";       
    };
}
let select10Small10 = document.querySelector('[name="input_hint1Small10"]');
select10Small10.onchange = event => {     
    if(select10Small10.value != ''){
        document.querySelector('.content10 p:nth-child(22)').style.display = "block";
        document.querySelector('.content10').style.overflow = "scroll";       
    };
}
let select23Small10 = document.querySelector('[name="input_thumbnailA1Small10"]');
select23Small10.onchange = event => {     
    if(select23Small10.value != ''){
        document.querySelector('.content10 p:nth-child(19)').style.display = "block";
        document.querySelector('.content10').style.overflow = "scroll";    
    };
}
let select24Small10 = document.querySelector('[name="input_thumbnailA2Small10"]');
select24Small10.onchange = event => {   
    if(select24Small10.value != ''){
        document.querySelector('.content10 p:nth-child(20)').style.display = "block";
        document.querySelector('.content10').style.overflow = "scroll";
    };
}

}
*/

let heightQSmall1 = document.querySelector('[name="input_questionSmall1"]');
let heightThumbnailQ1Small1 = document.querySelector('[name="input_thumbnailQ1Small1"]');
let heightThumbnailQ2Small1 = document.querySelector('[name="input_thumbnailQ2Small1"]');
let heightThumbnailQ3Small1 = document.querySelector('[name="input_thumbnailQ3Small1"]');
let heightAnswerSmall1 = document.querySelector('[name="input_answerSmall1"]');
let heightWronganswer1Small1 = document.querySelector('[name="input_wronganswer1Small1"]');
let heightWronganswer2Small1 = document.querySelector('[name="input_wronganswer2Small1"]');
let heightWronganswer3Small1 = document.querySelector('[name="input_wronganswer3Small1"]');
let heightWronganswer4Small1 = document.querySelector('[name="input_wronganswer4Small1"]');
let heightWronganswer5Small1 = document.querySelector('[name="input_wronganswer5Small1"]');
let heightWronganswer6Small1 = document.querySelector('[name="input_wronganswer6Small1"]');
let heightWronganswer7Small1 = document.querySelector('[name="input_wronganswer7Small1"]');
let heightWronganswer8Small1 = document.querySelector('[name="input_wronganswer8Small1"]');
let heightWronganswer9Small1 = document.querySelector('[name="input_wronganswer9Small1"]');
let heightExplanationSmall1 = document.querySelector('[name="input_explanationSmall1"]');
let heightThumbnailA1Small1 = document.querySelector('[name="input_thumbnailA1Small1"]');
let heightThumbnailA2Small1 = document.querySelector('[name="input_thumbnailA2Small1"]');
let heightThumbnailA3Small1 = document.querySelector('[name="input_thumbnailA3Small1"]');
let heightHint1Small1 = document.querySelector('[name="input_hint1Small1"]');
let heightHint2Small1 = document.querySelector('[name="input_hint2Small1"]');


heightWronganswer9Small1.onchange = event => {     
    if(heightWronganswer9Small1.value != ''){
        document.querySelector('.content1').style.height = "403px";        
    };
}