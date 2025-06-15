## 📘 Section: Structs II  
### 🔹 Category: Methods and Static Variables  
#### ✅ Answer 100: Method with static variables

This example demonstrates how to use a static variable in a method. The static variable `COUNTER` is modified inside a method using `unsafe` and `static mut`. Note that modifying static mutable variables is unsafe and should be avoided in concurrent code.

```rust
static mut COUNTER: u32 = 0;

struct MyStruct;

impl MyStruct {
    fn increment_counter() {
        unsafe {
            COUNTER += 1;
            println!("COUNTER: {}", COUNTER);
        }
    }
}

fn main() {
    MyStruct::increment_counter();
    MyStruct::increment_counter();
}
```

**Note:** Accessing or modifying `static mut` variables is unsafe and not thread-safe. For safe concurrency, use atomic types or synchronization primitives.
