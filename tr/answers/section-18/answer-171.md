## 📘 Bölüm: Hata Yönetimi ve Result Tipleri  
### 🔹 Kategori: Temel Hata Yönetimi  
#### ✅ Cevap 171: Hata yönetimi için Result tipinin kullanımı

Bu fonksiyon, bir string'i tam sayıya çevirirken hata yönetimi için `Result` tipinin nasıl kullanılacağını gösterir. Çevirme başarısız olursa özel bir hata mesajı döndürülür.

```rust
fn parse_to_int(s: &str) -> Result<i32, String> {
    s.parse::<i32>().map_err(|_| format!("'{}' tam sayıya çevrilemedi", s))
}
```
