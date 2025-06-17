## 📘 Bölüm: Bevy ile Oyun Geliştirme  
### 🔹 Kategori: ECS'de varlık ve bileşenler  
#### ✅ Cevap 522: ECS'de bileşenlerle varlıklar oluşturma

Bevy'de bir varlık oluşturmak ve ona bileşen eklemek için bir sistem tanımlanır ve bu sistem uygulamaya eklenir. Aşağıdaki örnekte, bir varlık oluşturulup ona `Transform` ve `GlobalTransform` bileşenleri ekleniyor.

```rust
use bevy::prelude::*;

fn setup(mut commands: Commands) {
    commands.spawn((Transform::default(), GlobalTransform::default()));
}

fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .add_startup_system(setup)
        .run();
}
```
