const baseApi = "https://api.shrtco.de/v2/";

export default function shortenUrl(url, setUrlsShorteneds) {
  fetch(baseApi + "shorten?url=" + url)
    .then(
      (response) => response.json(),
      (error) => alert("Error: " + error.error_code)
    )
    .then((shortenResult) => {
      if (shortenResult.ok) {
        let shortened = [
          shortenResult.result.full_short_link,
          shortenResult.result.original_link,
        ];
        //url encurtada, inseri no session storage do navegador
        //se ja tiver encurtado uma url antes que seja igual a atual que esteja tentando encurtar, não inseri novamente no storage, e nem atualiza state
        //se não tiver nenhum url encurtado ainda
        if (!localStorage.getItem("shorteneds")) {
          localStorage.setItem("shorteneds", JSON.stringify([shortened]));
          setUrlsShorteneds((prevState) => [...prevState, shortened]);
        } else {
          //se ja possuir urls encurtados, [[...], [....], [....], ...]
          //verificar se o link atual ja foi encurtado evitar duplicatas(inconsistencia)
          if (!isShortened(shortenResult.result.full_short_link)) {
            localStorage.setItem(
              "shorteneds",
              JSON.stringify(
                JSON.parse(localStorage.getItem("shorteneds")).concat([
                  shortened,
                ])
              )
            );
            setUrlsShorteneds((prevState) => [...prevState, shortened]);
          }
        }
      }
    });
}

export function getAllUrlShorten() {
  let allShorteneds = JSON.parse(localStorage.getItem("shorteneds")),
    urlsShorteneds = [];
  if (allShorteneds === null) return urlsShorteneds;
  allShorteneds?.forEach((element) => {
    urlsShorteneds.push(element);
  });
  return urlsShorteneds;
}

function isShortened(shortLink) {
  let allShorteneds = JSON.parse(localStorage.getItem("shorteneds"));
  for(let i = 0; i < allShorteneds?.length; i++) {
    if (shortLink === allShorteneds[i][0]) {
      return true;
    }
  }
  return false;
}
