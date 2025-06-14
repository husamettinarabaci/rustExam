## 📚 Section: Modules and Visibility  
### 🔹 Category: Re-exporting  
#### ✅ Answer 88: Re-exporting with `pub use`

**Explanation:**
`pub use` re-exports items, making them accessible from outside the module.

```rust
mod inner {
    pub fn greet() {
        println!("Hello");
    }
}
pub use inner::greet;

fn main() {
    greet();
}
```
