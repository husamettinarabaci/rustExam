## 📘 Section: Game Development with Bevy  
### 🔹 Category: Collision detection  
#### ✅ Answer 529: Detecting collisions in 2D environments

For 2D collision detection in Bevy, add position and size information to entities. In a system, check for overlaps and perform an action if a collision is detected.

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
