## 📘 Bölüm: Hata Yönetimi  
### 🔹 Kategori: Result Tipi Temelleri  
#### ✅ Cevap 112: Result'ı açmak (unwrap)

**Açıklama:**
Bir `Result` değerinden sonucu `.unwrap()` veya `.expect()` ile elde edebilirsiniz. Eğer değer `Err` ise program panic ile sonlanır.

```rust
let sonuc: Result<i32, &str> = Ok(5);
let deger = sonuc.unwrap(); // 5 döner
let hata: Result<i32, &str> = Err("hata");
// hata.unwrap(); // panic!
```
