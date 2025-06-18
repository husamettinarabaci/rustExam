## 📘 Bölüm: Oyun Motoru Mimarisi
### 🔹 Kategori: Betik Entegrasyonu (Lua, WASM)
#### ✅ Cevap 578: Lua veya WASM ile betik entegrasyonu

Betik entegrasyonu, oyun davranışlarını dinamik olarak değiştirmeye olanak tanır. Lua hızlı prototipleme için popülerdir, WASM ise dil bağımsızlığı sağlar. Rust'ta Lua entegrasyonu için `rlua` kullanılabilir:

```rust
use rlua::Lua;
let lua = Lua::new();
lua.context(|ctx| {
    ctx.load("print('Merhaba Lua!')").exec().unwrap();
});
```
// WASM için ise `wasmtime` veya benzeri crate'ler kullanılabilir.
