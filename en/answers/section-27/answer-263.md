## 📘 Section: Lifetimes and Borrowing Semantics  
### 🔹 Category: Lifetimes in Struct Definitions  
#### ✅ Answer 263: Using lifetimes in struct definitions

In Rust, if a struct contains a reference, its lifetime cannot outlive the reference it holds. Therefore, the struct must declare a lifetime parameter. In the example below, the `Message` struct contains a string reference and is defined with a lifetime parameter `'a`.

```rust
struct Message<'a> {
    content: &'a str,
}

fn main() {
    let text = String::from("Hello, Rust!");
    let msg = Message { content: &text };
    println!("Message: {}", msg.content);
}
```

Here, the lifetime of `msg` cannot exceed the lifetime of `text`, ensuring that references remain valid.
