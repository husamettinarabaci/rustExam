## 📘 Section: Embedded Rust Foundations  
### 🔹 Category: Memory-Mapped Registers  
#### ✅ Answer 515: Working with memory-mapped registers safely

Peripheral Access Crates (PACs) provide safe access to memory-mapped registers. Example: set a GPIO pin high using a PAC crate.

```rust
#![no_std]
#![no_main]

use cortex_m_rt::entry;
use stm32f4::stm32f401;
use panic_halt as _;

#[entry]
fn main() -> ! {
    let dp = stm32f401::Peripherals::take().unwrap();
    dp.GPIOA.odr.modify(|_, w| w.odr0().set_bit());
    loop {}
}
```
