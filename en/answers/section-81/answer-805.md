## 📘 Section: Unsafe Abstractions and APIs  
### 🔹 Category: Using `unsafe` to optimize performance-critical code  
#### ✅ Answer 805: Using `unsafe` to optimize performance-critical code

Below is an example that multiplies all elements of a slice by 2, skipping bounds checks with `unsafe`. Safety is maintained because the slice length is fixed during iteration.

```rust
fn double_all(slice: &mut [i32]) {
    let len = slice.len();
    unsafe {
        let ptr = slice.as_mut_ptr();
        for i in 0..len {
            *ptr.add(i) *= 2;
        }
    }
}

fn main() {
    let mut arr = [1, 2, 3, 4];
    double_all(&mut arr);
    println!("{:?}", arr);
}
```

In this code, skipping bounds checks is safe because the slice length does not change during iteration.
