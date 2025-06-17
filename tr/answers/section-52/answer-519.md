## 📘 Bölüm: Gömülü Rust Temelleri  
### 🔹 Kategori: Hata Ayıklama ve Çıktı  
#### ✅ Cevap 519: RTT veya seri çıktı ile hata ayıklama

RTT ve seri çıkış gömülü hata ayıklamada yaygındır. `defmt-rtt` ile örnek:

```rust
#![no_std]
#![no_main]

use cortex_m_rt::entry;
use defmt_rtt as _;
use panic_halt as _;

#[entry]
fn main() -> ! {
    defmt::info!("RTT ile debug mesajı");
    loop {}
}
```

Seri için, bir HAL ile UART'a yazılır.
