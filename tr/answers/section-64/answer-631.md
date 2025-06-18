## 📘 Bölüm: Async Desenler ve Runtime İç Yapısı  
### 🔹 Kategori: async/await'in perde arkasını keşfetme  
#### ✅ Cevap 631: async/await'in perde arkasını keşfetme

Rust'ta async/await, derleyici tarafından state machine'lere dönüştürülerek çalışır. Bir async fonksiyon çağrıldığında, fonksiyonun yürütülmesi bir future döndürür ve bu future poll edildiğinde, fonksiyonun çalışması askıya alınabilir ve daha sonra devam edebilir. Bu mekanizma, eşzamanlı işlemleri kolayca yazmamızı sağlar.

```rust
async fn example() -> u32 {
    5
}

fn main() {
    let fut = example(); // Future döner
    // Bir executor ile poll edilmesi gerekir
}
```
