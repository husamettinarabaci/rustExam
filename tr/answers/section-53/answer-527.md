## 📘 Bölüm: Bevy ile Oyun Geliştirme  
### 🔹 Kategori: Animasyon ve zamanlayıcılar  
#### ✅ Cevap 527: Zamanlayıcılar ve interpolasyon ile animasyon oluşturma

Bevy'de bir varlığı zamanlayıcı ve interpolasyon ile animasyonlandırmak için bir zamanlayıcı bileşeni eklenir ve bir sistemde bu zamanlayıcıya göre pozisyon gibi değerler güncellenir.

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
