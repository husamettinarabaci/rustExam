## 📘 Bölüm: Bevy ile Oyun Geliştirme  
### 🔹 Kategori: Çarpışma tespiti  
#### ✅ Cevap 529: 2D ortamda çarpışma tespiti

Bevy'de 2D ortamda çarpışma tespiti için varlıklara konum ve boyut bilgisi eklenir. Bir sistemde, varlıklar arasındaki çakışma kontrol edilir ve çarpışma tespit edilirse bir işlem yapılır.

```rust
use bevy::prelude::*;

#[derive(Component, Clone, Copy)]
struct Size {
    width: f32,
    height: f32,
}

fn check_collisions(query: Query<(&Transform, &Size)>) {
    let entities: Vec<_> = query.iter().collect();
    for (i, (transform_a, size_a)) in entities.iter().enumerate() {
        for (transform_b, size_b) in entities.iter().skip(i + 1) {
            let collision = (transform_a.translation.x - transform_b.translation.x).abs() < (size_a.width + size_b.width) / 2.0 &&
                (transform_a.translation.y - transform_b.translation.y).abs() < (size_a.height + size_b.height) / 2.0;
            if collision {
                println!("Collision detected!");
            }
        }
    }
}

fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .add_system(check_collisions)
        .run();
}
```
