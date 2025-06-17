## 📘 Section: CLI Applications with Clap  
### 🔹 Category: Modular CLI Structure  
#### ✅ Answer 480: Structuring large CLI tools modularly

This example shows how to split a large CLI application into modules and integrate them with `clap`.

```rust
mod greet {
    pub fn run(name: &str) {
        println!("Hello, {}!", name);
    }
}

mod farewell {
    pub fn run(name: &str) {
        println!("Goodbye, {}!", name);
    }
}

use clap::{App, Arg, SubCommand};

fn main() {
    let matches = App::new("ModularCLI")
        .subcommand(SubCommand::with_name("greet").arg(Arg::with_name("name").required(true)))
        .subcommand(SubCommand::with_name("farewell").arg(Arg::with_name("name").required(true)))
        .get_matches();

    if let Some(m) = matches.subcommand_matches("greet") {
        let name = m.value_of("name").unwrap();
        greet::run(name);
    } else if let Some(m) = matches.subcommand_matches("farewell") {
        let name = m.value_of("name").unwrap();
        farewell::run(name);
    }
}
```
