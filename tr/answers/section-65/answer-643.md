## 📘 Bölüm: Performans Optimizasyonu ve Profil
### 🔹 Kategori: Derleyici Bayrakları ile Optimizasyon
#### ✅ Cevap 643: Gereksiz tahsisatları tespit ve ortadan kaldırma

Rust'ta gereksiz tahsisatlar, özellikle vektör ve string gibi dinamik yapılar kullanılırken ortaya çıkabilir. `Vec::with_capacity` gibi fonksiyonlarla önceden kapasite ayarlamak, tahsisat sayısını azaltır.

```rust
fn main() {
    let mut v = Vec::with_capacity(1000);
    for i in 0..1000 {
        v.push(i);
    }
    println!("{}", v.len());
}
```

Gereksiz tahsisatları tespit etmek için `valgrind`, `heaptrack` gibi araçlar veya Rust'ın kendi profil araçları kullanılabilir. Azaltmak için önceden kapasite ayarlama ve gereksiz kopyalardan kaçınma önerilir.
