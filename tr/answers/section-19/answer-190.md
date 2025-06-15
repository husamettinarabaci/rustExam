## 📘 Bölüm: Option ve Result Türleri  
### 🔹 Kategori: Fonksiyonlarda Option ve Result  
#### ✅ Cevap 190: Fonksiyonlarda Option ve Result

Fonksiyonlardan `Option` ve `Result` döndürmek, Rust'ta değer yokluğu ve hata yönetimi için yaygın bir yaklaşımdır. `Option`, bir değerin var olup olmadığını, `Result` ise hata durumlarını ifade eder.

```rust
fn belki_pozitif(n: i32) -> Option<i32> {
    if n > 0 { Some(n) } else { None }
}

fn cift_veya_hata(n: i32) -> Result<i32, String> {
    if n % 2 == 0 {
        Ok(n)
    } else {
        Err(format!("{} çift değil", n))
    }
}

fn main() {
    match belki_pozitif(5) {
        Some(deger) => println!("Pozitif: {}", deger),
        None => println!("Pozitif değil"),
    }

    match cift_veya_hata(4) {
        Ok(deger) => println!("Çift: {}", deger),
        Err(e) => println!("Hata: {}", e),
    }

    match cift_veya_hata(3) {
        Ok(deger) => println!("Çift: {}", deger),
        Err(e) => println!("Hata: {}", e),
    }
}
```
