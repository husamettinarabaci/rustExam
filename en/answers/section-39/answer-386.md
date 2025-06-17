## 📘 Section: Advanced Pattern Matching
### 🔹 Category: Ignoring parts with `_` and `..`
#### ✅ Answer 386: Ignoring parts with `_` and `..`

This problem demonstrates how to use `_` and `..` in match statements to ignore fields you don't care about, focusing only on the relevant data.

```rust
struct Person { name: String, age: u8, city: String }

fn main() {
    let p = Person { name: "Alice".to_string(), age: 30, city: "Paris".to_string() };
    match p {
        Person { name, .. } => println!("Name: {}", name),
    }

    let tup = (1, 2, 3, 4);
    match tup {
        (first, _, _, last) => println!("First: {}, Last: {}", first, last),
    }
}
```
