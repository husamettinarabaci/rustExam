## 📘 Section: Ownership in Complex Structures  
### 🔹 Category: Ownership Transfer Across Abstractions  
#### ✅ Answer 253: Moving ownership across multiple layers of abstraction

This example demonstrates how ownership can be moved across multiple abstraction layers in Rust. Each function or struct takes ownership of the value, and after the move, the previous owner can no longer use it. This prevents use-after-move errors and ensures memory safety.

```rust
struct Data {
    value: String,
}

fn data_layer(val: String) -> Data {
    Data { value: val }
}

fn service_layer(data: Data) -> Data {
    println!("Service received: {}", data.value);
    data
}

fn application_layer(data: Data) {
    println!("Application received: {}", data.value);
}

fn main() {
    let raw = String::from("Rust Ownership");
    let data = data_layer(raw);
    // raw is now moved and cannot be used
    let data = service_layer(data);
    // data is moved again
    application_layer(data);
    // data cannot be used here
}
```
