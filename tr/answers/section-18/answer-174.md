## 📘 Bölüm: Koleksiyonlar: HashMap  
### 🔹 Kategori: Anahtar kontrolü ve giriş silme  
#### ✅ Cevap 174: Anahtar kontrolü ve giriş silme

Bir `HashMap`'te anahtarın varlığı `contains_key` ile kontrol edilir, `remove` ile giriş silinir. Örnek:

```rust
use std::collections::HashMap;

fn main() {
    let mut skorlar = HashMap::new();
    skorlar.insert(String::from("Ali"), 10);
    skorlar.insert(String::from("Ayşe"), 20);

    println!("Silme öncesi: {:?}", skorlar);

    if skorlar.contains_key("Ali") {
        println!("Ali haritada var.");
    }

    skorlar.remove("Ali");

    println!("Silme sonrası: {:?}", skorlar);
}
```

- `contains_key` anahtarın varlığını kontrol eder.
- `remove` ile anahtara ait giriş silinir.
