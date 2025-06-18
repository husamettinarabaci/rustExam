## 📘 Section: Pinning and Self-Referential Types
### 🔹 Category: Creating a Self-Referential Type Using `Pin` and `PhantomPinned`
#### ✅ Answer 742: Creating a self-referential type using `Pin` and `PhantomPinned`

You can use `Pin` and `PhantomPinned` to safely create a self-referential struct that cannot be moved after initialization.

```rust
use std::marker::PhantomPinned;
use std::pin::Pin;

struct SelfRef {
    data: String,
    data_ref: *const String,
    _pin: PhantomPinned,
}

impl SelfRef {
    fn new(data: String) -> Pin<Box<SelfRef>> {
        let mut s = Box::pin(SelfRef {
            data,
            data_ref: std::ptr::null(),
            _pin: PhantomPinned,
        });
        let self_ptr: *const String = &s.data;
        unsafe {
            let mut_ref = Pin::as_mut(&mut s);
            let mut_ref = Pin::get_unchecked_mut(mut_ref);
            mut_ref.data_ref = self_ptr;
        }
        s
    }
    fn get_data(&self) -> &String {
        unsafe { &*self.data_ref }
    }
}

fn main() {
    let s = SelfRef::new(String::from("hello"));
    println!("{}", s.get_data());
}
```
