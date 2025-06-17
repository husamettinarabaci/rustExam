## 📘 Bölüm: Workspace ve Paket Organizasyonu
### 🔹 Kategori: `mod`, `use` ve `super`'ı etkin kullanma
#### ✅ Cevap 468: `mod`, `use` ve `super`'ı etkin kullanma

Bir crate'de birden fazla modül oluşturup, `mod`, `use` ve `super` anahtar kelimeleriyle modüller arası erişim sağlanabilir.

```rust
mod a {
    pub fn foo() {}
    pub mod b {
        pub fn bar() {
            super::foo();
        }
    }
}

use a::b::bar;

fn main() {
    bar();
}
```

Bu yapı, modüller arası erişimi ve kodun okunabilirliğini artırır.
