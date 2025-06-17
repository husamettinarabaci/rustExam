## 📘 Bölüm: Traits ve Trait Bound'lar
### 🔹 Kategori: Blanket Implementasyonlar
#### ❓ Soru 319: Blanket implementasyonlar kullanımı

Aşağıdakileri yapan bir Rust programı yazın:

- `Printable` adında bir trait tanımlayın ve içinde bir `print` metodu olsun.
- Tüm `T: std::fmt::Display` tipleri için `Printable` trait'ini blanket implementasyon ile uygulayın.
- `main` fonksiyonunda bir `String` ve bir `i32` değişkeni oluşturun ve her ikisi için de `print` metodunu çağırın.

🔧 **Görev:** Blanket implementasyon ile bir trait'i birden fazla tipe otomatik olarak uygulayın.
