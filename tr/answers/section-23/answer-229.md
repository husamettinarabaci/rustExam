## 📘 Bölüm: Jenerikler II  
### 🔹 Kategori: Jenerik tür takma adları  
#### ✅ Cevap 229: Jenerik tür takma adları

Jenerik tür takma adı, jenerik bir tip için kısa bir isim oluşturmanızı sağlar.

```rust
type BenimSonucum<T> = Result<T, String>;

fn birsey_yap() -> BenimSonucum<i32> {
    Ok(42)
}
```
