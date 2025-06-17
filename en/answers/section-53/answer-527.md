## 📘 Section: Game Development with Bevy  
### 🔹 Category: Animation and timers  
#### ✅ Answer 527: Creating animations with timers and interpolation

To animate an entity in Bevy using a timer and interpolation, add a timer component and update the entity's position in a system based on the timer's progress.

```rust
use bevy::prelude::*;

struct AnimationTimer(Timer);

fn animate_sprite(
    time: Res<Time>,
    mut query: Query<(&mut Transform, &mut AnimationTimer)>,
) {
    for (mut transform, mut timer) in query.iter_mut() {
        timer.0.tick(time.delta());
        let t = timer.0.percent();
        transform.translation.x = 100.0 * t;
    }
}

fn setup(mut commands: Commands) {
    commands.spawn((
        SpriteBundle::default(),
        AnimationTimer(Timer::from_seconds(2.0, TimerMode::Repeating)),
    ));
}

fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .add_startup_system(setup)
        .add_system(animate_sprite)
        .run();
}
```
