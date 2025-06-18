## 📘 Section: Lifetime System and HRTB Mastery  
### 🔹 Category: Explaining subtyping and variance in Rust lifetimes  
#### ✅ Answer 717: Explaining subtyping and variance in Rust lifetimes

In Rust, a reference with a longer lifetime can be used where a shorter lifetime is expected (subtyping). Reference types are covariant over their lifetime parameter.

```rust
fn print_str(s: &str) {
    println!("{}", s);
}

fn main() {
    let string = String::from("Rust");
    let s: &str = &string;
    let s_static: &'static str = "static";
    // &'static str is a subtype of &'a str (longer lifetime)
    print_str(s_static); // 'static lifetime can be used anywhere a shorter lifetime is expected
    print_str(s);       // Normal reference
}
```

Here, a reference with a `'static` lifetime can be used where a shorter lifetime is required. This demonstrates subtyping and variance in lifetimes.
