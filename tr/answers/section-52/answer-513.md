## 📘 Bölüm: Gömülü Rust Temelleri  
### 🔹 Kategori: GPIO ve Çevre Birimleri  
#### ✅ Cevap 513: GPIO ile mikrodenetleyicide LED yakıp söndürme

Bir LED'i yakıp söndürmek için bir GPIO pini çıkış olarak yapılandırılır ve döngüde değiştirilir. Donanım erişimi için bir HAL crate'i (ör. `stm32f4xx-hal`) kullanılır. Örnek:

```rust
#![no_std]
#![no_main]

use cortex_m_rt::entry;
use stm32f4xx_hal::{pac, prelude::*, delay::Delay};
use panic_halt as _;

#[entry]
fn main() -> ! {
    let dp = pac::Peripherals::take().unwrap();
    let rcc = dp.RCC.constrain();
    let gpiod = dp.GPIOD.split();
    let mut led = gpiod.pd12.into_push_pull_output();
    let mut delay = Delay::new(core.SYST, rcc.cfgr.freeze());
    loop {
        led.set_high();
        delay.delay_ms(500_u16);
        led.set_low();
        delay.delay_ms(500_u16);
    }
}
```
