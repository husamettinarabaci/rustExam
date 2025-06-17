## 📘 Section: Game Development with Bevy  
### 🔹 Category: Input handling  
#### ✅ Answer 524: Handling input (keyboard, mouse) in Bevy

To handle keyboard or mouse input in Bevy, use `Res<Input<KeyCode>>` or `Res<Input<MouseButton>>` in a system. In the example below, a message is printed when the space key is pressed.

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
