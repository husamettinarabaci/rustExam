## 📚 Bölüm: Crate'ler ve Harici Paketler  
### 🔹 Kategori: Cargo ve Bağımlılıklar  
#### ✅ Cevap 149: Geliştirme bağımlılıkları kullanımı

**Açıklama:**

- `Cargo.toml` dosyasındaki `dev-dependencies`, yalnızca geliştirme sırasında (ör. test veya benchmark) ihtiyaç duyulan bağımlılıklar için kullanılır.
- Bir geliştirme bağımlılığı eklemek için `[dev-dependencies]` bölümüne ekleme yapılır. Örnek:
  ```toml
  [dev-dependencies]
  pretty_assertions = "1.3"
  ```
- Geliştirme bağımlılıkları normal derlemelere (`cargo build`) dahil edilmez, sadece `cargo test` veya `cargo bench` gibi geliştirme komutlarında kullanılır.
- Üretim derlemelerinizin daha küçük ve gereksiz bağımlılıklardan arınmış olması için dev-dependencies kullanılır.
