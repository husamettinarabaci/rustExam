## 📘 Bölüm: Düşük Seviyeli Gömülü Sistemler
### 🔹 Kategori: Kesme ve istisnaları güvenli şekilde yönetme
#### ✅ Cevap 563: Kesme ve istisnaları güvenli şekilde yönetme

Gömülü Rust'ta kesme ve istisnalar için `#[interrupt]` ve `#[exception]` öznitelikleri kullanılır. Örnek:

```rust
use cortex_m_rt::{exception, interrupt};

#[interrupt]
fn TIM2() {
    // Kesme işlemleri
}

#[exception]
fn HardFault(_ef: &cortex_m_rt::ExceptionFrame) -> ! {
    loop {}
}
```

Bu kodda bir kesme ve bir istisna handler'ı tanımlanmıştır.
