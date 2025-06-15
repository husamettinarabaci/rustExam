## 📘 Section: Modules II  
### 🔹 Category: Re-exporting with `pub use`  
#### ✅ Answer 134: Re-exporting with `pub use`

You can re-export items from a module using `pub use`, making them accessible from outside as if they were defined in the parent module. This is useful for API design and organization.

```rust
mod inner {
    pub fn greet() {
        println!("Hello from inner module!");
    }
}

pub use inner::greet;

fn main() {
    greet(); // Accessible directly due to re-export
}
```
