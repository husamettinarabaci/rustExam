## 📘 Bölüm: Rust'ta Aktör Frameworkleri
### 🔹 Kategori: Aktör içinde durum yönetimi
#### ✅ Cevap 1127: Aktör içinde durum yönetimi

Bir aktör, içsel durumunu struct alanlarında tutar ve gelen mesajlara göre günceller.

```rust
struct CounterActor {
    count: usize,
}

impl CounterActor {
    fn handle_increment(&mut self) {
        self.count += 1;
    }
}

// Kullanım:
let mut actor = CounterActor { count: 0 };
actor.handle_increment();
println!("Count: {}", actor.count);
```
Bu örnekte, aktörün durumu (count) gelen mesajla güncellenir.
