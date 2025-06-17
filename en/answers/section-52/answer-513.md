## 📘 Section: Embedded Rust Foundations  
### 🔹 Category: GPIO and Peripherals  
#### ✅ Answer 513: Blinking an LED on a microcontroller using GPIO

To blink an LED, configure a GPIO pin as output and toggle it in a loop. Use a HAL crate (e.g., `stm32f4xx-hal`) for hardware access. Example:

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
