## 📘 Section: Working with Strings and Text
### 🔹 Category: String Iteration
#### ✅ Answer 393: Iterating over characters and bytes in strings

Iterating over `chars` yields Unicode scalar values (characters), while iterating over `bytes` yields the raw UTF-8 bytes. Some characters may be more than one byte.

```rust
fn main() {
    let s = "héllo";
    println!("Characters:");
    for c in s.chars() {
        println!("{}", c);
    }
    println!("Bytes:");
    for b in s.bytes() {
        println!("{}", b);
    }
}
```
