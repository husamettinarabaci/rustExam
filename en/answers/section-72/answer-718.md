## 📘 Section: Lifetime System and HRTB Mastery  
### 🔹 Category: Demonstrating lifetime inference limitations with nested closures  
#### ✅ Answer 718: Demonstrating lifetime inference limitations with nested closures

Below is an example where lifetime inference fails with nested closures, and a solution is provided.

```rust
fn main() {
    let s = String::from("rust");
    let outer = |x: &str| {
        let inner = || x;
        inner()
    };
    println!("{}", outer(&s));
}
// The compiler may fail to infer lifetimes here.
// Solution: use `move` or explicit lifetimes
fn main_fixed() {
    let s = String::from("rust");
    let outer = |x: &str| {
        let inner = move || x;
        inner()
    };
    println!("{}", outer(&s));
}
```

With nested closures, lifetime inference can be insufficient. Using `move` or explicit lifetimes can resolve the issue.
