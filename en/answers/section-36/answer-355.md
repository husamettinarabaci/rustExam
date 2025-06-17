## 📘 Section: Closures and Functional Techniques  
### 🔹 Category: Closures as struct fields  
#### ✅ Answer 355: Storing a closure as a struct field

This exercise shows how to store a closure as a field in a struct. In Rust, you can use a trait object like `Box<dyn Fn(i32) -> i32>` to store a closure in a struct. The struct's method can then call the closure.

```rust
struct Calculator {
    operation: Box<dyn Fn(i32) -> i32>,
}

impl Calculator {
    fn calculate(&self, value: i32) -> i32 {
        (self.operation)(value)
    }
}

fn main() {
    let calc = Calculator {
        operation: Box::new(|x| x * 2),
    };
    println!("{}", calc.calculate(5)); // 10
}
```
