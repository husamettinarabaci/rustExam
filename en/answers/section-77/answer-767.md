## 📘 Section: Embedded Systems Advanced Topics
### 🔹 Category: Real-Time Operating Systems (RTOS)
#### ✅ Answer 767: Implementing communication protocols (I2C, SPI, UART)

I2C, SPI, and UART are common communication protocols in embedded systems. Key differences:
- I2C: Two-wire, multi-device, low speed
- SPI: Four-wire, high speed, full duplex
- UART: Serial, usually point-to-point

In Rust, the HAL (Hardware Abstraction Layer) makes protocol implementation easier.

Example (I2C, pseudocode):
```rust
let i2c = hal::I2c::new(...);
i2c.write(addr, &[0x01, 0x02]);
```
HAL enables hardware-independent code and portability across platforms.
