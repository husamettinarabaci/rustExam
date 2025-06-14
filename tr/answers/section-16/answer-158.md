## 📘 Bölüm: İleri Düzey Traitler ve Jenerikler  
### 🔹 Kategori: Newtype Pattern  
#### ✅ Cevap 158: Newtype pattern ile dış tipler için trait implementasyonu

Newtype pattern, dış bir tipi kendi struct'ınızda sarmalayarak o tip için trait implement etmenizi sağlar. Bu, doğrudan sahip olmadığınız bir tipe trait eklemenin yoludur.

```rust
struct MyU32(u32);

trait Double {
    fn double(&self) -> u32;
}

impl Double for MyU32 {
    fn double(&self) -> u32 {
        self.0 * 2
    }
}
```
