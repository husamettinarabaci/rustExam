## 📘 Section: Game Engine Architecture
### 🔹 Category: Resource Loading and Hot-Reloading
#### ✅ Answer 573: Resource loading and hot-reloading assets

Resource loading in game engines brings files (images, sounds, models) into memory. Hot-reloading allows assets to be updated without restarting the game. In Rust, crates like `notify` can be used to watch files for changes.

```rust
use notify::{Watcher, RecursiveMode, watcher};
use std::sync::mpsc::channel;

let (tx, rx) = channel();
let mut watcher = watcher(tx, std::time::Duration::from_secs(2)).unwrap();
watcher.watch("assets/", RecursiveMode::Recursive).unwrap();
// Listen for file changes and reload resources as needed.
```
