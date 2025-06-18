## 📘 Bölüm: Karmaşık Alanlar için DSL'ler
### 🔹 Kategori: DSL Tasarımı ve Kullanımı
#### ✅ Cevap 1461: Konfigürasyon yönetimi için DSL'ler oluşturma

Rust'ta konfigürasyon yönetimi için DSL, anahtar-değer çiftleriyle yapılandırma tanımlamayı kolaylaştırır. DSL'in sözdizimi genellikle basit ve okunabilirdir. Ayrıştırma işlemi, satır satır anahtar ve değeri ayırarak yapılabilir.

```rust
// Örnek DSL:
// port = 8080
// debug = true
// host = "localhost"

// Basit bir ayrıştırıcı örneği:
fn parse_config_line(line: &str) -> Option<(&str, &str)> {
    let parts: Vec<&str> = line.split('=').map(|s| s.trim()).collect();
    if parts.len() == 2 {
        Some((parts[0], parts[1]))
    } else {
        None
    }
}
```
