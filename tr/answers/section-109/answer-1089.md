## 📘 Bölüm: Paralellik ve Veri Paralel API'ler  
### 🔹 Kategori: Paralel iş yüklerini profil etme  
#### ✅ Cevap 1089: Paralel iş yüklerini profil etme

Paralel işlemlerin süresi ölçülerek performans analizi yapılabilir. Bu örnekte, Rayon ile yapılan işlemin süresi ölçülür.

```rust
use rayon::prelude::*;
use std::time::Instant;

fn main() {
    let v: Vec<u64> = (0..1_000_000).collect();
    let start = Instant::now();
    let sum: u64 = v.par_iter().sum();
    let duration = start.elapsed();
    println!("Toplam: {}, Süre: {:?}", sum, duration);
}
```
