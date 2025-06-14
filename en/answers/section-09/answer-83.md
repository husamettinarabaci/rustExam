## 📚 Section: Modules and Visibility  
### 🔹 Category: Nested Modules  
#### ✅ Answer 83: Nested modules

**Explanation:**
Modules can be nested. You access nested items with the full path.

```rust
mod outer {
    pub mod inner {
        pub fn hello() {
            println!("Hello from inner");
        }
    }
}

fn main() {
    outer::inner::hello();
}
```
