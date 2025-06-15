## 📘 Bölüm: Closure ve İteratör Temelleri  
### 🔹 Kategori: `any` ve `all` kullanımı  
#### ✅ Cevap 239: İteratörlerde `any` ve `all` kullanımı

Bu çözümde, iteratörler üzerinde `any` ve `all` metotlarının nasıl kullanılacağı gösterilmektedir. `any`, herhangi bir eleman koşulu sağlıyorsa `true` döndürürken, `all` ise tüm elemanlar koşulu sağlıyorsa `true` döndürür.

```rust
fn main() {
    let sayilar = vec![10, 20, -5, 30, 40];

    let negatif_var_mi = sayilar.iter().any(|&x| x < 0);
    let hepsi_yuzden_kucuk_mu = sayilar.iter().all(|&x| x < 100);

    println!("Negatif var mı? {}", negatif_var_mi);
    println!("Hepsi 100'den küçük mü? {}", hepsi_yuzden_kucuk_mu);
}
```
