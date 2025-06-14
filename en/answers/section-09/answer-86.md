## 📚 Section: Modules and Visibility  
### 🔹 Category: Crate Keyword  
#### ✅ Answer 86: Using the `crate` keyword

**Explanation:**
The `crate` keyword refers to the root of the current crate. It is used to access items from the root module.

```rust
fn root_fn() {
    println!("Root function");
}

mod sub {
    pub fn call_root() {
        crate::root_fn();
    }
}

fn main() {
    sub::call_root();
}
```
