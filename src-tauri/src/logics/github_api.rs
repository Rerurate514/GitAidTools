pub mod github_api_test{
    use reqwest::{ClientBuilder};
    use serde_json::json;

    #[tokio::main]
    pub async fn test_authentication_api(_url: &str) -> Result<(), Box<dyn std::error::Error>>{
        let option = json!({
            "url" : _url,
            "header" : {
                "User-Agent" : "request"
            }            
        });

        let client = ClientBuilder::new()
            .user_agent("request")
            .build()?;
        
        println!("fetch url : {}",_url);
        println!("option ::: Json => {}",option);
        
        let res = client.get( _url ).send().await? ;
        let body = res.text().await?;

        println!("response : \n{}",body);
        Ok(())
    }
}