## 📘 Bölüm: Koleksiyonlar: HashMap  
### 🔹 Kategori: HashMap ve sahiplik  
#### ✅ Cevap 177: HashMap ve sahiplik

Bu örnekte, bir `HashMap<String, String>` oluşturulmuş ve bir anahtarın değeri `remove` ile çıkarılmıştır. `remove` metodu, değerin sahipliğini döndürür ve HashMap'ten siler. Böylece çıkarılan değerin sahipliği artık sizdedir ve HashMap ile ilişkisi kalmaz.

```rust
use std::collections::HashMap;

fn main() {
    let mut map = HashMap::new();
    map.insert("ad".to_string(), "Rustacean".to_string());
    map.insert("dil".to_string(), "Rust".to_string());

    if let Some(value) = map.remove("ad") {
        println!("Çıkarılan değer: {}", value);
    } else {
        println!("Anahtar bulunamadı.");
    }
    // Artık "ad" anahtarı HashMap'te yoktur.
}
```

`remove` metodu, değerin sahipliğini size verir. Bu nedenle, çıkarılan değeri HashMap dışında özgürce kullanabilirsiniz.
