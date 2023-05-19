package otopark.otoparkbootstrap;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TasitController {
    //once array oluturuyoruz
    public final List<Tasit> tasitKayit=new ArrayList<>();

    //Java script icine access point leri olusturuyoruz

    //kayit fonksiyonu ile arraylist icine girilen degerlerle bir araba kaydediyoruz
@PostMapping("/kaydet")
    public void kaydet(Tasit araba){
        tasitKayit.add(araba);
    }

    //kayittan sonra hepsinigetir fonksiyonu ile array i donduruyoruz
@GetMapping("/hepsiniGetir")
    public List<Tasit>hepsiniGetir(){
    return tasitKayit;
    }

    //son olarak array i temizleme fonksiyonu ile array i temizleyip, donduruyoruz.
@GetMapping("/hepsiniSil")
    public void hepsiniSil(){
    tasitKayit.clear();
    }
}

