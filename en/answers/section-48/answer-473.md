## 📘 Section: CLI Applications with Clap  
### 🔹 Category: Subcommands and Argument Groups  
#### ✅ Answer 473: Using subcommands and argument groups

This example demonstrates how to define two subcommands with their own arguments using `clap`.

```rust
use clap::{App, Arg, SubCommand};

fn main() {
    let matches = App::new("CmdCLI")
        .subcommand(SubCommand::with_name("greet")
            .arg(Arg::with_name("name").required(true).help("Who to greet")))
        .subcommand(SubCommand::with_name("farewell")
            .arg(Arg::with_name("name").required(true).help("Who to bid farewell")))
        .get_matches();

    if let Some(matches) = matches.subcommand_matches("greet") {
        let name = matches.value_of("name").unwrap();
        println!("Hello, {}!", name);
    } else if let Some(matches) = matches.subcommand_matches("farewell") {
        let name = matches.value_of("name").unwrap();
        println!("Goodbye, {}!", name);
    }
}
```
