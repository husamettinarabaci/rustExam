## 📘 Section: Ownership in Complex Structures  
### 🔹 Category: Safely Borrowing Parts of a Composite Struct  
#### ✅ Answer 256: Borrowing parts of a composite struct safely

In Rust, it is possible to borrow different fields of a struct at the same time because each field occupies a separate memory location. In the example below, both the `width` and `height` fields of the `Rectangle` struct are borrowed simultaneously. Rust allows this because the borrows do not overlap.

```rust
struct Rectangle {
    width: u32,
    height: u32,
}

fn borrow_fields(rect: &Rectangle) -> (&u32, &u32) {
    (&rect.width, &rect.height)
}

fn main() {
    let rect = Rectangle { width: 10, height: 20 };
    let (w, h) = borrow_fields(&rect);
    println!("Width: {}, Height: {}", w, h);
}
```
