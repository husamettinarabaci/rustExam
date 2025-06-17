## 📘 Bölüm: Proje Tasarımı ve Refaktörizasyon  
### 🔹 Kategori: Tekrarı Önleme  
#### ✅ Cevap 493: Yardımcı fonksiyonlar ve traitlerle tekrarları önleme

Kod tekrarını önlemek için:

- Ortak işlemler için yardımcı fonksiyonlar yazılır.
- Farklı tiplerde ortak davranışlar için traitler tanımlanır.
- Trait implementasyonları ile kodun yeniden kullanılabilirliği sağlanır.

```rust
// Yardımcı fonksiyon örneği
def print_json<T: serde::Serialize>(value: &T) {
    println!("{}", serde_json::to_string(value).unwrap());
}

// Trait ile ortak davranış
trait Printable {
    fn print(&self);
}

impl Printable for User {
    fn print(&self) {
        println!("User: {}", self.name);
    }
}
```
