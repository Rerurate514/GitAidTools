use tauri::api::process::Command;

pub mod git_command_line{
    use std::process::Command;

    pub struct output_msg{
        result: bool,
        detail: String
    }

    fn expect_msg(_msg: &str) -> &str{
        &format!("Error in git_command_line mod ::: detail => "{},_msg)
    }

    pub fn git_add(_path: &str) -> output_msg {
        let cmd = Command::new("git")
                            .arg(["add",_path])
                            .output()
                            .unwrap();

        if cmd.status().success() {
            output_msg{
                result : bool = true,
                detail : String = String::from_utf8_lossy(&cmd.stdout),
            }
        }
        else {
            output_msg{
                result : bool = false,
                detail : String = String::from_utf8_lossy(&cmd.stdout),
            }
        }
    }
}