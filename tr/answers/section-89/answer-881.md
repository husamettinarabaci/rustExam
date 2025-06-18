## 📘 Bölüm: Gömülü Eşzamanlılık ve Gerçek Zamanlı Sistemler  
### 🔹 Kategori: Gömülü Rust için eşzamanlılık modelleri  
#### ✅ Cevap 881: Gömülü Rust için eşzamanlılık modelleri tasarlama

Gömülü Rust'ta kooperatif (cooperative), preemptive (öncelikli) ve event-driven (olay tabanlı) eşzamanlılık modelleri kullanılabilir. Kooperatif modelde görevler kendi isteğiyle kontrolü bırakır, preemptive modelde ise zamanlayıcı ile görevler kesilir. Olay tabanlı modelde ise olaylar tetikleyici olur.

Örnek: RTIC (Real-Time Interrupt-driven Concurrency) ile olay tabanlı model:

```rust
// Cargo.toml'da rtic ve cortex-m-rtic eklenmeli
#[rtic::app(device = stm32f4xx_hal::pac, peripherals = true)]
mod app {
    #[task]
    fn led_blink(_cx: led_blink::Context) {
        // LED yak/söndür
    }
    #[task(binds = EXTI0)]
    fn on_button(_cx: on_button::Context) {
        // Butona basınca tetiklenir
    }
}
```

RTIC ile olay tabanlı eşzamanlılık sağlanır. Kooperatif modelde ise döngü içinde görevler sırayla çalıştırılır.
