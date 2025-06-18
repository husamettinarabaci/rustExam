## 📘 Section: Unsafe Abstractions and APIs  
### 🔹 Category: Documenting safety contracts clearly  
#### ✅ Answer 802: Documenting safety contracts clearly

Below is an example of an unsafe function that splits a slice, with a clear safety contract. The documentation specifies the conditions under which it is safe to use.

```rust
/// Splits a slice into two at the given index. Unsafe because the index must be valid.
///
/// # Safety
///
/// `mid <= slice.len()` must hold. Otherwise, undefined behavior occurs.
unsafe fn split_at_mut<T>(slice: &mut [T], mid: usize) -> (&mut [T], &mut [T]) {
    let len = slice.len();
    let ptr = slice.as_mut_ptr();
    (
        std::slice::from_raw_parts_mut(ptr, mid),
        std::slice::from_raw_parts_mut(ptr.add(mid), len - mid),
    )
}

fn main() {
    let mut data = [1, 2, 3, 4];
    let (left, right) = unsafe { split_at_mut(&mut data, 2) };
    println!("{:?} {:?}", left, right);
}
```
