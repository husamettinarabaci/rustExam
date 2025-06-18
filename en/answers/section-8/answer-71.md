## 📘 Section: Lifetimes I  
### 🔹 Category: Basic Lifetime Annotation  
#### ✅ Answer 71: Basic lifetime annotation in function signature

To return a reference from a function that depends on the input references, you must specify a lifetime parameter. This tells the compiler how the lifetimes of the inputs and output are related.

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

fn main() {
    let s1 = "hello";
    let s2 = "world!";
    let result = longest(s1, s2);
    println!("The longest string is: {}", result);
}
```
