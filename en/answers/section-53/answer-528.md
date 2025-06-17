## 📘 Section: Game Development with Bevy  
### 🔹 Category: Asset management  
#### ✅ Answer 528: Loading textures and assets with asset server

To load a texture with the asset server in Bevy, use the asset server to load a file and assign it to a sprite. The example below loads a PNG file and displays it as a sprite.

```rust
use bevy::prelude::*;

fn setup(mut commands: Commands, asset_server: Res<AssetServer>) {
    let texture_handle = asset_server.load("my_texture.png");
    commands.spawn(SpriteBundle {
        texture: texture_handle,
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
