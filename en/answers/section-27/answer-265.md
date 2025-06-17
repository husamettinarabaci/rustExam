## 📘 Section: Lifetimes and Borrowing Semantics  
### 🔹 Category: Modeling Reference Chains Across Function Calls  
#### ✅ Answer 265: Modeling reference chains across function calls

To safely chain references across multiple function calls, lifetime parameters are used to ensure the returned reference remains valid throughout the chain. In the example below, two functions return references, and the same lifetime parameter is used to tie the returned reference to the original input:

```rust
fn get_first<'a>(s: &'a str) -> &'a str {
    &s[0..1]
}

fn get_first_upper<'a>(s: &'a str) -> &'a str {
    let first = get_first(s);
    first
}

fn main() {
    let text = String::from("rust");
    let first = get_first_upper(&text);
    println!("First letter: {}", first);
}
```

Here, all functions use the same lifetime parameter, ensuring the reference remains valid throughout the chain.
