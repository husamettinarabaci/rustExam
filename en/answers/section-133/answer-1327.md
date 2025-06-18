## 📘 Section: Compile-Time Programming Patterns  
### 🔹 Category: Type-Level Computations Using Traits  
#### ✅ Answer 1327: Type-level computations using traits

Traits and associated types can be used for type-level computations. Below is an example of type-level addition.

```rust
trait Add {
    type Output;
}

struct One;
struct Two;
struct Three;

impl Add for One {
    type Output = Two;
}

impl Add for Two {
    type Output = Three;
}

fn main() {
    // Type-level: One + One = Two
    let _result: <One as Add>::Output = Two;
}
```
Here, the addition is modeled at the type level using traits.
