## 📘 Bölüm: Bevy ile Oyun Geliştirme  
### 🔹 Kategori: Oyun durumu yönetimi  
#### ✅ Cevap 526: Enumlar ve olaylarla oyun durumu yönetimi

Bevy'de oyun durumunu yönetmek için bir enum tanımlanır ve bu enum bir resource olarak eklenir. Oyun durumunu değiştiren bir sistem de eklenebilir. Aşağıda, bir tuşa basınca oyun durumunu değiştiren örnek bir kod verilmiştir.

```rust
use bevy::prelude::*;

#[derive(Debug, Clone, Eq, PartialEq, Hash)]
enum GameState {
    Menu,
    Playing,
    Paused,
}

fn toggle_state(
    keyboard_input: Res<Input<KeyCode>>,
    mut state: ResMut<State<GameState>>,
) {
    if keyboard_input.just_pressed(KeyCode::Space) {
        match state.current() {
            GameState::Menu => state.set(GameState::Playing).ok(),
            GameState::Playing => state.set(GameState::Paused).ok(),
            GameState::Paused => state.set(GameState::Menu).ok(),
        };
    }
}

fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .add_state(GameState::Menu)
        .add_system(toggle_state)
        .run();
}
```
