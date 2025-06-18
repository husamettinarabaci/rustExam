## 📘 Bölüm: DSL Optimizasyonu ve Kod Üretimi  
### 🔹 Kategori: Modüller arası DSL optimizasyonları  
#### ✅ Cevap 1368: Modüller arası DSL optimizasyonları

Modüller arası optimizasyon için ortak veri ve kod paylaşımı sağlanabilir. Tekrarlanan hesaplamalar merkezi bir modülde toplanarak gereksiz tekrarlar önlenir.

```rust
// Ortak fonksiyon merkezi modülde
pub fn shared_calc(x: i32) -> i32 {
    x * x
}

// Farklı modüllerde kullanılır
mod a {
    use super::shared_calc;
    pub fn compute(val: i32) -> i32 { shared_calc(val) + 1 }
}
mod b {
    use super::shared_calc;
    pub fn compute(val: i32) -> i32 { shared_calc(val) - 1 }
}
```
Bu yapı, kod tekrarını ve gereksiz hesaplamaları azaltır.
