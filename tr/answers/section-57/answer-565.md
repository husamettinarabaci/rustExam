## 📘 Bölüm: Düşük Seviyeli Gömülü Sistemler
### 🔹 Kategori: DMA (Direct Memory Access) ile çalışma
#### ✅ Cevap 565: DMA (Direct Memory Access) ile çalışma

DMA, işlemciyi meşgul etmeden veri transferi yapmayı sağlar. Rust'ta DMA ile veri transferi için genellikle HAL kütüphaneleri kullanılır. Temel adımlar:

1. DMA kanalını yapılandırın.
2. Kaynak ve hedef buffer'ları belirtin.
3. DMA transferini başlatın.

Örnek (soyut):
```rust
// DMA başlatma örneği (gerçek donanım bağımlı kod farklılık gösterebilir)
let dma = dp.DMA1.split();
dma.channel1.start_transfer(&src_buffer, &mut dst_buffer);
```
Bu işlem sırasında CPU başka işler yapabilir.
