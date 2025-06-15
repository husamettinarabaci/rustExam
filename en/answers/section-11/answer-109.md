## 📘 Section: Enums I  
### 🔹 Category: Enum with Default Value  
#### ✅ Answer 109: Enum with default value

You can implement the `Default` trait for an enum to specify which variant should be used as the default. Here, the `Status` enum has three variants, and `Unknown` is set as the default. The `default()` method is then used to create a variable with this value.

```rust
enum Status {
    Active,
    Inactive,
    Unknown,
}

impl Default for Status {
    fn default() -> Self {
        Status::Unknown
    }
}

fn main() {
    let status = Status::default();
    match status {
        Status::Active => println!("Status: Active"),
        Status::Inactive => println!("Status: Inactive"),
        Status::Unknown => println!("Status: Unknown"),
    }
}
```
