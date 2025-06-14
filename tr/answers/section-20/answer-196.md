## 📘 Bölüm: Güvensiz Rust ve İleri Özellikler  
### 🔹 Kategori: Inline Assembly  
#### ✅ Cevap 196: Rust'ta inline assembly kullanımı

Inline assembly, doğrudan işlemci talimatları yazmanızı sağlar. Yalnızca donanım erişimi veya performans için gereklidir ve güvenli değildir.

```rust
#![feature(asm)]

fn topla_asm(a: i32, b: i32) -> i32 {
    let mut sonuc;
    unsafe {
        asm!("add {0}, {1}", inout(reg) a => sonuc, in(reg) b);
    }
    sonuc
}
```
