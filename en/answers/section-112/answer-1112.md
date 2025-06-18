## 📘 Section: Async Resource Management  
### 🔹 Category: Using `Drop` with async contexts  
#### ✅ Answer 1112: Using `Drop` with async contexts

In this solution, a struct implements the `Drop` trait and prints a message when dropped. The struct is automatically dropped at the end of the async function.

```rust
struct Resource;

impl Drop for Resource {
    fn drop(&mut self) {
        println!("Resource dropped!");
    }
}

async fn use_resource() {
    let _r = Resource;
    // _r can be used here
    // At the end of the function, _r is dropped
}
```
