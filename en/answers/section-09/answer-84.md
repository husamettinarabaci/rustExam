## 📘 Section: Structs I  
### 🔹 Category: Struct Update Syntax  
#### ✅ Answer 84: Struct update syntax

The struct update syntax in Rust allows you to create a new instance by copying fields from another instance, changing only the specified fields. Here, we update the `email` field while reusing the rest.

```rust
struct User {
    username: String,
    email: String,
    active: bool,
}

fn main() {
    let user1 = User {
        username: String::from("alice"),
        email: String::from("alice@example.com"),
        active: true,
    };
    let user2 = User {
        email: String::from("alice@rust.com"),
        ..user1
    };
    println!("User2: {} {} {}", user2.username, user2.email, user2.active);
}
```

Note: After using `..user1`, `user1` can no longer be used if any of its fields are moved (like `String`).
