## 📘 Section: Domain-Driven Design in Rust
### 🔹 Category: Implementing Value Objects and Aggregates
#### ✅ Answer 663: Implementing value objects and aggregates

Value objects are types that represent a value and are compared by value, not identity. Aggregates are clusters of domain objects treated as a single unit. In Rust, you can use structs and implement `PartialEq` for value objects.

```rust
#[derive(Debug, PartialEq)]
struct Email(String);

struct User {
    email: Email,
    // ... other fields ...
}

fn main() {
    let email1 = Email("alice@example.com".to_string());
    let email2 = Email("alice@example.com".to_string());
    assert_eq!(email1, email2); // Value equality
}
```
