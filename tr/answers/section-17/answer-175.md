## 📘 Bölüm: Hata Yönetimi ve Result Tipleri  
### 🔹 Kategori: Result ile Eşleme  
#### ✅ Cevap 175: Result varyantlarını match ile yönetme

Bu fonksiyon, `Result`'ın hem `Ok` hem de `Err` durumlarını pattern matching ile nasıl yöneteceğinizi gösterir.

```rust
fn handle_result(res: Result<i32, String>) {
    match res {
        Ok(val) => println!("Değer: {}", val),
        Err(e) => println!("Hata: {}", e),
    }
}
```
