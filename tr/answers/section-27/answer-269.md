## 📘 Bölüm: Ömürler ve Ödünç Alma Semantiği  
### 🔹 Kategori: Ömür varyansı ve alt tip ilişkisini anlama  
#### ✅ Cevap 269: Ömür varyansı ve alt tip ilişkisini anlama

Rust'ta ömür varyansı, bir referansın ömrünün daha kısa veya uzun olmasına göre alt tip ilişkisi kurmasını sağlar. Uzun ömürlü bir referans, daha kısa ömür gerektiren bir yerde kullanılabilir (covariant). Bu, özellikle jenerik tiplerde ve fonksiyon parametrelerinde önemlidir.

Aşağıdaki örnekte, uzun ömürlü bir referansın kısa ömür gerektiren bir fonksiyona aktarılması gösterilmiştir:

```rust
fn use_str<'short>(s: &'short str) {
    println!("{}", s);
}

fn main() {
    let string = String::from("hello");
    let s_long: &'static str = "static string";
    let s_short: &str = &string;
    use_str(s_long);   // 'static ömür, 'short yerine geçebilir
    use_str(s_short);  // aynı ömür
}
```

Burada `'static` ömürlü bir referans, daha kısa ömür gerektiren bir fonksiyona parametre olarak verilebiliyor. Bu, ömürlerin kovaryant olmasından kaynaklanır.
