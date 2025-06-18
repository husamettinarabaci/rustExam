## 📘 Section: Lifetime System and HRTB Mastery  
### 🔹 Category: Writing functions with explicit lifetime annotations  
#### ✅ Answer 711: Writing functions with explicit lifetime annotations

This example defines a function that takes two reference parameters and requires explicit lifetime annotations. The function signature uses the `'a` lifetime to ensure the returned reference is valid as long as both inputs.

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

fn main() {
    let s1 = String::from("rustacean");
    let s2 = String::from("rust");
    let result = longest(&s1, &s2);
    println!("Longest: {}", result);
}
```

The `'a` lifetime in the signature ensures both input and output references are tied to the same lifetime.
