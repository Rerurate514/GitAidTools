pub mod github_api_auth{
    use tauri::http;
    use url::Url;
    use tauri::WindowBuilder;
    use tauri::WindowUrl;
    use tauri::AppHandle;
    use tauri::http::ResponseBuilder;
    use octocrab::Octocrab;

    const CLIENT_ID : &str = "13148b29f0040e5807ac";
    const CLIENT_SECRET: &str = "3c5f2eec1222e7d46e4fbc448c19089343c000bc";

    pub fn oauth_request_api(app: AppHandle){
        let temp_url = format!("{}{}{}","https://github.com/login/oauth/authorize?client_id=",CLIENT_ID,"&scope=repo");
        let temp_url_fn = temp_url.clone();

        open_web_view(app,temp_url_fn);
    }

    fn open_web_view(app: AppHandle, _url: String){
        let _window = WindowBuilder::new(
            &app, 
            "label", 
            WindowUrl::External(_url.parse().unwrap())
        )
        .title("OAuth認証")
        .on_web_resource_request( |request, response| {
            let url_str = request.uri();
            let url = Url::parse(url_str).expect("not find Query");
            let query = url.query().expect("dont find query.");

            *response = ResponseBuilder::new()
                            .status(200)
                            .header("Content-Type", "text/plain")
                            .body(query.as_bytes().to_vec())
                            .unwrap();
        })
        .build()
        .unwrap();
    }

}