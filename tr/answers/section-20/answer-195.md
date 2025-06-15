## 📘 Bölüm: Hata Yönetimi  
### 🔹 Kategori: Hataları İletme  
#### ✅ Cevap 195: Hataları iletme

Rust'ta hataları iletmek için `?` operatörü kullanılır. Bu operatör, bir fonksiyonda oluşan hatayı çağırana otomatik olarak iletir. En üst seviyede ise hata `match` ile yakalanabilir.

```rust
fn hata_olabilir(x: i32) -> Result<i32, String> {
    if x > 0 {
        Ok(x)
    } else {
        Err("Değer pozitif olmalı".to_string())
    }
}

fn pozitif_ikiyle_carp(x: i32) -> Result<i32, String> {
    let deger = hata_olabilir(x)?;
    Ok(deger * 2)
}

fn main() {
    match pozitif_ikiyle_carp(-5) {
        Ok(sonuc) => println!("Sonuç: {}", sonuc),
        Err(e) => println!("Hata: {}", e),
    }
}
```
