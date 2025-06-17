## 📘 Section: Modules and Visibility  
### 🔹 Category: Using `use` to bring names into scope  
#### ✅ Answer 364: Using `use` to bring names into scope

In Rust, the `use` keyword allows you to bring module or function names into scope, so you can use them directly without writing their full path. This makes code cleaner and easier to read.

The following example defines two modules, each with a function. The `use` keyword is used to bring these functions into scope for direct use in `main`:

```rust
mod foo {
    pub fn foo_fn() {
        println!("foo_fn called");
    }
}

mod bar {
    pub fn bar_fn() {
        println!("bar_fn called");
    }
}

use foo::foo_fn;
use bar::bar_fn;

fn main() {
    foo_fn(); // called directly via use
    bar_fn(); // called directly via use
}
```
