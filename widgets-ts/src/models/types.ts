export type TWikiResponse = {
  config: Record<string, unknown>;
  data: TWikiData;
  headers: Record<string, unknown>;
  request: XMLHttpRequest;
  status: number;
  statusText: string;
};

export type TWikiData = {
  batchcomplete: string;
  continue: {
    continue: string;
    sroffset: number;
  };
  query: {
    search: TWikiDataQuerySearch[];
    searchinfo: {
      totalhits: number;
    };
  };
};

export type TWikiDataQuerySearch = {
  ns: number;
  pageid: number;
  size: number;
  snippet: string;
  timestamp: string;
  title: string;
  wordcount: number;
};
