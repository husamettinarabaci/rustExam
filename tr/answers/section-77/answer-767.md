## 📘 Bölüm: Gömülü Sistemlerde İleri Konular
### 🔹 Kategori: Gerçek Zamanlı İşletim Sistemleri (RTOS)
#### ✅ Cevap 767: İletişim protokolleri implementasyonu (I2C, SPI, UART)

I2C, SPI ve UART, gömülü sistemlerde yaygın kullanılan iletişim protokolleridir. Temel farkları:
- I2C: İki hatlı, çoklu cihaz desteği, düşük hız
- SPI: Dört hatlı, yüksek hız, tam çift yönlü
- UART: Seri iletişim, genellikle iki cihaz arası

Rust'ta HAL (Hardware Abstraction Layer) kullanılarak protokol implementasyonu kolaylaşır.

Örnek (I2C, psödokod):
```rust
let i2c = hal::I2c::new(...);
i2c.write(addr, &[0x01, 0x02]);
```
HAL, donanım bağımsız kod yazmayı ve farklı platformlarda taşınabilirliği sağlar.
