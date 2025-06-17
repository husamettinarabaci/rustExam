## 📘 Bölüm: String ve Metinle Çalışma
### 🔹 Kategori: String ve UTF-8 Yönetimi
#### ✅ Cevap 399: Harici girdilerde geçersiz UTF-8 ile başa çıkma

Byte dizisini stringe çevirirken `String::from_utf8` veya `std::str::from_utf8` kullanılır ve bunlar `Result` döndürür. Hataları kontrol ederek panic'ten kaçınılır.

```rust
fn main() {
    let gecerli = vec![109, 101, 114, 104, 97, 98, 97]; // "merhaba"
    let gecersiz = vec![0xff, 0xfe, 0xfd];
    match String::from_utf8(gecerli) {
        Ok(s) => println!("Geçerli UTF-8: {}", s),
        Err(e) => println!("Geçersiz UTF-8: {}", e),
    }
    match String::from_utf8(gecersiz) {
        Ok(s) => println!("Geçerli UTF-8: {}", s),
        Err(e) => println!("Geçersiz UTF-8: {}", e),
    }
}
```
