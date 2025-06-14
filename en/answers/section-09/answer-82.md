## 📚 Section: Modules and Visibility  
### 🔹 Category: Visibility  
#### ✅ Answer 82: Using `pub` for visibility

**Explanation:**
The `pub` keyword makes items public so they can be accessed from outside the module.

```rust
mod mymod {
    pub struct MyStruct;
    pub fn my_func() {}
}

fn main() {
    let _ = mymod::MyStruct;
    mymod::my_func();
}
```
