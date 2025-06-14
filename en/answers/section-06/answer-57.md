## 📚 Section: Error Handling  
### 🔹 Category: Handling Multiple Errors  
#### ✅ Answer 57: Handling multiple error types

**Explanation:**
You can use `Box<dyn std::error::Error>` to return different error types from a function.

```rust
use std::fs::File;
use std::io::{self, Read};

fn read_and_parse(path: &str) -> Result<i32, Box<dyn std::error::Error>> {
    let mut file = File::open(path)?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    let num: i32 = contents.trim().parse()?;
    Ok(num)
}
```
