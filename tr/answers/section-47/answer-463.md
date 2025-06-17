## 📘 Bölüm: Workspace ve Paket Organizasyonu
### 🔹 Kategori: Crate'ler arası kod paylaşımı için `path` bağımlılıkları
#### ✅ Cevap 463: Crate'ler arası kod paylaşımı için `path` bağımlılıkları

Bir crate'i başka bir crate'e `path` ile bağımlı yapmak için, bağımlı crate'in `Cargo.toml` dosyasında aşağıdaki gibi tanımlama yapılır:

```toml
[dependencies]
util = { path = "../util" }
```

`util` crate'inde bir fonksiyon tanımlanır ve ana crate'de bu fonksiyon çağrılır.
