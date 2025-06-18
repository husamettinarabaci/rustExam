## 📘 Bölüm: İleri Paralellik ve SIMD
### 🔹 Kategori: Rayon ile veri paralelliği kullanımı
#### ✅ Cevap 901: `rayon` ile veri paralelliği kullanımı

Bu çözümde, `rayon` crate'i ile veri paralelliği sağlanır. Vektör `par_iter()` ile paralel iteratöre dönüştürülür ve toplama işlemi birden fazla iş parçacığına dağıtılır.

```rust
use rayon::prelude::*;

fn main() {
    let v: Vec<u64> = (1..=1_000_000).collect();
    let sum: u64 = v.par_iter().sum();
    println!("Toplam: {}", sum);
}
```
