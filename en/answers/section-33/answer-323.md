## 📘 Section: Error Handling with Result and Option  
### 🔹 Category: Converting Between Option<T> and Result<T, E>  
#### ✅ Answer 323: Converting Between Option<T> and Result<T, E>

You can convert between `Option<T>` and `Result<T, E>` using methods like `ok_or`, `ok_or_else`, and `ok`. To convert an `Option<T>` to a `Result<T, E>`, use `ok_or` to provide an error value. To convert a `Result<T, E>` to an `Option<T>`, use the `ok` method, which discards the error.

```rust
fn main() {
    // Option<T> -> Result<T, E>
    let maybe_num: Option<i32> = Some(42);
    let res: Result<i32, &str> = maybe_num.ok_or("No value!");
    println!("Option to Result: {:?}", res);

    let none_val: Option<i32> = None;
    let res_none: Result<i32, &str> = none_val.ok_or("No value!");
    println!("None to Result: {:?}", res_none);

    // Result<T, E> -> Option<T>
    let ok_val: Result<i32, &str> = Ok(7);
    let opt = ok_val.ok();
    println!("Result to Option: {:?}", opt);

    let err_val: Result<i32, &str> = Err("An error occurred");
    let opt_err = err_val.ok();
    println!("Err to Option: {:?}", opt_err);
}
```
