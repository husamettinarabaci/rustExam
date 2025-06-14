## 📘 Bölüm: Modüller ve Paketler  
### 🔹 Kategori: use Anahtar Kelimesi  
#### ✅ Cevap 134: use anahtar kelimesi

**Açıklama:**
`use` anahtar kelimesi, ögeleri scope'a kolayca getirir.

```rust
mod foo {
    pub fn bar() {}
}
use foo::bar;
fn main() {
    bar();
}
```
