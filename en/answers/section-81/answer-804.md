## 📘 Section: Unsafe Abstractions and APIs  
### 🔹 Category: Avoiding undefined behavior in unsafe code  
#### ✅ Answer 804: Avoiding undefined behavior in unsafe code

Below is an example where creating two mutable references to the same element causes undefined behavior, and a safe solution is provided.

```rust
// Unsafe code causing undefined behavior:
unsafe fn ub_example(slice: &mut [i32]) {
    let (a, b) = (slice.get_unchecked_mut(0), slice.get_unchecked_mut(0));
    *a += 1;
    *b += 1; // Two mutable references to the same element!
}

// Safe solution:
fn safe_example(slice: &mut [i32]) {
    slice[0] += 2;
}

fn main() {
    let mut arr = [1, 2, 3];
    // unsafe { ub_example(&mut arr) }; // UB! Do not use
    safe_example(&mut arr);
    println!("{:?}", arr);
}
```
