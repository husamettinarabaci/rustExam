## 📘 Bölüm: Geleceğin Rust'ı ve Deneysel Özellikler  
### 🔹 Kategori: Kararsız özellikleri yönetmek için feature flag'leri kullanma  
#### ✅ Cevap 997: Kararsız özellikleri yönetmek için feature flag'leri kullanma

Feature flag'ler, Rust projelerinde belirli özelliklerin isteğe bağlı olarak etkinleştirilmesini sağlar. Özellikle kararsız veya deneysel özellikler için, kodun derlenmesi sırasında hangi özelliklerin aktif olacağını kontrol etmekte kullanılır.

Örneğin, bir crate'in `Cargo.toml` dosyasında:

```toml
[features]
experimental = []
```

Ve kodda:

```rust
#[cfg(feature = "experimental")]
fn experimental_fn() {
    // Deneysel kod
}
```

Kararsız Rust özellikleri için ise, nightly derleyicide `#![feature(...)]` ile etkinleştirilir. Feature flag'ler, kodun farklı ortamlarda farklı davranmasını sağlar, ancak kararsız özellikler kullanılırken dikkatli olunmalıdır çünkü API'ler değişebilir.
