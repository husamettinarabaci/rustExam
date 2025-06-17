## 📘 Bölüm: Bevy ile Oyun Geliştirme  
### 🔹 Kategori: bevy ile proje kurulumu  
#### ✅ Cevap 521: bevy ile yeni bir oyun projesi kurma

Bevy ile yeni bir oyun projesi başlatmak için önce Cargo ile yeni bir proje oluşturulur, ardından `Cargo.toml` dosyasına Bevy bağımlılığı eklenir. Son olarak, ana dosyada Bevy uygulaması başlatılır. Bu kod, boş bir pencere açar.

```rust
use bevy::prelude::*;

fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .run();
}
```
