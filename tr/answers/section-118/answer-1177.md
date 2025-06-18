## 📘 Bölüm: Kilitsiz Veri Yapıları
### 🔹 Kategori: Hazard pointer veya epoch tabanlı geri kazanım
#### ✅ Cevap 1177: Hazard pointer veya epoch tabanlı geri kazanım

Hazard pointer ve epoch tabanlı geri kazanım, kilitsiz veri yapılarında güvenli bellek yönetimi sağlar.

- Hazard pointer: Her iş parçacığı eriştiği nesneleri işaretler, böylece silinmeden önce güvenli olup olmadığı kontrol edilir.
- Epoch tabanlı: Bellek, tüm iş parçacıkları belirli bir "epoch"u geçtiğinde geri kazanılır.

Rust'ta crossbeam-epoch gibi crate'ler epoch tabanlı yönetimi uygular.
