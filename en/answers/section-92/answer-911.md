## 📘 Section: Systems Security and Hardening
### 🔹 Category: Writing memory-safe cryptographic code
#### ✅ Answer 911: Writing memory-safe cryptographic code

This solution implements a simple XOR cipher in Rust using only safe code. The function takes a byte slice and a key, returning a new vector with each byte XORed with the key.

```rust
fn xor_cipher(input: &[u8], key: u8) -> Vec<u8> {
    input.iter().map(|&b| b ^ key).collect()
}

fn main() {
    let data = b"hello";
    let encrypted = xor_cipher(data, 42);
    println!("{:?}", encrypted);
}
```
