## 📘 Section: Game Engine Architecture
### 🔹 Category: Physics Simulation Basics
#### ✅ Answer 575: Implementing physics simulation basics

Physics simulation models the movement and interaction of objects realistically. For a simple gravity simulation, update position and velocity. Example in Rust:

```rust
struct Object { y: f32, velocity: f32 }
let mut obj = Object { y: 10.0, velocity: 0.0 };
let gravity = -9.8;
for _ in 0..10 {
    obj.velocity += gravity * 0.1;
    obj.y += obj.velocity * 0.1;
    println!("Position: {}", obj.y);
}
```
