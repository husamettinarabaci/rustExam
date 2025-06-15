## 📘 Section: Lifetimes I  
### 🔹 Category: Lifetime Errors and Fixes  
#### ✅ Answer 75: Lifetime errors and fixes

When a function returns a reference to one of its parameters, Rust needs to know how the lifetimes of the inputs relate to the output. Omitting lifetime annotations causes a compiler error. Adding explicit lifetime parameters resolves the issue.

**Without lifetime annotation (causes error):**
```rust
// fn longest(x: &str, y: &str) -> &str {
//     if x.len() > y.len() { x } else { y }
// }
```

**With correct lifetime annotation:**
```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}

fn main() {
    let s1 = String::from("hello");
    let s2 = String::from("world!");
    let result = longest(&s1, &s2);
    println!("Longest: {}", result);
}
```
