## 📘 Bölüm: Hata Yönetimi ve Result Tipleri  
### 🔹 Kategori: `unwrap` ve `expect` Metotları  
#### ✅ Cevap 176: `unwrap` ve `expect`'in güvenli kullanımı

`unwrap`, değer `None` veya `Err` ise genel bir mesajla panic oluşturur. `expect` ise özel hata mesajı vermenizi sağlar ve hata ayıklamayı kolaylaştırır.

```rust
let s = "abc";
let n = s.parse::<i32>().expect("String'den tam sayı parse edilemedi");
```
