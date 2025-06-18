## 📘 Section: Advanced Game Development  
### 🔹 Category: Audio processing and spatial sound  
#### ✅ Answer 776: Audio processing and spatial sound

This example generates a sine wave and simulates volume for sound sources at different distances.

```rust
use std::f32::consts::PI;

fn main() {
    let freq = 440.0;
    let sample_rate = 44100.0;
    let duration = 1.0;
    let listener_pos = 0.0;
    let sources = [1.0, 5.0, 10.0];
    for &src_pos in &sources {
        let distance = (src_pos - listener_pos).abs();
        let volume = 1.0 / (1.0 + distance);
        println!("Source at {:.1} -> Volume: {:.2}", src_pos, volume);
    }
}
```
