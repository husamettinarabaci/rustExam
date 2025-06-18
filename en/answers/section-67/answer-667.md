## 📘 Section: Domain-Driven Design in Rust
### 🔹 Category: Using Rust’s Type System to Prevent Invalid States
#### ✅ Answer 667: Using Rust’s type system to prevent invalid states

Rust's type system can be used to prevent invalid states by encoding constraints in types. For example, you can use enums to represent only valid states and avoid illegal combinations.

```rust
enum OrderStatus {
    Pending,
    Shipped,
    Delivered,
}

struct Order {
    status: OrderStatus,
}

fn main() {
    let order = Order { status: OrderStatus::Pending };
    // Impossible to create an order with an invalid status
}
```
