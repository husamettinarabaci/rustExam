## 📘 Section: Project Design and Refactoring  
### 🔹 Category: Layered Architecture  
#### ✅ Answer 492: Splitting code into layers (domain, service, infrastructure)

Example of a layered architecture in Rust:

- **Domain:** Core business rules, data models, and traits are defined here.
- **Service:** Business logic, acts as a bridge between domain and infrastructure.
- **Infrastructure:** Handles database, file system, and external services.

Dependencies between layers are kept loose using traits and interfaces.

```rust
src/
  domain/
    user.rs
    order.rs
  service/
    user_service.rs
  infrastructure/
    db.rs
    file_storage.rs
```
