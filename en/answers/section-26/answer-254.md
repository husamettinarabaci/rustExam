## 📘 Section: Ownership in Complex Structures  
### 🔹 Category: Domain Logic and Ownership Transfer  
#### ✅ Answer 254: Modeling ownership transfer in domain logic

This example demonstrates how to model ownership transfer in domain logic using Rust. Here, a `Book` is transferred from a `Library` to a `Reader`. After the transfer, the library no longer owns the book, and only the reader can access it. Rust's ownership system ensures that the book cannot be used by the library after the move, preventing use-after-move errors.

```rust
struct Book {
    title: String,
}

struct Reader {
    name: String,
    book: Option<Book>,
}

struct Library {
    book: Option<Book>,
}

fn transfer_book(library: &mut Library, reader: &mut Reader) {
    reader.book = library.book.take();
}

fn main() {
    let book = Book { title: String::from("Rust in Action") };
    let mut library = Library { book: Some(book) };
    let mut reader = Reader { name: String::from("Alice"), book: None };
    println!("Before transfer: Library has book? {}", library.book.is_some());
    println!("Before transfer: Reader has book? {}", reader.book.is_some());
    transfer_book(&mut library, &mut reader);
    println!("After transfer: Library has book? {}", library.book.is_some());
    println!("After transfer: Reader has book? {}", reader.book.is_some());
}
```
