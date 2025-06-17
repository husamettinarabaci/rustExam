## 📘 Section: Embedded Rust Foundations  
### 🔹 Category: Debugging and Output  
#### ✅ Answer 519: Debugging via RTT or serial output

RTT and serial output are common for embedded debugging. Example using `defmt-rtt`:

```rust
#![no_std]
#![no_main]

use cortex_m_rt::entry;
use defmt_rtt as _;
use panic_halt as _;

#[entry]
fn main() -> ! {
    defmt::info!("Debug message via RTT");
    loop {}
}
```

For serial, use a HAL to write to UART.
