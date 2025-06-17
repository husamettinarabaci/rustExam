## 📘 Section: Game Development with Bevy  
### 🔹 Category: Game state management  
#### ✅ Answer 526: Managing game state with enums and events

To manage game state in Bevy, define an enum and add it as a resource. You can then write a system to change the state, for example, when a key is pressed. The example below toggles the game state with the space key.

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
