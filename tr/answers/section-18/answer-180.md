## 📘 Bölüm: Koleksiyonlar: HashMap  
### 🔹 Kategori: HashMap ve Option/Result  
#### ✅ Cevap 180: HashMap ve Option/Result

Bir `HashMap`'te değere erişirken `get` metodu bir `Option` döndürür. Eksik anahtarları yönetmek için desen eşleme veya `unwrap_or` gibi metodlar kullanılabilir. Ayrıca, anahtar yoksa hata döndüren bir fonksiyon da yazabilirsiniz.

```rust
use std::collections::HashMap;

fn deger_getir<'a>(map: &'a HashMap<&str, i32>, anahtar: &str) -> Result<&'a i32, String> {
    map.get(anahtar).ok_or_else(|| format!("Anahtar '{}' bulunamadı", anahtar))
}

fn main() {
    let mut map = HashMap::new();
    map.insert("a", 1);
    map.insert("b", 2);

    // Option ile kullanım
    match map.get("a") {
        Some(deger) => println!("Bulundu: {}", deger),
        None => println!("Anahtar bulunamadı"),
    }

    // Result ile kullanım
    match deger_getir(&map, "c") {
        Ok(deger) => println!("Bulundu: {}", deger),
        Err(e) => println!("{}", e),
    }
}
```
