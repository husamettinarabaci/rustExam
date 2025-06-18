## 📘 Section: Domain-Driven Design in Rust
### 🔹 Category: Designing Domain Events and Event Sourcing
#### ✅ Answer 664: Designing domain events and event sourcing

Domain events represent significant occurrences in your domain. In Rust, you can use enums or structs to model events, and use collections to store event history for event sourcing.

```rust
#[derive(Debug)]
enum DomainEvent {
    UserCreated { user_id: u32 },
    EmailChanged { user_id: u32, new_email: String },
}

fn main() {
    let events = vec![
        DomainEvent::UserCreated { user_id: 1 },
        DomainEvent::EmailChanged { user_id: 1, new_email: "new@example.com".to_string() },
    ];
    for event in events {
        println!("{:?}", event);
    }
}
```
