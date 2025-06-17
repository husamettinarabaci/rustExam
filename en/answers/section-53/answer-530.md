## 📘 Section: Game Development with Bevy  
### 🔹 Category: Game loop and time management  
#### ✅ Answer 530: Building a simple game loop with fixed timestep

In Bevy, you can use `FixedTime` or `run_criteria` to run a system at a fixed timestep. The example below increments a counter every 0.5 seconds.

```rust
use bevy::prelude::*;

struct Counter(u32);

fn increment_counter(mut counter: ResMut<Counter>) {
    counter.0 += 1;
    println!("Counter: {}", counter.0);
}

fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .insert_resource(Counter(0))
        .add_system(
            increment_counter
                .run_if(time::in_fixed_steps(Duration::from_secs_f32(0.5)))
        )
        .run();
}
```
