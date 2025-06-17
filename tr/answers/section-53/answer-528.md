## 📘 Bölüm: Bevy ile Oyun Geliştirme  
### 🔹 Kategori: Asset yönetimi  
#### ✅ Cevap 528: Asset server ile doku ve varlık yükleme

Bevy'de asset server ile bir doku yüklemek için asset server'dan bir dosya yoluyla doku alınır ve bu doku bir sprite ile kullanılır. Aşağıda, bir PNG dosyasını yükleyip sprite olarak kullanan örnek bir kod verilmiştir.

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
