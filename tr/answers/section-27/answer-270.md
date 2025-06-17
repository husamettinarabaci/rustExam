## 📘 Bölüm: Ömürler ve Ödünç Alma Semantiği  
### 🔹 Kategori: Derleyici ömür hatalarını açıklama ve düzeltme  
#### ✅ Cevap 270: Derleyici ömür hatalarını açıklama ve düzeltme

Rust'ta en sık karşılaşılan ömür hatalarından biri, fonksiyonlardan geçersiz bir referans döndürmeye çalışmaktır. Derleyici genellikle "reference does not live long enough" veya "missing lifetime specifier" gibi bir hata mesajı verir.

Aşağıdaki örnekte, fonksiyon yerel bir değişkenin referansını döndürmeye çalışıyor:

```rust
// Hatalı kod:
fn get_ref() -> &String {
    let s = String::from("hello");
    &s
} // s burada drop edilir, referans geçersiz olur

// Hata mesajı: "returns a reference to data owned by the current function"

// Doğru kod:
fn get_owned() -> String {
    let s = String::from("hello");
    s
} // Sahiplik döndürülür, ömür problemi olmaz
```

İlk kodda, fonksiyonun ömrü bittiğinde `s` yok edilir ve referans geçersiz olur. Doğru çözüm, sahipliği döndürmektir.
