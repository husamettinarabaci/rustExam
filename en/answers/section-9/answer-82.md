## 📘 Section: Structs I  
### 🔹 Category: Struct Fields  
#### ✅ Answer 82: Accessing struct fields

To access struct fields in Rust, use dot notation. Here, we define a `Book` struct, create an instance, and print its fields using `println!`.

```rust
struct Book {
    title: String,
    pages: u32,
}

fn main() {
    let my_book = Book {
        title: String::from("Rust Programming"),
        pages: 320,
    };
    println!("Title: {}", my_book.title);
    println!("Pages: {}", my_book.pages);
}
```
