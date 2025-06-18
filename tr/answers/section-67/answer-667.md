## 📘 Bölüm: Alan Odaklı Tasarım
### 🔹 Kategori: Geçersiz durumları önlemek için Rust tip sistemini kullanma
#### ✅ Cevap 667: Geçersiz durumları önlemek için Rust tip sistemini kullanma

Rust'ın tip sistemi, geçersiz durumları tiplerle modelleyerek önlemenizi sağlar. Örneğin, enum ile sadece geçerli durumlar tanımlanabilir ve geçersiz kombinasyonlar engellenir.

```rust
enum SiparisDurumu {
    Beklemede,
    Kargolandı,
    TeslimEdildi,
}

struct Siparis {
    durum: SiparisDurumu,
}

fn main() {
    let siparis = Siparis { durum: SiparisDurumu::Beklemede };
    // Geçersiz bir durum oluşturmak mümkün değildir
}
```
