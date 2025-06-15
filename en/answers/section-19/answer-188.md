## 📘 Section: Option and Result Types  
### 🔹 Category: Option Combinators  
#### ✅ Answer 188: Using `map` and `and_then` on Option

The `map` method allows you to transform the value inside an `Option` if it exists, while `and_then` (also known as `flat_map`) lets you chain operations that themselves return an `Option`. This is useful for composing computations that may fail or be absent at any step.

```rust
fn main() {
    let value = Some(5);
    let result = value
        .map(|x| x * 2) // Doubles the value: Some(10)
        .and_then(|x| if x % 2 == 0 { Some(x) } else { None }); // Keeps only even numbers
    println!("Result: {:?}", result); // Output: Result: Some(10)

    let value = Some(3);
    let result = value
        .map(|x| x * 2) // Doubles the value: Some(6)
        .and_then(|x| if x % 4 == 0 { Some(x) } else { None }); // Only keeps multiples of 4
    println!("Result: {:?}", result); // Output: Result: None
}
```

- `map` is used to transform the value inside the `Option`.
- `and_then` is used to chain another operation that returns an `Option`.
