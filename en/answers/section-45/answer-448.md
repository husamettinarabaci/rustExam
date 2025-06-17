## 📘 Section: Lifetimes and Borrowing in Practice  
### 🔹 Category: Structs with Multiple Lifetimes  
#### ✅ Answer 448: Structs with multiple lifetime parameters

This struct demonstrates how to use multiple lifetime parameters for fields that may have different lifetimes.

```rust
struct MultiRef<'a, 'b> {
    first: &'a str,
    second: &'b str,
}

fn main() {
    let s1 = String::from("foo");
    let s2 = String::from("bar");
    let refs = MultiRef { first: &s1, second: &s2 };
    println!("{} {}", refs.first, refs.second);
}
```
