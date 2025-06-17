## 📘 Bölüm: Koleksiyonlar: Vec, HashMap, HashSet
### 🔹 Kategori: Veri Modeliniz için Doğru Koleksiyonu Seçme
#### ✅ Cevap 420: Veri modeliniz için doğru koleksiyonu seçme

Öğrenci adları ve notları için en uygun koleksiyon `HashMap`'tir. Anahtar olarak isim, değer olarak not saklanır.

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
