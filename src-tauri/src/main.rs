// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod logics;
use logics::github_api::github_api_auth::oauth_request_api;

use logics::command_line_control::git_command_line::*;


// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            oauth_request,
            git_add_cmd,
            git_commit_cmd,
            ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
async fn oauth_request(app: tauri::AppHandle){
    oauth_request_api(app);
}

#[tauri::command]
fn git_add_cmd(_path: &str) -> String{
    git_add(_path)
}

#[tauri::command]
fn git_commit_cmd(_msg: &str) -> String{
    println!("sommit = {}",_msg);
    git_commit(_msg)
}
