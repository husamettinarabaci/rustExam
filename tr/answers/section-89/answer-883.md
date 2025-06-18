## 📘 Bölüm: Gömülü Eşzamanlılık ve Gerçek Zamanlı Sistemler  
### 🔹 Kategori: Gerçek zamanlı zamanlama ve öncelikler  
#### ✅ Cevap 883: Gerçek zamanlı zamanlama ve öncelikler

Gerçek zamanlı sistemlerde zamanlayıcılar, görevlerin belirli zamanlarda veya önceliklere göre çalışmasını sağlar. Statik öncelikte görevlerin önceliği sabittir, dinamikte ise çalışma sırasında değişebilir.

Aşağıda RTIC ile iki farklı önceliğe sahip görev örneği verilmiştir:

```rust
#[rtic::app(device = stm32f4xx_hal::pac, peripherals = true)]
mod app {
    #[task(priority = 2)]
    fn high_priority(_cx: high_priority::Context) {
        // Yüksek öncelikli görev
    }
    #[task(priority = 1)]
    fn low_priority(_cx: low_priority::Context) {
        // Düşük öncelikli görev
    }
}
```

Burada `high_priority` görevi, `low_priority` görevinden önce çalışır. RTIC, öncelik tabanlı zamanlama sağlar.
