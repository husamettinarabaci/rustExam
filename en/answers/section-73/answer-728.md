## 📘 Section: Advanced Trait System and Coherence  
### 🔹 Category: Generic Traits with Associated Types and Default Bounds  
#### ✅ Answer 728: Creating generic traits with associated types and default bounds

You can define a generic trait with an associated type and a default bound using the following pattern. The associated type can have a default bound (e.g., `Default`), and you can override it in implementations if needed.

```rust
// Trait with an associated type and a default bound
trait MyTrait {
    type Item: Default;
    fn create_item() -> Self::Item;
}

// Implement for a struct, using the default bound
struct MyStruct;
impl MyTrait for MyStruct {
    type Item = String;
    fn create_item() -> Self::Item {
        String::default()
    }
}

// You can override the associated type if needed
struct MyIntStruct;
impl MyTrait for MyIntStruct {
    type Item = i32;
    fn create_item() -> Self::Item {
        0
    }
}
```
