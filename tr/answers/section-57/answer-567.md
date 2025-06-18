## 📘 Bölüm: Düşük Seviyeli Gömülü Sistemler
### 🔹 Kategori: OpenOCD ile mikrodenetleyiciye yükleme ve hata ayıklama
#### ✅ Cevap 567: OpenOCD ile mikrodenetleyiciye yükleme ve hata ayıklama

OpenOCD, gömülü cihazlara kod yüklemek ve hata ayıklamak için kullanılır. Temel adımlar:

1. OpenOCD'yi başlatın: `openocd -f board/stm32f4discovery.cfg`
2. Başka bir terminalde GDB ile bağlanın: `arm-none-eabi-gdb target/thumbv7em-none-eabihf/debug/app`
3. GDB'de `target remote :3333` komutunu kullanın.

Bu şekilde kod yükleme ve hata ayıklama yapılır.
