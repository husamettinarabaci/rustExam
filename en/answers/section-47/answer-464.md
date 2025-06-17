## 📘 Section: Workspace and Package Organization
### 🔹 Category: Using `pub(crate)` and `pub(super)` for visibility control
#### ✅ Answer 464: Using `pub(crate)` and `pub(super)` for visibility control

`pub(crate)` makes a function accessible only within the same crate. `pub(super)` makes it accessible from the parent module. You can test access boundaries by trying to call these functions from different modules.

```rust
mod a {
    pub(crate) fn only_crate() {}
    pub(super) fn only_super() {}
}
```

The compiler will enforce these boundaries.
