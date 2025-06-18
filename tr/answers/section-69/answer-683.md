## 📘 Bölüm: Macro Rules ve Deklaratif Makrolar  
### 🔹 Kategori: Hijyenik makrolar ve isim çakışmalarını önleme  
#### ✅ Cevap 683: Hijyenik makrolar ile isim çakışmalarını önleme

Bu soruda, Rust'ta makro hijyeni sayesinde isim çakışmalarının nasıl önlendiği gösterilir. Makro içinde tanımlanan değişkenler, makro çağrısının dışında çakışmaya yol açmaz.

```rust
macro_rules! make_var {
    () => {
        let x = 42;
        println!("Makro içindeki x: {}", x);
    };
}

fn main() {
    let x = 10;
    make_var!();
    println!("main içindeki x: {}", x);
}
```
Makro içindeki `x` değişkeni, ana fonksiyondaki `x` ile çakışmaz. Bu, makro hijyeninin bir sonucudur.
