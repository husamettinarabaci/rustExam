## 📘 Bölüm: İleri Trait Sistemi ve Uyum  
### 🔹 Kategori: Crate ve Modüller Arası Trait Uyumunu Anlama  
#### ✅ Cevap 730: Crate ve modüller arası trait uyumunu anlama

Rust'ta trait uyumu (coherence), bir tip ve trait çifti için tüm programda en fazla bir implementasyon olabileceği anlamına gelir. Derleyici bu kuralı (coherence/yetim kuralı) uygular ve çakışan implementasyonları engeller.

```rust
// A crate'inde
pub trait BenimTrait {}

// B crate'inde
use crate_a::BenimTrait;
pub struct BenimTip;
impl BenimTrait for BenimTip {} // Sorun yok

// C crate'inde aynı implementasyonu tekrar yapamazsınız
// impl BenimTrait for BenimTip {} // HATA: çakışan implementasyon
```

Bu kural, güvenlik ve sağlamlık için gereklidir; trait metot çağrılarının her zaman tek ve güvenli olmasını sağlar.
