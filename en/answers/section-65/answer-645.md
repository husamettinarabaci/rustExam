## 📘 Section: Performance Optimization and Profiling
### 🔹 Category: Compiler Flags and Optimization
#### ✅ Answer 645: Inline annotations and function call overhead

The `#[inline]` and `#[inline(always)]` annotations suggest to the compiler that a function should be inlined. This can reduce function call overhead.

```rust
#[inline(always)]
fn add(a: u32, b: u32) -> u32 {
    a + b
}

fn main() {
    let mut sum = 0;
    for i in 0..1000 {
        sum += add(i, i);
    }
    println!("{}", sum);
}
```

Inlining can improve performance by reducing call overhead, but excessive inlining may increase code size.
