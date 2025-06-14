## 📘 Bölüm: Traitler I  
### 🔹 Kategori: İlişkili Türler  
#### ✅ Cevap 220: İlişkili türlü traitler

İlişkili tür, trait içinde tanımlanan ve implementasyon sırasında belirlenen türdür.

```rust
trait Sayici {
    type Eleman;
    fn sonraki(&mut self) -> Option<Self::Eleman>;
}

struct Sayac;
impl Sayici for Sayac {
    type Eleman = u32;
    fn sonraki(&mut self) {
        // implementasyon
        None
    }
}
```
