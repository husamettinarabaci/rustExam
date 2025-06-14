## 📘 Bölüm: Hata Yönetimi ve Result Tipleri  
### 🔹 Kategori: Option ve Result Dönüşümü  
#### ✅ Cevap 174: Option'dan Result'a dönüşüm

Bu fonksiyon, bir `Option<T>` değerini özel hata mesajı ile `Result<T, String>`'e dönüştürmeyi gösterir.

```rust
fn option_to_result<T>(opt: Option<T>, err_msg: String) -> Result<T, String> {
    opt.ok_or(err_msg)
}
```
