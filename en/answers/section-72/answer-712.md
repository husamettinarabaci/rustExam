## 📘 Section: Lifetime System and HRTB Mastery  
### 🔹 Category: Using multiple lifetimes in function signatures  
#### ✅ Answer 712: Using multiple lifetimes in function signatures

This example defines a function that takes two references with different lifetimes. The returned reference is tied to the first parameter's lifetime.

```rust
fn first<'a, 'b>(x: &'a str, _y: &'b str) -> &'a str {
    x
}

fn main() {
    let s1 = String::from("hello");
    let s2 = String::from("world");
    let result = first(&s1, &s2);
    println!("Result: {}", result);
}
```

Here, `'a` and `'b` can be different. The returned reference is only valid for the `'a` lifetime.
