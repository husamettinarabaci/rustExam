## 📘 Section: Lifetimes I  
### 🔹 Category: Lifetime Elision Rules  
#### ✅ Answer 73: Lifetime elision rules

**Explanation:**
Rust's lifetime elision rules allow you to omit explicit lifetime annotations in function signatures when the compiler can infer them. For example, if a function takes a single reference parameter and returns a value not tied to a reference, no explicit lifetime is needed.

```rust
fn string_length(s: &str) -> usize {
    s.len()
}

fn main() {
    let text = "hello world";
    let len = string_length(text);
    println!("Length: {}", len);
}
```

- No explicit lifetime is needed because the reference does not escape the function.
- Rust's lifetime elision rules handle this automatically.
