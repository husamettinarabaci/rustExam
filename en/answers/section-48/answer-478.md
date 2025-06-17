## 📘 Section: CLI Applications with Clap  
### 🔹 Category: Config File and Source Merging  
#### ✅ Answer 478: Reading config files with `clap` and merging sources

This example determines a setting value by merging sources: file, environment variable, and command-line argument.

```rust
use clap::{App, Arg};
use std::env;
use std::fs;

fn main() {
    let matches = App::new("ConfigCLI")
        .arg(Arg::with_name("config").short("c").long("config").takes_value(true).help("Config file"))
        .arg(Arg::with_name("value").short("v").long("value").takes_value(true).help("Setting value"))
        .get_matches();

    let mut value = None;
    if let Some(cfg) = matches.value_of("config") {
        if let Ok(contents) = fs::read_to_string(cfg) {
            value = Some(contents.trim().to_string());
        }
    }
    if value.is_none() {
        value = env::var("SETTING").ok();
    }
    if value.is_none() {
        value = matches.value_of("value").map(|s| s.to_string());
    }
    println!("Setting value: {}", value.unwrap_or("Default".to_string()));
}
```
