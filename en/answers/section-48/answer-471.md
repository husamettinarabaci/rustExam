## 📘 Section: CLI Applications with Clap  
### 🔹 Category: Basic CLI Setup  
#### ✅ Answer 471: Creating a basic CLI with `clap`

This solution demonstrates how to use the `clap` crate to build a simple command-line interface. The example defines a greeting command that prints a message when invoked.

```rust
use clap::{App, Arg, SubCommand};

fn main() {
    let matches = App::new("GreetCLI")
        .subcommand(SubCommand::with_name("greet").about("Prints a greeting"))
        .get_matches();

    if let Some(_) = matches.subcommand_matches("greet") {
        println!("Hello, Rust CLI!");
    }
}
```
