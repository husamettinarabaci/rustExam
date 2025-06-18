## 📘 Bölüm: Eklenti Güvenliği ve İzolasyonu  
### 🔹 Kategori: Eklentilerin kriptografik olarak doğrulanması  
#### ✅ Cevap 1357: Eklentilerin kriptografik olarak doğrulanması

Eklenti dosyalarının bütünlüğünü doğrulamak için SHA-256 gibi bir hash algoritması kullanılabilir. Rust'ta `sha2` crate'i ile dosyanın hash değeri hesaplanıp beklenen değerle karşılaştırılabilir. Dijital imza doğrulaması için ek olarak `ring` gibi bir crate kullanılabilir.

```rust
use sha2::{Sha256, Digest};
use std::fs::File;
use std::io::{Read, Result};

fn verify_plugin_hash(path: &str, expected_hash: &[u8]) -> Result<bool> {
    let mut file = File::open(path)?;
    let mut hasher = Sha256::new();
    let mut buffer = [0u8; 4096];
    loop {
        let n = file.read(&mut buffer)?;
        if n == 0 { break; }
        hasher.update(&buffer[..n]);
    }
    let hash = hasher.finalize();
    Ok(hash.as_slice() == expected_hash)
}
```
Bu fonksiyon, eklenti dosyasının hash'ini hesaplar ve beklenen hash ile karşılaştırır. Doğrulama başarısızsa eklenti yüklenmemelidir.
