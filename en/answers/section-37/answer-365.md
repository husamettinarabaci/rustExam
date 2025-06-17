## 📘 Section: Modules and Visibility  
### 🔹 Category: Re-exporting with pub use  
#### ✅ Answer 365: Re-exporting with pub use

In this example, a function is defined in one module and re-exported from another module using `pub use`. This allows us to call the function directly from the main function.

```rust
mod utils {
    pub fn greet() {
        println!("Hello from utils::greet!");
    }
}

mod prelude {
    pub use crate::utils::greet;
}

fn main() {
    prelude::greet();
}
```
