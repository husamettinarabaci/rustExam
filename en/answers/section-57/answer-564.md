## 📘 Section: Low-Level Embedded Systems
### 🔹 Category: Memory layout and linker scripts for embedded
#### ✅ Answer 564: Memory layout and linker scripts for embedded

In embedded Rust, memory layout is defined using a `memory.x` linker script. This file specifies FLASH and RAM regions. Example `memory.x`:

```
MEMORY
{
  FLASH : ORIGIN = 0x08000000, LENGTH = 256K
  RAM : ORIGIN = 0x20000000, LENGTH = 40K
}
```

This script tells the linker where to place code and data. The file is usually placed in the project root and linked via `build.rs`.
