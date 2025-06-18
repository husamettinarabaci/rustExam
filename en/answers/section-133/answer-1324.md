## 📘 Section: Compile-Time Programming Patterns  
### 🔹 Category: Conditional Compilation with cfg Attributes  
#### ✅ Answer 1324: Conditional compilation with `cfg` attributes

`cfg` attributes allow code to be compiled only for specific platforms or features.

```rust
#[cfg(target_os = "linux")]
fn platform_message() {
    println!("Running on Linux.");
}

#[cfg(target_os = "windows")]
fn platform_message() {
    println!("Running on Windows.");
}

fn main() {
    platform_message();
}
```
Here, `platform_message` is only compiled and available on the matching platform.
