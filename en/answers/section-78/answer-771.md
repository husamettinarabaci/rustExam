## 📘 Section: Advanced Game Development
### 🔹 Category: Game Engine and GPU Programming
#### ✅ Answer 771: Writing custom shaders and GPU programming

Shaders are small programs that run on the GPU and are essential for visuals and performance in game engines. In Rust, you can write shaders and load them to the GPU using libraries like `wgpu` or `gfx`.

Example (with wgpu):
```rust
// WGSL shader file (shader.wgsl)
[[stage(vertex)]]
fn vs_main() -> void { /* ... */ }
[[stage(fragment)]]
fn fs_main() -> void { /* ... */ }
```
In Rust code:
```rust
let shader = device.create_shader_module(wgpu::ShaderModuleDescriptor {
    label: Some("MyShader"),
    source: wgpu::ShaderSource::Wgsl(include_str!("shader.wgsl").into()),
});
```
Shader programming is crucial for realistic effects and high performance in game engines.
