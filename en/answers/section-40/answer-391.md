## 📘 Section: Working with Strings and Text
### 🔹 Category: String Creation and Usage
#### ✅ Answer 391: Creating and using `String` and `&str`

In Rust, `&str` is a string slice (borrowed view into a string), while `String` is an owned, growable string type. You can convert from `&str` to `String` using `.to_string()` or `String::from`, and from `String` to `&str` using `.as_str()` or dereferencing.

```rust
fn main() {
    let s_slice: &str = "hello";
    let s_string: String = String::from("world");
    println!("Slice: {}", s_slice);
    println!("String: {}", s_string);
    // &str to String
    let s1 = s_slice.to_string();
    // String to &str
    let s2: &str = &s_string;
    println!("Converted: {} {}", s1, s2);
}
```
