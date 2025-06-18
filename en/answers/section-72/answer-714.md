## 📘 Section: Lifetime System and HRTB Mastery  
### 🔹 Category: Returning references with correct lifetimes from functions  
#### ✅ Answer 714: Returning references with correct lifetimes from functions

Below is an example of a function that returns a reference to an element in a collection, with the correct lifetime annotation.

```rust
fn get_first<'a>(v: &'a Vec<i32>) -> Option<&'a i32> {
    v.get(0)
}

fn main() {
    let numbers = vec![10, 20, 30];
    if let Some(val) = get_first(&numbers) {
        println!("First value: {}", val);
    }
}
```

The `'a` lifetime in the signature ensures both input and output references are tied to the same lifetime, so the returned reference is valid as long as the collection.
