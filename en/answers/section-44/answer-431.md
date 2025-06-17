## 📘 Section: Smart Pointers and Resource Management  
### 🔹 Category: Box<T> Usage  
#### ✅ Answer 431: Understanding when to use `Box<T>`

`Box<T>` is a smart pointer for heap allocation in Rust. It's commonly used when you need to store data on the heap instead of the stack, especially for recursive types like linked lists. Without `Box`, recursive types would have infinite size at compile time.

```rust
// Recursive type: a simple linked list
enum List {
    Cons(i32, Box<List>),
    Nil,
}

fn main() {
    let list = List::Cons(1, Box::new(List::Cons(2, Box::new(List::Nil))));
}
```
