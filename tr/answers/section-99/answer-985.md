## 📘 Bölüm: Dil Arası Çalışabilirlik  
### 🔹 Kategori: Çoklu Dil Veri Serileştirme Stratejileri  
#### ✅ Cevap 985: Çoklu dil veri serileştirme stratejileri

JSON veya Protobuf gibi formatlar, Rust ve diğer diller arasında veri paylaşımında yaygın olarak kullanılır. Örneğin, Rust ve Python arasında JSON ile veri paylaşımı:

Rust tarafı:
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

Python tarafı:
```python
import json
data = '{"name": "Alice", "age": 30}'
p = json.loads(data)
print(p['name'], p['age'])
```
Bu şekilde veri iki dil arasında kolayca paylaşılır.
