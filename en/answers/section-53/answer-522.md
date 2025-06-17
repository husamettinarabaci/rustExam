## 📘 Section: Game Development with Bevy  
### 🔹 Category: Entities and components in ECS  
#### ✅ Answer 522: Creating entities with components in ECS

To create an entity and add components in Bevy, define a system and add it to your app. In the example below, an entity is spawned with `Transform` and `GlobalTransform` components.

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
