## 📘 Section: Generics II  
### 🔹 Category: Generic methods with lifetimes  
#### ✅ Answer 227: Implementing a generic method with lifetime parameters

This example shows how to implement a method with both generic type and lifetime parameters. The `Pair` struct holds two values of type `T`. The `longest_ref` method takes two string slices with the same lifetime and returns the longer one.

```rust
struct Pair<T> {
    a: T,
    b: T,
}

impl<T> Pair<T> {
    fn longest_ref<'a>(&self, x: &'a str, y: &'a str) -> &'a str {
        if x.len() > y.len() {
            x
        } else {
            y
        }
    }
}

fn main() {
    let pair = Pair { a: 1, b: 2 };
    let s1 = "hello";
    let s2 = "world!";
    let result = pair.longest_ref(s1, s2);
    println!("Longest: {}", result);
}
```
