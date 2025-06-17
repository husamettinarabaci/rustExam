## 📘 Section: Embedded Rust Foundations  
### 🔹 Category: Logging and Panics  
#### ✅ Answer 512: Using `panic-halt` and `defmt` for minimal logging

`panic-halt` stops the device on panic, while `defmt` provides efficient logging. Add both as dependencies and use `defmt::info!` to log a message.

```rust
#![no_std]
#![no_main]

use cortex_m_rt::entry;
use defmt_rtt as _;
use panic_halt as _;

#[entry]
fn main() -> ! {
    defmt::info!("Hello from embedded Rust!");
    loop {}
}
```
