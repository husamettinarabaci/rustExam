## 📘 Section: Functions I  
### 🔹 Category: Lifetimes  
#### ✅ Answer 49: The `static` lifetime

**Explanation:**
The `static` lifetime means a value lives for the entire duration of the program. It is used for constants and string literals.

**Example:**
```rust
static HELLO: &str = "Hello, world!";
```
Here, `HELLO` remains in memory for the whole program.
