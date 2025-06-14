## 📚 Section: Modules and Visibility  
### 🔹 Category: Self Keyword  
#### ✅ Answer 90: Using the `self` keyword in modules

**Explanation:**
The `self` keyword refers to the current module. Use `self::` to call items within the same module.

```rust
mod mymod {
    pub fn a() {
        self::b();
    }
    pub fn b() {
        println!("b called");
    }
}

fn main() {
    mymod::a();
}
```
