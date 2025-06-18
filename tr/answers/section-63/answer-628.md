## 📘 Bölüm: İleri Trait Tasarımı ve Kullanımı
### 🔹 Kategori: Derleme Zamanı Garantiler için İşaretçi Traitler
#### ✅ Cevap 628: Derleme zamanı garantiler için işaretçi traitler kullanımı

İşaretçi traitler, metot veya ilişkili öğe içermeyen trait'lerdir. Tipleri belirli özelliklerle işaretlemek ve derleme zamanında kontrol sağlamak için kullanılır. Standart kütüphanedeki `Send` ve `Sync` buna örnektir.

```rust
trait BenimIsaretcim {}

struct Foo;
impl BenimIsaretcim for Foo {}

fn isaretci_kontrol<T: BenimIsaretcim>(_t: T) {}

fn main() {
    let foo = Foo;
    isaretci_kontrol(foo); // Sadece Foo BenimIsaretcim ise derlenir
}
```
