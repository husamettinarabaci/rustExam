## 📘 Bölüm: Gömülü Alan-Özel Diller (DSL)
### 🔹 Kategori: İç DSL Tasarımı
#### ✅ Cevap 1261: Rust makrolarıyla iç DSL'ler tasarlama

Rust'ın `macro_rules!` sistemi, özel sözdizimi tanımlayarak iç DSL'ler oluşturmanıza olanak tanır. Aşağıda aritmetik ifadeler için bir makro örneği verilmiştir.

```rust
macro_rules! expr {
    ($e:expr) => {
        $e
    };
}

fn main() {
    let sonuc = expr!(1 + 2 * 3);
    println!("Sonuç: {}", sonuc);
}
```

Bu makro ifadeyi doğrudan geçirir, ancak daha karmaşık DSL'ler için genişletilebilir.
