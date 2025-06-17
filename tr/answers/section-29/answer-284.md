## 📘 Bölüm: Desen Eşleme ve Kontrol Akışı
### 🔹 Kategori: Option ve Result Değerlerinde Desen Eşleme
#### ✅ Cevap 284: Option ve Result değerlerinde desen eşleme

Bu soruda, hem Option hem de Result tipleri üzerinde match ile desen eşleme yapılır. Her bir varyant için uygun mesajlar ekrana yazdırılır.

```rust
fn main() {
    let maybe_num = Some(42);
    let result: Result<&str, &str> = Err("Bir hata oluştu");

    match maybe_num {
        Some(n) => println!("Option'da değer var: {}", n),
        None => println!("Option boş"),
    }

    match result {
        Ok(msg) => println!("Result başarılı: {}", msg),
        Err(e) => println!("Result hata: {}", e),
    }
}
```
