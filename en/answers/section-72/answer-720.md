## 📘 Section: Lifetime System and HRTB Mastery  
### 🔹 Category: Modeling borrowed data structures with lifetime parameters  
#### ✅ Answer 720: Modeling borrowed data structures with lifetime parameters

Below is an example of a struct with a lifetime parameter.

```rust
struct Borrowed<'a> {
    data: &'a i32,
}

fn main() {
    let value = 42;
    let b = Borrowed { data: &value };
    println!("Data: {}", b.data);
}
```

Here, the `Borrowed` struct uses the `'a` lifetime to ensure the reference is valid as long as the struct instance exists. The lifetime parameter is necessary to guarantee safety.
