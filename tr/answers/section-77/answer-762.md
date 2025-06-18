## 📘 Bölüm: Gömülü Sistemlerde İleri Konular
### 🔹 Kategori: Gerçek Zamanlı İşletim Sistemleri (RTOS)
#### ✅ Cevap 762: Kesme servis rutinlerini (ISR) güvenli şekilde yazma

Kesme servis rutini (ISR), donanım olaylarına anında yanıt vermek için kullanılan özel fonksiyonlardır. Rust'ta ISR yazarken:
- Paylaşılan verilere erişimde yarış durumu ve veri tutarlılığına dikkat edilmelidir.
- ISR içinde uzun süren işlemlerden kaçınılmalıdır.
- `#[interrupt]` veya benzeri öznitelikler kullanılır.

Örnek (RTIC veya cortex-m-rt ile):
```rust
#[interrupt]
fn EXTI0() {
    // GPIO pin değiştiğinde çağrılır
    // Kısa ve güvenli işlemler yapılmalı
}
```
ISR'lerde mümkün olduğunca kısa ve yan etkisiz kod yazılmalı, kritik veriler atomik veya lock-free yöntemlerle korunmalıdır.
