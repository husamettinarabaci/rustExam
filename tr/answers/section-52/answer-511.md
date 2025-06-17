## 📘 Bölüm: Gömülü Rust Temelleri  
### 🔹 Kategori: Proje Kurulumu ve `no_std`  
#### ✅ Cevap 511: `cortex-m-rt` ile `no_std` gömülü proje kurma

Gömülü sistemler için standart kütüphane olmadan (`#![no_std]`) ve `cortex-m-rt` runtime ile çalışılır. `#[entry]` ile giriş noktası belirtilir. Proje gömülü bir hedef için yapılandırılır (ör. thumbv7em-none-eabihf).

```rust
#![no_std]
#![no_main]

use cortex_m_rt::entry;

#[entry]
fn main() -> ! {
    loop {}
}
```
