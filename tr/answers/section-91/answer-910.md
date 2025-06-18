## 📘 Bölüm: İleri Paralellik ve SIMD
### 🔹 Kategori: Düşük maliyetli paralel algoritmalar implementasyonu
#### ✅ Cevap 910: Düşük maliyetli paralel algoritmalar implementasyonu

Bu çözümde, `rayon`'un paralel iteratörleriyle büyük bir vektör üzerinde karesini alma işlemi verimli şekilde paralel olarak yapılır. Hesaplama, minimum ek yükle iş parçacıklarına dağıtılır.

```rust
use rayon::prelude::*;

fn main() {
    let v: Vec<u32> = (1..=100_000).collect();
    let kareler: Vec<u32> = v.par_iter().map(|x| x * x).collect();
    println!("{:?}", &kareler[..10]);
}
```
