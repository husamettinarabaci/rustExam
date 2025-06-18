## 📘 Section: Systems Programming Mastery  
### 🔹 Category: MMIO and Hardware Interfacing  
#### ✅ Answer 598: Interfacing with hardware via MMIO

Accessing hardware registers via MMIO requires unsafe blocks. Here is a simulation example:

```rust
fn main() {
    let reg_addr = 0x1000_0000 as *mut u32;
    unsafe {
        // Write to register
        reg_addr.write_volatile(0xDEADBEEF);
        // Read from register
        let val = reg_addr.read_volatile();
        println!("Register value: 0x{:X}", val);
    }
}
// Note: Running this on real hardware can be dangerous. Use only for simulation or embedded environments.
```
