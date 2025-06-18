## 📘 Section: Advanced Trait System and Coherence  
### 🔹 Category: Understanding the orphan rule and coherence restrictions  
#### ✅ Answer 722: Understanding the orphan rule and coherence restrictions

In Rust, the orphan rule states that you can only implement a trait for a type if either the trait or the type is defined in your crate.

```rust
// This will not compile because both Display and Vec are external:
// impl std::fmt::Display for Vec<i32> {
//     fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
//         write!(f, "Vec: {:?}", self)
//     }
// }
// Error: both trait and type are external (orphan rule violation)

// Solution: implement your own trait for Vec<i32>:
trait MyDisplay {
    fn my_display(&self) -> String;
}

impl MyDisplay for Vec<i32> {
    fn my_display(&self) -> String {
        format!("Vec: {:?}", self)
    }
}

fn main() {
    let v = vec![1, 2, 3];
    println!("{}", v.my_display());
}
```

The orphan rule ensures trait coherence and compiler safety.
