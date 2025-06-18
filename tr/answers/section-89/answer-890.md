## 📘 Bölüm: Gömülü Eşzamanlılık ve Gerçek Zamanlı Sistemler  
### 🔹 Kategori: Gömülü gerçek zamanlı kodu profil etme ve optimize etme  
#### ✅ Cevap 890: Gömülü gerçek zamanlı kodu profil etme ve optimize etme

Profiling, kodun darboğazlarını bulmak ve optimizasyon yapmak için gereklidir. Semihosting, RTT ve cycle counter gibi araçlar kullanılabilir.

Aşağıda cycle counter ile fonksiyon süresi ölçme örneği verilmiştir:

```rust
use cortex_m::peripheral::DWT;

fn measure<F: FnOnce()>(f: F) -> u32 {
    let start = DWT::get_cycle_count();
    f();
    let end = DWT::get_cycle_count();
    end - start
}
```

Bu kod, verilen fonksiyonun çalışma süresini cycle cinsinden ölçer. Sonuç loglanarak analiz yapılabilir.
