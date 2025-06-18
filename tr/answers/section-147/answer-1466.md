## 📘 Bölüm: Karmaşık Alanlar için DSL'ler
### 🔹 Kategori: DSL Tasarımı ve Kullanımı
#### ✅ Cevap 1466: Bir uygulamada birden fazla DSL birleştirme

Birden fazla DSL'i bir arada kullanmak için her DSL'i ayrı modüllerde tanımlayabilir ve arayüzler ile etkileşimi yönetebilirsiniz. DSL'ler arası veri aktarımı için ortak veri yapıları kullanılabilir.

```rust
// Örnek: Konfigürasyon DSL ve Sorgu DSL
mod config_dsl {
    pub fn parse(input: &str) { /* ... */ }
}
mod query_dsl {
    pub fn execute(query: &str) { /* ... */ }
}

fn main() {
    config_dsl::parse("port = 8080");
    query_dsl::execute("SELECT * FROM users");
}
```
