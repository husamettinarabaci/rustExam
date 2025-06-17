## 📘 Section: Working with Strings and Text
### 🔹 Category: String Slicing and UTF-8
#### ✅ Answer 394: Slicing strings with ranges and handling UTF-8

Rust strings are UTF-8 encoded, so slicing must be on valid character boundaries. Slicing at invalid byte indices will panic. To slice by character indices, use `.char_indices()` or collect chars.

```rust
fn main() {
    let s = "héllo";
    // Valid slice (first 2 bytes = 'h')
    let h = &s[0..1]; // 'h' is 1 byte
    println!("First byte: {}", h);
    // Invalid slice (would panic):
    // let invalid = &s[0..2];
    // Safe slicing by chars:
    let chars: Vec<char> = s.chars().collect();
    let slice: String = chars[0..2].iter().collect();
    println!("First two chars: {}", slice);
}
```
