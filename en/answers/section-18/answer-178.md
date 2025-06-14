## 📘 Section: Error Handling and Result Types  
### 🔹 Category: The `From` Trait for Error Conversion  
#### ✅ Answer 178: Using the `From` trait for error conversion

This example shows how to use the `From` trait to convert between custom error types.

```rust
#[derive(Debug)]
enum SmallError {
    Minor,
}

#[derive(Debug)]
enum BigError {
    Small(SmallError),
}

impl From<SmallError> for BigError {
    fn from(e: SmallError) -> Self {
        BigError::Small(e)
    }
}

fn do_work() -> Result<(), BigError> {
    let res: Result<(), SmallError> = Err(SmallError::Minor);
    res.map_err(BigError::from)
}
```
