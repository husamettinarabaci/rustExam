## 📚 Section: Error Handling  
### 🔹 Category: Propagating Errors  
#### ✅ Answer 55: Propagating errors with `?`

**Explanation:**
The `?` operator is used to propagate errors in functions that return a `Result`. It returns early if an error occurs.

```rust
use std::fs::File;
use std::io::{self, Read};

fn read_file(path: &str) -> Result<String, io::Error> {
    let mut file = File::open(path)?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    Ok(contents)
}
```
