## 📘 Bölüm: Eklenti Mimarileri  
### 🔹 Kategori: Dinamik Yükleme ve Eklenti Sistemleri  
#### ✅ Cevap 1256: Çalışma zamanında eklenti değiştirme (hot-swap)

Rust'ta hot-swap için eklenti kütüphanesi serbest bırakılır (drop edilir), yeni sürüm dosya sistemi üzerinden güncellenir ve tekrar yüklenir. Hot-swap avantajı, uygulamayı durdurmadan eklenti güncelleyebilmektir. Ancak, eski eklentiye ait referanslar kullanılmamalı ve eşzamanlı erişim dikkatle yönetilmelidir.

Örnek yöntem:
```rust
use libloading::Library;

fn reload_plugin(path: &str) -> Library {
    // Eski Library nesnesi drop edilir
    Library::new(path).unwrap()
}
```

Hot-swap sırasında eklenti API'si değişmemeli ve eşzamanlı erişim için kilit mekanizmaları kullanılmalıdır.
