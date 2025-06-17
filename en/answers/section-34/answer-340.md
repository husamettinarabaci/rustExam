## 📘 Section: Collections and Iterators  
### 🔹 Category: Error handling in iterators that return `Result<T, E>`  
#### ✅ Answer 340: Error handling in iterators that return Result

In this example, we try to divide each element of a vector by 2. If the number is even, the division succeeds; if it's odd, we return an error. We use `partition` to separate successful and error results.

```rust
fn main() {
    let numbers = vec![4, 7, 10, 13, 16];
    let results: Vec<_> = numbers
        .into_iter()
        .map(|n| if n % 2 == 0 {
            Ok(n / 2)
        } else {
            Err(format!("{} is odd, cannot divide by 2", n))
        })
        .collect();

    let (oks, errs): (Vec<_>, Vec<_>) = results.into_iter().partition(Result::is_ok);

    println!("Successful results:");
    for ok in oks {
        if let Ok(val) = ok {
            println!("{}", val);
        }
    }
    println!("Errors:");
    for err in errs {
        if let Err(e) = err {
            println!("{}", e);
        }
    }
}
```
