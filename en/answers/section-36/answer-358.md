## 📘 Section: Closures and Functional Techniques  
### 🔹 Category: Chaining Closures with Iterator Methods  
#### ✅ Answer 358: Chaining closures with iterator methods

Closures can be chained with iterator methods to perform functional transformations on collections. In the example below, a closure that doubles each element is chained with `map` and the result is collected into a new vector.

```rust
fn main() {
    let numbers = vec![1, 2, 3, 4, 5];
    let double = |x| x * 2;
    let doubled: Vec<_> = numbers.iter().map(|&x| double(x)).collect();
    println!("{:?}", doubled); // [2, 4, 6, 8, 10]
}
```
