## 📘 Section: Generics II  
### 🔹 Category: Multiple generic parameters  
#### ✅ Answer 221: Multiple generic parameters

You can use multiple generic type parameters by listing them in angle brackets. Here, `pair_to_tuple` takes two values of types `T` and `U` and returns a tuple.

```rust
fn pair_to_tuple<T, U>(a: T, b: U) -> (T, U) {
    (a, b)
}

fn main() {
    let t1 = pair_to_tuple(42, "hello");
    let t2 = pair_to_tuple('a', 3.14);
    println!("{:?}", t1);
    println!("{:?}", t2);
}
```
This function works for any two types, returning them as a tuple.
