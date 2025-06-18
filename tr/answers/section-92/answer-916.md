## 📘 Bölüm: Sistem Güvenliği ve Sertleştirme
### 🔹 Kategori: Sır ve Anahtarların Güvenli Yönetimi
#### ✅ Cevap 916: Sır ve anahtarların güvenli yönetimi

Sırlar ve kriptografik anahtarlar asla kodda sabit olarak tutulmamalı veya loglarda gösterilmemelidir. Bunları güvenli şekilde saklamak için ortam değişkenleri veya secret manager'lar kullanılmalıdır. Aşağıdaki örnekte, bir ortam değişkeninden sır yüklenip güvenli şekilde kullanımı gösterilmiştir.

```rust
use std::env;

fn main() {
    let secret = env::var("GIZLI_ANAHTAR").expect("Gizli anahtar ayarlanmamış");
    // Sır kriptografik işlemlerde kullanılır, asla ekrana yazdırılmaz
    println!("Sır başarıyla yüklendi ve kullanıma hazır.");
}
```

En iyi uygulamalar:
- Sırları ve anahtarları asla ekrana yazdırmayın.
- Geliştirme ortamında `dotenv` gibi kütüphaneler kullanın.
- Üretimde, HashiCorp Vault veya AWS Secrets Manager gibi özel secret manager'lar tercih edin.
- Kullanım sonrası sırları bellekten silmeye çalışın.
