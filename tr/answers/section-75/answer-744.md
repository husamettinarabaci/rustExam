## 📘 Bölüm: Pinning ve Kendine Referanslı Tipler
### 🔹 Kategori: `Unpin`'in Rolü ve Nasıl Uygulanıp Engelleneceği
#### ✅ Cevap 744: `Unpin`'in rolü ve nasıl uygulanıp engelleneceği

`Unpin` trait'i, bir tipin pinlendikten sonra güvenle taşınabileceğini belirtir. Varsayılan olarak çoğu tip `Unpin`'dir, ancak kendine referanslı tipler olmamalıdır. `PhantomPinned` kullanarak `Unpin`'i engelleyebilirsiniz.

```rust
use std::marker::{Unpin, PhantomPinned};
use std::pin::Pin;

struct UnpinDegil {
    _pin: PhantomPinned,
}

// UnpinDegil, Unpin implementasyonu YOK

struct BenimTipim;
// BenimTipim varsayılan olarak Unpin'dir

fn main() {
    let mut x = Box::pin(BenimTipim);
    let y = *x; // Geçerli: BenimTipim Unpin

    let mut z = Box::pin(UnpinDegil { _pin: PhantomPinned });
    // let w = *z; // HATA: UnpinDegil Unpin değil
}
```

`Unpin`'in uygulanıp engellenmesi, bir tipin pinlendikten sonra taşınıp taşınamayacağını kontrol eder.
