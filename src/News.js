import React, { Component} from 'react'
import Newcontent from './Newcontent'
 import './App.css';

export default class News extends Component {
    
    articles= [
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Australia census: Five ways the country is changing",
        "description": "Big shifts are happening - the country is now more diverse, less religious, and increasingly millennial.",
        "url": "http://www.bbc.co.uk/news/world-australia-61961744",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1BC3/production/_125670170_gettyimages-522110884.jpg",
        "publishedAt": "2022-06-28T06:22:28.0415182Z",
        "content": "By Tiffanie TurnbullBBC News, Sydney\r\nThe results of Australia's five-yearly census have been released, painting a picture of a country undergoing significant change.\r\nThe population grew to 25.5 mil… [+2991 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Kremenchuk.: Strike on shopping centre was act of terror - Zelensky",
        "description": "Ukraine's president says more than 1,000 people were inside the complex in the central-eastern city of Kremenchuk.",
        "url": "http://www.bbc.co.uk/news/live/world-europe-61960122",
        "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.2.0/bbc_news_logo.png",
        "publishedAt": "2022-06-28T06:22:26.4770261Z",
        "content": "Let's hear what Ukrainian President Volodymyr Zelensky had to say about the shopping centre blast in his daily address last night. \r\nThe wartime leader called on the international community to stop \"… [+764 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Nato summit: Five challenges for the military alliance",
        "description": "After Russia's shock invasion of Ukraine, what issues are likely to dominate the Nato summit?",
        "url": "http://www.bbc.co.uk/news/world-61924778",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/029E/production/_125607600_ff7fbf1ef332550922e4da7136b8e34a5adf9320.jpg",
        "publishedAt": "2022-06-28T05:07:23.9458796Z",
        "content": "By Frank GardnerBBC security correspondent, Madrid\r\nThis week's Nato summit in Madrid comes at a critical time in the alliance's 73-year history. Russia's invasion of Ukraine has been described as th… [+8361 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Non-essential petrol sales halted for two weeks in Sri Lanka",
        "description": "The country says it is saving its limited fuel supplies for vehicles used for essential services.",
        "url": "http://www.bbc.co.uk/news/business-61961821",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/176FC/production/_125669959_gettyimages-1241575131.jpg",
        "publishedAt": "2022-06-28T04:22:23.1889956Z",
        "content": "By Annabelle LiangBusiness reporter\r\nSri Lanka has suspended sales of fuel for non-essential vehicles as it faces its worst economic crisis in decades.\r\nFor the next two weeks only buses, trains, and… [+2544 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "The abortion clues that can hide on your phone",
        "description": "There are a number of concerns around data protection following the US Supreme Court's ruling on abortion.",
        "url": "http://www.bbc.co.uk/news/technology-61952794",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E00C/production/_125665375_gettyimages-985084598.jpg",
        "publishedAt": "2022-06-28T01:52:29.6979682Z",
        "content": "By Zoe KleinmanTechnology editor\r\nAfter the Supreme Court overturned citizens' constitutional right to abortion in the US, there has been concern about data protection, particularly in the 13 states … [+6681 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "El Salvador's abortion ban: 'I was sent to prison for suffering a miscarriage'",
        "description": "Elsy was sentenced to 30 years for aggravated homicide after losing her baby in a miscarriage in El Salvador.",
        "url": "http://www.bbc.co.uk/news/world-61798330",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/D30E/production/_125403045_mediaitem125398797.jpg",
        "publishedAt": "2022-06-28T01:52:23.8313719Z",
        "content": "By Will GrantBBC News, San Salvador, El Salvador\r\nThe news from the US that women face tighter restrictions on abortion has been felt in El Salvador, which itself has very strict laws preventing acce… [+4926 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Texas: At least 40 found dead in lorry - reports",
        "description": "Emergency services are on the scene where the vehicle was discovered outside San Antonio.",
        "url": "http://www.bbc.co.uk/news/world-us-canada-61961871",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/129B9/production/_123271267_breaking-promo-nc.png",
        "publishedAt": "2022-06-28T01:37:21.2512605Z",
        "content": "At least 40 people, believed to be migrants, have reportedly been found dead in a lorry on the outskirts of San Antonio, Texas.\r\nAccording to one local news outlet, at least 16 people have also been … [+397 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Oslo attacks: Pride protesters defy Norway police warnings",
        "description": "Thousands gathered to remember the victims of a deadly attack in Oslo which targeted an LGBT venue.",
        "url": "http://www.bbc.co.uk/news/world-61961211",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0E0C/production/_125669530_gettyimages-1241576414.jpg",
        "publishedAt": "2022-06-28T00:37:21.7598585Z",
        "content": "By Leo SandsBBC News\r\nPride protesters in Norway have defied police by holding an LGBT rally in Oslo days after a queer venue in the capital was the target of a deadly attack.\r\nTwo people were killed… [+2896 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Judge blocks Louisiana's abortion 'trigger law'",
        "description": "Legal challenges are being mounted at the state level across the country following the overturn of Roe v Wade",
        "url": "http://www.bbc.co.uk/news/world-us-canada-61958810",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/18110/production/_125667589_gettyimages-1241517195.jpg",
        "publishedAt": "2022-06-27T19:37:21.8740848Z",
        "content": "By Bernd Debusmann JrBBC News, Washington\r\nA Louisiana judge has blocked the state's abortion \"trigger law\" banning the procedure at any stage of pregnancy.\r\nThe controversial law, which was passed i… [+2450 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "US Supreme Court: Should this coach have been punished for praying?",
        "description": "A high school coach should have been able to pray on the field at school, the US Supreme Court said.",
        "url": "http://www.bbc.co.uk/news/world-us-canada-61224856",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/02B0/production/_124288600_gettyimages-1393643652.jpg",
        "publishedAt": "2022-06-27T14:37:22.0133184Z",
        "content": "By Anthony ZurcherNorth America reporter\r\nA public US school was wrong to punish its football coach for praying at mid-field after his team's games, the Supreme Court has ruled.\r\nJoseph Kennedy's pra… [+4852 chars]"
        }
        ]
    constructor()
    {
        super()
        this.state={
            articles:this.articles,
            loading:false
        }
        
    }
   
    
  render() {
    return (
        <div className="container">
  <div className="row align-items-start" >
  {this.state.articles.map((elements)=>{ return(
    <div className="col" key={elements.url}>
      <Newcontent title={elements.title}  newurl={elements.url} description={elements.description} urlToImage={elements.urlToImage}/>
    </div>
  )})}
    
    
  </div>
</div>
    )
  }
}
