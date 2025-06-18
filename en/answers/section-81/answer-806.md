## 📘 Section: Unsafe Abstractions and APIs  
### 🔹 Category: Auditing unsafe code for soundness  
#### ✅ Answer 806: Auditing unsafe code for soundness

Below is an example of testing the soundness of an unsafe function that splits a slice. Both safe and unsafe usages are shown.

```rust
unsafe fn split_at_mut<T>(slice: &mut [T], mid: usize) -> (&mut [T], &mut [T]) {
    let len = slice.len();
    let ptr = slice.as_mut_ptr();
    (
        std::slice::from_raw_parts_mut(ptr, mid),
        std::slice::from_raw_parts_mut(ptr.add(mid), len - mid),
    )
}

fn main() {
    let mut arr = [1, 2, 3, 4];
    // Safe usage:
    let (left, right) = unsafe { split_at_mut(&mut arr, 2) };
    println!("{:?} {:?}", left, right);
    // Unsafe usage (mid > arr.len()):
    // let _ = unsafe { split_at_mut(&mut arr, 10) }; // Undefined behavior!
}
```

Tests should observe the function's behavior with both valid and invalid parameters.
