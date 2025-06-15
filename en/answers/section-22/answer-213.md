## 📘 Section: Generics I  
### 🔹 Category: Generics with Enums  
#### ✅ Answer 213: Using generics with enums

Generic enums allow you to define variants that can hold values of any type. In this example, the enum `MyOption<T>` is generic over type `T`. You can create `MyOption<i32>`, `MyOption<&str>`, etc., and use pattern matching to extract the value.

```rust
enum MyOption<T> {
    Some(T),
    None,
}

fn main() {
    let a = MyOption::Some(5);
    let b = MyOption::Some("hello");
    let c: MyOption<f64> = MyOption::None;

    match a {
        MyOption::Some(val) => println!("a: {}", val),
        MyOption::None => println!("a: None"),
    }
    match b {
        MyOption::Some(val) => println!("b: {}", val),
        MyOption::None => println!("b: None"),
    }
    match c {
        MyOption::Some(val) => println!("c: {}", val),
        MyOption::None => println!("c: None"),
    }
}
```
