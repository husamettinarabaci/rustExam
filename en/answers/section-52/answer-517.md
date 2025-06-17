## 📘 Section: Embedded Rust Foundations  
### 🔹 Category: Device Drivers and HAL  
#### ✅ Answer 517: Writing device drivers with `embedded-hal`

`embedded-hal` provides traits for device drivers. Example: a simple LED driver using the `OutputPin` trait.

```rust
use embedded_hal::digital::v2::OutputPin;

pub struct Led<PIN: OutputPin> {
    pin: PIN,
}

impl<PIN: OutputPin> Led<PIN> {
    pub fn new(pin: PIN) -> Self {
        Led { pin }
    }
    pub fn on(&mut self) {
        let _ = self.pin.set_high();
    }
    pub fn off(&mut self) {
        let _ = self.pin.set_low();
    }
}
```
