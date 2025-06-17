## 📘 Section: Ownership in Complex Structures  
### 🔹 Category: Lifetimes and Deeply Nested Functions  
#### ✅ Answer 258: Working with lifetime annotations in deeply nested functions

This example shows how to use lifetime annotations in deeply nested functions in Rust. Each function signature specifies the appropriate lifetime parameter to ensure reference safety.

```rust
fn outer<'a>(input: &'a str) -> &'a str {
    fn inner<'b>(s: &'b str) -> &'b str {
        fn deepest<'c>(t: &'c str) -> &'c str {
            t
        }
        deepest(s)
    }
    inner(input)
}

fn main() {
    let text = String::from("Rust lifetimes");
    let result = outer(&text);
    println!("{}", result);
}
```
