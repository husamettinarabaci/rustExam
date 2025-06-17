## 📘 Bölüm: Ömürler ve Ödünç Alma Semantiği  
### 🔹 Kategori: Fonksiyonlardan Güvenli Referans Döndürme  
#### ✅ Cevap 264: Fonksiyonlardan güvenli şekilde referans döndürme

Rust'ta bir fonksiyondan referans döndürmek için, döndürülen referansın ömrü fonksiyonun parametrelerinden birine bağlı olmalıdır. Aksi halde, derleyici "dangling reference" hatası verir. Aşağıda hem hatalı hem de doğru örnekler verilmiştir.

**Hatalı Örnek:**
```rust
fn get_ref() -> &String {
    let s = String::from("merhaba");
    &s // HATA: s fonksiyon sonunda yok olur
}
```

**Doğru Örnek:**
```rust
fn get_first<'a>(s: &'a String) -> &'a str {
    &s[0..1]
}

fn main() {
    let text = String::from("rust");
    let first = get_first(&text);
    println!("İlk harf: {}", first);
}
```

Burada, döndürülen referansın ömrü parametrenin ömrüne bağlıdır ve güvenlidir.
