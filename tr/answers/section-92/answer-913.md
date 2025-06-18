## 📘 Bölüm: Sistem Güvenliği ve Sertleştirme
### 🔹 Kategori: Güvenli API'ler için Rust tip sistemini kullanma
#### ✅ Cevap 913: Güvenli API'ler için Rust tip sistemini kullanma

Rust'ın tip sistemi, hassas verileri newtype veya enum ile kapsülleyerek yanlış kullanımı önler. Ödünç denetleyicisi ise ömür ve veri yarışlarını engeller.

Örnek: Parolaya erişimi kısıtlayan newtype kullanımı.

```rust
struct Parola(String);

impl Parola {
    fn yeni(s: String) -> Self {
        Parola(s)
    }
    fn dogrula(&self, giris: &str) -> bool {
        self.0 == giris
    }
}
```
