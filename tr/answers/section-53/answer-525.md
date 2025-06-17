## 📘 Bölüm: Bevy ile Oyun Geliştirme  
### 🔹 Kategori: 2D sprite'lar ve dönüşümler  
#### ✅ Cevap 525: 2D sprite'lar ve dönüşümlerle render alma

Bevy'de bir 2D sprite'ı ekrana çizmek için bir varlık oluşturup ona `SpriteBundle` ve `Transform` bileşenleri eklenir. Aşağıdaki örnekte, sprite belirli bir konuma yerleştirilmiştir.

```rust
use bevy::prelude::*;

fn setup(mut commands: Commands) {
    commands.spawn(SpriteBundle {
        transform: Transform::from_xyz(100.0, 50.0, 0.0),
        ..Default::default()
    });
}

fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .add_startup_system(setup)
        .run();
}
```
