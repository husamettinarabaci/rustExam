## 📘 Section: Pattern Matching and Control Flow  
### 🔹 Category: Enums and Pattern Matching  
#### ✅ Answer 281: Pattern matching on enums and extracting nested data

This problem demonstrates how to model data with nested enums and use pattern matching to access inner values. Enums in Rust are powerful for representing different types and states. With nested enums, you can easily manage complex situations and extract data using match expressions.

```rust
#[derive(Debug)]
enum Status {
    Active,
    Inactive,
}

enum User {
    Admin { status: Status },
    Guest,
    Member { status: Status },
}

fn print_user_status(user: User) {
    match user {
        User::Admin { status: Status::Active } => println!("Admin is active"),
        User::Admin { status: Status::Inactive } => println!("Admin is inactive"),
        User::Member { status } => match status {
            Status::Active => println!("Member is active"),
            Status::Inactive => println!("Member is inactive"),
        },
        User::Guest => println!("Guest user"),
    }
}

fn main() {
    print_user_status(User::Admin { status: Status::Active });
    print_user_status(User::Member { status: Status::Inactive });
    print_user_status(User::Guest);
}
```
