## 📘 Bölüm: Pinning ve Kendine Referanslı Tipler
### 🔹 Kategori: `pin_project` veya `pin-utils` ile Şablon Azaltma
#### ✅ Cevap 747: `pin_project` veya `pin-utils` ile şablon azaltma

`pin-project` crate'i, pinlenmiş alanlara güvenli erişim için makro sağlar ve kendine referanslı tiplerde şablon kodunu azaltır.

`Cargo.toml`'a ekleyin:
```toml
[dependencies]
pin-project = "1"
```

Örnek:
```rust
use pin_project::pin_project;
use std::pin::Pin;

#[pin_project]
struct KendineRef {
    #[pin]
    veri: String,
}

impl KendineRef {
    fn veri_al(self: Pin<&mut Self>) -> &str {
        let this = self.project();
        this.veri
    }
}

fn main() {
    let mut s = Box::pin(KendineRef { veri: String::from("merhaba") });
    let veri = KendineRef::veri_al(Pin::as_mut(&mut s));
    println!("{}", veri);
}
```
