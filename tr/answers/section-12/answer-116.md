## 📘 Bölüm: Enumlar II  
### 🔹 Kategori: Result ve Enum Eşleme  
#### ✅ Cevap 116: Result üzerinde eşleme

Bu örnekte, Rust'ta Result enumu ile desen eşleme kullanılarak başarı ve hata durumlarının nasıl güvenli şekilde ele alınacağı gösterilmektedir. `Ok` ve `Err` durumları ayrı ayrı kontrol edilerek hem başarılı hem de hatalı sonuçlar yönetilebilir.

```rust
fn main() {
    let sonuc: Result<i32, String> = Ok(42);
    match sonuc {
        Ok(deger) => println!("Başarılı: {}", deger),
        Err(e) => println!("Hata: {}", e),
    }
}
```
