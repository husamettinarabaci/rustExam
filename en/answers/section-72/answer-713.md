## 📘 Section: Lifetime System and HRTB Mastery  
### 🔹 Category: Understanding lifetime elision rules and when to annotate manually  
#### ✅ Answer 713: Understanding lifetime elision rules and when to annotate manually

Below are examples where lifetime elision works automatically and where manual annotation is required.

```rust
// Works with lifetime elision:
fn first_char(s: &str) -> &str {
    &s[0..1]
}

// With multiple reference parameters, elision is insufficient:
// fn longest(x: &str, y: &str) -> &str { ... } // Compile error
// Correct version:
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}

fn main() {
    let s1 = String::from("rust");
    let s2 = String::from("lang");
    println!("First char: {}", first_char(&s1));
    println!("Longest: {}", longest(&s1, &s2));
}
```

When there is only one reference parameter, elision is sufficient. With multiple references, explicit lifetimes are needed.
