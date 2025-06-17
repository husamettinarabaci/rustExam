## 📘 Section: Game Development with Bevy  
### 🔹 Category: Systems and component mutation  
#### ✅ Answer 523: Writing systems that mutate components

A system in Bevy can select entities with a specific component and update their values. In the example below, all entities with a `Transform` component have their position updated.

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
