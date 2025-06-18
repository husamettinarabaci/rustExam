## 📘 Bölüm: İleri Hata Yönetimi ve Kurtarma
### 🔹 Kategori: `thiserror` ve `anyhow` crate'lerini etkin kullanma
#### ❓ Soru 672: `thiserror` ve `anyhow` crate'lerini etkin kullanma

Aşağıdaki adımları izleyerek `thiserror` ve `anyhow` crate'lerinin ergonomik hata yönetimi için nasıl kullanılacağını gösteren bir Rust örneği yazın:

- `thiserror` crate'i ile özel bir hata tipi tanımlayın.
- `Result<T, Hataniz>` döndüren bir fonksiyon yazın.
- Ana fonksiyonda `anyhow` crate'ini kullanarak hataları yönetin ve kullanıcı dostu bir mesaj yazdırın.
- `anyhow!` veya `.context()` ile hata bağlamı eklemeyi gösterin.

🔧 **Görev:** Uygulama kodunda özel hata tipleri için `thiserror`, esnek hata yönetimi için `anyhow` kullanın.
