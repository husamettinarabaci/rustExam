## 📘 Bölüm: Düşük Seviyeli Gömülü Sistemler
### 🔹 Kategori: Bare-metal başlangıç kodu yazma
#### ✅ Cevap 561: Bare-metal başlangıç kodu yazma

Gömülü Rust projelerinde bare-metal başlangıç için `no_std` ve `cortex-m-rt` kullanılır. `#[entry]` ile ana fonksiyon tanımlanır. Örnek kod:

```rust
#![no_std]
#![no_main]
use cortex_m_rt::entry;

#[entry]
fn main() -> ! {
    // Başlangıç kodu buraya
    loop {}
}
```

Bu kod, gömülü bir cihazda çalışacak en temel bare-metal Rust uygulamasıdır.
