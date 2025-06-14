## 📚 Section: Error Handling  
### 🔹 Category: Custom Result Aliases  
#### ✅ Answer 59: Creating a custom Result alias

**Explanation:**
A type alias can simplify error handling by making your code more readable.

```rust
enum MyError {
    Oops,
}

type MyResult<T> = Result<T, MyError>;

fn do_work(x: i32) -> MyResult<i32> {
    if x > 0 {
        Ok(x)
    } else {
        Err(MyError::Oops)
    }
}
```
