## 📘 Section: Unsafe Abstractions and APIs  
### 🔹 Category: Implementing zero-cost abstractions  
#### ✅ Answer 803: Implementing zero-cost abstractions

Below is an example of a zero-cost abstraction using unsafe code to reverse a slice. The `reverse` function adds no runtime overhead and provides a safe API.

```rust
pub struct ZeroCostReverse;

impl ZeroCostReverse {
    pub fn reverse<T>(slice: &mut [T]) {
        let len = slice.len();
        if len == 0 { return; }
        unsafe {
            let ptr = slice.as_mut_ptr();
            for i in 0..len / 2 {
                std::ptr::swap(ptr.add(i), ptr.add(len - 1 - i));
            }
        }
    }
}

fn main() {
    let mut arr = [1, 2, 3, 4];
    ZeroCostReverse::reverse(&mut arr);
    println!("{:?}", arr);
}
```
