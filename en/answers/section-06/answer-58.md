## 📚 Section: Error Handling  
### 🔹 Category: Error Handling in Iterators  
#### ✅ Answer 58: Error handling in iterators

**Explanation:**
You can use iterator methods like `map` and `collect` to handle errors when processing collections.

```rust
fn main() {
    let strings = vec!["1", "2", "a"];
    let results: Result<Vec<i32>, _> = strings.iter().map(|s| s.parse()).collect();
    match results {
        Ok(nums) => println!("Numbers: {:?}", nums),
        Err(e) => println!("Error: {}", e),
    }
}
```
