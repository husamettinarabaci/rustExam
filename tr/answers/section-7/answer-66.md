## 📘 Bölüm: Sahiplik ve Ödünç Alma I  
### 🔹 Kategori: Referanslarla Ödünç Alma  
#### ✅ Cevap 66: Referanslarla ödünç alma

Rust'ta, bir değeri fonksiyona referans ile geçirerek ödünç alabilirsiniz. Sahiplik aktarılmaz, bu nedenle orijinal değişken fonksiyon çağrısından sonra da kullanılabilir.

```rust
fn uzunluk_yazdir(s: &String) {
    println!("Uzunluk: {}", s.len());
}

fn main() {
    let metin = String::from("merhaba");
    uzunluk_yazdir(&metin); // referans ile ödünç alma
    println!("Orijinal: {}", metin); // hâlâ geçerli
}
```

Burada `uzunluk_yazdir` fonksiyonu `String`'i referans ile ödünç alır, bu yüzden `metin` fonksiyon çağrısından sonra da geçerlidir.
