## 📘 Bölüm: Bevy ile Oyun Geliştirme  
### 🔹 Kategori: Girdi yönetimi  
#### ✅ Cevap 524: Bevy'de giriş (klavye, fare) yönetimi

Bevy'de klavye veya fare girişi yönetmek için bir sistemde `Res<Input<KeyCode>>` veya `Res<Input<MouseButton>>` kullanılır. Aşağıdaki örnekte, boşluk tuşuna basıldığında bir mesaj yazdırılır.

```rust
use bevy::prelude::*;

fn check_input(keyboard_input: Res<Input<KeyCode>>) {
    if keyboard_input.just_pressed(KeyCode::Space) {
        println!("Space key pressed!");
    }
}

fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .add_system(check_input)
        .run();
}
```
