## 📘 Section: CLI Applications with Clap  
### 🔹 Category: Flags and Environment Variables  
#### ✅ Answer 477: Parsing flags and environment variables

This example shows how to use a flag and an environment variable to control program behavior.

```rust
use clap::{App, Arg};
use std::env;

fn main() {
    let matches = App::new("FlagCLI")
        .arg(Arg::with_name("debug").short("d").long("debug").help("Enable debug mode"))
        .get_matches();

    let debug = matches.is_present("debug") || env::var("DEBUG").is_ok();
    if debug {
        println!("Debug mode enabled!");
    } else {
        println!("Running in normal mode.");
    }
}
```
