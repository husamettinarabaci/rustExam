## 📘 Section: Ownership in Complex Structures  
### 🔹 Category: Helper Functions for Ownership Semantics  
#### ✅ Answer 255: Creating helper functions that preserve ownership semantics

This example defines helper functions that safely manage ownership transfer and borrowing. Rust's ownership and borrowing rules are enforced at compile time, ensuring safe access and preventing use-after-move errors.

```rust
struct Data {
    value: String,
}

// Helper function that transfers ownership
fn transfer_ownership(data: Data) -> Data {
    println!("Ownership transferred: {}", data.value);
    data
}

// Helper function that borrows a reference
fn print_value(data: &Data) {
    println!("Accessed by reference: {}", data.value);
}

fn main() {
    let data = Data { value: String::from("Rust Helper Functions") };
    print_value(&data); // borrowing
    let data = transfer_ownership(data); // ownership transfer
    // data can be used again because ownership is returned
    print_value(&data);
}
```
