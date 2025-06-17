## 📘 Bölüm: Result ve Option ile Hata Yönetimi  
### 🔹 Kategori: unwrap, expect ve güvenli alternatifler  
#### ✅ Cevap 326: `unwrap`, `expect` ve güvenli alternatiflerini kullanma

`unwrap` ve `expect` metotları, `Option` veya `Result` değerini doğrudan çözümler; hata durumunda programı panikletir. Güvenli alternatifler olarak `unwrap_or`, `unwrap_or_else` ve `match` kullanmak, panik yerine varsayılan veya işlenmiş bir değer döndürmeyi sağlar.

```rust
fn main() {
    let some = Some(10);
    let none: Option<i32> = None;
    let ok: Result<i32, &str> = Ok(5);
    let err: Result<i32, &str> = Err("hata");

    // Panik riski: unwrap ve expect
    // println!("{}", none.unwrap()); // Panik!
    // println!("{}", err.unwrap());  // Panik!
    println!("{}", some.unwrap()); // 10
    println!("{}", ok.expect("Beklenen değer yok!")); // 5

    // Güvenli alternatifler
    println!("{}", none.unwrap_or(0)); // 0
    println!("{}", err.unwrap_or(-1)); // -1
    println!("{}", none.unwrap_or_else(|| 42)); // 42
    println!("{}", ok.unwrap_or_else(|_| 99)); // 5

    // match ile güvenli çözümleme
    match none {
        Some(v) => println!("Değer: {}", v),
        None => println!("Değer yok"),
    }
    match err {
        Ok(v) => println!("Sonuç: {}", v),
        Err(e) => println!("Hata: {}", e),
    }
}
```
