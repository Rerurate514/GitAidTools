pub mod github_api_auth{
    use tauri::WindowBuilder;
    use tauri::WindowUrl;
    use octocrab::Octocrab;
    const CLIENT_ID : &str = "13148b29f0040e5807ac";
    const CLIENT_SECRET: &str = "3c5f2eec1222e7d46e4fbc448c19089343c000bc";

    // -> octocrab::Result<()>
    pub fn oauth_request_api(app: tauri::AppHandle){
        let temp_url = format!("{}{}{}","https://github.com/login/oauth/authorize?client_id=",CLIENT_ID,"&scope=repo");
        let temp_url_fn = temp_url.clone();
        println!("{}",temp_url);

        open_web_view(app,temp_url_fn);
    }

    fn open_web_view(app: tauri::AppHandle, _url: String){
        let window = tauri::WindowBuilder::new(
            &app, 
            "OAuth認証", 
            tauri::WindowUrl::External(_url.parse().unwrap())
        )
        .build()
        .unwrap();

        println!("openWEv");
    }

}