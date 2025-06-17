## 📘 Bölüm: Ömürler ve Ödünç Alma Pratiği  
### 🔹 Kategori: Sık Karşılaşılan Ömür Hataları  
#### ✅ Cevap 449: Sık karşılaşılan ömür hatalarını giderme

Aşağıda ömür hatasına yol açan ve düzeltilmiş iki kod örneği verilmiştir. Hata, fonksiyonun geçersiz bir referans döndürmesinden kaynaklanır.

Yanlış kod:
```rust
fn hatali() -> &str {
    let s = String::from("merhaba");
    &s // HATA: s fonksiyon sonunda yok olur
}
```

Doğru kod:
```rust
fn dogru<'a>(s: &'a str) -> &'a str {
    s
}
```

Yanlış kodda, fonksiyon yerel bir değişkenin referansını döndürmeye çalışır. Doğru kodda ise referans parametre olarak alınır ve güvenli şekilde döndürülür.
