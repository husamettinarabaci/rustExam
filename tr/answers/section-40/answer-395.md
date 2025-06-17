## 📘 Bölüm: String ve Metinle Çalışma
### 🔹 Kategori: String Birleştirme ve Biçimlendirme
#### ✅ Cevap 395: String birleştirme ve biçimlendirme

`+` operatörü bir `String` ile bir `&str`'yi birleştirir, `format!` ise yeni bir biçimlendirilmiş string oluşturur. `format!` birden fazla değeri birleştirmek için daha esnektir.

```rust
fn main() {
    let s1 = String::from("Merhaba");
    let s2 = " dünya";
    let birlesik = s1.clone() + s2;
    let bicimli = format!("{}{}!", s1, s2);
    println!("Birleştirilmiş: {}", birlesik);
    println!("Biçimli: {}", bicimli);
}
```
