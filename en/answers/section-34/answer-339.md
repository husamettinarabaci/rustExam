## 📘 Section: Collections and Iterators
### 🔹 Category: Lazy vs eager evaluation in iterator pipelines
#### ✅ Answer 339: Lazy and eager evaluation in iterator pipelines

This example shows that iterator adaptors (like `map`, `filter`) are lazy: they do not perform any computation until a consumer (such as `collect` or `for`) is called. In the code, intermediate operations only run when `collect` is invoked. In eager evaluation, computations would happen immediately.

```rust
fn main() {
    let numbers = vec![1, 2, 3, 4, 5];

    let iter = numbers.iter().map(|x| {
        println!("map: {}", x);
        x * 2
    }).filter(|x| {
        println!("filter: {}", x);
        x % 3 == 0
    });

    println!("No computation has happened yet!");

    let result: Vec<_> = iter.collect();
    println!("Result: {:?}", result);
}
```

The output shows that `map` and `filter` are only executed when `collect` is called. This is lazy evaluation. In eager evaluation, computations would happen immediately.
