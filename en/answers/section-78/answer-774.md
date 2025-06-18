## 📘 Section: Advanced Game Development  
### 🔹 Category: Physics engine integration  
#### ✅ Answer 774: Physics engine integration

This example demonstrates a simple 2D physics simulation. Each object has a position and velocity, gravity is applied, and updates occur in a game loop.

```rust
struct Object {
    position: f32,
    velocity: f32,
}

fn main() {
    let gravity = -9.8;
    let mut obj = Object { position: 100.0, velocity: 0.0 };
    for _ in 0..5 {
        obj.velocity += gravity * 0.1; // dt = 0.1
        obj.position += obj.velocity * 0.1;
        println!("Position: {:.2}, Velocity: {:.2}", obj.position, obj.velocity);
    }
}
```
