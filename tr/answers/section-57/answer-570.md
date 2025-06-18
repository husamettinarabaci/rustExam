## 📘 Bölüm: Düşük Seviyeli Gömülü Sistemler
### 🔹 Kategori: JTAG ve SWD ile düşük seviyeli hata ayıklama
#### ✅ Cevap 570: JTAG ve SWD ile düşük seviyeli hata ayıklama

JTAG ve SWD, gömülü cihazlarda donanım seviyesinde hata ayıklama sağlar. Rust projelerinde bu arayüzlerle OpenOCD veya probe-rs gibi araçlar kullanılır. Temel adımlar:

1. Donanımı bağlayın (JTAG/SWD kablosu).
2. OpenOCD veya probe-rs ile bağlantı kurun.
3. GDB ile hata ayıklama oturumu başlatın.

Örnek komut: `openocd -f interface/stlink.cfg -f target/stm32f4x.cfg`
