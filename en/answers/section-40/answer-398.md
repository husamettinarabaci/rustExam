## 📘 Section: Working with Strings and Text
### 🔹 Category: String Splitting
#### ✅ Answer 398: Splitting strings by delimiter or regex

You can split a string by a delimiter using `.split()`. For regex splitting, use the `regex` crate's `Regex::split()`.

```rust
fn main() {
    let s = "apple,banana,pear";
    for part in s.split(',') {
        println!("{}", part);
    }
    // Regex example (requires `regex` crate)
    // use regex::Regex;
    // let re = Regex::new(r",|").unwrap();
    // for part in re.split(s) {
    //     println!("{}", part);
    // }
}
```
