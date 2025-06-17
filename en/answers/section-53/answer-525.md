## 📘 Section: Game Development with Bevy  
### 🔹 Category: Rendering 2D sprites and transforms  
#### ✅ Answer 525: Rendering 2D sprites and transformations

To render a 2D sprite in Bevy, spawn an entity with a `SpriteBundle` and a `Transform` component. The example below places the sprite at a specific position.

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
