## 📘 Section: Structs I  
### 🔹 Category: Structs with Lifetimes  
#### ✅ Answer 88: Structs with lifetimes

When a struct contains reference fields, you must specify lifetime parameters. Here, `Message` has a `&str` field, so we add a lifetime parameter to the struct.

```rust
struct Message<'a> {
    content: &'a str,
}

fn main() {
    let text = "Hello, Rust!";
    let msg = Message { content: text };
    println!("Message: {}", msg.content);
}
```
