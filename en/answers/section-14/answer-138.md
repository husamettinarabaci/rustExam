## 📘 Section: Modules and Packages  
### 🔹 Category: Re-exporting  
#### ✅ Answer 138: Re-exporting items

**Explanation:**
Re-exporting makes items from other modules available from your module using `pub use`.

```rust
mod a {
    pub fn foo() {}
}
pub use a::foo;
```
