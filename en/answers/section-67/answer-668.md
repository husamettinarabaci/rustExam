## 📘 Section: Domain-Driven Design in Rust
### 🔹 Category: Writing Domain Services and Application Layers
#### ✅ Answer 668: Writing domain services and application layers

Domain services encapsulate business logic that doesn't naturally fit in an entity or value object. In Rust, you can use structs and traits to implement service logic and organize code into layers.

```rust
struct EmailService;

impl EmailService {
    fn send_email(&self, to: &str, body: &str) {
        println!("Sending email to {}: {}", to, body);
    }
}

fn main() {
    let service = EmailService;
    service.send_email("alice@example.com", "Welcome!");
}
```
