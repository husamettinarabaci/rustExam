## 📘 Bölüm: Derleme Zamanı Performans Optimizasyonu
### 🔹 Kategori: Paralel Derleme ve Derleyici Ayarları
#### ✅ Cevap 1422: Paralel derlemeyi etkin kullanma

Rust derleyicisi ve Cargo, bağımsız crate'leri ve modülleri aynı anda derleyerek çok çekirdekli işlemcilerden tam verim alır. Varsayılan olarak, Cargo sistemdeki çekirdek sayısı kadar paralel iş başlatır. `-j` veya `--jobs` parametresiyle işçi sayısı ayarlanabilir.

```bash
cargo build --jobs 4
```

Bağımlılıkları küçük ve bağımsız tutmak, paralel derlemeden en iyi şekilde yararlanmayı sağlar.
