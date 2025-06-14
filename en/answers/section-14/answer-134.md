## 📘 Section: Modules and Packages  
### 🔹 Category: use Keyword  
#### ✅ Answer 134: The `use` keyword

**Explanation:**
The `use` keyword brings items into scope for easier access.

```rust
mod foo {
    pub fn bar() {}
}
use foo::bar;
fn main() {
    bar();
}
```
