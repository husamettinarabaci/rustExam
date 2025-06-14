## 📘 Section: Rust and WebAssembly (WASM)  
### 🔹 Category: WASM Basics  
#### ✅ Answer 211: Compiling Rust to WebAssembly

To compile Rust to WebAssembly, install the `wasm32-unknown-unknown` target and use `cargo build`:

1. Install the target: `rustup target add wasm32-unknown-unknown`
2. Build: `cargo build --target wasm32-unknown-unknown`

This produces a `.wasm` file in the `target/wasm32-unknown-unknown/release` directory.
