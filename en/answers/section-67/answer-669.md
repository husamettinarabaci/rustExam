## 📘 Section: Domain-Driven Design in Rust
### 🔹 Category: Integrating Persistence with Repositories
#### ✅ Answer 669: Integrating persistence with repositories

Repositories abstract the storage and retrieval of domain entities. In Rust, you can define repository traits and provide implementations for different storage backends.

```rust
trait UserRepository {
    fn save(&self, user: &User);
    fn find(&self, id: u32) -> Option<User>;
}

struct InMemoryUserRepo {
    users: Vec<User>,
}

impl UserRepository for InMemoryUserRepo {
    fn save(&self, user: &User) {
        // Save logic (omitted)
    }
    fn find(&self, id: u32) -> Option<User> {
        self.users.iter().find(|u| u.id == id).cloned()
    }
}

#[derive(Clone)]
struct User {
    id: u32,
    name: String,
}
```
