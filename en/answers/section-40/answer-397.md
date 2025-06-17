## 📘 Section: Working with Strings and Text
### 🔹 Category: String Searching and Replacing
#### ✅ Answer 397: Searching and replacing substrings

You can search for a substring using `.find()` and replace with `.replace()`. `.find()` returns an `Option<usize>` with the byte index of the first match.

```rust
fn main() {
    let s = "hello world, hello rust";
    if let Some(idx) = s.find("hello") {
        println!("Found 'hello' at index {}", idx);
    }
    let replaced = s.replace("hello", "hi");
    println!("Replaced: {}", replaced);
}
```
