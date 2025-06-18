## 📘 Bölüm: Performans Optimizasyonu ve Profil
### 🔹 Kategori: Derleyici Bayrakları ile Optimizasyon
#### ✅ Cevap 647: Dallanma yanlış tahminleri ve önbellek kaçırmalarını en aza indirme

Dallanma yanlış tahminleri, işlemcinin beklenmeyen bir dalı tahmin etmesiyle oluşur ve performansı düşürür. Olası teknikler: kodda dallanmayı azaltmak, veri erişimini sıralı yapmak.

```rust
fn sum_positive(v: &[i32]) -> i32 {
    let mut sum = 0;
    for &x in v {
        // Dallanmayı azaltmak için koşulu ters çevirin
        sum += (x > 0) as i32 * x;
    }
    sum
}

fn main() {
    let v = vec![1, -2, 3, -4, 5];
    println!("{}", sum_positive(&v));
}
```

Veri yapılarında sıralı erişim ve koşulları azaltmak, önbellek ve dallanma optimizasyonu sağlar.
