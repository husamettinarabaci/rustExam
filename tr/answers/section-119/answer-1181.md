## 📘 Bölüm: Aktör Modeli İleri Konular
### 🔹 Kategori: Aktör gözetim ağaçları
#### ✅ Cevap 1181: Ölçeklenebilir aktör gözetim ağaçları tasarımı

Gözetim ağacı, aktörlerin hiyerarşik olarak birbirini izlediği bir yapıdır. Bir çocuk aktör hata verdiğinde, ebeveyn aktör onu yeniden başlatır. Bu yapı, sistemin ölçeklenebilirliğini ve hata toleransını artırır.

```rust
// Basit bir gözetim ağacı şeması (gerçek kod yerine şema):
//
// Supervisor
// ├── Worker 1
// ├── Worker 2
// └── Worker 3
//
// Supervisor, çocuklarını izler ve biri hata verirse yeniden başlatır.
```
