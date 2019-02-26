interface Source {
  id: string;
  name: string;
}

interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface ArticlesResponse {
  status: 'ok' | 'error';
  totalResults: number;
  articles: Article[];
}