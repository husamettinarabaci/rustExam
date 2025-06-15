## 📘 Bölüm: Modüller II  
### 🔹 Kategori: `pub use` ile yeniden dışa aktarma  
#### ✅ Cevap 134: `pub use` ile yeniden dışa aktarma

Bir modüldeki öğeleri `pub use` ile yeniden dışa aktararak, onları üst modül üzerinden erişilebilir kılabilirsiniz. Bu, API tasarımı ve kod organizasyonu için kullanışlıdır.

```rust
mod ic {
    pub fn selamla() {
        println!("İç modülden selamlar!");
    }
}

pub use ic::selamla;

fn main() {
    selamla(); // Yeniden dışa aktarma sayesinde doğrudan erişim
}
```
