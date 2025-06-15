## 📘 Bölüm: Enumlar I  
### 🔹 Kategori: Varsayılan Değerli Enum  
#### ✅ Cevap 109: Varsayılan değerli enum

Bir enum için `Default` trait'i implemente edilerek hangi varyantın varsayılan olacağı belirlenebilir. Burada `Status` enum'u üç varyanta sahiptir ve varsayılan olarak `Unknown` seçilmiştir. `default()` metodu ile bu değer oluşturulabilir.

```rust
enum Status {
    Active,
    Inactive,
    Unknown,
}

impl Default for Status {
    fn default() -> Self {
        Status::Unknown
    }
}

fn main() {
    let durum = Status::default();
    match durum {
        Status::Active => println!("Durum: Aktif"),
        Status::Inactive => println!("Durum: Pasif"),
        Status::Unknown => println!("Durum: Bilinmiyor"),
    }
}
```
