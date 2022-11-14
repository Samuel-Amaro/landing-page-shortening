const baseApi = "https://api.shrtco.de/v2/";

export default function shortenUrl(url, setUrlsShorteneds) {
  fetch(baseApi + "shorten?url=" + url)
    .then(
      (response) => response.json(),
      (error) => alert("Error: " + error.error_code)
    )
    .then((shortenResult) => {
      if (shortenResult.ok) {
        //url encurtada, inseri no session storage do navegador
        //se ja tiver encurtado uma url antes que seja igual a atual que esteja tentando encurtar, não inseri novamente no storage, e nem atualiza state
        if (!localStorage.getItem(shortenResult.result.code)) {
            localStorage.setItem(shortenResult.result.code, [
              shortenResult.result.full_short_link,
              shortenResult.result.original_link,
            ]);
            setUrlsShorteneds((prevState) => [
              ...prevState,
              shortenResult.result.full_short_link +
                "," +
                shortenResult.result.original_link,
            ]);
        }
      }
    });
}

export function getAllUrlShorten() {
  let urlsShorteneds = [];
  for (let i = 0; i < localStorage.length; i++) {
    urlsShorteneds.push(localStorage.getItem(localStorage.key(i)));
  }
  return urlsShorteneds;
}
