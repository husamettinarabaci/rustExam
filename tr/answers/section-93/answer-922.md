## 📘 Bölüm: Gömülü İşletim Sistemi ve RTOS Geliştirme
### 🔹 Kategori: Rust'ta Minimal Görev Zamanlayıcı Yazma
#### ✅ Cevap 922: Rust'ta minimal görev zamanlayıcı yazma

Görev zamanlayıcı, mikrodenetleyicide birden fazla görevin yürütülmesini yönetir. Minimal bir round-robin zamanlayıcı, görevleri bir listede tutup sırayla çalıştırabilir. Örnek:

```rust
fn main() {
    let mut gorevler: Vec<Box<dyn FnMut()>> = vec![
        Box::new(|| println!("Görev 1")),
        Box::new(|| println!("Görev 2")),
    ];
    for _ in 0..3 {
        for gorev in gorevler.iter_mut() {
            gorev();
        }
    }
}
```

Bu basit zamanlayıcı, her görevi sırayla çalıştırır. Gerçek zamanlayıcılar zamanlama ve kesme yönetimi de içerir.
