## 📘 Section: Ownership Across Function Boundaries  
### 🔹 Category: Returning references from functions (with lifetimes)  
#### ✅ Answer 378: Returning references from functions (with lifetimes)

Returning references from functions requires explicit lifetime annotations. The example below shows how to safely return a reference to the first element of a vector using a lifetime parameter. It also demonstrates an incorrect usage that leads to a compile-time error.

```rust
fn first_element<'a>(v: &'a Vec<i32>) -> Option<&'a i32> {
    v.get(0)
}

fn main() {
    let numbers = vec![10, 20, 30];
    let first = first_element(&numbers);
    println!("First element: {:?}", first);

    // Incorrect example: returning a reference to a local variable
    // fn bad_ref() -> &i32 {
    //     let x = 42;
    //     &x // ERROR: `x` does not live long enough
    // }
}
```

In the correct example, the function's lifetime parameter ties the returned reference to the input vector's lifetime. In the incorrect example, the function attempts to return a reference to a local variable, which is not allowed and results in a compile error.
