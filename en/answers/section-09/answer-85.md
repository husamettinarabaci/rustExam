## 📚 Section: Modules and Visibility  
### 🔹 Category: Super Keyword  
#### ✅ Answer 85: Using the `super` keyword

**Explanation:**
The `super` keyword allows access to items in the parent module.

```rust
mod parent {
    pub fn parent_fn() {
        println!("Parent");
    }
    pub mod child {
        pub fn call_parent() {
            super::parent_fn();
        }
    }
}

fn main() {
    parent::child::call_parent();
}
```
