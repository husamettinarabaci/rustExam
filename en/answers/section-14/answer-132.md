## 📘 Section: Modules and Packages  
### 🔹 Category: Module Visibility  
#### ✅ Answer 132: Module visibility

**Explanation:**
Use `pub` to make items public. By default, items are private to the module.

```rust
mod my_mod {
    pub fn public_fn() {}
    fn private_fn() {}
}
```
