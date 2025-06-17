## 📘 Bölüm: Gömülü Rust Temelleri  
### 🔹 Kategori: Loglama ve Panik Yönetimi  
#### ✅ Cevap 512: Minimal loglama için `panic-halt` ve `defmt` kullanımı

`panic-halt` panik durumunda cihazı durdurur, `defmt` ise verimli loglama sağlar. Her ikisi de bağımlılık olarak eklenir ve `defmt::info!` ile mesaj loglanır.

```rust
#![no_std]
#![no_main]

use cortex_m_rt::entry;
use defmt_rtt as _;
use panic_halt as _;

#[entry]
fn main() -> ! {
    defmt::info!("Gömülü Rust'tan merhaba!");
    loop {}
}
```
