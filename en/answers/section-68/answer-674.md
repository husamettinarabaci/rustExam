## 📘 Section: Advanced Error Handling and Recovery
### 🔹 Category: Implementing retry logic for recoverable errors
#### ✅ Answer 674: Implementing retry logic for recoverable errors

Retry logic allows you to attempt an operation multiple times if it fails with a recoverable error. Use pattern matching to distinguish error types.

```rust
#[derive(Debug)]
enum MyError {
    Temporary,
    Permanent,
}

fn might_fail(attempt: u32) -> Result<(), MyError> {
    if attempt < 2 {
        Err(MyError::Temporary)
    } else if attempt == 2 {
        Err(MyError::Permanent)
    } else {
        Ok(())
    }
}

fn main() {
    let mut attempts = 0;
    let max_attempts = 3;
    loop {
        match might_fail(attempts) {
            Ok(_) => {
                println!("Success on attempt {}", attempts + 1);
                break;
            }
            Err(MyError::Temporary) if attempts < max_attempts - 1 => {
                println!("Temporary error, retrying...");
                attempts += 1;
            }
            Err(e) => {
                println!("Failed: {:?}", e);
                break;
            }
        }
    }
}
```
