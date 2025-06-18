## 📘 Bölüm: Yüksek Performanslı Serileştirme ve Deserileştirme
### 🔹 Kategori: Serileştirmede Güvenlik
#### ✅ Cevap 1228: Serileştirmede güvenlik önlemleri

Aşağıda, serileştirilmiş verinin bütünlüğü HMAC ile doğrulanır. `hmac` ve `sha2` crate'leri kullanılmıştır.

```rust
use serde::{Serialize, Deserialize};
use hmac::{Hmac, Mac};
use sha2::Sha256;

type HmacSha256 = Hmac<Sha256>;

#[derive(Serialize, Deserialize, Debug)]
struct Message {
    content: String,
}

fn main() {
    let msg = Message { content: "Merhaba".to_string() };
    let serialized = bincode::serialize(&msg).unwrap();
    let key = b"secret-key";
    // HMAC oluştur
    let mut mac = HmacSha256::new_from_slice(key).unwrap();
    mac.update(&serialized);
    let tag = mac.finalize().into_bytes();
    // Doğrulama
    let mut mac = HmacSha256::new_from_slice(key).unwrap();
    mac.update(&serialized);
    mac.verify_slice(&tag).unwrap();
    println!("Bütünlük doğrulandı!");
}
```

> Not: `hmac`, `sha2` ve `bincode` crate'lerini eklemelisiniz. HMAC ile veri bütünlüğü ve kimlik doğrulama sağlanır.
