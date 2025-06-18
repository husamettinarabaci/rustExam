## 📘 Bölüm: Paralellik ve Veri Paralel API'ler  
### 🔹 Kategori: Rayon ve async kodu birleştirme  
#### ✅ Cevap 1087: Rayon ve async kodu birleştirme

Rayon ile CPU yoğun işlemler paralel yapılabilir, sonuçlar async fonksiyonda toplanabilir. Bu örnekte, paralel hesaplama sonrası async fonksiyon ile çıktı alınır.

```rust
use rayon::prelude::*;

tokio::main]
async fn main() {
    let data = vec![1, 2, 3, 4, 5];
    let results: Vec<_> = data.par_iter().map(|x| x * x).collect();
    print_results(results).await;
}

async fn print_results(results: Vec<i32>) {
    println!("Sonuçlar: {:?}", results);
}
```
