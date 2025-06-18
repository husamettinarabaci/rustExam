## 📘 Section: Memory Safety and Static Analysis
### 🔹 Category: Formal Verification Tools for Unsafe Code
#### ✅ Answer 855: Analyzing unsafe code with formal verification tools

Formal verification tools mathematically prove certain safety properties of unsafe code. Tools like Prusti and Kani check if code adheres to specific rules.

Example Prusti usage:

```sh
cargo install prusti
prusti-verify src/main.rs
```

The advantage is proving the safety of critical code. The limitation is that not all properties can be proven for complex code.
