## 📘 Section: Advanced Patterns  
### 🔹 Category: Destructuring  
#### ✅ Answer 161: Destructuring nested structs and enums

To destructure nested structs and enums in Rust, you can use a `match` statement with patterns that mirror the structure of your data types. Here’s an example:

```rust
enum Status {
    Active(u32),
    Inactive,
}

struct Inner {
    value: i32,
}

struct Outer {
    inner: Inner,
    status: Status,
}

fn print_details(outer: Outer) {
    match outer {
        Outer { inner: Inner { value }, status: Status::Active(id) } => {
            println!("Active with value: {}, id: {}", value, id);
        }
        Outer { inner: Inner { value }, status: Status::Inactive } => {
            println!("Inactive with value: {}", value);
        }
    }
}
```

This function demonstrates destructuring both the nested struct (`Inner`) and the enum (`Status`) within a single `match` arm.
