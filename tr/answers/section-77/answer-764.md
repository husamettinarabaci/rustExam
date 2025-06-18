## 📘 Bölüm: Gömülü Sistemlerde İleri Konular
### 🔹 Kategori: Gerçek Zamanlı İşletim Sistemleri (RTOS)
#### ✅ Cevap 764: Güç yönetimi ve düşük güç modları

Gömülü sistemlerde güç yönetimi, pil ömrünü uzatmak ve enerji verimliliği sağlamak için önemlidir. Düşük güç modları, işlemcinin ve çevre birimlerinin minimum enerjiyle çalışmasını sağlar.

Rust ile düşük güç moduna geçiş örneği (psödokod):
```rust
// Düşük güç moduna geç
cortex_m::asm::wfi(); // Wait For Interrupt
```
Sistem, bir kesme (interrupt) ile uyandırılır. Güç yönetimi için çevre birimleri kapatılabilir veya saat frekansı düşürülebilir.

Düşük güç modları, enerji tasarrufu ve uzun pil ömrü için gömülü sistemlerde yaygın olarak kullanılır.
