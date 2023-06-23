pub mod github_api_test{
    use tauri::WindowBuilder;
    use tauri::WindowUrl;
    use octocrab::Octocrab;
    const CLIENT_ID : &str = "13148b29f0040e5807ac";
    const CLIENT_SECRET: &str = "3c5f2eec1222e7d46e4fbc448c19089343c000bc";

    #[tokio::main]// -> octocrab::Result<()>
    pub async fn test_authentication_api(_url: &str){
        let temp_url = format!("{}{}{}","https://github.com/login/oauth/authorize?client_id=",CLIENT_ID,"&scope=repo");
        println!("{}",temp_url);

        open_web_view(&temp_url);
        
        let response = reqwest::get(temp_url).await;
        match response {
            Ok(res) => {
                let body = res.text().await;
                println!("res : {:?}",body);
            }
            Err(err) => {
                println!("ERORR!");
            }
        }
    }

    #[tokio::main]
    async fn open_web_view(_url : &str){
        let url = _url;
        tauri::Builder::default()
            .setup(|app| {
                let window = WindowBuilder::new(
                    app,
                    "OAuth認証",
                    WindowUrl::App(url.into())
                ).build()?;
                Ok(())
            });
    }

    //#[tokio::main]
    // pub async fn test_authentication_api(_url: &str) -> Result<(), Box<dyn std::error::Error>>{
    //     let option = json!({
    //         "url" : _url,
    //         "header" : {
    //             "User-Agent" : "request"
    //         }            
    //     });

    //     let client = ClientBuilder::new()
    //         .user_agent("request")
    //         .build()?;
        
    //     println!("fetch url : {}",_url);
    //     println!("option ::: Json => {}",option);
        
    //     let res = client.get( _url ).send().await? ;
    //     let body = res.text().await?;

    //     println!("response : \n{}",body);
    //     Ok(())
    // }
}