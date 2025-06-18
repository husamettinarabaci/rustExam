## 📘 Section: Language Interoperability  
### 🔹 Category: Multi-language Data Serialization Strategies  
#### ✅ Answer 985: Multi-language data serialization strategies

Formats like JSON or Protobuf are commonly used to share data between Rust and other languages. For example, sharing data between Rust and Python using JSON:

Rust side:
```rust
use serde::{Serialize, Deserialize};
use serde_json;

#[derive(Serialize, Deserialize)]
struct Person {
    name: String,
    age: u8,
}

fn main() {
    let p = Person { name: "Alice".into(), age: 30 };
    let json = serde_json::to_string(&p).unwrap();
    println!("{}", json);
}
```

Python side:
```python
import json
data = '{"name": "Alice", "age": 30}'
p = json.loads(data)
print(p['name'], p['age'])
```
This way, data can be easily shared between the two languages.
