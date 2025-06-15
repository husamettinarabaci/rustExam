## 📘 Bölüm: Crate'ler ve Harici Paketler  
### 🔹 Kategori: Sürümleme ve Bağımlılık Güncelleme  
#### ✅ Cevap 144: Bağımlılık sürümleme ve güncelleme

Rust'ta bağımlılık sürümünü `Cargo.toml` dosyasında belirtirsiniz:

```toml
[dependencies]
rand = "0.8"
```

En güncel uyumlu sürüme güncellemek için:
```bash
cargo update -p rand
```

- `cargo update`, `Cargo.toml`'daki sürüm aralığına göre `Cargo.lock` dosyasını en güncel uyumlu sürümlerle günceller.
- Sürümü elle değiştirirseniz (ör. `rand = "0.9"`), bir sonraki derlemede yeni sürüm indirilir ve lock dosyası güncellenir.

Bu şekilde bağımlılık sürümlerini kontrol edebilir ve güncelleyebilirsiniz.
