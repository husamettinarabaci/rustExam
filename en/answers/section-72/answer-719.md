## 📘 Section: Lifetime System and HRTB Mastery  
### 🔹 Category: Implementing methods with complex lifetime relationships  
#### ✅ Answer 719: Implementing methods with complex lifetime relationships

Below is an example of a struct and method using multiple lifetime parameters.

```rust
struct Pair<'a, 'b> {
    first: &'a str,
    second: &'b str,
}

impl<'a, 'b> Pair<'a, 'b> {
    fn longest<'c>(&'c self) -> &'c str {
        if self.first.len() > self.second.len() {
            self.first
        } else {
            self.second
        }
    }
}

fn main() {
    let s1 = String::from("hello");
    let s2 = String::from("rustacean");
    let pair = Pair { first: &s1, second: &s2 };
    println!("Longest: {}", pair.longest());
}
```

Here, both the struct and the method are defined with multiple lifetime parameters. The `longest` method returns a reference tied to the lifetime of `self`.
