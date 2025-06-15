## 📘 Section: Closures and Ownership
### 🔹 Category: Closures as Struct Fields
#### ✅ Answer 246: Closures as struct fields

In Rust, you can store a closure in a struct field by using a generic type parameter with a trait bound like `Fn`, or by boxing the closure. Here is an example using `Box<dyn Fn(i32) -> i32>`:

```rust
struct ClosureHolder {
    func: Box<dyn Fn(i32) -> i32>,
}

fn main() {
    let holder = ClosureHolder {
        func: Box::new(|x| x * 2),
    };
    let result = (holder.func)(10);
    println!("Result: {}", result); // Output: Result: 20
}
```

This example defines a struct `ClosureHolder` with a field `func` that can hold any closure or function that takes an `i32` and returns an `i32`. The closure is called through the struct field.
