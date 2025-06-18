## 📘 Section: Lifetime System and HRTB Mastery  
### 🔹 Category: Using Higher-Ranked Trait Bounds (HRTB) with for<'a> syntax  
#### ✅ Answer 716: Using Higher-Ranked Trait Bounds (HRTB) with for<'a> syntax

Below is an example of a function using `for<'a>` to specify a Higher-Ranked Trait Bound. This allows the function to accept a closure that can take a reference with any lifetime.

```rust
fn apply_to_str<F>(f: F)
where
    F: for<'a> Fn(&'a str) -> usize,
{
    let s = String::from("rust");
    let len = f(&s);
    println!("Length: {}", len);
}

fn main() {
    apply_to_str(|s| s.len());
}
```

The `for<'a>` syntax ensures the closure can accept references with any lifetime.
