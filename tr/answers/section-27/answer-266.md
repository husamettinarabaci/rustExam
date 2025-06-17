## 📘 Bölüm: Ömürler ve Ödünç Alma Semantiği  
### 🔹 Kategori: Ömür Çıkarım Kuralları ve Hataları  
#### ✅ Cevap 266: Ömür çıkarım kuralları ve başarısız olduğu durumlar

Rust'ta ömür çıkarım kuralları (lifetime elision rules), fonksiyon imzalarında ömür belirtimini otomatikleştirir. Ancak bazı durumlarda derleyici, ömürleri açıkça belirtmenizi ister.

- Tek bir referans parametresi ve dönüş değeri olan fonksiyonlarda, ömür çıkarımı otomatik çalışır.
- Birden fazla referans parametresi varsa ve dönüş değerinin hangi parametreye bağlı olduğu belirsizse, derleyici hata verir ve ömür belirtimi ister.

Aşağıda iki örnek gösterilmiştir:

```rust
// Ömür çıkarımı otomatik çalışır:
fn first_char(s: &str) -> &str {
    &s[0..1]
}

// Derleyici burada hata verir, çünkü hangi parametreye bağlı olduğu belirsizdir:
// fn longest(a: &str, b: &str) -> &str {
//     if a.len() > b.len() { a } else { b }
// }

// Doğru kullanım (ömür belirtimi ile):
fn longest<'a>(a: &'a str, b: &'a str) -> &'a str {
    if a.len() > b.len() { a } else { b }
}
```

İlk örnekte, tek bir referans parametresi olduğu için ömür çıkarımı otomatik yapılır. İkinci örnekte ise iki referans parametresi olduğu ve dönüş değerinin hangi ömre bağlı olduğu belirsiz olduğu için derleyici açık ömür belirtimi ister.
