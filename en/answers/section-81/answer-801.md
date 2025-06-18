## 📘 Section: Unsafe Abstractions and APIs  
### 🔹 Category: Designing safe wrappers around unsafe code  
#### ✅ Answer 801: Designing safe wrappers around unsafe code

This example shows how to safely wrap unsafe code. The unsafe block uses raw pointer access to find the maximum value in a slice, but the user only interacts with a safe function.

```rust
pub struct SafeMax;

impl SafeMax {
    pub fn max(slice: &[i32]) -> Option<i32> {
        if slice.is_empty() {
            return None;
        }
        unsafe {
            let mut max = *slice.get_unchecked(0);
            for i in 1..slice.len() {
                let val = *slice.get_unchecked(i);
                if val > max {
                    max = val;
                }
            }
            Some(max)
        }
    }
}

fn main() {
    let arr = [1, 5, 3, 2];
    println!("Max: {:?}", SafeMax::max(&arr));
}
```
