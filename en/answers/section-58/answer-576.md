## 📘 Section: Game Engine Architecture
### 🔹 Category: Audio Subsystem Integration and Mixing
#### ✅ Answer 576: Audio subsystem integration and mixing

The audio subsystem enables playback of effects and music in games. Mixing combines multiple audio streams. In Rust, you can use a crate like `rodio` for basic audio playback:

```rust
use rodio::{Decoder, OutputStream, source::Source};
use std::fs::File;

let (_stream, stream_handle) = OutputStream::try_default().unwrap();
let file = File::open("sound.wav").unwrap();
let source = Decoder::new(std::io::BufReader::new(file)).unwrap();
stream_handle.play_raw(source.convert_samples());
```
