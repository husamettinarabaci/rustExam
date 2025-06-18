## 📘 Section: Low-Level Embedded Systems
### 🔹 Category: Low-level debugging with JTAG and SWD
#### ✅ Answer 570: Low-level debugging with JTAG and SWD

JTAG and SWD provide hardware-level debugging for embedded devices. In Rust projects, tools like OpenOCD or probe-rs are used with these interfaces. Basic steps:

1. Connect the hardware (JTAG/SWD cable).
2. Use OpenOCD or probe-rs to establish a connection.
3. Start a GDB debugging session.

Example command: `openocd -f interface/stlink.cfg -f target/stm32f4x.cfg`
