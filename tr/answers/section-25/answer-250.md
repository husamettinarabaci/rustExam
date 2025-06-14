## 📘 Bölüm: Kapanışlar ve Sahiplik  
### 🔹 Kategori: Kapanış ve Özyineleme  
#### ✅ Cevap 250: Kapanış ve özyineleme

Kapanışlar doğrudan kendini çağıramaz, ancak sabit nokta kombinatorü veya parametreyle özyineleme yapılabilir.

```rust
fn faktoriyel(n: u32) -> u32 {
    (|f, n| if n == 0 { 1 } else { n * f(f, n - 1) })(|f, n| if n == 0 { 1 } else { n * f(f, n - 1) }, n)
}

println!("{}", faktoriyel(5));
```

Bu teknikle kapanışlarda özyineleme sağlanabilir.
