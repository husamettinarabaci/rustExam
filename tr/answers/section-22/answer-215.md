## 📘 Bölüm: Traitler I  
### 🔹 Kategori: Harici Tipler için Trait  
#### ✅ Cevap 215: Harici tipler için trait implementasyonu

Harici bir tip için trait ancak trait veya tipten biri crate'inize aitse uygulanabilir (orphan kuralı).

```rust
trait BenimTraitim {
    fn birsey_yap(&self);
}

impl BenimTraitim for String {
    fn birsey_yap(&self) {
        println!("{}", self);
    }
}
```

Hem trait hem de tip harici ise implementasyon yapılamaz.
