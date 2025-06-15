## 📘 Bölüm: Koleksiyonlar: HashMap  
### 🔹 Kategori: Anahtar-değer çiftleri üzerinde yineleme  
#### ✅ Cevap 173: Anahtar-değer çiftleri üzerinde yineleme

Bir `HashMap`'teki tüm anahtar-değer çiftleri üzerinde `for` döngüsü ve `.iter()` ile yineleme yapılabilir. Örnek:

```rust
use std::collections::HashMap;

fn main() {
    let mut skorlar = HashMap::new();
    skorlar.insert(String::from("Ali"), 10);
    skorlar.insert(String::from("Ayşe"), 20);

    for (anahtar, deger) in &skorlar {
        println!("{}: {}", anahtar, deger);
    }
}
```

- `.iter()` veya `&skorlar` ile anahtar-değer referansları üzerinde yineleme yapılır.
- Her yinelemede `(anahtar, deger)` çifti referans olarak elde edilir.
