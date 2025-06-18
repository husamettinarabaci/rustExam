## 📘 Section: Unsafe Code Patterns and Safety
### 🔹 Category: Using `MaybeUninit` for Uninitialized Data
#### ✅ Answer 656: Using `MaybeUninit` for uninitialized data

`std::mem::MaybeUninit` allows safe handling of uninitialized memory. It is useful for manual memory management and FFI.

```rust
use std::mem::MaybeUninit;

fn main() {
    let mut x = MaybeUninit::<i32>::uninit();
    unsafe {
        x.as_mut_ptr().write(42);
        let val = x.assume_init();
        println!("{}", val);
    }
}
```

Never read from uninitialized memory. Only use `assume_init` after proper initialization.
