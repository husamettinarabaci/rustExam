## 📚 Bölüm: Hata Yönetimi  
### 🔹 Kategori: Unwrap ve Expect  
#### ✅ Cevap 56: `unwrap` ve `expect` kullanımı

**Açıklama:**
`unwrap` ve `expect`, bir `Option` veya `Result` içindeki değeri almak için kullanılır. Eğer değer yoksa veya hata varsa program panikler. `expect` ile özel hata mesajı verilebilir.

```rust
fn main() {
    let bazi = Some(10);
    println!("{}", bazi.unwrap()); // 10

    let yok: Option<i32> = None;
    // yok.unwrap(); // panikler

    let ok: Result<i32, &str> = Ok(5);
    println!("{}", ok.expect("Olmalı")); // 5

    let hata: Result<i32, &str> = Err("hata");
    // hata.expect("Özel hata mesajı"); // panikler
}
```
