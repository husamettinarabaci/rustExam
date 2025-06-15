## 📘 Bölüm: Koleksiyonlar: HashMap  
### 🔹 Kategori: HashMap ve referanslar  
#### ✅ Cevap 178: HashMap ve referanslar

Bir `HashMap` içinde referansları değer olarak saklamak için ömür belirtmek gerekir. Burada, `HashMap<&str, &i32>` kullanarak mevcut tamsayılara referans ekliyoruz. Referansların ömrü, `HashMap`'in ömründen uzun olmalıdır.

```rust
use std::collections::HashMap;

fn main() {
    let a = 10;
    let b = 20;
    let c = 30;
    let mut map: HashMap<&str, &i32> = HashMap::new();
    map.insert("x", &a);
    map.insert("y", &b);
    map.insert("z", &c);

    for (key, value) in &map {
        println!("{}: {}", key, value);
    }
}
```
