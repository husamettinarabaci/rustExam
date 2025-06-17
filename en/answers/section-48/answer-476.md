## 📘 Section: CLI Applications with Clap  
### 🔹 Category: Using Clap with Derive Macros  
#### ✅ Answer 476: Combining `clap` with `structopt`-like derive macros

This example uses `clap`'s derive macros to define a struct and parse arguments into it.

```rust
use clap::Parser;

#[derive(Parser)]
#[command(name = "DeriveCLI", about = "Argument parsing with derive example")]
struct Args {
    /// Username
    name: String,
    /// Greeting message
    #[arg(short, long, default_value = "Hello")]
    greeting: String,
}

fn main() {
    let args = Args::parse();
    println!("{} {}!", args.greeting, args.name);
}
```
