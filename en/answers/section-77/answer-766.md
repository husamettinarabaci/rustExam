## 📘 Section: Embedded Systems Advanced Topics
### 🔹 Category: Real-Time Operating Systems (RTOS)
#### ✅ Answer 766: Secure boot and firmware validation

Secure boot ensures that only verified and trusted firmware is executed, preventing unauthorized or malicious code from running.

In Rust, firmware validation typically involves:
- Checking the firmware's hash or digital signature
- Using cryptographic algorithms (e.g., SHA-256, ECDSA)

Example (pseudocode):
```rust
let firmware_hash = calculate_hash(firmware);
if firmware_hash == expected_hash {
    // Safe to boot
} else {
    // Reject
}
```
These methods are fundamental for embedded system security.
