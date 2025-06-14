## 📘 Section: Closures and Iterator Basics  
### 🔹 Category: Peekable and Cycle  
#### ✅ Answer 240: Using `peekable` and `cycle`

`peekable` lets you look at the next item without consuming it; `cycle` repeats the iterator.

```rust
let mut iter = [1, 2, 3].iter().peekable();
if let Some(&next) = iter.peek() {
    println!("Next: {}", next);
}

let mut c = [10, 20].iter().cycle();
for _ in 0..5 {
    println!("{}", c.next().unwrap());
}
```
