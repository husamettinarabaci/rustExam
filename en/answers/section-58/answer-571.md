## 📘 Section: Game Engine Architecture
### 🔹 Category: ECS and Cache-Friendly Data Structures
#### ✅ Answer 571: Designing ECS with cache-friendly data structures

The ECS (Entity-Component-System) architecture separates data and behavior for flexibility and performance. Cache-friendly data structures store components contiguously in memory, improving CPU cache efficiency. In Rust, using collections like `Vec<T>` for components is a common cache-friendly ECS design.

```rust
struct Position(f32, f32);
struct Velocity(f32, f32);

struct ECS {
    positions: Vec<Position>,
    velocities: Vec<Velocity>,
}

// Contiguous vectors keep components together in memory, making iteration fast.
```
