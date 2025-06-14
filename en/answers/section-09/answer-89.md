## 📚 Section: Modules and Visibility  
### 🔹 Category: Private Items  
#### ✅ Answer 89: Private items in modules

**Explanation:**
Items are private by default. Private items cannot be accessed from outside their module.

```rust
mod mymod {
    fn secret() {}
    pub fn public() {
        // secret() is accessible here
        secret();
    }
}

fn main() {
    mymod::public();
    // mymod::secret(); // Error: private function
}
```
