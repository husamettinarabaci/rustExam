## 📘 Bölüm: Koleksiyonlar: HashMap  
### 🔹 Kategori: HashMap ve ömürler  
#### ✅ Cevap 179: HashMap ve ömürler

Bir `HashMap` içinde referansları değer olarak saklarken, bu referansların ömrünü belirtmek gerekir. Aşağıda, ömür parametresiyle `HashMap<&str, &i32>` alan ve içeriğini yazdıran bir fonksiyon örneği verilmiştir.

```rust
use std::collections::HashMap;

fn yazdir<'a>(map: &HashMap<&'a str, &'a i32>) {
    for (anahtar, deger) in map {
        println!("{}: {}", anahtar, deger);
    }
}

fn main() {
    let a = 1;
    let b = 2;
    let mut map: HashMap<&str, &i32> = HashMap::new();
    map.insert("bir", &a);
    map.insert("iki", &b);
    yazdir(&map);
}
```
