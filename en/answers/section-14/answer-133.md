## 📘 Section: Modules and Packages  
### 🔹 Category: Nested Modules  
#### ✅ Answer 133: Nested modules

**Explanation:**
Modules can be nested inside each other. Access with `::` syntax.

```rust
mod outer {
    pub mod inner {
        pub fn hi() {}
    }
}
fn main() {
    outer::inner::hi();
}
```
