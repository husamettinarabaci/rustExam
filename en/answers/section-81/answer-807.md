## 📘 Section: Unsafe Abstractions and APIs  
### 🔹 Category: Creating custom smart pointers with unsafe internals  
#### ✅ Answer 807: Creating custom smart pointers with unsafe internals

Below is a simple smart pointer that holds data on the heap and frees it with Drop. The internals are unsafe, but the API is safe.

```rust
pub struct MyBox<T> {
    ptr: *mut T,
}

impl<T> MyBox<T> {
    pub fn new(val: T) -> Self {
        let b = Box::new(val);
        MyBox { ptr: Box::into_raw(b) }
    }
    pub fn get(&self) -> &T {
        unsafe { &*self.ptr }
    }
}

impl<T> Drop for MyBox<T> {
    fn drop(&mut self) {
        unsafe { Box::from_raw(self.ptr); }
    }
}

fn main() {
    let b = MyBox::new(42);
    println!("{}", b.get());
}
```
