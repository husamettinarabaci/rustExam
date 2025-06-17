## 📘 Section: Working with Strings and Text
### 🔹 Category: String Conversion
#### ✅ Answer 392: Converting between `String`, `&str`, and `&[u8]`

You can convert a `String` to `&str` with `.as_str()`, and to `&[u8]` with `.as_bytes()`. To convert a byte slice back to a string, use `String::from_utf8` (for owned data) or `std::str::from_utf8` (for borrowed slices), handling possible UTF-8 errors.

```rust
fn main() {
    let s = String::from("hello");
    let s_slice: &str = s.as_str();
    let bytes: &[u8] = s_slice.as_bytes();
    println!("Bytes: {:?}", bytes);
    // &[u8] to &str
    let s2 = std::str::from_utf8(bytes).unwrap();
    println!("Back to str: {}", s2);
}
```
