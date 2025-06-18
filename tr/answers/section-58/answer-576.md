## 📘 Bölüm: Oyun Motoru Mimarisi
### 🔹 Kategori: Ses Alt Sistemi ve Miksaj
#### ✅ Cevap 576: Ses alt sistemi entegrasyonu ve miksaj

Ses alt sistemi, oyunlarda efekt ve müziklerin oynatılmasını sağlar. Miksaj, birden fazla ses akışının birleştirilmesidir. Rust'ta `rodio` gibi bir crate ile temel ses oynatma örneği:

```rust
use rodio::{Decoder, OutputStream, source::Source};
use std::fs::File;

let (_stream, stream_handle) = OutputStream::try_default().unwrap();
let file = File::open("sound.wav").unwrap();
let source = Decoder::new(std::io::BufReader::new(file)).unwrap();
stream_handle.play_raw(source.convert_samples());
```
