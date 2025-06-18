## 📘 Bölüm: İleri Oyun Geliştirme
### 🔹 Kategori: Oyun Motoru ve GPU Programlama
#### ✅ Cevap 771: Özel shader ve GPU programlama

Shader, GPU üzerinde çalışan küçük programlardır ve oyun motorlarında görsellik ve performans için kritik öneme sahiptir. Rust'ta `wgpu` veya `gfx` gibi kütüphanelerle shader yazılabilir ve GPU'ya yüklenebilir.

Örnek (wgpu ile):
```rust
// WGSL shader dosyası (shader.wgsl)
[[stage(vertex)]]
fn vs_main() -> void { /* ... */ }
[[stage(fragment)]]
fn fs_main() -> void { /* ... */ }
```
Rust kodunda:
```rust
let shader = device.create_shader_module(wgpu::ShaderModuleDescriptor {
    label: Some("MyShader"),
    source: wgpu::ShaderSource::Wgsl(include_str!("shader.wgsl").into()),
});
```
Shader programlama, gerçekçi efektler ve yüksek performans için oyun motorlarında vazgeçilmezdir.
