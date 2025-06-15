## 📘 Bölüm: Jenerikler II  
### 🔹 Kategori: Ömürlü jenerik fonksiyonlar  
#### ✅ Cevap 224: Ömür parametreli jenerik fonksiyon yazma

Bu örnekte, jenerik tür parametresi, trait sınırı ve açık ömür parametresi bir arada kullanılmıştır. `longest_with_announcement` fonksiyonu, aynı ömre sahip iki string slice ve `Display` traitini uygulayan bir jenerik parametre alır. Fonksiyon duyuruyu ekrana yazdırır ve iki string diliminden uzun olanı döndürür.

```rust
use std::fmt::Display;

fn longest_with_announcement<'a, T>(x: &'a str, y: &'a str, ann: T) -> &'a str
where
    T: Display,
{
    println!("Duyuru: {}", ann);
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

fn main() {
    let s1 = "uzun string";
    let s2 = "kısa";
    let sonuc = longest_with_announcement(s1, s2, "Uzunluk karşılaştırılıyor");
    println!("En uzun: {}", sonuc);
}
```
