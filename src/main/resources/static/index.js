function tasitKayit(){
    const tasit={  //javascript objesi olusturduk
        tc:$("#tc").val(),  //$ ile jquery kullaniyoruz
        ad:$("#ad").val(),
        adres:$("#adres").val(),
        plaka:$("#plaka").val(),
        marka:$("#marka").val(),
        model:$("#model").val(),
    }
 //olusturdugumuz objeyi post ile server a gonderiyoruz
 //hangi fonksiyona, neyi gonderdigimizi yaziyoruz
 //ve devaminda ne yapacagini soyluyoruz
    $.post("/kaydet",tasit,function (){
        hepsiniGetir();
    });
    //degerleri aldiktan sonra felt lerin icini bosaltiyoruz
    $("#tc").val("");
    $("#ad").val("");
    $("#adres").val("");
    $("#plaka").val("");
    $("#marka").val("");
    $("#model").val("");
}
//ilk fonksiyondan sonra icinde fonksiyon varsa onu yaziyoruz
function hepsiniGetir(){
    //serverdan get ile cagiriyoruz
    //fonksiyonun icinde arabalari getiriyoruz
    $.get("/hepsiniGetir",function (arabalar){
        //serverdan array geldi simdi onu duzenleme zamani
        //bir fonksiyon daha yaziyoruz icine array i aliyor
        bilgiDuzenle(arabalar);
    });
}
//server dan gelen array i html e yazdirma
function bilgiDuzenle(arabalar){
    let yaz="<table class='table table-striped'><tr><th>TC</th><th>Ad</th><th>Adres</th>"+
        "<th>Plaka</th><th>Marka</th><th>Model</th></tr>";
    for(const araba of arabalar){
        yaz+="<tr><td>"+araba.tc+"</td><td>"+araba.ad+"</td><td>"+araba.adres+"</td><td>"+araba.plaka+"</td><td>"+araba.marka+"</td><td>"+araba.model+"</td></tr>";
    }
    yaz+="</table>";
    $("#arabalar").html(yaz);
}

function hepsiniSil(){
    $.get("/hepsiniSil", function (){
        hepsiniGetir();
    })
}