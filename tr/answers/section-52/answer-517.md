## 📘 Bölüm: Gömülü Rust Temelleri  
### 🔹 Kategori: Aygıt Sürücüleri ve HAL  
#### ✅ Cevap 517: `embedded-hal` ile aygıt sürücüsü yazma

`embedded-hal` aygıt sürücüleri için trait'ler sağlar. Örnek: `OutputPin` trait'i ile basit bir LED sürücüsü.

```rust
use embedded_hal::digital::v2::OutputPin;

pub struct Led<PIN: OutputPin> {
    pin: PIN,
}

impl<PIN: OutputPin> Led<PIN> {
    pub fn new(pin: PIN) -> Self {
        Led { pin }
    }
    pub fn on(&mut self) {
        let _ = self.pin.set_high();
    }
    pub fn off(&mut self) {
        let _ = self.pin.set_low();
    }
}
```
