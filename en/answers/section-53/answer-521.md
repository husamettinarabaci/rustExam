## 📘 Section: Game Development with Bevy  
### 🔹 Category: Setting up a project with bevy  
#### ✅ Answer 521: Setting up a new game project with bevy

To start a new Bevy game project, first create a new Cargo project, then add the Bevy dependency to your `Cargo.toml`. Finally, write a minimal main file that starts the Bevy app. This code opens an empty window.

```rust
use bevy::prelude::*;

fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .run();
}
```
