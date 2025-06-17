## 📘 Section: Collections: Vec, HashMap, HashSet
### 🔹 Category: Choosing the Right Collection for Your Data Model
#### ✅ Answer 420: Choosing the right collection for your data model

A `HashMap` is suitable for storing student names and grades. Use the name as the key and the grade as the value.

```rust
use std::collections::HashMap;

fn main() {
    let mut students = HashMap::new();
    students.insert("Ali", 90);
    students.insert("Ayşe", 85);
    students.insert("Mehmet", 78);
    for (name, grade) in &students {
        println!("{}: {}", name, grade);
    }
}
```
