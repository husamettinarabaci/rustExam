## 📘 Section: Traits I  
### 🔹 Category: Trait Bounds in Function Signatures  
#### ✅ Answer 206: Trait bounds in function signatures

Trait bounds in function signatures allow you to accept any type that implements a specific trait. Here, the `print_summary` function accepts any type implementing the `Summarizable` trait.

```rust
trait Summarizable {
    fn summary(&self) -> String;
}

struct Article {
    headline: String,
}

struct Tweet {
    username: String,
}

impl Summarizable for Article {
    fn summary(&self) -> String {
        format!("Article: {}", self.headline)
    }
}

impl Summarizable for Tweet {
    fn summary(&self) -> String {
        format!("Tweet by @{}", self.username)
    }
}

fn print_summary<T: Summarizable>(item: T) {
    println!("{}", item.summary());
}

fn main() {
    let a = Article { headline: String::from("Rust Traits Simplified") };
    let t = Tweet { username: String::from("rustacean") };
    print_summary(a);
    print_summary(t);
}
```
