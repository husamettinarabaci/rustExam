## 📘 Section: CLI Applications with Clap  
### 🔹 Category: Argument Definition  
#### ✅ Answer 472: Defining positional and optional arguments

This example shows how to define a positional and an optional argument using `clap`. The positional argument is the username, and the optional argument is the greeting message.

```rust
use clap::{App, Arg};

fn main() {
    let matches = App::new("GreetCLI")
        .arg(Arg::with_name("username").required(true).help("Username"))
        .arg(Arg::with_name("greeting").short("g").long("greeting").takes_value(true).help("Greeting message"))
        .get_matches();

    let username = matches.value_of("username").unwrap();
    let greeting = matches.value_of("greeting").unwrap_or("Hello");
    println!("{} {}!", greeting, username);
}
```
