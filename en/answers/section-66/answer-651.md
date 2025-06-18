## 📘 Section: Unsafe Code Patterns and Safety
### 🔹 Category: Writing Safe Abstractions over Unsafe Code
#### ✅ Answer 651: Writing safe abstractions over unsafe code

Encapsulating unsafe code in safe abstractions is a core Rust practice. By hiding unsafe operations behind a safe API, you ensure that users cannot cause undefined behavior unless they themselves use `unsafe`.

```rust
fn get_first(slice: &[i32]) -> Option<&i32> {
    if slice.is_empty() {
        None
    } else {
        // SAFETY: We checked that the slice is not empty.
        Some(unsafe { slice.get_unchecked(0) })
    }
}

fn main() {
    let v = vec![1, 2, 3];
    println!("{}", get_first(&v).unwrap());
}
```

This pattern is important for library design, as it allows performance optimizations without exposing unsafety to users.
