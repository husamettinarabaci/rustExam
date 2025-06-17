## 📘 Section: Lifetimes and Borrowing Semantics  
### 🔹 Category: Understanding lifetime variance and subtyping  
#### ✅ Answer 269: Understanding lifetime variance and subtyping

In Rust, lifetime variance allows a reference with a longer lifetime to be used where a shorter lifetime is required (covariance). This is important for generic types and function parameters. Subtyping means that a reference with a longer lifetime can act as a subtype of a reference with a shorter lifetime.

In the following example, a reference with a `'static` lifetime is passed to a function expecting a shorter lifetime:

```rust
fn use_str<'short>(s: &'short str) {
    println!("{}", s);
}

fn main() {
    let string = String::from("hello");
    let s_long: &'static str = "static string";
    let s_short: &str = &string;
    use_str(s_long);   // 'static lifetime can be used as 'short
    use_str(s_short);  // same lifetime
}
```

Here, a `'static` reference is accepted by a function expecting a shorter lifetime, demonstrating covariance and subtyping of lifetimes in Rust.
