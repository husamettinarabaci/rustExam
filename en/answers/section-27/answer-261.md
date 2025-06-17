## 📘 Section: Lifetimes and Borrowing Semantics  
### 🔹 Category: Multiple Lifetimes in Functions  
#### ✅ Answer 261: Writing functions with multiple lifetimes

In Rust, a function can take multiple lifetime parameters to allow references from different sources to be used safely. In the example below, the function `compare_lengths` takes two references with independent lifetimes. This enables the function to compare data from two unrelated sources without requiring them to have the same lifetime.

```rust
fn compare_lengths<'a, 'b>(a: &'a str, b: &'b str) -> usize {
    if a.len() > b.len() {
        a.len()
    } else {
        b.len()
    }
}

fn main() {
    let s1 = String::from("hello");
    let s2 = String::from("world");
    let len = compare_lengths(&s1, &s2);
    println!("Longest length: {}", len);
}
```

Here, `'a` and `'b` are independent lifetimes, so the function can safely compare two references with different lifetimes.
