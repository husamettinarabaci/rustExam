## 📘 Section: Systems Programming Advanced Topics  
### 🔹 Category: Device Drivers in Rust  
#### ✅ Answer 791: Writing device drivers in Rust

A basic device driver in Rust typically defines a struct representing the device and implements methods for initialization and I/O. Unsafe blocks are used for direct hardware access, but Rust's type system helps minimize unsafety.

```rust
struct MyDevice {
    base_addr: *mut u8,
}

impl MyDevice {
    pub fn new(base_addr: usize) -> Self {
        Self { base_addr: base_addr as *mut u8 }
    }
    pub unsafe fn read(&self, offset: usize) -> u8 {
        core::ptr::read_volatile(self.base_addr.add(offset))
    }
    pub unsafe fn write(&self, offset: usize, value: u8) {
        core::ptr::write_volatile(self.base_addr.add(offset), value);
    }
}
```
Here, `unsafe` is required for volatile memory access, but the API keeps unsafety contained.
