## 📘 Section: Lifetimes and Borrowing in Practice  
### 🔹 Category: Struct Lifetime Annotations  
#### ✅ Answer 442: Lifetime annotations for structs holding references

This struct uses a lifetime parameter to indicate that the reference it holds cannot outlive the data it points to. This ensures memory safety.

```rust
struct StrHolder<'a> {
    value: &'a str,
}

fn main() {
    let s = String::from("hello");
    let holder = StrHolder { value: &s };
    println!("{}", holder.value);
}
```
