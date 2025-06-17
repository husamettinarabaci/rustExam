## 📘 Bölüm: Gömülü Rust Temelleri  
### 🔹 Kategori: Bellek Eşlemeli Register'lar  
#### ✅ Cevap 515: Bellek eşlemeli register'larla güvenli çalışma

Çevre Birimi Erişim Crate'leri (PAC) bellek eşlemeli register'lara güvenli erişim sağlar. Örnek: Bir GPIO pinini PAC crate ile high yapmak.

```rust
#![no_std]
#![no_main]

use cortex_m_rt::entry;
use stm32f4::stm32f401;
use panic_halt as _;

#[entry]
fn main() -> ! {
    let dp = stm32f401::Peripherals::take().unwrap();
    dp.GPIOA.odr.modify(|_, w| w.odr0().set_bit());
    loop {}
}
```
