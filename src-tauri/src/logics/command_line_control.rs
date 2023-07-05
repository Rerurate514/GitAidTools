pub mod git_command_line{
    use std::process::{Command, Output};
    use serde::Deserialize;
    use serde::Serialize;

    #[derive(Debug)]
    #[derive(Deserialize,Serialize)]
    pub struct SetCommand{
        addFilePath : String,
        commitMsg : String,
        selectBranch : String
    }

    pub struct OutputMsg{
        result: bool,
        detail: String
    }

    fn output_result_aug(_msg: OutputMsg) -> String {
        if _msg.result { format!("成功 ::: 詳細 => {}",_msg.detail) }
        else { format!("失敗 ::: 理由 => {}",_msg.detail) }
    }

    fn expect_msg(_msg: &str) -> String{
        let format_msg = format!("Error in git_command_line mod ::: detail => {}",_msg);
        print!("{}",format_msg);
        format_msg
    }

    fn output_result(_cmd: Output) -> String{
        if _cmd.status.success() {
            output_result_aug(OutputMsg {
                result : true,
                detail : String::from_utf8_lossy(&_cmd.stdout).to_string(),
            })
        }
        else {
            output_result_aug(OutputMsg{
                result : false,
                detail : String::from_utf8_lossy(&_cmd.stderr).to_string(),
            })
        }
    }

    pub fn git_add(_path: &str) -> String {
        match std::env::current_dir() {
            Ok(x) => {
                let cmd = Command::new("git")
                    .current_dir(x)
                    .arg("add")
                    .arg(_path)
                    .output()
                    .unwrap();

                    output_result(cmd)
            }
            Err(_x) => {
                expect_msg("failed to fetch currentDirectry")
            }
        }
    }

    pub fn git_commit(_msg: &str) -> String {
        match std::env::current_dir() {
            Ok(x) => {
                let cmd = Command::new("git")
                    .current_dir(x)
                    .arg("commit")
                    .arg("-m")
                    .arg(_msg)
                    .output()
                    .unwrap();

                    output_result(cmd)
            }
            Err(_x) => {
                expect_msg("failed to fetch currentDirectry")
            }
        }
    }

    pub fn git_push(_branch: &str) -> String {
        let branch : String = _branch.to_string();
        match std::env::current_dir() {
            Ok(x) => {
                let handle = std::thread::spawn(move || {
                    Command::new("git")
                                    .current_dir(x)
                                    .arg("push")
                                    .arg("origin")
                                    .arg(branch)
                                    .output()
                                    .unwrap()
                });
                let cmd = handle.join().unwrap();
                output_result(cmd)
            }
            Err(_x) => {
                expect_msg("failed to fetch currentDirectry")
            }
        }
    }
}