## 📘 Section: Modules II  
### 🔹 Category: Importing glob (`*`)  
#### ✅ Answer 139: Importing glob (`*`)

Glob imports (`use module::*;`) bring all public items from a module into scope. Example:

```rust
mod tools {
    pub fn hammer() {
        println!("Hammering!");
    }
    pub fn wrench() {
        println!("Wrenching!");
    }
}

use tools::*;

fn main() {
    hammer();
    wrench();
}
```

- All public items from `tools` are imported.
- You can call `hammer()` and `wrench()` directly in `main`.

**Pros:**
- Convenient when you need many items from a module.
- Reduces repetitive `use` statements.

**Cons:**
- Can cause name conflicts if multiple modules have items with the same name.
- Makes it harder to see where items come from, reducing code clarity.
