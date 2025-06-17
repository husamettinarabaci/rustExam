## 📘 Section: Ownership Across Function Boundaries
### 🔹 Category: Returning references from functions (with lifetimes)
#### ✅ Answer 377: Returning references from functions (with lifetimes)

When returning references from functions, the returned reference's lifetime must be tied to the input reference's lifetime. In Rust, this is done using lifetime annotations. The example below safely returns a reference to the largest value in a slice.

```rust
fn max_ref<'a>(slice: &'a [i32]) -> &'a i32 {
    slice.iter().max().unwrap()
}

fn main() {
    let numbers = vec![10, 20, 30, 40];
    let max = max_ref(&numbers);
    println!("Largest value: {}", max);
}
```

Here, the `max_ref` function returns a reference with the same lifetime as the input slice, preventing dangling references.
