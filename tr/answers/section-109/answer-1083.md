## 📘 Bölüm: Paralellik ve Veri Paralel API'ler  
### 🔹 Kategori: Paralel boru hatları tasarımı  
#### ✅ Cevap 1083: Paralel boru hatları tasarımı

Rayon ile haritalama, filtreleme ve toplama işlemleri paralel olarak zincirlenebilir. Bu örnekte, her eleman ikiyle çarpılır, 10'dan büyükler filtrelenir ve toplamı alınır.

```rust
use rayon::prelude::*;

fn main() {
    let v = vec![3, 6, 8, 10, 12];
    let sum: i32 = v.par_iter()
        .map(|x| x * 2)
        .filter(|&x| x > 10)
        .sum();
    println!("Sonuç: {}", sum);
}
```
