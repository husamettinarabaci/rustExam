## 📘 Section: Low-Level Embedded Systems
### 🔹 Category: Flashing and debugging microcontrollers with OpenOCD
#### ✅ Answer 567: Flashing and debugging microcontrollers with OpenOCD

OpenOCD is used to flash code and debug embedded devices. Basic steps:

1. Start OpenOCD: `openocd -f board/stm32f4discovery.cfg`
2. In another terminal, connect with GDB: `arm-none-eabi-gdb target/thumbv7em-none-eabihf/debug/app`
3. In GDB, use `target remote :3333`.

This allows you to flash and debug your code on the microcontroller.
