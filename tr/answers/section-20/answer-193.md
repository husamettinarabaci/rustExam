## 📘 Bölüm: Hata Yönetimi  
### 🔹 Kategori: Fonksiyonlardan Result Döndürme  
#### ✅ Cevap 193: Fonksiyonlardan `Result` döndürme

Rust'ta fonksiyonlardan `Result` döndürmek, başarı ve hata durumlarını belirtmenin idiomatik yoludur. `Ok` başarıyı, `Err` ise genellikle açıklayıcı bir mesajla hatayı temsil eder.

```rust
fn pozitif_mi(n: i32) -> Result<i32, String> {
    if n > 0 {
        Ok(n)
    } else {
        Err(format!("{} pozitif değil", n))
    }
}

fn main() {
    match pozitif_mi(5) {
        Ok(deger) => println!("Başarılı: {}", deger),
        Err(e) => println!("Hata: {}", e),
    }

    match pozitif_mi(-3) {
        Ok(deger) => println!("Başarılı: {}", deger),
        Err(e) => println!("Hata: {}", e),
    }
}
```

Bu yaklaşım, hataları zarifçe yönetmenizi sağlar ve kodunuzu daha sağlam hale getirir.
