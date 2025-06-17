## 📘 Bölüm: Bevy ile Oyun Geliştirme  
### 🔹 Kategori: Sistemler ve bileşen güncelleme  
#### ✅ Cevap 523: Bileşenleri değiştiren sistemler yazma

Bevy'de bir sistem, belirli bir bileşene sahip varlıkları seçip bu bileşenlerin değerlerini güncelleyebilir. Aşağıdaki örnekte, tüm `Transform` bileşenine sahip varlıkların pozisyonu güncelleniyor.

```rust
use bevy::prelude::*;

fn move_entities(mut query: Query<&mut Transform>) {
    for mut transform in query.iter_mut() {
        transform.translation.x += 1.0;
    }
}

fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .add_system(move_entities)
        .run();
}
```
