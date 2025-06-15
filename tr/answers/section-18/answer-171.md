## 📘 Bölüm: Koleksiyonlar: HashMap  
### 🔹 Kategori: HashMap oluşturma ve değer ekleme  
#### ✅ Cevap 171: `HashMap` oluşturma ve değer ekleme

Rust'ta `HashMap` oluşturmak için standart kütüphaneden içe aktarım yapılır ve `insert` metodu ile anahtar-değer eklenir. Örnek:

```rust
use std::collections::HashMap;

fn main() {
    let mut skorlar = HashMap::new();
    skorlar.insert(String::from("Ali"), 10);
    skorlar.insert(String::from("Ayşe"), 20);

    println!("{:?}", skorlar);
}
```

- `HashMap::new()` boş bir harita oluşturur.
- `insert` anahtar-değer çifti ekler.
- Harita debug formatında yazdırılır.
