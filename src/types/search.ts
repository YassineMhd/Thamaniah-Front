export interface SearchResult {
  id: string;
  trackId: number;
  trackName: string;
  artistName: string | null;
  collectionName: string | null;
  primaryGenreName: string | null;
  artworkUrl100: string | null;
  feedUrl: string | null;
  searchTerm: string;
  createdAt: string;
  kind: string | null;
  wrapperType: string | null;
}

export interface SearchRequest {
  term: string;
}

export interface GroupedSearchResponse {
  podcasts: SearchResult[];
  movies: SearchResult[];
  others: SearchResult[];
  totalResults: number;
}

export interface SearchStats {
  podcastCount: number;
  movieCount: number;
  otherCount: number;
  totalCount: number;
}
