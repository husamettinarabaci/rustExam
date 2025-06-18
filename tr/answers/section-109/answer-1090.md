## 📘 Bölüm: Paralellik ve Veri Paralel API'ler  
### 🔹 Kategori: Ölçeklenebilir paralel uygulamalar yazma  
#### ✅ Cevap 1090: Ölçeklenebilir paralel uygulamalar yazma

Rayon veya crossbeam ile büyük veri setlerinde ölçeklenebilir paralel uygulamalar yazılabilir. Bu örnekte, büyük bir vektörün toplamı paralel olarak hesaplanır.

```rust
use rayon::prelude::*;

fn main() {
    let v: Vec<u64> = (0..10_000_000).collect();
    let sum: u64 = v.par_iter().sum();
    println!("Toplam: {}", sum);
}
```
